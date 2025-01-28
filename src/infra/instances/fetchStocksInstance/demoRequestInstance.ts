import { HttpClient } from '@/infra/api/HttpClient'
import { SectionFormSchemaType } from '@/presentation/views/SectionForm/sectionForm.types'
import { SendDemoFormService } from '@/services/demo/sendDemoRequest'

let demoServiceInstance: SendDemoFormService | null = null

export const getDemoServiceInstance = (): SendDemoFormService => {
  if (!demoServiceInstance) {
    const httpClient = HttpClient.create()
    demoServiceInstance = new SendDemoFormService(httpClient)
  }
  return demoServiceInstance
}

export const sendDemoRequest = async (data: SectionFormSchemaType) => {
  const service = getDemoServiceInstance()
  return await service.sendDemoRequest(data)
}
