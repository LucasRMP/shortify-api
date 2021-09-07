import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UrlsModule } from './models/urls/urls.module';
import { MongoDatabaseProviderModule } from './providers/database/mongo/provider.module';

@Module({
  imports: [ConfigModule.forRoot(), MongoDatabaseProviderModule, UrlsModule],
})
export class AppModule {}
