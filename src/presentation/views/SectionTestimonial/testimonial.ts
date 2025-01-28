interface Testimonial {
  name: string
  role: string
  company?: string
  avatar?: string
  testimonial: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Gislaine',
    role: 'Pessoas e Cultura',
    company: 'da Franquia de São Carlos - Cartão de TODOS',
    testimonial:
      'A Plataforma Refuturiza 360º veio para nos ajudar a medir, mensurar, desenvolver e identificar os colaboradores. Hoje na franquia já traçamos alguns PDIs e já sabemos a porcentagem de colaboradores engajados com o FIT Cultural, suas qualidades e pontos a trabalhar. A plataforma está sendo nossa bússola.',
    avatar: '/img/mulher-loira.png',
  },
  {
    name: 'Jéssica e Giovanna',
    role: "Franquia M'boi Mirim",
    company: 'Cartão de TODOS',
    testimonial:
      'A plataforma é algo que tem auxiliado muito na nossa franquia, principalmente no Fit Cultural e PDI dos colaboradores. O Recrutamento e Seleção facilitou bastante nossos processos. Gostaríamos de agradecer todo o suporte e disponibilidade da Ellen em nos auxiliar, é um grande diferencial. ',
    avatar: '/img/duas-meninas.png',
  },
  {
    name: 'Valeria Mendes',
    role: 'Diretora de Operações',
    testimonial:
      'Estamos adorando os recursos de desenvolvimento profissional oferecidos pelo Refuturiza 360. Agora podemos criar planos de capacitação personalizados para cada colaborador, acompanhar seu progresso e garantir que estejam sempre atualizados com as habilidades necessárias.',
    avatar: '/img/praia.jpg',
  },
]
