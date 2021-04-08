import { EntityRepository, Repository } from 'typeorm'
import User from '../models/User'

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async getUserByEmail(email: string) {
    const userEmail = await this.findOne({ email })
    return userEmail
  }
}
