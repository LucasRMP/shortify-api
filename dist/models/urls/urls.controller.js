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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlsController = void 0;
const common_1 = require("@nestjs/common");
const urls_service_1 = require("./urls.service");
const create_url_dto_1 = require("./dto/create-url.dto");
const update_url_dto_1 = require("./dto/update-url.dto");
let UrlsController = class UrlsController {
    constructor(urlsService) {
        this.urlsService = urlsService;
    }
    create(createUrlDto) {
        return this.urlsService.create(createUrlDto);
    }
    findAll() {
        return this.urlsService.findAll();
    }
    findOne(id) {
        return this.urlsService.findOne(+id);
    }
    update(id, updateUrlDto) {
        return this.urlsService.update(+id, updateUrlDto);
    }
    remove(id) {
        return this.urlsService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_url_dto_1.CreateUrlDto]),
    __metadata("design:returntype", void 0)
], UrlsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UrlsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UrlsController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_url_dto_1.UpdateUrlDto]),
    __metadata("design:returntype", void 0)
], UrlsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UrlsController.prototype, "remove", null);
UrlsController = __decorate([
    common_1.Controller('urls'),
    __metadata("design:paramtypes", [urls_service_1.UrlsService])
], UrlsController);
exports.UrlsController = UrlsController;
//# sourceMappingURL=urls.controller.js.map