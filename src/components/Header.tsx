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
    color={useColorModeValue('gray.700', 'gray.200')}
    fontSize="14px"
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
      bg={isScrolled || isOpen ? useColorModeValue('white', 'gray.900') : 'transparent'}
      px={4}
      position="fixed"
      width="100%"
      top={0}
      zIndex={1000}
      transition="all 0.3s"
      backdropFilter={isScrolled || isOpen ? 'blur(10px)' : 'none'}
      boxShadow={isScrolled || isOpen ? 'md' : 'none'}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW="7xl" mx="auto">
        <HStack spacing={4} alignItems={'center'}>
          <Box display="flex" alignItems="center" gap={2}>
            <img 
              src="/logo.png" 
              alt="Manualy Logo" 
              style={{ height: '32px', width: 'auto' }}
            />
          </Box>
        </HStack>
        
        <HStack spacing={2} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </NavLink>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            mr={2} 
            onClick={onAuthOpen}
            color={useColorModeValue('gray.700', 'gray.200')}
            borderColor={useColorModeValue('gray.300', 'gray.600')}
            _hover={{
              bg: useColorModeValue('gray.50', 'gray.700'),
              borderColor: useColorModeValue('gray.400', 'gray.500')
            }}
          >
            Sign In
          </Button>
          <Button 
            size="sm" 
            onClick={onNavigateToApp}
            bg={useColorModeValue('brand.500', 'brand.600')}
            color="white"
            _hover={{
              bg: useColorModeValue('brand.600', 'brand.700')
            }}
          >
            Start Free Trial
          </Button>
        </HStack>
        
        <IconButton
          size={'md'}
          icon={isOpen ? <X /> : <Menu />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant="unstyled"
          color={useColorModeValue('gray.700', 'gray.200')}
          _hover={{ color: useColorModeValue('gray.900', 'white') }}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box 
          pb={4}
          pt={4} 
          display={{ md: 'none' }}
          bg={useColorModeValue('white', 'gray.900')}
          borderTop="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          mt={0}
        >
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </NavLink>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              width="full" 
              onClick={onAuthOpen}
              color={useColorModeValue('gray.700', 'gray.200')}
              borderColor={useColorModeValue('gray.300', 'gray.600')}
              _hover={{
                bg: useColorModeValue('gray.50', 'gray.700'),
                borderColor: useColorModeValue('gray.400', 'gray.500')
              }}
            >
              Sign In
            </Button>
            <Button 
              size="sm" 
              width="full" 
              onClick={onNavigateToApp}
              bg={useColorModeValue('brand.500', 'brand.600')}
              color="white"
              _hover={{
                bg: useColorModeValue('brand.600', 'brand.700')
              }}
            >
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