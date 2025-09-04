import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  useColorModeValue,
  Button,
  Divider,
} from '@chakra-ui/react';
import {
  Home,
  User,
  BookOpen,
  CheckSquare,
  Calendar,
  Users,
  Settings,
  ChevronDown,
} from 'lucide-react';

const menuItems = [
  { name: 'Home', icon: Home, active: false },
  { name: 'Agent', icon: User, active: false },
  { name: 'Manuals', icon: BookOpen, active: false },
  { name: 'Tasks', icon: CheckSquare, active: true },
  { name: 'Schedule', icon: Calendar, active: false },
];

const MenuItem = ({ item }: { item: typeof menuItems[0] }) => {
  const activeBg = useColorModeValue('purple.50', 'purple.900');
  const activeColor = useColorModeValue('purple.600', 'purple.300');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box
      w="full"
      px={3}
      py={2}
      borderRadius="md"
      bg={item.active ? activeBg : 'transparent'}
      color={item.active ? activeColor : textColor}
      _hover={{ bg: item.active ? activeBg : hoverBg }}
      cursor="pointer"
      transition="all 0.2s"
    >
      <HStack spacing={3}>
        <Icon as={item.icon} boxSize={5} />
        <Text fontSize="sm" fontWeight={item.active ? 'semibold' : 'medium'}>
          {item.name}
        </Text>
      </HStack>
    </Box>
  );
};

interface SidebarProps {
  onNavigateToLanding?: () => void;
}

export default function Sidebar({ onNavigateToLanding }: SidebarProps) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box
      w="200px"
      h="100vh"
      bg={bgColor}
      borderRight="1px solid"
      borderColor={borderColor}
      position="fixed"
      left={0}
      top={0}
      zIndex={10}
    >
      <VStack spacing={0} align="stretch" h="full">
        {/* Logo/Brand */}
        <Box p={4} borderBottom="1px solid" borderColor={borderColor}>
          <HStack spacing={2} justify="center">
            <img 
              src="/logo.svg" 
              alt="Manualy Logo" 
              style={{ 
                height: '24px', 
                width: 'auto',
                cursor: 'pointer'
              }}
              onClick={onNavigateToLanding}
            />
          </HStack>
        </Box>

        {/* Navigation Menu */}
        <VStack spacing={1} p={4} flex={1}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
          
          <Divider my={4} />
          
          <MenuItem item={{ name: 'Members', icon: Users, active: false }} />
        </VStack>

        {/* Bottom Section */}
        <Box p={4} borderTop="1px solid" borderColor={borderColor}>
          <VStack spacing={3}>
            <MenuItem item={{ name: 'Settings', icon: Settings, active: false }} />
            
            <Button
              w="full"
              bg="purple.500"
              color="white"
              size="sm"
              rightIcon={<ChevronDown size={16} />}
              _hover={{ bg: 'purple.600' }}
            >
              [Account Name]
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
