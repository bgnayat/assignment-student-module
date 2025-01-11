import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()
    create(@Body() studentData: Partial<Student>) {
        return this.studentService.create(studentData);
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Student> {
        return this.studentService.findOne(id);
    }

    @Get()
    findAll() {
        return this.studentService.findAll();
    }

}
