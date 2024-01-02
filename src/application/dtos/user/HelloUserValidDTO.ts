import { type HelloUserDTO } from '@/domain/dtos/user'
import { verifyZodImplementsInterface } from '@/utils'
import { z } from 'zod'

export const HelloUserValidDTO = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Full name is required'
    }),
    email: z
      .string({
        required_error: 'Email is required'
      })
      .email('Not a valid email')
  }).required()
    .strict()
})

verifyZodImplementsInterface<HelloUserDTO>(HelloUserValidDTO.parse({}).body)
