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

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  // Mock data for recent tasks
  const recentTasks = [
    {
      id: 1,
      title: 'Check-in Process Review',
      status: 'In Progress',
      assignee: 'John Doe',
      dueDate: '2 hours ago',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Room Cleaning Protocol',
      status: 'Completed',
      assignee: 'Jane Smith',
      dueDate: '1 day ago',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Guest Complaint Handling',
      status: 'Pending',
      assignee: 'Mike Johnson',
      dueDate: '3 days ago',
      priority: 'high',
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'yellow';
      default:
        return 'green';
    }
  };

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
    <Box bg={bgColor} minH="calc(100vh - 4rem)" p={6}>
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
            <Card bg={cardBg} shadow="sm">
              <CardBody>
                <HStack justify="space-between" align="flex-start" mb={4}>
                  <Box>
                    <Text fontSize="lg" fontWeight="semibold" mb={2}>
                      Get Started with Manualy
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      Complete these steps to set up your hospitality operations
                    </Text>
                  </Box>
                  <IconButton
                    aria-label="Dismiss"
                    icon={<X size={16} />}
                    size="sm"
                    variant="ghost"
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
            
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
              {recentTasks.map((task) => (
                <Card key={task.id} bg={cardBg} shadow="sm" _hover={{ shadow: 'md' }} cursor="pointer">
                  <CardBody>
                    <VStack align="stretch" spacing={3}>
                      <HStack justify="space-between">
                        <Badge colorScheme={getPriorityColor(task.priority)} size="sm">
                          {task.priority}
                        </Badge>
                        <Badge colorScheme={getStatusColor(task.status)} variant="subtle">
                          {task.status}
                        </Badge>
                      </HStack>
                      
                      <Text fontWeight="semibold" fontSize="md">
                        {task.title}
                      </Text>
                      
                      <HStack spacing={2}>
                        <Avatar size="xs" name={task.assignee} />
                        <Text fontSize="sm" color="gray.600">
                          {task.assignee}
                        </Text>
                      </HStack>
                      
                      <HStack spacing={1} color="gray.500">
                        <Clock size={14} />
                        <Text fontSize="xs">{task.dueDate}</Text>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

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
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
              {templateManuals.map((manual) => (
                <Card key={manual.id} bg={cardBg} shadow="sm" _hover={{ shadow: 'md' }} cursor="pointer">
                  <CardBody>
                    <VStack align="stretch" spacing={3}>
                      <HStack spacing={3}>
                        <Box p={2} bg="gray.100" borderRadius="md">
                          <BookOpen size={20} color="gray.600" />
                        </Box>
                        <Badge colorScheme="gray" variant="subtle" size="sm">
                          {manual.category}
                        </Badge>
                      </HStack>
                      
                      <Text fontWeight="semibold" fontSize="md">
                        {manual.title}
                      </Text>
                      
                      <Text fontSize="sm" color="gray.600" noOfLines={2}>
                        {manual.description}
                      </Text>
                      
                      <HStack spacing={1} color="gray.500">
                        <FileText size={14} />
                        <Text fontSize="xs">{manual.tasks} tasks</Text>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
