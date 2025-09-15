import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { 
  FileCheck, 
  Clock, 
  Users, 
  Shield, 
  BarChart3,
  Zap,
  Globe
} from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Generation',
    description: 'Generate comprehensive SOPs in minutes using advanced AI trained on hospitality best practices and industry standards.',
    icon: '/ai.svg',
    color: 'brand.500',
  },
  {
    title: 'Industry Compliance',
    description: 'Ensure all procedures meet health, safety, and regulatory requirements with built-in compliance templates.',
    icon: '/shield.svg',
    color: 'teal.500',
  },
  {
    title: 'Time Efficiency',
    description: 'Reduce manual creation time by 90%. What used to take weeks now takes hours with our intelligent automation.',
    icon: '/time.svg',
    color: 'orange.500',
  },
  {
    title: 'Team Collaboration',
    description: 'Enable seamless collaboration between departments with real-time editing and approval workflows.',
    icon: '/team.svg',
    color: 'brand.500',
  },
  {
    title: 'Quality Assurance',
    description: 'Maintain consistent service quality with detailed, step-by-step procedures that eliminate guesswork.',
    icon: '/quality.svg',
    color: 'teal.500',
  },
  {
    title: 'Performance Analytics',
    description: 'Track procedure effectiveness and staff compliance with built-in analytics and reporting tools.',
    icon: '/analytics.svg',
    color: 'orange.500',
  },
  {
    title: 'Instant Updates',
    description: 'Deploy procedure updates across all locations instantly, ensuring everyone follows the latest protocols.',
    icon: '/refresh.svg',
    color: 'brand.500',
  },
  {
    title: 'Multi-Location Support',
    description: 'Manage SOPs across multiple properties with centralized control and location-specific customizations.',
    icon: '/multi-location.svg',
    color: 'teal.500',
  },
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  
  return (
    <Box
      p={6}
      bg={cardBg}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
        borderColor: 'brand.500',
      }}
      transition="all 0.3s"
      cursor="pointer"
      height="full"
    >
      <VStack spacing={4} align="flex-start" height="full">
        <Box
          borderRadius="lg"
          color={feature.color}
        >
          {typeof feature.icon === 'string' ? (
            <Image src={feature.icon} alt={feature.title} boxSize={6} />
          ) : (
            <Icon as={feature.icon} boxSize={6} />
          )}
        </Box>
        
        <VStack spacing={3} align="flex-start" flex={1}>
          <Heading size="md" color={useColorModeValue('gray.800', 'white')}>
            {feature.title}
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight={1.6}>
            {feature.description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default function Features() {
  const sectionBg = useColorModeValue('white', 'gray.900');
  
  return (
    <Box bg={sectionBg} py={20} id="features">
      <Container maxW="7xl">
        <VStack spacing={16}>
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Heading
              as="h2"
              size="xl"
              color={useColorModeValue('gray.800', 'white')}
              lineHeight={1.2}
              fontFamily="Geist, sans-serif"
            >
              Everything You Need to Streamline Hospitality Operations
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} lineHeight={1.6}>
              Our AI platform provides all the tools necessary to create, manage, and maintain 
              world-class operational procedures for your hospitality business.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}