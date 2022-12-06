import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
	user: procedure
		.input(
			z.object({
				text: z.string(),
			}),
		)
		.query(({ input }) => {
			return {
				data: `hello ${input.text}`,
			};
		}),

	users: procedure.query(() => {
		return {
			users: [
				{
					id: 1,
					name: 'Bob',
				},
				{
					id: 2,
					name: 'Ana',
				},
			],
		};
	}),
});

export type AppRouter = typeof appRouter;
