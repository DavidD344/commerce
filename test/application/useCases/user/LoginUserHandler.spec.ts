import { LoginUserHandler } from '@/application/useCases/user/LoginUserHandler'
import { type LoginUserDTO } from '@/domain/dtos/user'

describe('testing LoginUserHandler', () => {
  it('login return token jwt', async () => {
    const loginUserHandler = LoginUserHandler.build()
    const req: LoginUserDTO = { email: 'a@gmail.com', password: '123' }
    const data = await loginUserHandler.login(req)
    expect(data.jwt).toBe('jwt')
  })
})
