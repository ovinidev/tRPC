import { Flex, Heading } from '@chakra-ui/react';
import { trpc } from '../utils/trpc';

export default function IndexPage() {
	const { data } = trpc.user.useQuery({ text: 'Vinícius' });
	const { data: users } = trpc.users.useQuery();

	if (!data) {
		return <div>Loading...</div>;
	}

	console.log(users?.users);

	return (
		<Flex>
			<Heading>{data.data}</Heading>
		</Flex>
	);
}
