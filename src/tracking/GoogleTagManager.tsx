declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

export const GTM_IDS = {
  EMPREGOS: 'GT-P36L4TV',
  EMPRESAS: 'GT-KDQN4L6',
  SITE: 'GT-WKXBMZJ',
  VAGAS: 'GT-M6JT68B',
}

export const GTM_ID = 'GT-M6JT68B'

export const initializeGTM = () => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  })
}
