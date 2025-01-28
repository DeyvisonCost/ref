type GtagArgs = [string, string, Record<string, unknown>] | [string, Date] | [string, string]

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: GtagArgs) => void
  }
}

export type GATrackingIDType = 'EMPREGOS' | 'EMPRESAS' | 'SITE' | 'VAGAS'

export const GA_TRACKING_IDS: Record<GATrackingIDType, string> = {
  EMPREGOS: 'G-PRPCHSVLN2',
  EMPRESAS: 'G-1DZH338D2T',
  SITE: 'G-1Z1VWE835Y',
  VAGAS: 'G-2724GJG80Q',
}

export const initializeGoogleAnalytics = () => {
  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())

  Object.values(GA_TRACKING_IDS).forEach((id) => {
    window.gtag('config', id)
  })
}

export const pageview = (url: string) => {
  if (typeof window.gtag === 'function') {
    Object.values(GA_TRACKING_IDS).forEach((id) => {
      window.gtag('config', id, {
        page_path: url,
      })
    })
  }
}

export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams || {})
  }
}
