import {
  Box,
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
    <Box minH="100vh" bg={bgColor}>
      {/* Sidebar */}
      <Sidebar onNavigateToLanding={onNavigateToLanding} />
      
      {/* Top Bar */}
      <TopBar />
      
      {/* Main Content */}
      <Box
        ml="200px"
        mt="16"
        minH="calc(100vh - 4rem)"
      >
        <Outlet />
      </Box>
    </Box>
  );
}