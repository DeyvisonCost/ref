type FBQFunction = {
  (action: 'init', pixelId: string): void
  (action: 'track', eventName: string, params?: Record<string, unknown>): void
  q?: unknown[]
}

declare global {
  interface Window {
    fbq: FBQFunction
    _fbq: FBQFunction
  }
}

export type FBPixelIDType = 'MAIN'

export const FB_PIXEL_IDS: Record<FBPixelIDType, string> = {
  MAIN: '859878889458548',
}

export const initializeFacebookPixel = () => {
  window.fbq =
    window.fbq ||
    function (...args: unknown[]) {
      ;(window.fbq.q = window.fbq.q || []).push(args)
    }
  window._fbq = window._fbq || window.fbq

  // Initialize the main pixel
  window.fbq('init', FB_PIXEL_IDS.MAIN)
  window.fbq('track', 'PageView')
}
