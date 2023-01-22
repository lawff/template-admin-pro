import { Helmet } from 'react-helmet-async'

interface HeadProps {
  title?: string
  description?: string
}

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | ${import.meta.env.VITE_TITLE}` : undefined}
      defaultTitle={import.meta.env.VITE_TITLE}
    >
      <meta name="description" content={description} />
    </Helmet>
  )
}
