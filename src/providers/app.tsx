import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { SWRConfig } from 'swr'
import { BrowserRouter as Router } from 'react-router-dom'
import { Button, ColorSchemeProvider, MantineProvider, createEmotionCache } from '@mantine/core'
import type { ColorScheme } from '@mantine/core'
import { useState } from 'react'
import { Notifications } from '~/components/Notifications'
import { NPLoading } from '~/components/NProgress'

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.reload()}>
        Refresh
      </Button>
    </div>
  )
}

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const appendCache = createEmotionCache({ key: 'lawff', prepend: false })

  const toggleColorScheme = (value?: ColorScheme) => {
    if (value === 'dark' || colorScheme === 'light')
      document.documentElement.classList.add('dark')

    else
      document.documentElement.classList.remove('dark')

    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <React.Suspense
      fallback={
        <NPLoading />
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Helmet>
            <title>{import.meta.env.VITE_TITLE}</title>
            <meta name="description" content={import.meta.env.VITE_DESCRIPTION} />
            <meta name="theme-color" content={`#${colorScheme === 'light' ? import.meta.env.VITE_THEME_COLOR : import.meta.env.VITE_THEME_DARK_COLOR}`} />
            <link rel="icon" type="image/svg+xml" href={import.meta.env.VITE_FAVICON} />
          </Helmet>
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
              theme={{ colorScheme }}
              emotionCache={appendCache}
              withGlobalStyles
              withNormalizeCSS
            >
              <SWRConfig value={{}}>
                <Notifications />
                <Router>{children}</Router>
              </SWRConfig>
            </MantineProvider>
          </ColorSchemeProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}
