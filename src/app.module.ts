import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MongodbModule } from './mongodb/mongodb.module';
import { ConfigModule } from '@nestjs/config';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FormService } from './form/form.service';
import { FormController } from './form/form.controller';
import { FormModule } from './form/form.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/event-db'), ConfigModule.forRoot({
    isGlobal: true
  }), EventModule, FormModule],
  controllers: [AppController, FormController],
  providers: [AppService, FormService],
})
export class AppModule {}
