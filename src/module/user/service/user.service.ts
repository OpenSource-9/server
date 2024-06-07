import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async saveUser(name: string, score: number) {
    return this.userRepository.create(name, score);
  }
  async findUserByName(name: string) {
    return this.userRepository.findUserByName(name);
  } 
  async scoreService() {
    return this.userRepository.getTopScores();
  }
}
