import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  VStack,
  HStack,
  Divider,
  IconButton,
  useColorModeValue,
  useColorMode,
  Switch,
  Icon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Sun,
  Moon
} from 'lucide-react';

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  const headerColor = useColorModeValue('white', 'white');
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color={headerColor}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = 'gray.900';
  const textColor = useColorModeValue('gray.200', 'gray.300');
  const linkColor = useColorModeValue('gray.300', 'gray.400');
  
  return (
    <Box bg={bg} color={textColor}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <HStack spacing={2} mb={4}>
                <img 
                  src="/footer-logo.png" 
                  alt="Manualy Logo" 
                  style={{ height: '32px', width: 'auto' }}
                />
              </HStack>
              <Text fontSize={'sm'} color={linkColor} maxW="300px">
                Transforming hospitality operations with AI-powered SOPs and operational manuals. 
                Trusted by leading hotels, restaurants, and resorts worldwide.
              </Text>
            </Box>
            <Stack direction={'row'} spacing={4}>
              <IconButton
                aria-label="Facebook"
                icon={<Facebook size={20} />}
                bg="transparent"
                color={linkColor}
                _hover={{ color: 'brand.400', bg: useColorModeValue('gray.800', 'gray.700') }}
                size="sm"
              />
              <IconButton
                aria-label="Twitter"
                icon={<Twitter size={20} />}
                bg="transparent"
                color={linkColor}
                _hover={{ color: 'brand.400', bg: useColorModeValue('gray.800', 'gray.700') }}
                size="sm"
              />
              <IconButton
                aria-label="LinkedIn"
                icon={<Linkedin size={20} />}
                bg="transparent"
                color={linkColor}
                _hover={{ color: 'brand.400', bg: useColorModeValue('gray.800', 'gray.700') }}
                size="sm"
              />
              <IconButton
                aria-label="YouTube"
                icon={<Youtube size={20} />}
                bg="transparent"
                color={linkColor}
                _hover={{ color: 'brand.400', bg: useColorModeValue('gray.800', 'gray.700') }}
                size="sm"
              />
            </Stack>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#features'} color={linkColor} _hover={{ color: 'white' }}>Features</Link>
            <Link href={'#pricing'} color={linkColor} _hover={{ color: 'white' }}>Pricing</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Templates</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Integrations</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>API Documentation</Link>
            <Link 
              onClick={() => navigate('/app')}
              color={linkColor} 
              _hover={{ color: 'white' }}
              cursor="pointer"
            >
              Demo Application
            </Link>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#about'} color={linkColor} _hover={{ color: 'white' }}>About Us</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Careers</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Press Kit</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Partners</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Case Studies</Link>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Help Center</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Documentation</Link>
            <Link href={'#contact'} color={linkColor} _hover={{ color: 'white' }}>Contact Support</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Training</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: 'white' }}>Status Page</Link>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Contact</ListHeader>
            <HStack spacing={2}>
              <Mail size={16} />
              <Text fontSize={'sm'} color={linkColor}>
                hello@manualy.uk
              </Text>
            </HStack>
            <HStack spacing={2}>
              <Phone size={16} />
              <Text fontSize={'sm'} color={linkColor}>
                +1 (555) 123-4567
              </Text>
            </HStack>
            <HStack spacing={2} align="flex-start">
              <MapPin size={16} style={{ marginTop: '2px' }} />
              <VStack spacing={0} align="flex-start">
                <Text fontSize={'sm'} color={linkColor}>
                  123 Innovation Drive
                </Text>
                <Text fontSize={'sm'} color={linkColor}>
                  San Francisco, CA 94105
                </Text>
              </VStack>
            </HStack>
            
            {/* Theme Toggle */}
            <Box mt={4}>
              <HStack spacing={3} align="center">
                <Icon 
                  as={colorMode === 'light' ? Sun : Moon} 
                  boxSize={4} 
                  color={colorMode === 'light' ? linkColor : 'brand.500'} 
                />
                <VStack spacing={0} align="flex-start">
                  <Text fontSize="sm" fontWeight="medium" color={linkColor}>
                    {colorMode === 'light' ? 'Light Mode' : 'Dark Mode'}
                  </Text>
                </VStack>
                <Switch
                  size="md"
                  colorScheme="brand"
                  isChecked={colorMode === 'dark'}
                  onChange={toggleColorMode}
                />
              </HStack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      
      <Box py={6}>
        <Container maxW={'7xl'}>
          <Divider mb={6} borderColor={useColorModeValue('gray.700', 'gray.600')} />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
          >
            <Text fontSize={'sm'} color={linkColor}>
              {new Date().getFullYear()} Manualy. All rights reserved.
            </Text>
            <Stack direction={'row'} spacing={6}>
              <Link
                href={'#'}
                fontSize={'sm'}
                color={linkColor}
                _hover={{ color: useColorModeValue('white', 'gray.100') }}
              >
                Privacy Policy
              </Link>
              <Link
                href={'#'}
                fontSize={'sm'}
                color={linkColor}
                _hover={{ color: useColorModeValue('white', 'gray.100') }}
              >
                Terms of Service
              </Link>
              <Link
                href={'#'}
                fontSize={'sm'}
                color={linkColor}
                _hover={{ color: useColorModeValue('white', 'gray.100') }}
              >
                Cookie Policy
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}