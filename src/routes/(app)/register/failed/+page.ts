import { redirect } from "@sveltejs/kit";

export function load({ url  }) {
	const status = url.searchParams.get('status');
	if (!status) {
		throw redirect(302, '/register');
	}
	return {
		status,
		backUrl: '/'
	};
}