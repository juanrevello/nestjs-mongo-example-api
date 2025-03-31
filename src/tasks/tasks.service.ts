import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    // tasks: Task[] = [
    //     {
    //         id: 1,
    //         title: 'Testing',
    //         description: 'testing description',
    //         done: true
    //     },
    //     {
    //         id: 2,
    //         title: 'Testing',
    //         description: 'testing description',
    //         done: true
    //     },
    //     {
    //         id: 3,
    //         title: 'Testing',
    //         description: 'testing description',
    //         done: true
    //     }
    // ];

    // getTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTask(id: number) {
    //     return this.tasks.find(task => task.id === id);
    // }

    constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

    async getTasks() {
        return await this.taskModel.find();
    }

    async getTask(id: string) {
        return await this.taskModel.findById(id);
    }

    async createTask(task: CreateTaskDto) {
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }

}
