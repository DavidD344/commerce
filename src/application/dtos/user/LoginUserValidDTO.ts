import { type LoginUserDTO } from '@/domain/dtos/user'
import { verifyZodImplementsInterface } from '@/utils'
import { z } from 'zod'

export const LoginUserValidDTO = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required'
      })
      .email('Not a valid email'),
    password: z.string({ required_error: 'Password is required' }).min(4)
  }).required()
    .strict()
})
// Verifica se o object zod tem os mesmos campos da interface
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
verifyZodImplementsInterface<{ body: LoginUserDTO }>({ } as z.infer<typeof LoginUserValidDTO>)
