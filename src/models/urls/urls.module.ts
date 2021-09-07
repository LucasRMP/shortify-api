import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Url, UrlSchema } from 'src/models/urls/schemas/url.schema';
import { UrlNotExistsRule } from 'src/validators/url-not-exists.rule';

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  controllers: [UrlsController],
  providers: [UrlsService, UrlNotExistsRule],
})
export class UrlsModule {}
