import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Nuox_Test'),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
