import { ChakraProvider } from '@chakra-ui/react';
import type { AppType } from 'next/app';
import { theme } from '../styles/theme';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default trpc.withTRPC(MyApp);
