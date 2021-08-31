"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExistsRule = exports.Exists = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
function Exists(entityClass, field = 'id', validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: 'Exists',
            constraints: [entityClass, field],
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: ExistsRule,
        });
    };
}
exports.Exists = Exists;
let ExistsRule = class ExistsRule {
    async validate(value, args) {
        if (!value) {
            return false;
        }
        try {
            const [entityClass, field] = args.constraints;
            const conn = typeorm_1.getConnection('default');
            const repository = conn.getRepository(entityClass);
            const result = await repository.findOne({
                where: {
                    [field]: value,
                },
            });
            if (!result) {
                throw new typeorm_1.EntityNotFoundError(entityClass, value);
            }
            return true;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    defaultMessage(args) {
        return `${args.property} not found`;
    }
};
ExistsRule = __decorate([
    class_validator_1.ValidatorConstraint({ name: 'Exists', async: true })
], ExistsRule);
exports.ExistsRule = ExistsRule;
//# sourceMappingURL=exists.rule.js.map