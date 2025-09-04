import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  colors: {
    brand: {
      50: '#ebf8ff',
      100: '#e6e6fe',
      200: '#ccccfd',
      300: '#9999f9',
      400: '#7f7ff6',
      500: '#6666F3',
      600: '#5252c2',
      700: '#3d3d92',
      800: '#292961',
      900: '#141431',
    },
    teal: {
      50: '#e6fffa',
      100: '#b2f5ea',
      200: '#81e6d9',
      300: '#4fd1c7',
      400: '#38b2ac',
      500: '#319795',
      600: '#2c7a7b',
      700: '#285e61',
      800: '#234e52',
      900: '#1d4044',
    },
    orange: {
      50: '#fffaf0',
      100: '#feebc8',
      200: '#fbd38d',
      300: '#f6ad55',
      400: '#ed8936',
      500: '#dd6b20',
      600: '#c05621',
      700: '#9c4221',
      800: '#7b341e',
      900: '#652b19',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
      },
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-1px)',
            boxShadow: 'lg',
          },
          transition: 'all 0.2s',
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s',
        },
      },
    },
  },
});

export default theme;