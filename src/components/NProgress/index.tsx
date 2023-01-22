import NProgress from 'nprogress'
import { useEffect } from 'react'

export const NPLoading = () => {
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  })

  return null
}
