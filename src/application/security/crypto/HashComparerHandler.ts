import { type HashComparer } from '@/domain/security/crypto'
import { compare } from 'bcrypt'

export class HashComparerHandler implements HashComparer {
  private constructor () {}
  static build (): HashComparerHandler {
    return new HashComparerHandler()
  }

  async compare (value: string, hashedValue: string): Promise<boolean> {
    return await compare(value, hashedValue)
  }
}
