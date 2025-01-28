import * as React from 'react'
import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Sheet } from '@/components/sheet'
import IconLoader from '@/icons/icon-loader'
import IconClose from '@/icons/iconClose'
import { sendPlanRequest } from '@/infra/instances/fetchStocksInstance/planRequestInstance'
import Masks from '@/masks'
import { ResponsiveDialog } from '@/presentation/views/HeroSectionPlan/components/ResponsiveDialog'
import { SectionFormSchemaType } from '@/presentation/views/SectionForm/sectionForm.types'

type SheetFormProps = {
  readonly isOpen: boolean
  readonly onOpenChange: (open: boolean) => void
  readonly planName: string
  readonly planPrice: string
}

export function SheetForm({ isOpen, onOpenChange, planName, planPrice }: SheetFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<SectionFormSchemaType>({
    mode: 'onBlur',
  })

  const handleFormSubmit = async (data: SectionFormSchemaType) => {
    try {
      setIsLoading(true)
      const formData = {
        ...data,
        plan: planName,
        price: planPrice,
      }
      await sendPlanRequest(formData)
      toast.success('Formulário enviado com sucesso!')
      reset()
    } catch (error) {
      toast.error('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      clearErrors()
    }
    onOpenChange(open)
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
      clearErrors()
    }
  }, [isOpen, reset, clearErrors])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <ResponsiveDialog isOpen={isOpen} onOpenChange={handleOpenChange}>
      <button
        onClick={() => onOpenChange(false)}
        className="absolute right-4 top-4 text-white hover:text-gray-200 transition-colors"
      >
        <IconClose />
      </button>
      <Sheet.Header className="flex flex-col gap-4 mt-12">
        <div className="flex items-center justify-center">
          <img src="/img/logo-plan.svg" alt="" className="w-[135px] h-[16px]" />
        </div>
        <Sheet.Title className="text-white text-[36px] md:text-[48px] leading-[40px] md:leading-[48px] font-semibold text-center">
          {planName}
        </Sheet.Title>
        <Sheet.Description className="text-white text-[24px] leading-[24px] md:font-medium flex flex-col items-center">
          <span>Preencha os dados abaixo para</span>
          <span>entrarmos em contato sobre o plano selecionado.</span>
        </Sheet.Description>
      </Sheet.Header>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 mt-8">
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white text-[16px] leading-[44px] font-medium">
              Nome
            </label>
            <input
              id="name"
              {...register('name', {
                required: 'Nome é obrigatório',
                minLength: { value: 3, message: 'Nome deve ter no mínimo 3 caracteres' },
              })}
              placeholder="Seu nome"
              className={`w-full h-12 px-4 rounded-[8px] bg-white text-[#024632] ${errors.name ? 'border-2 border-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-400 text-sm mt-1">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-2 mt-4 md:mt-0">
            <label htmlFor="companyName" className="text-white text-[16px] leading-[44px]">
              Nome da empresa
            </label>
            <input
              id="companyName"
              {...register('companyName', {
                required: 'Nome da empresa é obrigatório',
              })}
              placeholder="Empresa em que trabalha"
              className={`w-full h-12 px-4 rounded-[8px] bg-white text-[#024632] ${errors.companyName ? 'border-2 border-red-500' : ''}`}
            />
            {errors.companyName && <span className="text-red-400 text-sm mt-1">{errors.companyName.message}</span>}
          </div>

          <div className="flex flex-col gap-2 mt-4 md:mt-0">
            <label htmlFor="phone" className="text-white text-[16px] leading-[44px]">
              Telefone
            </label>
            <input
              id="phone"
              {...register('phone', {
                required: 'Telefone é obrigatório',
                minLength: { value: 14, message: 'Telefone inválido' },
              })}
              placeholder="(00) 00000-0000"
              className={`w-full h-12 px-4 rounded-[8px] bg-white text-[#024632] ${errors.phone ? 'border-2 border-red-500' : ''}`}
              onChange={(e) => {
                e.target.value = Masks.phoneMask(e.target.value)
              }}
              maxLength={15}
            />
            {errors.phone && <span className="text-red-400 text-sm mt-1">{errors.phone.message}</span>}
          </div>

          <div className="flex flex-col gap-2 mt-4 md:mt-0">
            <label htmlFor="email" className="text-white text-[16px] leading-[44px]">
              e-mail
            </label>
            <input
              id="email"
              {...register('email', {
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'E-mail inválido',
                },
              })}
              placeholder="Seu melhor e-mail"
              className={`w-full h-12 px-4 rounded-[8px] bg-white text-[#024632] ${errors.email ? 'border-2 border-red-500' : ''}`}
            />
            {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>}
          </div>
        </div>

        <div className="relative mt-4">
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full h-12 rounded-[8px] text-[20px] leading-[20px] bg-[#F84001] text-white font-medium hover:bg-[#F84001]/90 transition-colors md:w-[320px]"
            >
              {isLoading ? (
                <>
                  <IconLoader className="inline-block shrink-0 animate-[spin_2s_linear_infinite] align-middle ltr:mr-2 rtl:ml-2" />
                  Enviando...
                </>
              ) : (
                'Enviar'
              )}
            </button>
          </div>
        </div>
      </form>
      <img
        src="/img/asterisco.svg"
        alt="decoração"
        className="w-[100px] h-auto absolute bottom-0 right-0 opacity-30 pointer-events-none"
      />
      <img
        src="/img/setas-grafis.svg"
        alt="Setas"
        className="w-[320px] h-auto absolute bottom-0 right-20 opacity-30 pointer-events-none"
      />
    </ResponsiveDialog>
  )
}
