import { Controller, Get, Post, Put, Delete, Body, Param, Res, Req } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

    // getTask(@Req() req, @Res() res) {
    //     console.log(req.body);
    //     return res.send('Hello World');
    // }

    @Get(':taskId')
    getTask(@Param('taskId') taskId: string) {
        return this.tasksService.getTask(taskId);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<Task> {
        // console.log(task.done);
        // return 'Creating a task';
        return this.tasksService.createTask(task);
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id) {
        console.log(task);
        console.log(id);
        return `Updating a task`;
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting a task number ${id}`;
    }
}
