import { HttpClient } from '@/infra/api/HttpClient'
import { SectionFormSchemaType } from '@/presentation/views/SectionForm/sectionForm.types'
import { SendPlanRequestService } from '@/services/plans/sendPlanRequest'

let planServiceInstance: SendPlanRequestService | null = null

export const getPlanServiceInstance = (): SendPlanRequestService => {
  if (!planServiceInstance) {
    const httpClient = HttpClient.create()
    planServiceInstance = new SendPlanRequestService(httpClient)
  }
  return planServiceInstance
}

export const sendPlanRequest = async (data: SectionFormSchemaType) => {
  const service = getPlanServiceInstance()
  return await service.sendPlanRequest(data)
}
