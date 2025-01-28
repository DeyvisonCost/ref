import * as React from 'react'

import IconLoader from '@/icons/icon-loader'
import Masks from '@/masks'
import { useSectionFormModel } from '@/presentation/views/SectionForm/sectionForm.model'

export const SectionFormView = ({
  register,
  handleSubmit,
  errors,
  isLoading,
}: ReturnType<typeof useSectionFormModel>) => {
  return (
    <div className="bg-[#024632] w-full px-4 md:px-0 pb-16 md:pb-0 pt-4 overflow-hidden">
      <div className="md:flex md:flex-row-reverse md:justify-between md:items-center md:mx-auto">
        <div className="relative pb-8 mx-auto md:mx-0 md:pb-0 md:overflow-hidden md:mt-24">
          <img
            src="/img/desenho.svg"
            alt="Sistema RH"
            className="object-contain h-auto w-full scale-110 md:w-[2400px] md:translate-x-[20%]"
          />

          <img
            src="/img/mulher-aceno.svg"
            alt="decoração"
            className="hidden md:block h-auto w-full md:w-[142px] md:translate-x-[100%] absolute bottom-0 -left-24 md:scale-x-[-1] z-10"
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(2, 70, 50, 0) 0%, rgba(2, 70, 50, 0.8) 40%, #024632 70%)',
            }}
          />

          {/* Título Mobile */}
          <div>
            <h2 className="absolute bottom-16 left-0 right-0 text-white font-principal text-[28px] leading-[28px] font-semibold text-center max-w-[300px] mx-auto md:hidden">
              Descubra como tornar o seu RH mais ágil e eficaz com a Refuturiza 360°
            </h2>
            <p className="absolute bottom-8 left-0 right-0 text-white text-[16px] leading-[16px] font-normal text-center md:hidden">
              Solicite uma demonstração com nossos consultores.
            </p>
          </div>
        </div>

        <div className="md:pl-32">
          {/* Título Desktop */}
          <div className="hidden md:flex md:flex-col md:gap-4 mt-32 md:mt-16">
            <h2 className="text-white font-principal text-[40px] leading-[44px] font-semibold">
              Descubra como tornar o seu RH mais ágil e eficaz com a Refuturiza 360°
            </h2>
            <p className="text-white text-[16px] leading-[24px] font-normal">
              Solicite uma demonstração com nossos consultores.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div className="flex flex-col">
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

              <div className="flex flex-col mt-4 md:mt-0">
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

              <div className="flex flex-col mt-4 md:mt-0">
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

              <div className="flex flex-col mt-4 md:mt-0">
                <label htmlFor="email" className="text-white text-[16px] leading-[44px]">
                  E-mail
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
              <img
                src="/img/asterisco.svg"
                alt="decoração"
                className="md:hidden absolute left-[-20px] bottom-[-40px] w-[40px] h-[40px]"
              />
              <img
                src="/img/asterisco.svg"
                alt="decoração"
                className="absolute right-[80px] bottom-[260px] md:bottom-[160px] md:-right-[280px]  lg:-right-[280px] w-[40px] h-[40px] md:w-[180px]  md:h-[184px] lg:w-[220px] lg:h-[200px] md:rotate-[200deg] lg:rotate-[200deg]"
              />

              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="w-full h-12 rounded-[8px] text-[20px] leading-[20px] bg-[#F84001] text-white font-medium hover:bg-[#F84001]/90 transition-colors md:w-full"
                >
                  {isLoading ? (
                    <>
                      <IconLoader className="inline-block shrink-0 animate-[spin_2s_linear_infinite] align-middle ltr:mr-2 rtl:ml-2" />
                      Enviando...
                    </>
                  ) : (
                    'Solicitar demo'
                  )}
                </button>
              </div>
              <img
                src="/img/asterisco.svg"
                alt="decoração"
                className="absolute right-0 bottom-[480px] md:bottom-[480px] md:-right-[900px] lg:bottom-[540px] lg:-right-[1150px] w-[80px] h-[80px] md:w-[169px]  md:h-[184px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
