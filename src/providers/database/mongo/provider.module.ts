import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('MONGO_USER')}:${configService.get(
          'MONGO_PASS',
        )}@${configService.get('MONGO_HOST')}:${configService.get(
          'MONGO_PORT',
        )}`,
        dbName: configService.get('MONGO_DB') ?? 'shortify',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoDatabaseProviderModule {}
