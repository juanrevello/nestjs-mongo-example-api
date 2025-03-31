import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [TasksModule, MongooseModule.forRoot('mongodb://localhost/nest-tutorial1')],
  imports: [TasksModule, MongooseModule.forRoot('mongodb://admin:admin123@localhost:27017/tasks?authSource=admin')],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
