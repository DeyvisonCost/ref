import { HttpMethod, IHttpClient } from '@/infra/api/HttpClientContract'
import { SectionFormSchemaType } from '@/presentation/views/SectionForm/sectionForm.types'
import { getEnv } from '@/utils'

export interface ISendDemoFormService {
  sendDemoRequest: (data: SectionFormSchemaType) => Promise<any>
}

export class SendDemoFormService implements ISendDemoFormService {
  constructor(private readonly HttpClient: IHttpClient) {}

  async sendDemoRequest(data: SectionFormSchemaType): Promise<any> {
    try {
      const response = await this.HttpClient.sendRequest<any>({
        method: HttpMethod.POST,
        endpoint: `${getEnv('VITE_API_DEMO')}`,
        body: data,
      })

      return response
    } catch (error) {
      throw new Error('Falha ao enviar solicitação de demonstração.')
    }
  }
}
