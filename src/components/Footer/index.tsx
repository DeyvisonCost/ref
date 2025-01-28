import React from 'react'

import { useFooter } from './useFooter'

const Footer = () => {
  const { register, handleSubmit, onSubmit, urlStudent } = useFooter()

  return (
    <footer className="bg-[#2B303E] text-white relative overflow-hidden">
      <div className="w-9/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-14 z-10 relative mb-16">
        <div className="col-span-1 grid content-start">
          <h1 className="text-xl font-medium mb-4">Refuturiza</h1>
          <p className="text-[18px] text-left font-normal text-[#818F99]">Educação e empregabilidade.</p>
        </div>
        <div className="col-span-1 grid content-start">
          <h1 className="text-xl font-medium mb-4">Link da franquia</h1>
          <a
            target="_blank"
            href={urlStudent}
            className="text-lg font-normal text-[#818F99] underline cursor-pointer"
            rel="noopener noreferrer"
          >
            Área de vendas da franquia
          </a>
          <a
            target="_blank"
            href={urlStudent + '/franquia/acessar'}
            className="text-lg font-normal text-[#818F99] underline cursor-pointer"
            rel="noopener noreferrer"
          >
            Área do franqueado (Intranet)
          </a>
        </div>
        <div className="col-span-1 grid content-start">
          <h1 className="text-xl font-medium mb-4">Universidade de TODOS</h1>
          <a
            target="_blank"
            href={urlStudent + '/universidade-de-todos'}
            className="text-lg font-normal text-[#818F99] underline cursor-pointer" rel="noreferrer"
          >
            Cadastre sua franquia na Universidade de TODOS
          </a>
        </div>
        <div className="col-span-1 grid row-span-2">
          <h1 className="text-xl font-medium mb-4">Receba novidades por email</h1>
          <p className="text-lg font-normal text-[#818F99]">
            Cadastre seu e-mail e receba conteúdo exclusivo toda semana
          </p>
          <form aria-label="form" onSubmit={handleSubmit(onSubmit)} className="newsletterb2c-form">
            <div className="grid mt-3">
              <input
                type="email"
                className="rounded-lg p-5 bg-transparent border-2 text-base font-light border-[#35B9E9]"
                placeholder="Digite seu e-mail"
                {...register('email', { required: 'O e-mail é obrigatório' })}
              />
              <button className="mt-4 p-4 text-center text-white bg-[#35B9E9] rounded-lg text-base font-medium">
                Cadastrar
              </button>
              <small className="text-[#818F99] text-xs px-5 mt-2">
                Nós respeitamos você. Prometemos nunca te enviar spam e seus dados estão protegidos de acordo com nossa{' '}
                <a target="_blank" href={urlStudent + '/politica-de-privacidade'} className="underline cursor-pointer" rel="noreferrer">
                  Política de privacidade
                </a>
              </small>
            </div>
          </form>
        </div>
        <div className="col-span-1 grid">
          <div className="flex flex-col -ml-[12px]">
            <img src="/img/logo-refuturiza-white.png" alt="Logo Refuturiza" className="self-start h-[53px] w-[256px]" />
            <div className="pl-[20px]">
              <small className="text-xs mt-2 font-normal text-[#818F99] block">
                REFUTURIZA EMPREENDIMENTO EDUCACIONAL LTDA
              </small>
              <p className="text-base mt-10 font-normal text-[#818F99]">
                Rua Dom Pedro II, 37 - Cidade Nobre Ipatinga/MG - CEP 35162-399
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 grid">
          <h1 className="text-xl font-medium mb-4">Saiba mais</h1>
          <a
            target="_blank"
            href="https://www.youtube.com/@Refuturiza"
            className="text-lg font-normal text-[#818F99] underline cursor-pointer" rel="noreferrer"
          >
            Sobre a Refuturiza
          </a>
          <a
            target="_blank"
            href=" https://blog.refuturiza.com.br/"
            className="text-lg font-normal text-[#818F99] underline cursor-pointer"
          >
            Blog
          </a>
          <a
            target="_blank"
            href={urlStudent + '/reenvio-de-boas-vindas'}
            className="text-lg font-normal text-[#818F99] underline cursor-pointer" rel="noreferrer"
          >
            Não recebi meu e-mail de acesso
          </a>
          <a
            target="_blank"
            href={urlStudent + '/politica-de-privacidade'}
            className="text-lg font-normal text-[#818F99] underline cursor-pointer" rel="noreferrer"
          >
            Política de privacidade
          </a>
        </div>
        <div className="col-span-1">
          <h1 className="text-xl font-medium mb-4">Nossas redes sociais</h1>
          <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
            <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0 gap-2">
              <li>
                <a
                  className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm 
                        bg-[#4D515D] hover:bg-[#6A6F80] focus:ring-1 focus:ring-gray-200"
                  aria-label="Instagram"
                  href="https://instagram.com/refuturiza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M16.5 7.5l0 .01"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm 
                      bg-[#4D515D] hover:bg-[#6A6F80] focus:ring-1 focus:ring-gray-200"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/refuturiza/mycompany/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm 
                      bg-[#4D515D] hover:bg-[#6A6F80] focus:ring-1 focus:ring-gray-200"
                  aria-label="Facebook"
                  href="https://www.facebook.com/refuturiza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm 
                        bg-[#4D515D] hover:bg-[#6A6F80] focus:ring-1 focus:ring-gray-200"
                  aria-label="Spotify"
                  href="https://open.spotify.com/show/2ywFrp0KCFQu67RVmoRZ5O?si=97ca3f13d6954554"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-spotify"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        alt="Escada"
        className="absolute bottom-0 right-0 max-w-44 md:max-w-56 2xl:max-w-64 z-0 2xl:z-20 h-[253px] w-[340px]"
        src="/img/escada_1.svg"
      />
      <img
        alt="Mulher"
        className="absolute max-w-36 bottom-[43%] -rotate-12 -right-16 lg:rotate-0 lg:bottom-16 lg:right-1/4 2xl:right-[28%] z-10 2xl:z-20 h-[280px] w-[220px]"
        src="/img/womam.png"
      />
      <div className="bg-[#35B9E9] z-10 relative">
        <p className="w-10/12 mx-auto py-5">
          © Refuturiza 29.490.639/0001-84 - Todos os direitos reservados | {new Date().getFullYear()} Refuturiza - Uma
          empresa do Grupo Cartão de TODOS
        </p>
      </div>
      {/* <ToastContainer theme="colored" position="top-right" /> */}
    </footer>
  )
}

export default Footer
