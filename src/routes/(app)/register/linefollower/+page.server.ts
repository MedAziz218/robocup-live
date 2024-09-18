import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { LineFollowerFormSchema as FormSchema } from './formSchema';
import { Linefollower_google_Form_Link } from '$env/static/private';
import { PRIVATE_recaptcha_secret_key } from '$env/static/private';
import { validateToken } from '$lib/turnstile';
// types
import type { PageServerLoad } from './$types.js';
import { type Actions, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(FormSchema)),
		backUrl: '/register'
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(FormSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const data = await event.request.formData();
		const token = String(data.get('cf-turnstile-response'));

		const { success, error } = await validateToken(token, PRIVATE_recaptcha_secret_key);
		if (!success) return fail(403, { form, error: error || 'Invalid CAPTCHA' });
		const {
			robotName,
			teamSize,
			teamLeaderName,
			teamLeaderPhoneNumber,
			otherPhoneNumber,
			teamLeaderEmail,
			secondTeamMemberName,
			secondTeamMemberPhoneNumber,
			secondTeamMemberEmail,
			thirdTeamMemberName,
			thirdTeamMemberPhoneNumber,
			thirdTeamMemberEmail,
			establishmentName,
			clubName
		} = form.data;

		const emptyString = '<-->';
		// Replace placeholders enclosed in curly braces with actual data
		const populatedGoogleFormLink = Linefollower_google_Form_Link.replace('{robotName}', robotName)
			.replace('{teamSize}', teamSize)
			.replace('{teamLeaderName}', teamLeaderName)
			.replace('{teamLeaderPhoneNumber}', teamLeaderPhoneNumber)
			.replace('{otherPhoneNumber}', otherPhoneNumber)
			.replace('{teamLeaderEmail}', teamLeaderEmail)
			.replace('{secondTeamMemberName}', secondTeamMemberName || emptyString)
			.replace('{secondTeamMemberPhoneNumber}', secondTeamMemberPhoneNumber || emptyString)
			.replace('{secondTeamMemberEmail}', secondTeamMemberEmail || emptyString)
			.replace('{thirdTeamMemberName}', thirdTeamMemberName || emptyString)
			.replace('{thirdTeamMemberPhoneNumber}', thirdTeamMemberPhoneNumber || emptyString)
			.replace('{thirdTeamMemberEmail}', thirdTeamMemberEmail || emptyString)
			.replace('{establishmentName}', establishmentName)
			.replace('{clubName}', clubName);
		try {
			let res = await fetch(populatedGoogleFormLink, {
				method: 'GET'
			});

			if (res.status !== 200) {
				return fail(403, {
					form,
					googleFormSuccess: false
				});
			}

			await new Promise((resolve) => setTimeout(resolve, 1000));
			return { form, googleFormSuccess: true };
		} catch (e) {
			return fail(501, {
				form,
				googleFormSuccess: false
			});
		}
	}
};
