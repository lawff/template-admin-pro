import { Code, Group, NavLink, Navbar, ScrollArea, createStyles } from '@mantine/core'

const useStyles = createStyles(theme => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  footer: {
    padding: theme.spacing.md,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}))

export function NavbarNested() {
  const { classes } = useStyles()

  return (
    <Navbar width={{ base: 250 }} className={classes.navbar}>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>

          <NavLink
            label="First parent link"
            childrenOffset={28}
          >
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Nested parent link" childrenOffset={28}>
              <NavLink label="First child link" />
              <NavLink label="Second child link" />
              <NavLink label="Third child link" />
            </NavLink>
          </NavLink>

          <NavLink
            label="Second parent link"
            childrenOffset={28}
            defaultOpened
          >
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Third child link" />
          </NavLink>

        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Group position="apart">
          <Code sx={{ fontWeight: 700 }}>{import.meta.env.VITE_VERSION}</Code>
        </Group>
      </Navbar.Section>
    </Navbar>
  )
}
