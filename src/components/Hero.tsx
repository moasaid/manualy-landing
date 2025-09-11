import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  HStack,
  VStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

interface HeroProps {
  onNavigateToApp?: () => void;
}

export default function Hero({ onNavigateToApp }: HeroProps) {
  return (
    <Box
      minH="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bg="white"
      pt={20}
      pb={16}
    >
      {/* Soft Airbrush Background Effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="radial(circle at 30% 20%, rgba(102, 102, 243, 0.15) 0%, transparent 50%), 
                   radial(circle at 70% 80%, rgba(49, 151, 149, 0.12) 0%, transparent 50%),
                   radial(circle at 90% 10%, rgba(221, 107, 32, 0.08) 0%, transparent 40%),
                   linear(to-br, rgba(102, 102, 243, 0.03), rgba(255, 255, 255, 0.8))"
        filter="blur(0.5px)"
        zIndex={0}
      />
      
      {/* Additional soft gradient overlay */}
      <Box
        position="absolute"
        top="10%"
        left="20%"
        width="60%"
        height="80%"
        bgGradient="radial(ellipse at center, rgba(102, 102, 243, 0.08) 0%, transparent 70%)"
        filter="blur(40px)"
        zIndex={0}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={12} textAlign="center">
          {/* Badge */}
          <Badge
            colorScheme="brand"
            variant="subtle"
            px={3}
            py={2}
            borderRadius="full"
            fontSize="xs"
            fontWeight="medium"
            bg="white"
            color="black"
            border="1px solid"
            borderColor="rgba(102, 102, 243, 0.3)"
            boxShadow="0 0 20px rgba(102, 102, 243, 0.4), 0 0 40px rgba(102, 102, 243, 0.2), 0 0 60px rgba(102, 102, 243, 0.1)"
            textTransform="none"
            _hover={{
              boxShadow: "0 0 25px rgba(102, 102, 243, 0.5), 0 0 50px rgba(102, 102, 243, 0.3), 0 0 75px rgba(102, 102, 243, 0.15)",
              transform: "scale(1.02)"
            }}
            transition="all 0.3s ease"
          >
            <HStack spacing={2} align="center">
              <Text>✨ New: HospitalityAI Intelligence Version 2.0</Text>
              <ChevronRight size={14} />
            </HStack>
          </Badge>

          {/* Main Heading */}
          <VStack spacing={6} maxW="4xl">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
              fontWeight="bold"
              lineHeight={1.1}
              color="gray.900"
              textAlign="center"
              fontFamily="Geist, sans-serif"
            >
              Scale Your Hospitality Business{' '}
              <Text as="span" color="brand.500">
                Without Effort
              </Text>
            </Heading>
            
            <Text 
              fontSize={{ base: 'lg', md: 'xl' }} 
              color="gray.600" 
              lineHeight={1.6}
              maxW="2xl"
              textAlign="center"
            >
              Transform your hospitality operations with AI-powered SOPs and operational manuals. 
              Launch, manage, and scale automated processes—no coding required.
            </Text>
          </VStack>

          {/* CTA Buttons */}
          <HStack spacing={4} flexWrap="wrap" justify="center">
            <Button
              size="lg"
              rightIcon={<ArrowRight size={20} />}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="semibold"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'xl',
              }}
              transition="all 0.3s"
              onClick={onNavigateToApp}
            >
              Start for free
            </Button>
            <Button
              variant="outline"
              size="lg"
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="semibold"
              bg="white"
              _hover={{
                transform: 'translateY(-1px)',
                bg: 'gray.50',
              }}
              transition="all 0.3s"
            >
              Talks to sales
            </Button>
          </HStack>

          {/* Social Proof */}
          <VStack spacing={2}>
            <HStack spacing={2} justify="center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} fill="#F6AD55" color="#F6AD55" />
              ))}
              <Text fontSize="sm" color="gray.600" ml={2}>
                Free Forever. No Credit Card.
              </Text>
            </HStack>
          </VStack>

          {/* Dashboard Preview */}
          <Box mt={16} w="full" maxW="5xl">
            <DashboardPreview />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}