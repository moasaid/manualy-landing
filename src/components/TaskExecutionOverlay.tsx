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
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
  IconButton,
  FormControl,
  FormLabel,
  Textarea,
  Box,
  Progress,
} from '@chakra-ui/react';
import { ArrowLeft, Check } from 'lucide-react';

interface TaskExecutionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  taskName: string;
  taskColor: string;
  taskIcon: React.ComponentType;
}

const sampleQuestions = [
  {
    id: 1,
    question: "Have you gathered all necessary cleaning supplies?",
    type: "checkbox",
    required: true
  },
  {
    id: 2,
    question: "What is the current condition of the area?",
    type: "radio",
    options: ["Excellent", "Good", "Fair", "Poor"],
    required: true
  },
  {
    id: 3,
    question: "Are there any safety hazards present?",
    type: "checkbox",
    required: true
  },
  {
    id: 4,
    question: "Additional notes or observations:",
    type: "textarea",
    required: false
  },
  {
    id: 5,
    question: "Time started (HH:MM):",
    type: "time",
    required: true
  }
];

export default function TaskExecutionOverlay({ 
  isOpen, 
  onClose, 
  taskName, 
  taskColor,
  taskIcon: TaskIcon 
}: TaskExecutionOverlayProps) {
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [currentStep, setCurrentStep] = useState(0);
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const inputBg = useColorModeValue('gray.50', 'gray.700');
  
  const progress = ((currentStep + 1) / sampleQuestions.length) * 100;

  const handleAnswerChange = (questionId: number, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < sampleQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleCompleteTask = () => {
    console.log('Task completed with answers:', answers);
    onClose();
  };

  const currentQuestion = sampleQuestions[currentStep];
  const isLastStep = currentStep === sampleQuestions.length - 1;
  const canProceed = !currentQuestion.required || answers[currentQuestion.id];

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'checkbox':
        return (
          <Checkbox
            isChecked={answers[currentQuestion.id] || false}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.checked)}
            colorScheme="purple"
            size="lg"
          >
            Yes
          </Checkbox>
        );
      
      case 'radio':
        return (
          <RadioGroup
            value={answers[currentQuestion.id] || ''}
            onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
          >
            <Stack spacing={3}>
              {currentQuestion.options?.map((option, index) => (
                <Radio key={index} value={option} colorScheme="purple">
                  {option}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        );
      
      case 'textarea':
        return (
          <Textarea
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
            placeholder="Enter your notes here..."
            bg={inputBg}
            rows={4}
          />
        );
      
      case 'time':
        return (
          <Input
            type="time"
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
            bg={inputBg}
            width="200px"
          />
        );
      
      default:
        return (
          <Input
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
            bg={inputBg}
          />
        );
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent bg={bgColor} maxW="600px" mx={4} maxH="90vh" borderRadius="0.75rem">
        {/* Header with Cover Image */}
        <Box position="relative">
          <Box
            height="200px"
            bgGradient={`linear(to-br, ${taskColor.replace('.500', '.400')}, ${taskColor.replace('.500', '.600')})`}
            borderRadius="0.75rem 0.75rem 0 0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <VStack spacing={3} color="white">
              <Box
                p={4}
                borderRadius="full"
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
              >
                <TaskIcon />
              </Box>
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                {taskName}
              </Text>
            </VStack>
            
            <IconButton
              aria-label="Back"
              icon={<ArrowLeft size={20} />}
              position="absolute"
              top={4}
              left={4}
              variant="ghost"
              color="white"
              size="sm"
              onClick={onClose}
            />
            <ModalCloseButton color="white" />
          </Box>
          
          {/* Progress Bar */}
          <Progress 
            value={progress} 
            colorScheme="purple" 
            size="sm" 
            bg="gray.200"
          />
        </Box>

        <ModalBody p={6}>
          <VStack spacing={6} align="stretch">
            {/* Step Counter */}
            <HStack justify="space-between">
              <Text fontSize="sm" color="gray.500">
                Step {currentStep + 1} of {sampleQuestions.length}
              </Text>
              
            </HStack>

            {/* Question */}
            <FormControl>
              <FormLabel color={textColor} fontSize="lg" fontWeight="semibold" mb={4}>
                {currentQuestion.question}
                {currentQuestion.required && (
                  <Text as="span" color="red.500" ml={1}>*</Text>
                )}
              </FormLabel>
              {renderQuestion()}
            </FormControl>

            {/* Navigation Buttons */}
            <HStack spacing={4} justify="space-between" pt={6}>
              <Button
                variant="outline"
                onClick={handlePrevious}
                isDisabled={currentStep === 0}
                minW="100px"
              >
                Previous
              </Button>
              
              {isLastStep ? (
                <Button
                  bg={taskColor}
                  color="white"
                  _hover={{ bg: taskColor.replace('500', '600') }}
                  onClick={handleCompleteTask}
                  isDisabled={!canProceed}
                  leftIcon={<Check size={20} />}
                  minW="140px"
                >
                  Complete Task
                </Button>
              ) : (
                <Button
                  bg={taskColor}
                  color="white"
                  _hover={{ bg: taskColor.replace('500', '600') }}
                  onClick={handleNext}
                  isDisabled={!canProceed}
                  minW="100px"
                >
                  Next
                </Button>
              )}
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
