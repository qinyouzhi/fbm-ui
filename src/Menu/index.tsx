import * as React from 'react';
import { List, ListItemButton, ListItemText, ListItemIcon, Paper } from '@material-ui/core'

import styles from './styles'

interface MenuItemProps {
  selected?: boolean;
  title?: string;
  icon?: React.ReactNode;
  link?: string;
}
export interface MenuPrpos {
  menus?: MenuItemProps[];
  closedWidth?: number;
  openWidth?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  selected,
  icon,
}) => {
  const Icon = () => {
    if (!icon) return null
    return <ListItemIcon className='icon'> {icon} </ListItemIcon>
  }
  const Title = () => {
    if (!title) return null
    return <ListItemText className='title' primary={title} />
  }
  return (
    <ListItemButton component='li' sx={styles.listItemButton} selected={selected}>
      <Icon />
      <Title />
    </ListItemButton>
  )
}

const Menu: React.FC<MenuPrpos> = ({ menus, closedWidth, openWidth }) => (
  <Paper
    sx={styles.menu({ closedWidth, openWidth })}
    elevation={0}
    square
  >
    <List className='menu-list'>
      {menus.map((item) => <MenuItem key={item.title} {...item} />)}
    </List>
  </Paper>
)


Menu.defaultProps = {
  closedWidth: 56,
  openWidth: 186,
}

export default Menu
