import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import TaskCards from './TaskCards';

export default function InApp() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Top Bar */}
      <TopBar />
      
      {/* Main Content */}
      <Box
        ml="200px"
        mt="16"
        minH="calc(100vh - 4rem)"
      >
        <TaskCards />
      </Box>
    </Box>
  );
}
