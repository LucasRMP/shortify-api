"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinCallback = void 0;
const class_validator_1 = require("class-validator");
function MinCallback(callback, validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: 'MinCallback',
            constraints: [callback],
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [callback] = args.constraints;
                    return typeof value === 'number' && class_validator_1.min(value, callback());
                },
                defaultMessage: class_validator_1.buildMessage((eachPrefix, args) => `${eachPrefix}$property must not be less than ${args.constraints[0]()}`, validationOptions),
            },
        });
    };
}
exports.MinCallback = MinCallback;
//# sourceMappingURL=min-callback.rule.js.map