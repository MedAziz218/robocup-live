import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { type Actions, fail } from "@sveltejs/kit";
import { lineFollowerFormSchema } from "./linefollower-form.svelte";
import type { PageServerLoad } from "./$types.js";
import {redirect} from "@sveltejs/kit";
export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(lineFollowerFormSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(lineFollowerFormSchema));
		console.log("checking: ",form.data.teamSize)

		if (!form.valid) {
			return fail(400, {
				form,
			});
		}
		console.log("success: ",form.data.teamSize)

		await new Promise((resolve) => setTimeout(resolve, 1000));
		return {form, success: true }
	},
};