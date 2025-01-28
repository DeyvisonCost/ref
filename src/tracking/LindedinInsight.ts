interface LinkedInTrackEvent {
  conversion_id: string
  [key: string]: unknown
}

declare global {
  interface Window {
    _linkedin_data_partner_ids: string[]
    lintrk: (event: 'track', params: LinkedInTrackEvent) => void
  }
}

export const LINKEDIN_PARTNER_ID = '5439433'

export const initializeLinkedInInsight = () => {
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []
  window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID)
}

export const trackLinkedInEvent = (conversionId: string) => {
  if (window.lintrk) {
    window.lintrk('track', { conversion_id: conversionId })
  }
}
