import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { type Actions, fail } from "@sveltejs/kit";
import { autonomousFormSchema } from "./autonomous-form.svelte";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(autonomousFormSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(autonomousFormSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}
		return {
			form,
		};
	},
};