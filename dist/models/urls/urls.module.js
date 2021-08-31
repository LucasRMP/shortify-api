"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlsModule = void 0;
const common_1 = require("@nestjs/common");
const urls_service_1 = require("./urls.service");
const urls_controller_1 = require("./urls.controller");
const mongoose_1 = require("@nestjs/mongoose");
const url_schema_1 = require("./schemas/url.schema");
let UrlsModule = class UrlsModule {
};
UrlsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: url_schema_1.Url.name, schema: url_schema_1.UrlSchema }])],
        controllers: [urls_controller_1.UrlsController],
        providers: [urls_service_1.UrlsService],
    })
], UrlsModule);
exports.UrlsModule = UrlsModule;
//# sourceMappingURL=urls.module.js.map