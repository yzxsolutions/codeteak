import {
    IconAdjustmentsCode,
    IconAppWindowFilled,
  IconAutomation,
  IconBrandGithubCopilot,
  IconBrandGooglePlay,
  IconChartPie3,
  IconChevronDown,
  IconHours24,
  IconSettings,
  IconUxCircle,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './css/Header.css'; // Assume you've converted HeaderMegaMenu.module.css to plain CSS
import { Link } from 'react-router-dom';


export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();


  return (
    <Box className='z-50'>
      <header className="header">
        <Group justify="space-around" h="100%">
          <img src="/images/logo/logo_white_bg.png" width="190px" alt="" />

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to={"/"} className="link">Home</Link>

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link to="/services" className="link">
                  <Center inline>
                    <Box component="span" mr={5}>Services</Box>
                    <IconChevronDown size={16} color={theme.colors.red[6]} />
                  </Center>
                </Link>
              </HoverCard.Target>

            </HoverCard>
            <Link to={"/product"} className="link">Products</Link>
             <Link to={"/career"} className="link">Career</Link>
            <Link to={"/about"} className="link">About</Link>
            <Link to={"/contact"} className="link">Contact Us</Link>
           
          </Group>


          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Explore"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <Link to="/" className="link">Home</Link>

          <UnstyledButton className="link" onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}><Link to={"/services"}>Services</Link> </Box>
              <IconChevronDown size={16} color={theme.colors.red[6]} />
            </Center>
          </UnstyledButton>


          <Link to={"/about"} className="link">About</Link>
          <Link to={"/contact"} className="link">Contact</Link>
          <Link to={"/product"} className="link">Products</Link>
           <Link to={"/career"} className="link">Career</Link>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
