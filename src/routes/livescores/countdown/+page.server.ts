
import { type Actions, fail } from '@sveltejs/kit';
import {notify_email_google_Form_Link} from '$env/static/private';
export const actions: Actions = {
	default: async ({request}) => {
		const formData = await request.formData();
        const email = String(formData.get('email')).trim();
		if (!email) {
			return fail(400, {
                error: 'Email is required'
			});
		}
        // console.log("holaa:",email)
		// Replace placeholders enclosed in curly braces with actual data
		const populatedGoogleFormLink = notify_email_google_Form_Link.replace('{email}', email)
		try {
			let res = await fetch(populatedGoogleFormLink, {
				method: 'GET'
			});
			if (res.status !== 200) {
				return fail(403, {
					googleFormSuccess: false
				});
			}

			await new Promise((resolve) => setTimeout(resolve, 1000));
			return {  googleFormSuccess: true };
		} catch (e) {
			return fail(501, {
				googleFormSuccess: false
			});
		}
	}
};
