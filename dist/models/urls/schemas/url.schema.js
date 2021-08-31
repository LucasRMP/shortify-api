"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlSchema = exports.Url = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Url = class Url {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Url.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Url.prototype, "target", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Url.prototype, "visits", void 0);
Url = __decorate([
    mongoose_1.Schema({ timestamps: true })
], Url);
exports.Url = Url;
exports.UrlSchema = mongoose_1.SchemaFactory.createForClass(Url);
//# sourceMappingURL=url.schema.js.map