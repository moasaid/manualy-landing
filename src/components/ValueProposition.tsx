import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  Image,
  Button,
} from '@chakra-ui/react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const stats = [
  {
    label: 'Time Savings',
    number: '90%',
    helpText: 'Reduction in manual SOP creation time',
    icon: Clock,
    color: 'brand.500',
  },
  {
    label: 'Cost Reduction',
    number: '$50K+',
    helpText: 'Average annual savings per property',
    icon: DollarSign,
    color: 'teal.500',
  },
  {
    label: 'Efficiency Boost',
    number: '40%',
    helpText: 'Improvement in operational efficiency',
    icon: TrendingUp,
    color: 'orange.500',
  },
  {
    label: 'Staff Satisfaction',
    number: '95%',
    helpText: 'Employees find procedures clearer',
    icon: Users,
    color: 'brand.500',
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
              <Heading
                as="h2"
                size="xl"
                color="gray.800"
                lineHeight={1.2}
                mb={4}
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
                const IconComponent = stat.icon;
                return (
                  <Box
                    key={index}
                    bg={cardBg}
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    _hover={{
                      boxShadow: 'lg',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.3s"
                  >
                    <HStack spacing={4} mb={3}>
                      <Box
                        p={2}
                        borderRadius="md"
                        bg={`${stat.color.replace('.500', '.50')}`}
                        color={stat.color}
                      >
                        <IconComponent size={20} />
                      </Box>
                      <VStack spacing={0} align="flex-start">
                        <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                          {stat.number}
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="gray.600">
                          {stat.label}
                        </Text>
                      </VStack>
                    </HStack>
                    <Text fontSize="sm" color="gray.500">
                      {stat.helpText}
                    </Text>
                  </Box>
                );
              })}
            </SimpleGrid>
          </VStack>

          <Box>
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
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