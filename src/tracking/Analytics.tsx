import React, { Suspense, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { pageview, trackEvent } from './GoogleAnalytics'

interface UTMParams {
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_content: string | null
  utm_term: string | null
}

function AnalyticsTracking(): JSX.Element | null {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      const url = location.pathname + location.search
      pageview(url)
    }

    const utmParams: UTMParams = {
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
      utm_campaign: searchParams.get('utm_campaign'),
      utm_content: searchParams.get('utm_content'),
      utm_term: searchParams.get('utm_term'),
    }

    const cleanUtmParams = Object.fromEntries(Object.entries(utmParams).filter(([, value]) => value !== null))

    trackEvent('UTM', cleanUtmParams)
  }, [location])

  return null
}

export default function Analytics(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracking />
    </Suspense>
  )
}
