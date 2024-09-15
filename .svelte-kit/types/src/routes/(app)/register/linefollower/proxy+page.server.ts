// @ts-nocheck
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { type Actions, fail } from '@sveltejs/kit';
import { lineFollowerFormSchema } from './linefollower-form.svelte';
import type { PageServerLoad } from './$types.js';

export const load = async () => {
	return {
		form: await superValidate(zod(lineFollowerFormSchema))
	};
};

export const actions = {
	default: async (event: import('./$types').RequestEvent) => {
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

		const prefilled_link = `https://docs.google.com/forms/d/e/1FAIpQLSdNoX_6BI5DOyyxKM7YVNCPSd61WHw7TxkfqQVMCUTWMwmg_w/formResponse?usp=pp_url&entry.792218821=${robotName}&entry.466685216=${teamSize}&entry.959881297=${teamLeaderName}&entry.1182773133=${teamLeaderPhoneNumber}&entry.1402328127=${otherPhoneNumber}&entry.1733826168=${teamLeaderEmail}&entry.1278355188=${secondTeamMemberName}&entry.342899768=${secondTeamMemberPhoneNumber}&entry.33560155=${secondTeamMemberEmail}&entry.2053663041=${thirdTeamMemberName}&entry.1132700163=${thirdTeamMemberPhoneNumber}&entry.2124270035=${thirdTeamMemberEmail}&entry.828937829=${establishmentName}&entry.1382479939=${clubName}&submit=Submit`
		//`https://docs.google.com/forms/d/e/1FAIpQLSdNoX_6BI5DOyyxKM7YVNCPSd61WHw7TxkfqQVMCUTWMwmg_w/formResponse?usp=pp_url&entry.792218821=${robotName}&entry.466685216=${teamSize}&entry.959881297=${teamLeaderName}&entry.1182773133=${teamLeaderPhoneNumber}&entry.1402328127=${otherPhoneNumber}&entry.1733826168=${teamLeaderEmail}&entry.1278355188=${secondTeamMemberName}&entry.342899768=${secondTeamMemberPhoneNumber}&entry.33560155=${secondTeamMemberEmail}&entry.2053663041=${thirdTeamMemberName}&entry.1132700163=${thirdTeamMemberPhoneNumber}&entry.2124270035=${thirdTeamMemberEmail}&entry.828937829=${establishmentName}&entry.1382479939=${clubName}&submit=Submit`;
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
;null as any as PageServerLoad;;null as any as Actions;