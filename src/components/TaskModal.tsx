import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  Text,
  Input,
  Select,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  TagLabel,
  TagCloseButton,
  useColorModeValue,
  IconButton,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { ArrowLeft, Plus, X } from 'lucide-react';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskName: string;
  taskColor: string;
}

const templateOptions = [
  'Select a template...',
  'Kitchen Cleaning Template',
  'Room Service Template',
  'Guest Check-in Template',
  'Safety Inspection Template',
  'Maintenance Template',
];

const memberOptions = [
  'Ahmed Ali',
  'Sarah Johnson',
  'Mike Chen',
  'Lisa Rodriguez',
  'David Kim',
  'Emma Wilson',
  'Wsl Team',
];

export default function TaskModal({ isOpen, onClose, taskName, taskColor }: TaskModalProps) {
  const [formData, setFormData] = useState({
    name: taskName,
    template: '',
    frequency: 'NONE',
    startDate: '',
    endDate: '',
    assignedMembers: [] as string[],
  });

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'white');
  const inputBg = useColorModeValue('gray.50', 'gray.700');

  const handleAddMember = (member: string) => {
    if (member && !formData.assignedMembers.includes(member)) {
      setFormData(prev => ({
        ...prev,
        assignedMembers: [...prev.assignedMembers, member]
      }));
    }
  };

  const handleRemoveMember = (member: string) => {
    setFormData(prev => ({
      ...prev,
      assignedMembers: prev.assignedMembers.filter(m => m !== member)
    }));
  };

  const handleUpdate = () => {
    // Handle form submission
    console.log('Form data:', formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent bg={bgColor} maxW="600px" mx={4}>
        <ModalHeader
          bg="gray.700"
          color="white"
          borderRadius="md md 0 0"
          py={4}
          position="relative"
        >
          <HStack spacing={3}>
            <IconButton
              aria-label="Back"
              icon={<ArrowLeft size={20} />}
              variant="ghost"
              color="white"
              size="sm"
              onClick={onClose}
            />
            <Text fontSize="lg" fontWeight="semibold">
              {taskName}
            </Text>
          </HStack>
          <ModalCloseButton color="white" />
        </ModalHeader>

        <ModalBody p={6}>
          <VStack spacing={6} align="stretch">
            {/* Name */}
            <FormControl>
              <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
                Name
              </FormLabel>
              <Input
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                bg={inputBg}
                border="1px solid"
                borderColor={borderColor}
                _focus={{ borderColor: taskColor, boxShadow: `0 0 0 1px ${taskColor}` }}
              />
            </FormControl>

            {/* Template */}
            <FormControl>
              <HStack justify="space-between" mb={2}>
                <FormLabel color={textColor} fontSize="sm" fontWeight="medium" mb={0}>
                  Choose Template
                </FormLabel>
                <Button
                  size="sm"
                  leftIcon={<Plus size={16} />}
                  colorScheme="green"
                  variant="solid"
                >
                  Add Template
                </Button>
              </HStack>
              <Select
                value={formData.template}
                onChange={(e) => setFormData(prev => ({ ...prev, template: e.target.value }))}
                bg={inputBg}
                border="1px solid"
                borderColor={borderColor}
                _focus={{ borderColor: taskColor, boxShadow: `0 0 0 1px ${taskColor}` }}
              >
                {templateOptions.map((option, index) => (
                  <option key={index} value={index === 0 ? '' : option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>

            {/* Frequency */}
            <FormControl>
              <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
                Frequency
              </FormLabel>
              <RadioGroup
                value={formData.frequency}
                onChange={(value) => setFormData(prev => ({ ...prev, frequency: value }))}
              >
                <Stack direction="row" spacing={6} flexWrap="wrap">
                  <Radio value="NONE" colorScheme="purple">NONE</Radio>
                  <Radio value="HOURLY" colorScheme="purple">HOURLY</Radio>
                  <Radio value="DAILY" colorScheme="purple">DAILY</Radio>
                  <Radio value="WEEKLY" colorScheme="purple">WEEKLY</Radio>
                  <Radio value="MONTHLY" colorScheme="purple">MONTHLY</Radio>
                  <Radio value="YEARLY" colorScheme="purple">YEARLY</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            {/* Start Date */}
            <FormControl>
              <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
                Start
              </FormLabel>
              <Input
                type="datetime-local"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                bg={inputBg}
                border="1px solid"
                borderColor={borderColor}
                _focus={{ borderColor: taskColor, boxShadow: `0 0 0 1px ${taskColor}` }}
              />
            </FormControl>

            {/* End Date */}
            <FormControl>
              <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
                End
              </FormLabel>
              <Input
                type="datetime-local"
                value={formData.endDate}
                onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                bg={inputBg}
                border="1px solid"
                borderColor={borderColor}
                _focus={{ borderColor: taskColor, boxShadow: `0 0 0 1px ${taskColor}` }}
              />
            </FormControl>

            {/* Manual Assign */}
            <VStack align="stretch" spacing={3}>
              <Text color={textColor} fontSize="sm" fontWeight="medium">
                Manual Assign (optional)
              </Text>
              
              <FormControl>
                <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
                  Assign to
                </FormLabel>
                <Select
                  placeholder="Member(s)"
                  bg={inputBg}
                  border="1px solid"
                  borderColor={borderColor}
                  _focus={{ borderColor: taskColor, boxShadow: `0 0 0 1px ${taskColor}` }}
                  onChange={(e) => {
                    if (e.target.value) {
                      handleAddMember(e.target.value);
                      e.target.value = '';
                    }
                  }}
                >
                  {memberOptions.map((member, index) => (
                    <option key={index} value={member}>
                      {member}
                    </option>
                  ))}
                </Select>
              </FormControl>

              {/* Choose Members */}
              <FormControl>
                <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
                  Choose Member
                </FormLabel>
                <HStack spacing={2} flexWrap="wrap" minH="40px" align="flex-start">
                  {formData.assignedMembers.map((member, index) => (
                    <Tag
                      key={index}
                      size="md"
                      borderRadius="full"
                      variant="solid"
                      bg={member === 'Wsl Team' ? 'purple.500' : 'purple.500'}
                      color="white"
                    >
                      <TagLabel>{member}</TagLabel>
                      <TagCloseButton onClick={() => handleRemoveMember(member)} />
                    </Tag>
                  ))}
                </HStack>
                <Text fontSize="xs" color="gray.500" mt={2}>
                  You can manually assign the task or leave blank to auto assign.
                </Text>
              </FormControl>
            </VStack>

            {/* Action Buttons */}
            <VStack spacing={3} pt={4}>
              <Button
                w="full"
                bg="purple.400"
                color="white"
                size="lg"
                _hover={{ bg: 'purple.500' }}
                onClick={handleUpdate}
              >
                Update
              </Button>
              <Button
                w="full"
                variant="outline"
                size="lg"
                onClick={onClose}
              >
                Close
              </Button>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
