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
  const bg = useColorModeValue('white', 'gray.800');
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
                  alt="HospitalityAI Logo" 
                  style={{ 
                    height: '40px', 
                    width: 'auto'
                  }}
                />
              </Box>
              <Heading
                as="h2"
                size="xl"
                color="gray.800"
                lineHeight={1.2}
                mb={4}
                fontFamily="Geist, sans-serif"
              >
                Measurable Impact on Your Business Operations
              </Heading>
              <Text fontSize="lg" color="gray.600" lineHeight={1.6} mb={6}>
                Join hundreds of hospitality leaders who have transformed their operations 
                with AI-powered SOPs. See the dramatic improvements in efficiency, 
                compliance, and cost savings.
              </Text>
              <Button
              size="lg"
              variant="outline"
              _hover={{
                transform: 'translateY(-1px)',
              }}
            >
              View Case Studies
            </Button>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6} w="full">
              {stats.map((stat, index) => {
                return (
                  <Box
                    key={index}
                    p={6}
                    bg={cardBg}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.200"
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
                        color={stat.color}
                      >
                        <Image src={stat.icon} alt={stat.title} width={6} height={6} />
                      </Box>
                      
                      <VStack spacing={3} align="flex-start" flex={1}>
                        <Text color="gray.600" lineHeight={1.6}>
                          {stat.description}
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>
                );
              })}
            </SimpleGrid>

            
          </VStack>

          <Box>
            <Image
              src="public/unit-food.webp"
              alt="Hotel operations team using digital procedures"
              borderRadius="xl"
              boxShadow="2xl"
              w="full"
              h={400}
              objectFit="cover"
            />
          </Box>
        </SimpleGrid>

        <Box mt={20} textAlign="center">
          <VStack spacing={6}>
            <Heading size="lg" color="gray.800">
              "HospitalityAI reduced our training time by 60% and improved guest satisfaction scores across all our properties."
            </Heading>
            <VStack spacing={2}>
              <Text fontWeight="semibold" color="gray.700">
                Sarah Chen, Operations Director
              </Text>
              <Text color="gray.500">
                Premium Resort Group - 12 Properties
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}