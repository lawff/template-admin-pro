import { AppShell } from '@mantine/core'
import { CustomHeader } from './Header'
import { NavbarNested } from './Navbar'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AppShell
      padding="md"
      navbar={<NavbarNested />}
      header={<CustomHeader links={[
        {
          link: '/about',
          label: 'Features',
        },
        {
          link: '/pricing',
          label: 'Pricing',
        },
        {
          link: '/learn',
          label: 'Learn',
        },
        {
          link: '/community',
          label: 'Community',
        },
      ]} />}
      styles={theme => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
      {children}
    </AppShell>
  )
}
