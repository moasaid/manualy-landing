import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Search,
  Bell,
  Calendar,
  Settings,
  LogOut,
  User,
  ChevronDown,
} from 'lucide-react';

export default function TopBar() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const inputBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Box
      w="full"
      h="16"
      bg={bgColor}
      borderBottom="1px solid"
      borderColor={borderColor}
      px={6}
      display="flex"
      alignItems="center"
      position="fixed"
      top={0}
      left="200px"
      right={0}
      zIndex={5}
    >
      <HStack spacing={4} w="full" justify="space-between">
        {/* Search Bar */}
        <InputGroup maxW="400px">
          <InputLeftElement pointerEvents="none">
            <Search size={18} color="gray" />
          </InputLeftElement>
          <Input
            placeholder="Search"
            bg={inputBg}
            border="1px solid"
            borderColor={borderColor}
            _focus={{
              borderColor: 'blue.500',
              boxShadow: '0 0 0 1px blue.500',
            }}
          />
        </InputGroup>

        {/* Right Side Icons */}
        <HStack spacing={2}>
          <IconButton
            aria-label="Notifications"
            icon={<Bell size={20} />}
            variant="ghost"
            size="md"
            color="gray.600"
            _hover={{ bg: 'gray.100' }}
          />
          <IconButton
            aria-label="Calendar"
            icon={<Calendar size={20} />}
            variant="ghost"
            size="md"
            color="gray.600"
            _hover={{ bg: 'gray.100' }}
          />
          <Menu>
            <MenuButton
              as={Box}
              cursor="pointer"
              p={1}
              borderRadius="md"
              _hover={{
                bg: 'gray.50',
              }}
              transition="all 0.2s"
            >
              <HStack spacing={3} align="center">
                <Avatar
                  size="sm"
                  name="John Doe"
                  bg="blue.500"
                  color="white"
                />
                <VStack spacing={0} align="flex-start" display={{ base: 'none', md: 'flex' }}>
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    John Doe
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Admin
                  </Text>
                </VStack>
                <ChevronDown size={14} color="gray" />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<User size={16} />}>
                Profile
              </MenuItem>
              <MenuItem icon={<Settings size={16} />}>
                Settings
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<LogOut size={16} />} color="red.500">
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
}
