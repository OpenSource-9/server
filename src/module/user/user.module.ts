import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { PrismaService } from '../../prisma/prisma.service'; // PrismaService를 포함해야 합니다.
import { UserRepository } from './repository/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepository],
  exports: [UserRepository]
})
export class UserModule {}
