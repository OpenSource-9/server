import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('save')
  async save(@Body() createUserDto: { name: string; score: number }) {
    return this.userService.saveUser(createUserDto.name, createUserDto.score);
  }

  @Get('rank')
  async getTopScores() {
    return this.userService.scoreService();
  }
}