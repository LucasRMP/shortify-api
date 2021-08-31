"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
let EntityNotFoundExceptionFilter = class EntityNotFoundExceptionFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        const { getResponse } = host.switchToHttp();
        const response = getResponse();
        return response.status(404).json(Object.assign({ error: 'Not found.', message: exception.message }, (process.env.NODE_ENV === 'development' && { stack: exception.stack })));
    }
};
EntityNotFoundExceptionFilter = __decorate([
    common_1.Catch(typeorm_1.EntityNotFoundError)
], EntityNotFoundExceptionFilter);
exports.EntityNotFoundExceptionFilter = EntityNotFoundExceptionFilter;
//# sourceMappingURL=entity-not-found.exception-filter.js.map