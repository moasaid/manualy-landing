import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  IconButton,
  useColorModeValue,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import TaskModal from './TaskModal';
import TaskExecutionOverlay from './TaskExecutionOverlay';
import { 
  ChefHat,
  Bed,
  Users,
  Coffee,
  Utensils,
  Edit,
  MoreVertical,
} from 'lucide-react';

const tasks = [
  {
    name: 'Kitchen Operations',
    duration: '15-20 min',
    icon: ChefHat,
    color: 'gray.500',
    bgColor: 'gray.100',
    description: 'Complete food preparation and safety protocols'
  },
  {
    name: 'Housekeeping',
    duration: '25-30 min',
    icon: Bed,
    color: 'blue.500',
    bgColor: 'blue.100',
    description: 'Room cleaning and maintenance procedures'
  },
  {
    name: 'Guest Services',
    duration: '10-15 min',
    icon: Users,
    color: 'red.500',
    bgColor: 'red.100',
    description: 'Customer interaction and service standards'
  },
  {
    name: 'Bar Operations',
    duration: '12-18 min',
    icon: Coffee,
    color: 'purple.500',
    bgColor: 'purple.100',
    description: 'Beverage preparation and inventory management'
  },
  {
    name: 'Restaurant Service',
    duration: '20-25 min',
    icon: Utensils,
    color: 'orange.500',
    bgColor: 'orange.100',
    description: 'Dining service and table management'
  },
];

const TaskCard = ({ task, onEditTask, onStartManual }: { task: typeof tasks[0]; onEditTask: () => void; onStartManual: () => void }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'white');
  
  return (
    <Box
      w="full"
      h="300px"
      bg={cardBg}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      p={6}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
        borderColor: task.color,
      }}
      transition="all 0.3s ease"
      cursor="pointer"
      position="relative"
      overflow="hidden"
    >
      {/* Background gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="100px"
        bg={task.bgColor}
        borderRadius="xl xl 0 0"
        opacity={0.5}
      />
      
      <VStack spacing={12} align="flex-start" height="full" position="relative" zIndex={1}>
        {/* Header with Icon and Edit Button */}
        <HStack justify="space-between" w="full">
          <Box
            p={3}
            borderRadius="full"
            color={task.color}
          >
            <Icon as={task.icon} boxSize={5} />
          </Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="More options"
              icon={<MoreVertical size={16} />}
              size="sm"
              variant="ghost"
              color="gray.500"
              _hover={{ color: task.color, bg: 'gray.100' }}
              position="absolute"
              top={2}
              right={1}
            />
            <MenuList minW="80px" maxW="80px">
              <MenuItem onClick={onEditTask}>
                Edit
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        
        {/* Content */}
        <VStack spacing={3} align="flex-start" flex={1}>
          <Heading size="md" color={textColor} lineHeight={1.2}>
            {task.name}
          </Heading>
          
          <Text color="gray.600" lineHeight={1.6} fontSize="sm">
            {task.description}
          </Text>
        </VStack>
        
        {/* Bottom section */}
        <Button
          w="full"
          bg={task.color}
          color="white"
          size="sm"
          minH="32px"
          _hover={{ bg: task.color.replace('500', '600') }}
          borderRadius="lg"
          onClick={onStartManual}
        >
          Start tasks
        </Button>
      </VStack>
    </Box>
  );
};

export default function TaskCards() {
  const [selectedTask, setSelectedTask] = useState<typeof tasks[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExecutionOverlayOpen, setIsExecutionOverlayOpen] = useState(false);
  const sectionBg = useColorModeValue('gray.50', 'gray.900');

  const handleEditTask = (task: typeof tasks[0]) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleStartManual = (task: typeof tasks[0]) => {
    setSelectedTask(task);
    setIsExecutionOverlayOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleCloseExecutionOverlay = () => {
    setIsExecutionOverlayOpen(false);
    setSelectedTask(null);
  };
  
  return (
    <Box bg={sectionBg} p={6}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            Tasks
          </Text>
        </Box>

        {/* Cards Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {tasks.map((task, index) => (
            <TaskCard 
              key={index} 
              task={task} 
              onEditTask={() => handleEditTask(task)}
              onStartManual={() => handleStartManual(task)}
            />
          ))}
        </SimpleGrid>

        {/* Task Modal */}
        {selectedTask && (
          <TaskModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            taskName={selectedTask.name}
            taskColor={selectedTask.color}
          />
        )}

        {/* Task Execution Overlay */}
        {selectedTask && (
          <TaskExecutionOverlay
            isOpen={isExecutionOverlayOpen}
            onClose={handleCloseExecutionOverlay}
            taskName={selectedTask.name}
            taskColor={selectedTask.color}
            taskIcon={selectedTask.icon}
          />
        )}
      </VStack>
    </Box>
  );
}
