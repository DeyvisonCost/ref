import { z } from 'zod'

import { SectionFormSchema } from '@/presentation/views/SectionForm/sectionForm.schema'

export type SectionFormSchemaType = z.infer<typeof SectionFormSchema>
