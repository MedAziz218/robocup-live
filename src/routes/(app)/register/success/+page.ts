import { redirect } from '@sveltejs/kit';
export function load({ url  }) {

	const robotName = url.searchParams.get('robotName');
	if (!robotName) {
		throw redirect(302, '/register');
	}
    // console.log("yahooo: ",teamName)
    // console.log("url: ",url)

	// Return the data to the page
	return {
		robotName,
		backUrl: '/register'
	};
}