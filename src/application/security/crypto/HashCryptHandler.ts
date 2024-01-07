import { type HashCrypt } from '@/domain/security/crypto'
import { hash } from 'bcrypt'
export class HashCryptHandler implements HashCrypt {
  private constructor () {}

  static build (): HashCryptHandler {
    return new HashCryptHandler()
  }

  async hash (data: string): Promise<string> {
    return await hash(data, Number(process.env.BCRYPT_SALT))
  }
}
