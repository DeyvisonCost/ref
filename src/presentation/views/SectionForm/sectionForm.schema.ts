import { z } from 'zod'

export const SectionFormSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  companyName: z.string().min(3, { message: 'Nome da empresa deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(11, { message: 'Telefone deve ter pelo menos 11 caracteres' }),
  plan: z.string().optional(),
  price: z.string().optional(),
})
