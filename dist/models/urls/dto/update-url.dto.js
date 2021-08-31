"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUrlDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_url_dto_1 = require("./create-url.dto");
class UpdateUrlDto extends mapped_types_1.PartialType(create_url_dto_1.CreateUrlDto) {
}
exports.UpdateUrlDto = UpdateUrlDto;
//# sourceMappingURL=update-url.dto.js.map