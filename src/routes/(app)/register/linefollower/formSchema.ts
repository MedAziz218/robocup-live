import { z } from 'zod';
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])*$|^$/);

const required_error_message = 'ce champ est obligatoire';
const too_long_error_message = 'la valeur entree est trop longue';
const too_short_error_message = 'la valeur entree est trop courte';
const invalid_phone_number_error_message = 'ce numero de telephone est invalide';
const invalid_email_error_message = 'ce email est invalide';
export const lineFollowerFormSchema = z.object({
	robotName: z
		.string()
		.min(1, required_error_message)
		.min(2, too_short_error_message)
		.max(30, too_long_error_message),
	teamSize: z.enum(['1', '2', '3']).default('3'),
	teamLeaderName: z
		.string()
		.min(1, required_error_message)
		.min(2, too_short_error_message)
		.max(50, too_long_error_message),
	teamLeaderPhoneNumber: z
		.string()
		.min(1, required_error_message)
		.regex(phoneRegex, invalid_phone_number_error_message),
	otherPhoneNumber: z
		.string()
		.min(1, required_error_message)
		.regex(phoneRegex, invalid_phone_number_error_message),
	teamLeaderEmail: z.string().min(1, required_error_message).email(invalid_email_error_message),

	secondTeamMemberName: z.string().min(0).max(50, too_long_error_message).optional(),
	secondTeamMemberPhoneNumber: z
		.string()
		.min(0)
		.regex(phoneRegex, invalid_phone_number_error_message)
		.optional(),
	secondTeamMemberEmail: z.string().min(0).email(invalid_email_error_message).optional(),

	thirdTeamMemberName: z.string().min(0).max(50, too_long_error_message).optional(),
	thirdTeamMemberPhoneNumber: z
		.string()
		.min(0)
		.regex(phoneRegex, invalid_phone_number_error_message)
		.optional(),
	thirdTeamMemberEmail: z.string().min(0).email(invalid_email_error_message).optional(),

	establishmentName: z
		.string()
		.min(1, required_error_message)
		.min(2, too_short_error_message)
		.max(50, too_long_error_message),
	clubName: z
		.string()
		.min(1, required_error_message)
		.min(2, too_short_error_message)
		.max(50, too_long_error_message)
});

export type LineFollowerFormSchema = typeof lineFollowerFormSchema;
