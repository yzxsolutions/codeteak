import React from 'react';
import { NavLink } from 'react-router-dom';
import { Group, Box, ThemeIcon } from '@mantine/core';
import {
  IconHome2,
  IconSettings,
  IconPackage,
  IconMail,
} from '@tabler/icons-react';
import './css/BottomNav.css';

const navItems = [
  { label: 'Home', icon: IconHome2, path: '/' },
  { label: 'Services', icon: IconSettings, path: '/services' },
  { label: 'Products', icon: IconPackage, path: '/product' },
  { label: 'Contact', icon: IconMail, path: '/contact' },
];

export default function BottomNav() {
  return (
    <Box
      component="nav"
      className="bottom-nav"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000000', // Black background
        borderTop: '1px solid #1a1a1a',
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        display: { sm: 'none' }, // Hidden on sm and above
        padding: '8px 0',
      }}
    >
      <Group justify="space-around" align="center" grow>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            end
          >
            <ThemeIcon
              variant="filled"
              color="red.6" // Red icon
              size="lg"
              radius="md"
              className="nav-icon"
            >
              <item.icon size={20} color="#ffffff" /> {/* White icon fill */}
            </ThemeIcon>
            <Box component="span" className="nav-label">
              {item.label}
            </Box>
          </NavLink>
        ))}
      </Group>
    </Box>
  );
}