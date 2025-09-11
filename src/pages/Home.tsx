import { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Card,
  CardBody,
  SimpleGrid,
  IconButton,
  Badge,
  Avatar,
  useColorModeValue,
  Icon,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  X,
  Users,
  Settings,
  Clock,
  BookOpen,
  ChevronRight,
  Plus,
  FileText,
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Mock data for recent tasks
  const recentTasks = [
    {
      id: 1,
      name: 'Check-in Process Review',
      description: 'Review and update front desk check-in procedures for improved guest experience',
      status: 'In Progress',
      assignee: 'John Doe',
      completedBy: 'John Doe',
      dueDate: '2 hours ago',
      completedAt: '2024-01-15 14:30',
      priority: 'high',
      color: 'blue.500',
      bgColor: 'blue.50',
      icon: Users,
    },
    {
      id: 2,
      name: 'Room Cleaning Protocol',
      description: 'Standard operating procedures for housekeeping staff room cleaning',
      status: 'Completed',
      assignee: 'Jane Smith',
      completedBy: 'Jane Smith',
      dueDate: '1 day ago',
      completedAt: '2024-01-14 16:45',
      priority: 'medium',
      color: 'green.500',
      bgColor: 'green.50',
      icon: Settings,
    },
    {
      id: 3,
      name: 'Guest Complaint Handling',
      description: 'Procedures for handling and resolving guest complaints effectively',
      status: 'Pending',
      assignee: 'Mike Johnson',
      completedBy: null,
      dueDate: '3 days ago',
      completedAt: null,
      priority: 'high',
      color: 'red.500',
      bgColor: 'red.50',
      icon: BookOpen,
    },
  ];

  // Mock data for template manuals
  const templateManuals = [
    {
      id: 1,
      title: 'Front Desk Operations',
      description: 'Complete guide for front desk procedures',
      category: 'Reception',
      tasks: 12,
    },
    {
      id: 2,
      title: 'Housekeeping Standards',
      description: 'Room cleaning and maintenance protocols',
      category: 'Housekeeping',
      tasks: 8,
    },
    {
      id: 3,
      title: 'Food & Beverage Service',
      description: 'Restaurant and bar service guidelines',
      category: 'F&B',
      tasks: 15,
    },
    {
      id: 4,
      title: 'Emergency Procedures',
      description: 'Safety and emergency response protocols',
      category: 'Safety',
      tasks: 6,
    },
  ];


  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'green';
      case 'In Progress':
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Top Bar - always show, responsive positioning */}
      <TopBar />
      
      {/* Main Content */}
      <Box

      >
        <Container maxW="8xl">
          <VStack spacing={8} align="stretch">
          {/* Page Header */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800" mb={2}>
              Welcome back, John! 👋
            </Text>
            <Text color="gray.600">
              Here's what's happening with your hospitality operations today.
            </Text>
          </Box>

          {/* Onboarding Section - Dismissible */}
          {showOnboarding && (
            <Card 
              bg={cardBg} 
              shadow="sm"
              backgroundImage="url('https://images.unsplash.com/photo-1700498466261-824cbd01974e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
              backgroundSize="cover"
              borderRadius="xl"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.600"
                borderRadius="md"
              />
              <CardBody position="relative" zIndex={1} p={6}>
                <HStack justify="space-between" align="flex-start" mb={3}>
                  <Box>
                    <Text fontSize="lg" fontWeight="semibold" mb={1} color="white">
                      Get Started with Manualy
                    </Text>
                    <Text color="whiteAlpha.800" fontSize="sm">
                      Complete these steps to set up your hospitality operations
                    </Text>
                  </Box>
                  <IconButton
                    aria-label="Dismiss"
                    icon={<X size={16} />}
                    size="sm"
                    variant="ghost"
                    color="white"
                    bg="whiteAlpha.200"
                    _hover={{ bg: "whiteAlpha.300" }}
                    onClick={() => setShowOnboarding(false)}
                  />
                </HStack>
                
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Card bg="blue.50" border="1px solid" borderColor="blue.200">
                    <CardBody>
                      <HStack spacing={3} mb={3}>
                        <Box p={2} bg="blue.500" borderRadius="md">
                          <Users size={20} color="white" />
                        </Box>
                        <Box>
                          <Text fontWeight="semibold">Invite Your Team</Text>
                          <Text fontSize="sm" color="gray.600">
                            Add team members to collaborate
                          </Text>
                        </Box>
                      </HStack>
                      <Button size="sm" colorScheme="blue" rightIcon={<ChevronRight size={14} />}>
                        Invite Team
                      </Button>
                    </CardBody>
                  </Card>

                  <Card bg="purple.50" border="1px solid" borderColor="purple.200">
                    <CardBody>
                      <HStack spacing={3} mb={3}>
                        <Box p={2} bg="purple.500" borderRadius="md">
                          <Settings size={20} color="white" />
                        </Box>
                        <Box>
                          <Text fontWeight="semibold">Setup Manualy</Text>
                          <Text fontSize="sm" color="gray.600">
                            Configure your operations
                          </Text>
                        </Box>
                      </HStack>
                      <Button size="sm" colorScheme="purple" rightIcon={<ChevronRight size={14} />}>
                        Start Setup
                      </Button>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </CardBody>
            </Card>
          )}

          {/* Divider */}
          <Divider borderColor="gray.200" />

          {/* Recent Tasks Section */}
          <Box>
            <HStack justify="space-between" align="center" mb={4}>
              <Text fontSize="xl" fontWeight="semibold">
                Recent Tasks
              </Text>
              <Button size="sm" variant="outline" rightIcon={<ChevronRight size={14} />}>
                View All
              </Button>
            </HStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {recentTasks.map((task) => (
                <Box
                  key={task.id}
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
                  height="400px"
                >
                  <VStack spacing={4} align="flex-start" height="full">
                    <Badge 
                      colorScheme={getStatusColor(task.status)} 
                      variant="solid" 
                      size="lg"
                      px={3}
                      py={1}
                      borderRadius="lg"
                    >
                      {task.status}
                    </Badge>
                    
                    <VStack spacing={3} align="flex-start" flex={1}>
                      <Text fontWeight="semibold" fontSize="md" color="gray.800">
                        {task.name}
                      </Text>
                      
                      <Text fontSize="sm" color="gray.600" lineHeight={1.6}>
                        {task.description}
                      </Text>

                      {/* Task details */}
                      <VStack spacing={2} align="flex-start" w="full">
                        <HStack spacing={2}>
                          <Avatar size="xs" name={task.assignee} />
                          <Text fontSize="xs" color="gray.500">
                            Assigned to {task.assignee}
                          </Text>
                        </HStack>
                        
                        {task.status === 'Completed' && task.completedBy && (
                          <HStack spacing={2}>
                            <Avatar size="xs" name={task.completedBy} />
                            <Text fontSize="xs" color="gray.500">
                              Completed by {task.completedBy}
                            </Text>
                          </HStack>
                        )}
                        
                        <HStack spacing={1} color="gray.500">
                          <Clock size={12} />
                          <Text fontSize="xs">
                            {task.status === 'Completed' && task.completedAt 
                              ? `Completed ${task.completedAt}`
                              : `Due ${task.dueDate}`
                            }
                          </Text>
                        </HStack>
                      </VStack>
                    </VStack>

                    <Button
                      w="full"
                      bg="brand.500"
                      color="white"
                      size="sm"
                      minH="32px"
                      _hover={{ bg: 'brand.600' }}
                      borderRadius="lg"
                      isDisabled={task.status === 'Completed'}
                    >
                      {task.status === 'Completed' ? 'Completed' : 'Continue Task'}
                    </Button>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          
          {/* Divider */}
          <Divider borderColor="gray.200" />

          {/* Template Manuals Section */}
          <Box>
            <HStack justify="space-between" align="center" mb={4}>
              <Text fontSize="xl" fontWeight="semibold">
                Template Manuals
              </Text>
              <Button size="sm" leftIcon={<Plus size={14} />} colorScheme="blue">
                Create Manual
              </Button>
            </HStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {templateManuals.map((manual) => (
                <Box
                  key={manual.id}
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
                      color="brand.500"
                    >
                      <BookOpen size={24} />
                    </Box>
                    
                    <VStack spacing={3} align="flex-start" flex={1}>
                      <Text fontWeight="semibold" fontSize="md" color="gray.800">
                        {manual.title}
                      </Text>
                      <Text fontSize="sm" color="gray.600" lineHeight={1.6}>
                        {manual.description}
                      </Text>
                      <HStack spacing={1} color="gray.500">
                        <FileText size={14} />
                        <Text fontSize="xs">{manual.tasks} tasks</Text>
                      </HStack>
                    </VStack>

                    <Button
                      w="full"
                      bg="brand.500"
                      color="white"
                      size="sm"
                      minH="32px"
                      _hover={{ bg: 'brand.500' }}
                      borderRadius="lg"
                    >
                      Use Template
                    </Button>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
