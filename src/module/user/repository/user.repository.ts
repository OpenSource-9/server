import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  // 주어진 사용자 이름으로 사용자를 찾는 메소드
  async findUserByName(name: string) {
    return this.prismaService.score.findFirst({
      where: { user_name: name },
    });
  }

  // 새로운 사용자와 점수를 생성하는 메소드
  async create(name: string, score: number) {
    await this.prismaService.score.create({
      data: {
        user_name: name,
        score: score,
      },
    });
  }

  // 상위 10명의 점수를 가져오는 메소드
  async getTopScores() {
    const scores = await this.prismaService.score.findMany({
      orderBy: {
        score: 'desc', // 점수를 기준으로 내림차순 정렬
      },
      take: 10, // 상위 10개의 레코드만 가져옴
      select: {
        user_name: true, // 사용자 이름만 선택
        score: true, // 점수만 선택
      },
    });

    // 점수가 존재하지 않는 경우 null 반환
    return scores.length > 0 ? scores : null;
  }
}
