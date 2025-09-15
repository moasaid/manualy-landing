import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  useColorModeValue,
  Button,
  Divider,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  { name: 'Home', icon: Home, path: '/app/home' },
  { name: 'Agent', icon: User, path: '/app/agent' },
  { name: 'Manuals', icon: BookOpen, path: '/app/manuals' },
  { name: 'Tasks', icon: CheckSquare, path: '/app/tasks' },
  { name: 'Schedule', icon: Calendar, path: '/app/schedule' },
];

const MenuItem = ({ item, isMobile = false }: { item: typeof menuItems[0], isMobile?: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === item.path;
  
  const activeBg = useColorModeValue('purple.50', 'brand.900');
  const activeColor = useColorModeValue('brand.600', 'brand.300');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  if (isMobile) {
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        flex={1}
        py={2}
        px={1}
        color={isActive ? activeColor : textColor}
        cursor="pointer"
        transition="all 0.2s"
        onClick={() => navigate(item.path)}
        _hover={{ color: activeColor }}
      >
        <Icon as={item.icon} boxSize={5} mb={1} />
        <Text fontSize="xs" fontWeight={isActive ? 'semibold' : 'medium'} textAlign="center">
          {item.name}
        </Text>
      </Flex>
    );
  }

  return (
    <Box
      w="full"
      px={3}
      py={2}
      borderRadius="md"
      bg={isActive ? activeBg : 'transparent'}
      color={isActive ? activeColor : textColor}
      _hover={{ bg: isActive ? activeBg : hoverBg }}
      cursor="pointer"
      transition="all 0.2s"
      onClick={() => navigate(item.path)}
    >
      <HStack spacing={3}>
        <Icon as={item.icon} boxSize={5} />
        <Text fontSize="sm" fontWeight={isActive ? 'semibold' : 'medium'}>
          {item.name}
        </Text>
      </HStack>
    </Box>
  );
};

export default function Sidebar() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', '#2d3748');
  const textColor = useColorModeValue('gray.800', 'white');
  
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Mobile Bottom Navigation
  if (isMobile) {
    return (
      <Box
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bg={bgColor}
        borderTop="1px solid"
        borderColor={borderColor}
        zIndex={20}
        px={2}
        py={2}
        boxShadow="0 -2px 10px rgba(0,0,0,0.1)"
      >
        <HStack spacing={0} justify="space-around">
          {menuItems.slice(0, 5).map((item, index) => (
            <MenuItem key={index} item={item} isMobile={true} />
          ))}
        </HStack>
      </Box>
    );
  }

  // Desktop Sidebar
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
                height: '31px', 
                width: 'auto',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/')}
            />
          </HStack>
        </Box>

        {/* Navigation Menu */}
        <VStack spacing={1} p={4} flex={1}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
          
          <Divider my={4} />
          
          <MenuItem item={{ name: 'Members', icon: Users, path: '/app/members' }} />
        </VStack>

        {/* Bottom Section */}
        <Box p={4} borderTop="1px solid" borderColor={borderColor}>
          <VStack spacing={3}>
            <MenuItem item={{ name: 'Settings', icon: Settings, path: '/app/settings' }} />
            
            <Button
              w="full"
              bg="brand.500"
              color="white"
              size="sm"
              rightIcon={<ChevronDown size={16} />}
              _hover={{ bg: 'brand.600' }}
            >
              [Account Name]
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
