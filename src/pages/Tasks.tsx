import {
  Box,
  Container,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

interface TasksProps {
  onNavigateToLanding?: () => void;
}

export default function Tasks({ onNavigateToLanding }: TasksProps) {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Top Bar - always show, responsive positioning */}
      <TopBar />
      
      {/* Main Content */}
      <Box
        ml={{ base: 0, md: "200px" }}
        mt={{ base: "16", md: "16" }}
        pb={{ base: "80px", md: 0 }}
        p={6}
        minH="calc(100vh - 4rem)"
      >
        <Container maxW="8xl">
          <VStack spacing={8} align="stretch">
            {/* Page Header */}
            <Box>
            </Box>
            <Outlet />
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}