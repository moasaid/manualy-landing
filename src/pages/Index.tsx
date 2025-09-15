import { Box, useColorModeValue } from '@chakra-ui/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import OperationsCards from '../components/OperationsCards';
import ValueProposition from '../components/ValueProposition';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

interface IndexProps {
  onNavigateToApp?: () => void;
  onNavigateToOnboarding?: () => void;
}

export default function Index({ onNavigateToApp, onNavigateToOnboarding }: IndexProps) {
  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.900', 'white');
  
  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Header onNavigateToApp={onNavigateToApp} onNavigateToOnboarding={onNavigateToOnboarding} />
      <Hero onNavigateToApp={onNavigateToApp} />
      <Features />
      <OperationsCards />
      <ValueProposition />
      <FAQ />
      <Footer onNavigateToApp={onNavigateToApp} />
    </Box>
  );
}
