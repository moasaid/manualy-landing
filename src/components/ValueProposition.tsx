import React from 'react';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
  Image,
  Button,
} from '@chakra-ui/react';

const stats = [
  {
    title: 'Time & Cost Efficiency',
    description: 'Reduce manual SOP creation time by 90% and save over $50K annually per property.',
    icon: '/time.svg',
    color: 'brand.500',
  },
  {
    title: 'Operational Excellence',
    description: 'Boost operational efficiency by 40% while achieving 95% staff satisfaction.',
    icon: '/quality.svg',
    color: 'teal.500',
  },
];

export default function ValueProposition() {
  const bg = useColorModeValue('white', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.700');
  
  return (
    <Box bg={bg} py={20}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
          <VStack spacing={8} align="flex-start">
            <Box>
              <Box mb={6}>
                <img 
                  src="/unit.webp" 
                  alt="Manualy Logo" 
                  style={{ 
                    height: '40px', 
                    width: 'auto'
                  }}
                />
              </Box>
              <Heading
                as="h2"
                size="xl"
                color={useColorModeValue('gray.800', 'white')}
                lineHeight={1.2}
                mb={4}
                fontFamily="Geist, sans-serif"
              >
                Measurable Impact on Your Business Operations
              </Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} lineHeight={1.6} mb={6}>
                Join hundreds of hospitality leaders who have transformed their operations 
                with AI-powered SOPs. See the dramatic improvements in efficiency, 
                compliance, and cost savings.
              </Text>
              <Button
                variant="outline"
                size="lg"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="semibold"
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.900', 'white')}
                borderColor={useColorModeValue('gray.200', '#2d3748')}
                _hover={{
                  transform: 'translateY(-1px)',
                  bg: useColorModeValue('gray.50', 'gray.700'),
                }}
                transition="all 0.3s"
              >
                View Case Studies
              </Button>
            </Box>

            

            
          </VStack>

          <Box position="relative">
            <Image
              src="public/unit-food.webp"
              alt="Hotel operations team using digital procedures"
              borderRadius="xl"
              boxShadow="2xl"
              w="full"
              h={400}
              objectFit="cover"
            />
            
            {/* Overlay card positioned at bottom right */}
            <Box
              position="absolute"
              bottom={4}
              right={4}
              p={6}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="xl"
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'gray.600')}
              boxShadow="xl"
              maxW="300px"
            >
              <VStack spacing={4} align="flex-start" height="full">
                <VStack spacing={3} align="flex-start" flex={1}>
                  <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight={1.6}>
                    Digital procedures streamline operations and ensure consistent service quality across all touchpoints.
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>

        <Box mt={20} textAlign="center">
          <VStack spacing={6}>
            <Heading size="lg" color={useColorModeValue('gray.800', 'white')}>
              "Manualy reduced our training time by 60% and improved guest satisfaction scores across all our properties."
            </Heading>
            <VStack spacing={2}>
              <Text fontWeight="semibold" color={useColorModeValue('gray.700', 'gray.200')}>
                Sarah Chen, Operations Director
              </Text>
              <Text color={useColorModeValue('gray.500', 'gray.400')}>
                Premium Resort Group - Unit
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}