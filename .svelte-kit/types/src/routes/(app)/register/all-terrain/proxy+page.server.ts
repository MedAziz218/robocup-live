// @ts-nocheck
import type { PageServerLoad, Actions } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "$lib/components/registration/formschema.js";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";
export const load = async () => {
 return {
  form: await superValidate(zod(formSchema)),
 };
};
export const actions = {
	default: async (event: import('./$types').RequestEvent) => {
	  const form = await superValidate(event, zod(formSchema));
	  if (!form.valid) {
		return fail(400, {
		  form,
		});
	  }
	  return {
		form,
	  };
	},
  };;null as any as PageServerLoad;;null as any as Actions;