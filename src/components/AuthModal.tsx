import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Checkbox,
  Link,
  useColorModeValue,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignInSuccess?: () => void;
}

export default function AuthModal({ isOpen, onClose, onSignInSuccess }: AuthModalProps) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const inputBg = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle authentication logic here
    onClose();
    if (isSignIn && onSignInSuccess) {
      onSignInSuccess();
    }
  };


  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent bg={bgColor} maxW="480px" mx={4} borderRadius="2xl">
        <ModalCloseButton color={textColor} />
        
        <ModalBody p={8}>
          <VStack spacing={6} align="stretch">
            {/* Header */}
            <VStack spacing={4} textAlign="center">
              <Box
                p={2}
                borderRadius="2xl"
          
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <img 
                  src="/logo.png" 
                  alt="HospitalityAI Logo" 
                  style={{ height: '32px', width: 'auto' }}
                />
              </Box>
              <VStack spacing={2}>
                <Text color="gray.500" fontSize="md">
                  Sign in to your account or create a new one to get started
                </Text>
              </VStack>
            </VStack>

            {/* Toggle Buttons */}
            <HStack spacing={0} bg={inputBg} borderRadius="xl" p={1}>
              <Button
                flex={1}
                variant={isSignIn ? "solid" : "ghost"}
                bg={isSignIn ? "white" : "transparent"}
                color={isSignIn ? "black" : "gray.600"}
                borderRadius="lg"
                fontWeight="semibold"
                onClick={() => setIsSignIn(true)}
                _hover={{
                  bg: isSignIn ? "white" : "gray.100"
                }}
                shadow={isSignIn ? "sm" : "none"}
              >
                Sign In
              </Button>
              <Button
                flex={1}
                variant={!isSignIn ? "solid" : "ghost"}
                bg={!isSignIn ? "white" : "transparent"}
                color={!isSignIn ? "black" : "gray.600"}
                borderRadius="lg"
                fontWeight="semibold"
                onClick={() => setIsSignIn(false)}
                _hover={{
                  bg: !isSignIn ? "white" : "gray.100"
                }}
                shadow={!isSignIn ? "sm" : "none"}
              >
                Sign Up
              </Button>
            </HStack>

            {/* Form */}
            <VStack spacing={4} align="stretch">
              {/* Email */}
              <VStack spacing={2} align="stretch">
                <Text fontWeight="semibold" color={textColor}>
                  Email Address
                </Text>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Mail size={20} color="#9CA3AF" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="mo@mosaid.me"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    bg={inputBg}
                    border="none"
                    borderRadius="xl"
                    py={6}
                    pl={12}
                    fontSize="md"
                    _focus={{
                      ring: 2,
                      ringColor: "purple.500",
                      borderColor: "transparent"
                    }}
                  />
                </InputGroup>
              </VStack>

              {/* Password */}
              <VStack spacing={2} align="stretch">
                <Text fontWeight="semibold" color={textColor}>
                  Password
                </Text>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Lock size={20} color="#9CA3AF" />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    bg={inputBg}
                    border="none"
                    borderRadius="xl"
                    py={6}
                    pl={12}
                    pr={12}
                    fontSize="md"
                    _focus={{
                      ring: 2,
                      ringColor: "purple.500",
                      borderColor: "transparent"
                    }}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      icon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      variant="ghost"
                      size="sm"
                      color="gray.500"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </InputRightElement>
                </InputGroup>
              </VStack>

              {/* Confirm Password for Sign Up */}
              {!isSignIn && (
                <VStack spacing={2} align="stretch">
                  <Text fontWeight="semibold" color={textColor}>
                    Confirm Password
                  </Text>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Lock size={20} color="#9CA3AF" />
                    </InputLeftElement>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      bg={inputBg}
                      border="none"
                      borderRadius="xl"
                      py={6}
                      pl={12}
                      pr={12}
                      fontSize="md"
                      _focus={{
                        ring: 2,
                        ringColor: "purple.500",
                        borderColor: "transparent"
                      }}
                    />
                  </InputGroup>
                </VStack>
              )}

              {/* Remember Me & Forgot Password */}
              {isSignIn && (
                <HStack justify="space-between">
                  <Checkbox
                    isChecked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                    colorScheme="purple"
                  >
                    <Text fontSize="sm" color="gray.600">
                      Remember me
                    </Text>
                  </Checkbox>
                  <Link color="oklch(0.59 0.21 278.01)" fontSize="sm" fontWeight="medium">
                    Forgot password?
                  </Link>
                </HStack>
              )}

              {/* Submit Button */}
              <Button
       
                size="lg"
                borderRadius="xl"
                py={6}
                fontSize="md"
                fontWeight="semibold"
                rightIcon={<ArrowRight size={20} />}
                onClick={handleSubmit}
            
              >
                {isSignIn ? 'Sign In' : 'Create Account'}
              </Button>
            </VStack>

            {/* Divider */}
            <HStack>
              <Divider />
              <Text fontSize="sm" color="gray.500" px={3}>
                or
              </Text>
              <Divider />
            </HStack>

            {/* Social Login */}
            <VStack spacing={3}>
              <Button
                variant="outline"
                size="lg"
                borderRadius="xl"
                py={6}
                w="full"
                borderColor={borderColor}
                _hover={{
                  bg: inputBg
                }}
              >
                <HStack spacing={3}>
                  <Box w={5} h={5}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </Box>
                  <Text fontWeight="medium">
                    Continue with Google
                  </Text>
                </HStack>
              </Button>
            </VStack>

            {/* Terms */}
            {!isSignIn && (
              <Text fontSize="xs" color="gray.500" textAlign="center" lineHeight={1.5}>
                By creating an account, you agree to our{' '}
                <Link color="purple.500" fontWeight="medium">Terms of Service</Link>
                {' '}and{' '}
                <Link color="purple.500" fontWeight="medium">Privacy Policy</Link>
              </Text>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
