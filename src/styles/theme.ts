import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		primary: '',
		secondary: '',
		tertiary: '',
		title: '',
		text: '',
		success: '#4BB543',
		error: '#E51247',
		white: '#FFFFFF',
		black: '',
	},
	breakpoints: {
		sm: '18.75rem', // 300px
		md: '25rem', // 400px
		lg: '31.25rem', // 500px
		xl: '37.5rem', // 600px
		'2xl': '43.75rem', // 700px
		'3xl': '50rem', // 800px
	},
	fonts: {
		body: 'roboto, system-ui, sans-serif',
		heading: 'roboto, system-ui, sans-serif',
	},

	styles: {
		global: {
			body: {
				bg: 'gray.800',
				color: 'gray.50',
			},
		},
	},
});
