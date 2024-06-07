import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUserByName(name: string) {
    return this.prismaService.score.findFirst({
      where: { user_name: name },
    });
  }

  async create(name: string, score: number) {
    await this.prismaService.score.create({
        data: {
          user_name: name,
          score: score,
        },
      });
  }

  async getTopScores() {
    const scores = await this.prismaService.score.findMany({
      orderBy: {
        score: 'desc', 
      },
      take: 10, 
      select: {
        user_name: true, 
        score: true, 
      },
    });

    return scores.length > 0 ? scores : null;
  }
}
