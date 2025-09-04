import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Collapse,
  Link,
} from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
import AuthModal from './AuthModal';

const Links = ['Features', 'Pricing', 'About', 'Contact'];

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    px={3}
    py={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    href={href}
    fontWeight="medium"
    color="gray.700"
    transition="all 0.2s"
  >
    {children}
  </Link>
);

interface HeaderProps {
  onNavigateToApp?: () => void;
  onNavigateToOnboarding?: () => void;
}

export default function Header({ onNavigateToApp, onNavigateToOnboarding }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isAuthOpen, onOpen: onAuthOpen, onClose: onAuthClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      bg={isScrolled ? 'white' : 'transparent'}
      px={4}
      position="fixed"
      width="100%"
      top={0}
      zIndex={1000}
      transition="all 0.3s"
      backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
      boxShadow={isScrolled ? 'md' : 'none'}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW="7xl" mx="auto">
        <HStack spacing={4} alignItems={'center'}>
          <Box display="flex" alignItems="center" gap={2}>
            <img 
              src="/logo.png" 
              alt="HospitalityAI Logo" 
              style={{ height: '32px', width: 'auto' }}
            />
          </Box>
        </HStack>
        
        <HStack spacing={8} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </NavLink>
          ))}
          <Button variant="outline" size="sm" mr={2} onClick={onAuthOpen}>
            Sign In
          </Button>
          <Button size="sm" onClick={onNavigateToApp}>
            Start Free Trial
          </Button>
        </HStack>
        
        <IconButton
          size={'md'}
          icon={isOpen ? <X /> : <Menu />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </NavLink>
            ))}
            <Button variant="outline" size="sm" width="full" onClick={onAuthOpen}>
              Sign In
            </Button>
            <Button size="sm" width="full" onClick={onNavigateToApp}>
              Start Free Trial
            </Button>
          </Stack>
        </Box>
      </Collapse>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={onAuthClose} 
        onSignInSuccess={onNavigateToOnboarding}
      />
    </Box>
  );
}