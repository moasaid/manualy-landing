import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Switch,
  Card,
  CardBody,
  Heading,
  useColorModeValue,
  useColorMode,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { Moon, Sun, Settings as SettingsIcon } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

export default function Settings() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', '#2d3748');

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Top Bar */}
      <TopBar />
      
      {/* Main Content */}
      <Box
        ml={{ base: 0, md: "200px" }}
        mt={{ base: "16", md: "16" }}
        pb={{ base: "80px", md: 0 }}
        p={6}
        minH="calc(100vh - 4rem)"
      >
        <Container maxW="4xl">
          <VStack spacing={8} align="stretch">
            {/* Page Header */}
            <Box>
              <HStack spacing={3} mb={2}>
                <Icon as={SettingsIcon} boxSize={6} color="brand.500" />
                <Heading size="lg" color={textColor}>
                  Settings
                </Heading>
              </HStack>
              <Text color={subtextColor}>
                Manage your account preferences and application settings.
              </Text>
            </Box>

            <Divider borderColor={borderColor} />

            {/* Appearance Settings */}
            <Card 
              bg={cardBg} 
              border="1px solid"
              borderColor={borderColor}
              shadow="sm"
            >
              <CardBody p={6}>
                <VStack spacing={6} align="stretch">
                  <Box>
                    <Heading size="md" color={textColor} mb={2}>
                      Appearance
                    </Heading>
                    <Text fontSize="sm" color={subtextColor}>
                      Customize how the application looks and feels.
                    </Text>
                  </Box>

                  {/* Dark Mode Toggle */}
                  <HStack justify="space-between" align="center" py={3}>
                    <HStack spacing={3}>
                      <Icon 
                        as={colorMode === 'light' ? Moon : Sun} 
                        boxSize={5} 
                        color={colorMode === 'light' ? 'gray.600' : 'yellow.400'} 
                      />
                      <VStack spacing={0} align="flex-start">
                        <Text fontWeight="medium" color={textColor}>
                          {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
                        </Text>
                        <Text fontSize="sm" color={subtextColor}>
                          {colorMode === 'light' 
                            ? 'Switch to dark theme for better viewing in low light' 
                            : 'Switch to light theme for better viewing in bright environments'
                          }
                        </Text>
                      </VStack>
                    </HStack>
                    <Switch
                      size="lg"
                      colorScheme="brand"
                      isChecked={colorMode === 'dark'}
                      onChange={toggleColorMode}
                    />
                  </HStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Additional Settings Sections */}
            <Card 
              bg={cardBg} 
              border="1px solid"
              borderColor={borderColor}
              shadow="sm"
            >
              <CardBody p={6}>
                <VStack spacing={6} align="stretch">
                  <Box>
                    <Heading size="md" color={textColor} mb={2}>
                      Notifications
                    </Heading>
                    <Text fontSize="sm" color={subtextColor}>
                      Configure how you receive notifications.
                    </Text>
                  </Box>

                  <HStack justify="space-between" align="center" py={3}>
                    <VStack spacing={0} align="flex-start">
                      <Text fontWeight="medium" color={textColor}>
                        Email Notifications
                      </Text>
                      <Text fontSize="sm" color={subtextColor}>
                        Receive updates about tasks and assignments via email
                      </Text>
                    </VStack>
                    <Switch
                      size="lg"
                      colorScheme="brand"
                      defaultChecked
                    />
                  </HStack>

                  <HStack justify="space-between" align="center" py={3}>
                    <VStack spacing={0} align="flex-start">
                      <Text fontWeight="medium" color={textColor}>
                        Push Notifications
                      </Text>
                      <Text fontSize="sm" color={subtextColor}>
                        Get notified about important updates in real-time
                      </Text>
                    </VStack>
                    <Switch
                      size="lg"
                      colorScheme="brand"
                      defaultChecked
                    />
                  </HStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Account Settings */}
            <Card 
              bg={cardBg} 
              border="1px solid"
              borderColor={borderColor}
              shadow="sm"
            >
              <CardBody p={6}>
                <VStack spacing={6} align="stretch">
                  <Box>
                    <Heading size="md" color={textColor} mb={2}>
                      Account
                    </Heading>
                    <Text fontSize="sm" color={subtextColor}>
                      Manage your account settings and preferences.
                    </Text>
                  </Box>

                  <HStack justify="space-between" align="center" py={3}>
                    <VStack spacing={0} align="flex-start">
                      <Text fontWeight="medium" color={textColor}>
                        Auto-save Progress
                      </Text>
                      <Text fontSize="sm" color={subtextColor}>
                        Automatically save your work as you make changes
                      </Text>
                    </VStack>
                    <Switch
                      size="lg"
                      colorScheme="brand"
                      defaultChecked
                    />
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
