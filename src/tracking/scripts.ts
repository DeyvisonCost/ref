import { useEffect } from 'react'

interface ScriptProps {
  id?: string
  src?: string
  strategy?: 'afterInteractive'
  dangerouslySetInnerHTML?: { __html: string }
  onLoad?: () => void
  children?: string
}

export function Script({ id, src, onLoad, dangerouslySetInnerHTML, children }: ScriptProps): JSX.Element | null {
  useEffect(() => {
    const script = document.createElement('script')
    if (id) {script.id = id}
    if (src) {script.src = src}
    script.async = true

    if (dangerouslySetInnerHTML) {
      script.innerHTML = dangerouslySetInnerHTML.__html
    } else if (children) {
      script.innerHTML = children
    }

    if (onLoad) {
      script.onload = onLoad
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [id, src, onLoad, dangerouslySetInnerHTML, children])

  return null
}
