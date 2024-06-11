import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 새로운 사용자와 점수를 저장하는 엔드포인트
  @Post('save')
  async save(@Body() createUserDto: { name: string; score: number }) {
    return this.userService.saveUser(createUserDto.name, createUserDto.score);
  }

  // 상위 10명의 점수를 가져오는 엔드포인트
  @Get('rank')
  async getTopScores() {
    return this.userService.scoreService();
  }
}