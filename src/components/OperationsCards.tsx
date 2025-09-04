import { useRef, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { 
  ChefHat,
  Bed,
  Users,
  Coffee,
  Car,
  Utensils,
  Calendar,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const operations = [
  {
    name: 'Kitchen Operations',
    duration: '15-20 min',
    icon: ChefHat,
    color: 'orange.500',
    description: 'Complete food preparation and safety protocols'
  },
  {
    name: 'Housekeeping',
    duration: '25-30 min',
    icon: Bed,
    color: 'blue.500',
    description: 'Room cleaning and maintenance procedures'
  },
  {
    name: 'Guest Services',
    duration: '10-15 min',
    icon: Users,
    color: 'green.500',
    description: 'Customer interaction and service standards'
  },
  {
    name: 'Bar Operations',
    duration: '12-18 min',
    icon: Coffee,
    color: 'purple.500',
    description: 'Beverage preparation and inventory management'
  },
  {
    name: 'Valet Services',
    duration: '8-12 min',
    icon: Car,
    color: 'teal.500',
    description: 'Vehicle handling and customer assistance'
  },
  {
    name: 'Restaurant Service',
    duration: '20-25 min',
    icon: Utensils,
    color: 'red.500',
    description: 'Dining service and table management'
  },
  {
    name: 'Event Planning',
    duration: '30-45 min',
    icon: Calendar,
    color: 'pink.500',
    description: 'Event coordination and setup procedures'
  },
  {
    name: 'Quality Control',
    duration: '15-20 min',
    icon: ClipboardCheck,
    color: 'cyan.500',
    description: 'Service quality assessment and reporting'
  },
];

const OperationCard = ({ operation }: { operation: typeof operations[0] }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'white');
  const descColor = useColorModeValue('gray.600', 'gray.300');
  
  return (
    <Box
      minW="280px"
      w="280px"
      h="420px" // 2:3 aspect ratio (280px width x 420px height)
      bg={cardBg}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      p={6}
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: operation.color,
      }}
      transition="all 0.4s ease"
      cursor="pointer"
      position="relative"
      overflow="visible"
    >
      {/* Background gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="120px"
        bgGradient={`linear(to-br, ${operation.color.replace('.500', '.100')}, ${operation.color.replace('.500', '.50')})`}
        opacity={0.3}
      />
      
      <VStack spacing={6} align="flex-start" height="full" position="relative" zIndex={1}>
        {/* Icon */}
        <Box
          p={4}
          borderRadius="xl"
          bg={operation.color}
          color="white"
          boxShadow="lg"
        >
          <Icon as={operation.icon} boxSize={8} />
        </Box>
        
        {/* Content */}
        <VStack spacing={4} align="flex-start" flex={1}>
          <Heading size="lg" color={textColor} lineHeight={1.2}>
            {operation.name}
          </Heading>
          
          <Box
            bg={operation.color}
            color="white"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
            fontWeight="semibold"
          >
            {operation.duration}
          </Box>
          
          <Text color={descColor} lineHeight={1.6} fontSize="md">
            {operation.description}
          </Text>
        </VStack>
        
        {/* Bottom accent */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="4px"
          bg={operation.color}
          borderRadius="full"
        />
      </VStack>
    </Box>
  );
};

export default function OperationsCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionBg = useColorModeValue('gray.50', 'gray.900');
  const buttonBg = useColorModeValue('white', 'gray.700');
  const buttonColor = useColorModeValue('gray.600', 'gray.300');
  
  const cardsPerView = 3; // Number of cards visible at once
  const totalDots = Math.ceil(operations.length / cardsPerView);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(totalDots - 1, currentIndex + 1);
      
      setCurrentIndex(newIndex);
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const scrollAmount = index * 300;
      setCurrentIndex(index);
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Update current index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / 300);
        setCurrentIndex(Math.min(newIndex, totalDots - 1));
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [totalDots]);

  return (
    <Box bg={sectionBg} py={20} id="operations">
      <Container maxW="7xl">
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Heading
              as="h2"
              size="xl"
              color="gray.800"
              lineHeight={1.2}
            >
              Hospitality Operations Made Simple
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight={1.6}>
              Streamline your hotel and restaurant operations with our comprehensive 
              procedure templates. Each operation includes detailed steps and estimated completion times.
            </Text>
          </VStack>

          {/* Slider Controls and Cards */}
          <Box position="relative" w="full" overflow="visible">
            {/* Navigation Buttons */}
            <IconButton
              aria-label="Scroll left"
              icon={<ChevronLeft />}
              position="absolute"
              left={-4}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              bg={buttonBg}
              color={buttonColor}
              borderRadius="full"
              boxShadow="lg"
              _hover={{ bg: 'brand.500', color: 'white' }}
              onClick={() => scroll('left')}
              size="lg"
            />
            
            <IconButton
              aria-label="Scroll right"
              icon={<ChevronRight />}
              position="absolute"
              right={-4}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              bg={buttonBg}
              color={buttonColor}
              borderRadius="full"
              boxShadow="lg"
              _hover={{ bg: 'brand.500', color: 'white' }}
              onClick={() => scroll('right')}
              size="lg"
            />

            {/* Scrollable Cards Container */}
            <Box
              ref={scrollRef}
              overflowX="auto"
              overflowY="visible"
              css={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
              }}
            >
              <HStack spacing={6} pb={16} pt={4} px={8}>
                {operations.map((operation, index) => (
                  <OperationCard key={index} operation={operation} />
                ))}
              </HStack>
            </Box>
          </Box>

          {/* Scroll Indicator */}
          <Flex justify="center" mt={6}>
            <HStack spacing={2}>
              {Array.from({ length: totalDots }).map((_, index) => (
                <Box
                  key={index}
                  w={3}
                  h={3}
                  borderRadius="full"
                  bg={index === currentIndex ? 'brand.500' : 'gray.300'}
                  transition="all 0.3s"
                  cursor="pointer"
                  _hover={{ bg: index === currentIndex ? 'brand.600' : 'gray.400' }}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </HStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
