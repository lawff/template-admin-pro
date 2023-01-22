import { useState } from 'react'
import { Container, Group, Header, Image, Title, createStyles } from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import dark_logo from '~/assets/logo-dark.svg'
import logo from '~/assets/logo.svg'

const useStyles = createStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: '90%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    'display': 'block',
    'lineHeight': 1,
    'padding': '8px 12px',
    'borderRadius': theme.radius.sm,
    'textDecoration': 'none',
    'color': theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    'fontSize': theme.fontSizes.sm,
    'fontWeight': 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}))

interface HeaderSimpleProps {
  links: { link: string; label: string }[]
}

export function CustomHeader({ links }: HeaderSimpleProps) {
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()
  const colorScheme = useColorScheme()

  const items = links.map(link => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header height={60}>
      <Container className={classes.header}>

        <Group spacing={2}>
          <Image width={40} src={colorScheme === 'light' ? logo : dark_logo} />
          <Title order={1}>{import.meta.env.VITE_TITLE}</Title>
        </Group>

        <Group spacing={5} className="lg:mr-200px">
          {items}
        </Group>

      </Container>
    </Header>
  )
}
