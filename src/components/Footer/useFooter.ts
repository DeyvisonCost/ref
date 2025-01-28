import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'

import { getEnv } from '@/utils'

interface NewsletterForm {
  email: string
}

export const useFooter = () => {
  const [urlStudent, setUrlStudent] = useState<string>('#')

  const { register, handleSubmit, reset } = useForm<NewsletterForm>()

  const onSubmit = async () => {
    try {
      reset()
    } catch (error) {
      console.error('Erro ao cadastrar email')
    }
  }

  const getUrlStudent = async () => {
    setUrlStudent(await getEnv('VITE_URL_STUDENT'))
  }

  useEffect(() => {
    getUrlStudent()
  }, [])

  return {
    register,
    handleSubmit,
    onSubmit,
    urlStudent,
  }
}
