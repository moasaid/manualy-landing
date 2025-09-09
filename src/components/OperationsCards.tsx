import { useRef, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  useColorModeValue,
  IconButton,
  Flex,
  Image,
  Button,
} from '@chakra-ui/react';
import { 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const operations = [
  {
    name: 'Kitchen Operations',
    duration: '15-20 min',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop&crop=center',
    color: 'orange.500',
    description: 'Complete food preparation and safety protocols'
  },
  {
    name: 'Housekeeping',
    duration: '25-30 min',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=600&fit=crop&crop=center',
    color: 'blue.500',
    description: 'Room cleaning and maintenance procedures'
  },
  {
    name: 'Guest Services',
    duration: '10-15 min',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop&crop=center',
    color: 'green.500',
    description: 'Customer interaction and service standards'
  },
  {
    name: 'Valet Services',
    duration: '8-12 min',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop&crop=center',
    color: 'teal.500',
    description: 'Vehicle handling and customer assistance'
  },
  {
    name: 'Restaurant Service',
    duration: '20-25 min',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=600&fit=crop&crop=center',
    color: 'red.500',
    description: 'Dining service and table management'
  },
  {
    name: 'Event Planning',
    duration: '30-45 min',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=600&fit=crop&crop=center',
    color: 'pink.500',
    description: 'Event coordination and setup procedures'
  },
  {
    name: 'Quality Control',
    duration: '15-20 min',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'cyan.500',
    description: 'Service quality assessment and reporting'
  },
];

const OperationCard = ({ operation }: { operation: typeof operations[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Box
      minW="280px"
      w="280px"
      h="420px"
      borderRadius="xl"
      position="relative"
      overflow="hidden"
      cursor="pointer"
      transition="all 0.3s ease"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '2xl',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <Image
        src={operation.image}
        alt={operation.name}
        w="full"
        h="full"
        objectFit="cover"
        transition="all 0.3s ease"
        transform={isHovered ? 'scale(1.1)' : 'scale(1)'}
      />
      
      {/* Dark Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-t, blackAlpha.800, blackAlpha.200, transparent)"
      />
      
      {/* Content Overlay */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={6}
        color="white"
      >
        <VStack spacing={4} align="flex-start">
          {/* Duration Badge */}
          <Box
            bg="whiteAlpha.200"
            backdropFilter="blur(10px)"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
            fontWeight="semibold"
            border="1px solid"
            borderColor="whiteAlpha.300"
          >
            {operation.duration}
          </Box>
          
          {/* Title */}
          <Heading size="lg" lineHeight={1.2} mb={2}>
            {operation.name}
          </Heading>
          
          {/* Play Button */}
          <Button
            bg="whiteAlpha.200"
            color="white"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.300"
            borderRadius="full"
            size="sm"
            _hover={{
              bg: "white",
              color: "black",
              transform: "scale(1.05)"
            }}
            transition="all 0.2s ease"
          >
            {operation.name}
          </Button>
        </VStack>
      </Box>
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
    <Box bg={sectionBg} py={12} id="operations">
      <Container maxW="7xl">
        <VStack spacing={8}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Heading
              as="h2"
              size="xl"
              color="gray.800"
              lineHeight={1.2}
              fontFamily="Geist, sans-serif"
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
              <HStack spacing={4} pb={8} pt={2} px={4}>
                {operations.map((operation, index) => (
                  <OperationCard key={index} operation={operation} />
                ))}
              </HStack>
            </Box>
          </Box>

          {/* Scroll Indicator */}
          <Flex justify="center" mt={3}>
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
