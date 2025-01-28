import { HttpMethod, IHttpClient } from '@/infra/api/HttpClientContract'
import { SectionFormSchemaType } from '@/presentation/views/SectionForm/sectionForm.types'
import { getEnv } from '@/utils'

export interface ISendPlanRequestService {
  sendPlanRequest: (data: SectionFormSchemaType) => Promise<any>
}

export class SendPlanRequestService implements ISendPlanRequestService {
  constructor(private readonly HttpClient: IHttpClient) {}

  async sendPlanRequest(data: SectionFormSchemaType): Promise<any> {
    try {
      const formattedData = {
        Name: data.name,
        CompanyName: data.companyName,
        Phone: data.phone,
        Email: data.email,
        Plan: data.plan,
        Price: parseFloat(data.price?.replace('R$', '').replace('.', '').replace(',', '.') || '0'),
      }

      const response = await this.HttpClient.sendRequest<any>({
        method: HttpMethod.POST,
        endpoint: `${getEnv('VITE_API_PLAN')}`,
        body: formattedData,
      })

      return response
    } catch (error) {
      throw new Error('Falha ao enviar solicitação de plano.')
    }
  }
}
