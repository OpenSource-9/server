import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  // 새로운 사용자와 점수를 저장하는 메소드
  async saveUser(name: string, score: number) {
    return this.userRepository.create(name, score);
  }

  // 주어진 이름으로 사용자를 찾는 메소드
  async findUserByName(name: string) {
    return this.userRepository.findUserByName(name);
  } 

  // 상위 10명의 점수를 가져오는 메소드
  async scoreService() {
    return this.userRepository.getTopScores();
  }
}
