import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Search,
  Bell,
  Calendar,
  User,
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
          <IconButton
            aria-label="Profile"
            icon={<User size={20} />}
            variant="ghost"
            size="md"
            color="gray.600"
            _hover={{ bg: 'gray.100' }}
          />
        </HStack>
      </HStack>
    </Box>
  );
}
