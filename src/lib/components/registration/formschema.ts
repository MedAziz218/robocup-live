import { optional, z } from 'zod';
const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;


export const formSchema = z.object({
	username: z.string().min(0).max(50).optional(),
	password: z.string().regex(passwordRegex, {
		message:
			'Password must be at least 6 characters long, contain at least one uppercase letter, and one symbol.'
	})
});

export type FormSchema = typeof formSchema;
