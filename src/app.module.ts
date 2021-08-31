import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlsModule } from './models/urls/urls.module';
import { MongoDatabaseProviderModule } from './providers/database/mongo/provider.module';

@Module({
  imports: [ConfigModule.forRoot(), MongoDatabaseProviderModule, UrlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
