import { sendDemoRequest } from '@/infra/instances/fetchStocksInstance/demoRequestInstance'
import { SectionFormSchemaType } from '@/presentation/views/SectionForm/sectionForm.types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useSectionFormModel = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<SectionFormSchemaType>({
    mode: 'onBlur',
  })

  const handleFormSubmit = async (data: SectionFormSchemaType) => {
    try {
      setIsLoading(true)
      await sendDemoRequest(data)
      toast.success('Formulário enviado com sucesso!')
      reset()
    } catch (error) {
      toast.error('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    errors,
    isLoading,
    clearErrors,
  }
}
