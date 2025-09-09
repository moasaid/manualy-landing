import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';

const faqs = [
  {
    question: 'How quickly can I generate SOPs for my property?',
    answer: 'Most comprehensive SOPs are generated within 5-10 minutes. Complex multi-department procedures may take up to 30 minutes. Our AI analyzes your property type, size, and specific requirements to create tailored operational manuals.'
  },
  {
    question: 'Are the generated procedures compliant with industry regulations?',
    answer: 'Yes, all SOPs are generated using templates that comply with health department regulations, safety standards, and hospitality industry best practices. We regularly update our compliance database to reflect current regulations across different jurisdictions.'
  },
  {
    question: 'Can I customize the SOPs for my specific brand standards?',
    answer: 'Absolutely. You can customize every aspect of the generated SOPs including terminology, branding, specific protocols, and departmental workflows. The AI learns from your modifications to better serve your needs over time.'
  },
  {
    question: 'What types of hospitality businesses does this work for?',
    answer: 'Our platform works for hotels, resorts, restaurants, cafes, bars, event venues, catering companies, and any hospitality business that needs standardized operational procedures. We have templates for properties ranging from boutique hotels to large resort chains.'
  },
  {
    question: 'How does the AI training work for hospitality procedures?',
    answer: 'Our AI is trained on thousands of hospitality best practices, industry standards, and successful operational procedures from leading properties worldwide. It understands context-specific requirements for different property types, sizes, and service levels.'
  },
  {
    question: 'Is there a limit to how many SOPs I can create?',
    answer: 'No limits on our Professional and Enterprise plans. The Starter plan includes up to 50 SOPs per month, which is sufficient for most small to medium properties. You can always upgrade as your needs grow.'
  },
  {
    question: 'How do you handle data security and confidentiality?',
    answer: 'We use enterprise-grade security with SOC 2 Type II certification, end-to-end encryption, and secure cloud infrastructure. Your proprietary procedures and business information are never shared or used to train our AI for other customers.'
  },
  {
    question: 'What support do you provide during implementation?',
    answer: 'We offer dedicated onboarding support, training sessions for your team, and ongoing customer success management. Our hospitality experts help you optimize your procedures and ensure successful adoption across your organization.'
  }
];

export default function FAQ() {
  const sectionBg = useColorModeValue('white', 'gray.900');
  const cardBg = useColorModeValue('gray.50', 'gray.700');
  
  return (
    <Box bg={sectionBg} py={20} id="faq">
      <Container maxW="4xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading
              as="h2"
              size="xl"
              color="gray.800"
              lineHeight={1.2}
              fontFamily="Geist, sans-serif"
            >
              Frequently Asked Questions
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight={1.6}>
              Get answers to common questions about implementing AI-powered SOPs 
              in your hospitality business.
            </Text>
          </VStack>

          <Accordion allowToggle w="full" spacing={4}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                bg={cardBg}
                border="none"
                borderRadius="lg"
                mb={4}
                _hover={{
                  boxShadow: 'md',
                }}
                transition="all 0.2s"
              >
                <AccordionButton
                  py={6}
                  px={6}
                  _hover={{
                    bg: useColorModeValue('gray.100', 'gray.600'),
                  }}
                  borderRadius="lg"
                >
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="semibold" color="gray.800" fontSize="lg">
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon color="brand.500" />
                </AccordionButton>
                <AccordionPanel px={6} pb={6}>
                  <Text color="gray.600" lineHeight={1.6}>
                    {faq.answer}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <Box textAlign="center" pt={8}>
            <Text color="gray.600" mb={4}>
              Still have questions?
            </Text>
            <Button variant="outline" size="lg">
              Contact Our Team
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}