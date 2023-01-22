import { Toaster } from 'react-hot-toast'

export function Notifications() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: '',
        duration: 2000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      }}
    />
  )
}
