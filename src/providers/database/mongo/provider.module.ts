import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:pass@host.docker.internal:27017', {
      dbName: 'shortify',
    }),
  ],
})
export class MongoDatabaseProviderModule {}
