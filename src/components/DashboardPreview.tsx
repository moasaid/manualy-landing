import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Progress,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Filter,
  Download,
  Search,
  Settings,
  Bell,
  User
} from 'lucide-react';

export default function DashboardPreview() {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  
  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="2xl"
      overflow="hidden"
      transform="perspective(1000px) rotateX(5deg)"
      _hover={{
        transform: 'perspective(1000px) rotateX(0deg)',
      }}
      transition="all 0.5s ease"
    >
      {/* Browser Header */}
      <Box bg="brand.500" px={4} py={3}>
        <HStack spacing={2}>
          <Box w={3} h={3} borderRadius="full" bg="red.400" />
          <Box w={3} h={3} borderRadius="full" bg="yellow.400" />
          <Box w={3} h={3} borderRadius="full" bg="green.400" />
          <Box flex={1} />
          <HStack spacing={4}>
            <Box w={4} h={4}>
              <Download size={16} color="white" />
            </Box>
            <Box w={4} h={4}>
              <Settings size={16} color="white" />
            </Box>
          </HStack>
        </HStack>
      </Box>

      {/* Dashboard Content */}
      <Box p={6}>
        {/* Header */}
        <HStack justify="space-between" mb={6}>
          <VStack align="flex-start" spacing={1}>
            <HStack spacing={2}>
              <Box w={6} h={6} bg="brand.500" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                <Text color="white" fontSize="xs" fontWeight="bold">H</Text>
              </Box>
              <Text fontWeight="semibold" color="gray.700">Manualy</Text>
              <Badge colorScheme="green" size="sm">Free Plan</Badge>
            </HStack>
          </VStack>
          <HStack spacing={3}>
            <Box p={2} borderRadius="md" _hover={{ bg: 'gray.100' }} cursor="pointer">
              <Search size={16} color="#666" />
            </Box>
            <Box p={2} borderRadius="md" _hover={{ bg: 'gray.100' }} cursor="pointer">
              <Bell size={16} color="#666" />
            </Box>
            <Box p={2} borderRadius="md" _hover={{ bg: 'gray.100' }} cursor="pointer">
              <User size={16} color="#666" />
            </Box>
          </HStack>
        </HStack>

        {/* Main Dashboard */}
        <VStack spacing={6} align="stretch">
          <HStack justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Dashboard
            </Text>
            <HStack spacing={3}>
              <HStack spacing={2} bg="gray.100" px={3} py={2} borderRadius="md" cursor="pointer">
                <Filter size={14} />
                <Text fontSize="sm">Filter</Text>
              </HStack>
              <HStack spacing={2} bg="brand.500" color="white" px={3} py={2} borderRadius="md" cursor="pointer">
                <Download size={14} />
                <Text fontSize="sm">Export</Text>
              </HStack>
            </HStack>
          </HStack>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
            <Box bg="white" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
              <VStack align="flex-start" spacing={2}>
                <HStack spacing={2}>
                  <Box p={1} bg="green.100" borderRadius="md">
                    <TrendingUp size={14} color="#38A169" />
                  </Box>
                  <Text fontSize="sm" color="gray.600">Active SOPs</Text>
                </HStack>
                <Text fontSize="2xl" fontWeight="bold" color="gray.800">$24,064</Text>
                <HStack spacing={1}>
                  <Text fontSize="xs" color="gray.500">vs. Last period</Text>
                  <Text fontSize="xs" color="green.500" fontWeight="medium">↗ 27.4%</Text>
                </HStack>
              </VStack>
            </Box>

            <Box bg="white" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
              <VStack align="flex-start" spacing={2}>
                <HStack spacing={2}>
                  <Box p={1} bg="blue.100" borderRadius="md">
                    <BarChart3 size={14} color="#3182CE" />
                  </Box>
                  <Text fontSize="sm" color="gray.600">Procedure Revenue</Text>
                </HStack>
                <Text fontSize="2xl" fontWeight="bold" color="gray.800">$15,490</Text>
                <HStack spacing={1}>
                  <Text fontSize="xs" color="gray.500">vs. Last period</Text>
                  <Text fontSize="xs" color="green.500" fontWeight="medium">↗ 32.5%</Text>
                </HStack>
              </VStack>
            </Box>

            <Box bg="white" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
              <VStack align="flex-start" spacing={2}>
                <HStack spacing={2}>
                  <Box p={1} bg="orange.100" borderRadius="md">
                    <Users size={14} color="#DD6B20" />
                  </Box>
                  <Text fontSize="sm" color="gray.600">Total Deals</Text>
                </HStack>
                <Text fontSize="2xl" fontWeight="bold" color="gray.800">827</Text>
                <HStack spacing={1}>
                  <Text fontSize="xs" color="gray.500">vs. Last period</Text>
                  <Text fontSize="xs" color="red.500" fontWeight="medium">↘ 18.9%</Text>
                </HStack>
              </VStack>
            </Box>

            <Box bg="white" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
              <VStack align="flex-start" spacing={2}>
                <HStack spacing={2}>
                  <Box p={1} bg="purple.100" borderRadius="md">
                    <DollarSign size={14} color="#805AD5" />
                  </Box>
                  <Text fontSize="sm" color="gray.600">Reply Rate</Text>
                </HStack>
                <Text fontSize="2xl" fontWeight="bold" color="gray.800">86.5%</Text>
                <HStack spacing={1}>
                  <Text fontSize="xs" color="gray.500">vs. Last period</Text>
                  <Text fontSize="xs" color="green.500" fontWeight="medium">↗ 14.7%</Text>
                </HStack>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Chart Section */}
          <HStack spacing={6} align="flex-start">
            <Box flex={2} bg="white" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
              <VStack align="flex-start" spacing={4}>
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold" color="gray.800">Average Ticket</Text>
                  <HStack spacing={2}>
                    <Badge colorScheme="brand" variant="subtle">Checkout</Badge>
                    <Badge colorScheme="gray" variant="subtle">Viewing</Badge>
                  </HStack>
                </HStack>
                <Box w="full" h={32} bg="gray.50" borderRadius="md" position="relative">
                  {/* Simulated Chart */}
                  <Box
                    position="absolute"
                    bottom={4}
                    left={4}
                    right={4}
                    height="60%"
                    bgGradient="linear(to-t, brand.400, brand.200)"
                    borderRadius="sm"
                    opacity={0.8}
                  />
                  <Text
                    position="absolute"
                    bottom={2}
                    right={4}
                    fontSize="xs"
                    color="white"
                    fontWeight="bold"
                  >
                    ↗ 426
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Box flex={1} bg="white" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
              <VStack align="flex-start" spacing={4}>
                <Text fontWeight="semibold" color="gray.800">Revenue</Text>
                <VStack align="flex-start" spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="gray.800">$8,247</Text>
                  <HStack spacing={1}>
                    <Text fontSize="xs" color="gray.500">vs. Last period</Text>
                    <Text fontSize="xs" color="green.500" fontWeight="medium">↗ 27.3%</Text>
                  </HStack>
                </VStack>
                <Text fontSize="xs" color="gray.400" alignSelf="flex-end">
                  Made in Framer
                </Text>
              </VStack>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}