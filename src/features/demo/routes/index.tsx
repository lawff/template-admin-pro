import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { Button } from '@mantine/core'

export const NotFound = () => {
  useEffect(() => {
    toast.success('404: Page not found')
  }, [])
  return (
    <>
      <div>404</div>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
    </>
  )
}
