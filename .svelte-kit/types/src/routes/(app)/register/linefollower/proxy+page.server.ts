// @ts-nocheck
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { LineFollowerFormSchema as FormSchema } from './formSchema';
import { Linefollower_google_Form_Link } from '$env/static/private';

// types
import type { PageServerLoad } from './$types.js';
import { type Actions, fail } from '@sveltejs/kit';

export const load = async () => {
	return {
		form: await superValidate(zod(FormSchema)),
		backUrl: '/register'
	};
};

export const actions = {
	default: async (event: import('./$types').RequestEvent) => {
		const form = await superValidate(event, zod(FormSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

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
;null as any as PageServerLoad;;null as any as Actions;