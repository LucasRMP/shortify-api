"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const entity_not_found_exception_filter_1 = require("./exception-filters/entity-not-found.exception-filter");
const app_module_1 = require("./app.module");
const errorFilters = [new entity_not_found_exception_filter_1.EntityNotFoundExceptionFilter()];
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalFilters(...errorFilters);
    app.useGlobalPipes(new common_1.ValidationPipe({ errorHttpStatusCode: 422 }));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map