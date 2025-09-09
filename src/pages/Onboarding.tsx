import { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Select,
  FormControl,
  FormLabel,
  useColorModeValue,
  Progress,
  Heading,
  SimpleGrid,
  IconButton,
  Badge,
} from '@chakra-ui/react';
import { ArrowLeft, ArrowRight, Plus, X, Users, Building, User } from 'lucide-react';

interface OnboardingProps {
  onComplete?: () => void;
}

const businessTypes = [
  'Hotel', 'Restaurant', 'Resort', 'Cafe', 'Bar', 'Catering', 'Event Venue', 'Other'
];

const businessSizes = [
  '1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '500+ employees'
];

const hearAboutOptions = [
  'Google Search', 'Social Media', 'Friend/Colleague', 'Industry Event', 'Advertisement', 'Other'
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    hearAbout: '',
    hearAboutOther: '',
    
    // Business Info
    businessName: '',
    businessLocation: '',
    businessType: '',
    businessTypeOther: '',
    businessSize: '',
    businessUnit: '',
    
    // Team Invites
    teamInvites: [{ email: '', role: '' }]
  });

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const inputBg = useColorModeValue('white', 'gray.700');

  const steps = [
    { title: 'Personal Info' },
    { title: 'Business Info' },
    { title: 'Invite Team' }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTeamInviteChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      teamInvites: prev.teamInvites.map((invite, i) => 
        i === index ? { ...invite, [field]: value } : invite
      )
    }));
  };

  const addTeamInvite = () => {
    setFormData(prev => ({
      ...prev,
      teamInvites: [...prev.teamInvites, { email: '', role: '' }]
    }));
  };

  const removeTeamInvite = (index: number) => {
    setFormData(prev => ({
      ...prev,
      teamInvites: prev.teamInvites.filter((_, i) => i !== index)
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      console.log('Onboarding completed:', formData);
      onComplete?.();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.firstName && formData.lastName && formData.hearAbout;
      case 1:
        return formData.businessName && formData.businessLocation && 
               formData.businessType && formData.businessSize && formData.businessUnit;
      case 2:
        return true; // Team invites are optional
      default:
        return false;
    }
  };

  const renderPersonalInfo = () => (
    <VStack spacing={6} align="stretch">
      <VStack spacing={4} >
        <VStack spacing={2}>
          <Heading size="lg" color={textColor}>
            Tell us about yourself
          </Heading>
          <Text color="gray.500">
            Let's start with some basic information about you
          </Text>
        </VStack>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <FormControl isRequired>
          <FormLabel color={textColor}>First Name</FormLabel>
          <Input
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="Enter your first name"
            bg={inputBg}
            borderRadius="lg"
            py={6}
            _hover={{ borderColor: "brand.500" }}
            _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
          />
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel color={textColor}>Last Name</FormLabel>
          <Input
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            placeholder="Enter your last name"
            bg={inputBg}
            borderRadius="lg"
            py={6}
            _hover={{ borderColor: "brand.500" }}
            _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
          />
        </FormControl>
      </SimpleGrid>

      <FormControl isRequired>
        <FormLabel color={textColor}>How did you hear about us?</FormLabel>
        <Select
          value={formData.hearAbout}
          onChange={(e) => handleInputChange('hearAbout', e.target.value)}
          placeholder="Select an option"
          bg={inputBg}
          borderRadius="lg"
          py={2}
          _hover={{ borderColor: "brand.500" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
        >
          {hearAboutOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </Select>
      </FormControl>

      {formData.hearAbout === 'Other' && (
        <FormControl>
          <FormLabel color={textColor}>Please specify</FormLabel>
          <Input
            value={formData.hearAboutOther}
            onChange={(e) => handleInputChange('hearAboutOther', e.target.value)}
            placeholder="Tell us how you heard about us"
            bg={inputBg}
            borderRadius="lg"
            py={6}
            _hover={{ borderColor: "brand.500" }}
            _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
          />
        </FormControl>
      )}
    </VStack>
  );

  const renderBusinessInfo = () => (
    <VStack spacing={6} align="stretch">
      <VStack spacing={4} textAlign="center">
        <Box
          p={4}
          borderRadius="2xl"
          bg="brand.500"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Building size={32} />
        </Box>
        <VStack spacing={2}>
          <Heading size="lg" color={textColor}>
            About your business
          </Heading>
          <Text color="gray.500">
            Help us understand your business better
          </Text>
        </VStack>
      </VStack>

      <FormControl isRequired>
        <FormLabel color={textColor}>Business Name</FormLabel>
        <Input
          value={formData.businessName}
          onChange={(e) => handleInputChange('businessName', e.target.value)}
          placeholder="Enter your business name"
          bg={inputBg}
          borderRadius="lg"
          py={6}
          _hover={{ borderColor: "brand.500" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel color={textColor}>Business Location</FormLabel>
        <Input
          value={formData.businessLocation}
          onChange={(e) => handleInputChange('businessLocation', e.target.value)}
          placeholder="City, State/Country"
          bg={inputBg}
          borderRadius="lg"
          py={6}
          _hover={{ borderColor: "brand.500" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
        />
      </FormControl>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <FormControl isRequired>
          <FormLabel color={textColor}>Business Type</FormLabel>
          <Select
            value={formData.businessType}
            onChange={(e) => handleInputChange('businessType', e.target.value)}
            placeholder="Select business type"
            bg={inputBg}
            borderRadius="lg"
            py={2}
            _hover={{ borderColor: "brand.500" }}
            _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
          >
            {businessTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel color={textColor}>Business Size</FormLabel>
          <Select
            value={formData.businessSize}
            onChange={(e) => handleInputChange('businessSize', e.target.value)}
            placeholder="Select business size"
            bg={inputBg}
            borderRadius="lg"
            py={2}
            _hover={{ borderColor: "brand.500" }}
            _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
          >
            {businessSizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </Select>
        </FormControl>
      </SimpleGrid>

      {formData.businessType === 'Other' && (
        <FormControl>
          <FormLabel color={textColor}>Please specify business type</FormLabel>
          <Input
            value={formData.businessTypeOther}
            onChange={(e) => handleInputChange('businessTypeOther', e.target.value)}
            placeholder="Describe your business type"
            bg={inputBg}
            borderRadius="lg"
            py={6}
            _hover={{ borderColor: "brand.500" }}
            _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
          />
        </FormControl>
      )}

      <FormControl isRequired>
        <FormLabel color={textColor}>Business Unit/Department</FormLabel>
        <Input
          value={formData.businessUnit}
          onChange={(e) => handleInputChange('businessUnit', e.target.value)}
          placeholder="e.g., Operations, Management, Front Desk"
          bg={inputBg}
          borderRadius="lg"
          py={6}
          _hover={{ borderColor: "brand.500" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
        />
      </FormControl>
    </VStack>
  );

  const renderTeamInvites = () => (
    <VStack spacing={6} align="stretch">
      <VStack spacing={4} textAlign="center">
        <Box
          p={4}
          borderRadius="2xl"
          bg="brand.500"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Users size={32} />
        </Box>
        <VStack spacing={2}>
          <Heading size="lg" color={textColor}>
            Invite your team
          </Heading>
          <Text color="gray.500">
            Collaborate better by inviting your team members (optional)
          </Text>
        </VStack>
      </VStack>

      <VStack spacing={4} align="stretch">
        {formData.teamInvites.map((invite, index) => (
          <Box key={index} p={4} bg={cardBg} borderRadius="lg" border="1px" borderColor="gray.200">
            <HStack spacing={4} align="end">
              <FormControl flex={2}>
                <FormLabel color={textColor} fontSize="sm">Email Address</FormLabel>
                <Input
                  type="email"
                  value={invite.email}
                  onChange={(e) => handleTeamInviteChange(index, 'email', e.target.value)}
                  placeholder="colleague@company.com"
                  bg={inputBg}
                  borderRadius="lg"
                  _hover={{ borderColor: "brand.500" }}
                  _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
                />
              </FormControl>
              
              <FormControl flex={1}>
                <FormLabel color={textColor} fontSize="sm">Role</FormLabel>
                <Input
                  value={invite.role}
                  onChange={(e) => handleTeamInviteChange(index, 'role', e.target.value)}
                  placeholder="Manager, Staff, etc."
                  bg={inputBg}
                  borderRadius="lg"
                  _hover={{ borderColor: "brand.500" }}
                  _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
                />
              </FormControl>
              
              {formData.teamInvites.length > 1 && (
                <IconButton
                  aria-label="Remove invite"
                  icon={<X size={16} />}
                  size="sm"
                  variant="ghost"
                  color="red.500"
                  onClick={() => removeTeamInvite(index)}
                />
              )}
            </HStack>
          </Box>
        ))}
        
        <Button
          leftIcon={<Plus size={16} />}
          variant="outline"
          onClick={addTeamInvite}
          borderRadius="lg"
          py={6}
        >
          Add another team member
        </Button>
      </VStack>
    </VStack>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderPersonalInfo();
      case 1:
        return renderBusinessInfo();
      case 2:
        return renderTeamInvites();
      default:
        return null;
    }
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Top Progress Bar - Full Width */}
      <Box bg="brand.500" borderBottom="1px" borderColor="gray.200">
        <Box mx="auto">
          <VStack spacing={4}>
            <Progress 
              value={progress} 
              colorScheme="brand" 
              size="sm" 
              borderRadius="full" 
              w="full" 
              bg="gray.100"
            />
            
          </VStack>
        </Box>
      </Box>

      {/* Main Content */}
      <Box py={8}>
        <Box maxW="600px" mx="auto" px={4}>
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <VStack spacing={4}>
              <img 
                src="/logo.png" 
                alt="Manualy Logo" 
                style={{ height: '48px', width: 'auto' }}
              />
              <VStack spacing={2} textAlign="center">
                <Text color="gray.500">
                  Let's get you set up in just a few steps
                </Text>
              </VStack>
            </VStack>

            <HStack spacing={6} justify="center" flexWrap="wrap">
              {steps.map((step, index) => (
                <Box
                  key={index}
                  bg={index <= currentStep ? "brand.50" : "gray.50"}
                  border="2px"
                  borderColor={index <= currentStep ? "brand.500" : "gray.200"}
                  borderRadius="xl"
                  p={3}
                  minW="120px"
                  transition="all 0.2s"
                >
                  <VStack spacing={2}>
                    
                    <Text 
                      fontSize="xs" 
                      fontWeight="medium"
                      color={index <= currentStep ? "brand.700" : "gray.500"}
                      textAlign="center"
                    >
                      {step.title}
                    </Text>
                    {index === currentStep && (
                      <Badge colorScheme="purple" size="sm" fontSize="xs">
                        Current
                      </Badge>
                    )}
                  </VStack>
                </Box>
              ))}
            </HStack>

            {/* Content */}
            <Box bg={cardBg} p={8} borderRadius="2xl" shadow="sm">
              {renderCurrentStep()}
            </Box>

            {/* Navigation */}
            <HStack justify="space-between">
              <Button
                leftIcon={<ArrowLeft size={16} />}
                variant="outline"
                onClick={handlePrevious}
                isDisabled={currentStep === 0}
                borderRadius="lg"
                py={6}
                px={8}
              >
                Previous
              </Button>
              
              <Button
                rightIcon={<ArrowRight size={16} />}
                bg="brand.500"
                color="white"
                onClick={handleNext}
                isDisabled={!canProceed()}
                _hover={{ bg: "brand.600" }}
                borderRadius="lg"
                py={6}
                px={8}
              >
                {currentStep === steps.length - 1 ? 'Complete Setup' : 'Next'}
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
