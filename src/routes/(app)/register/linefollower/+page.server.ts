import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { type Actions, fail } from '@sveltejs/kit';
import { lineFollowerFormSchema } from './linefollower-form.svelte';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(lineFollowerFormSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(lineFollowerFormSchema));
		console.log('checking: ', form.data.teamSize);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		console.log('success: ', form.data.teamSize);
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
		// TODO: import prefilled link from .env
		const prefilled_link = "import from .env"
		let res = await fetch(prefilled_link,{
			method: 'GET'
		  });
		console.log("res:\n",res)
		if (res.status !== 200) {
			return fail(403, {
				form
			});
		}
		console.log(`added team: ${robotName}`);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return { form, success: true };
	}
};
