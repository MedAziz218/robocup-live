import { redirect } from '@sveltejs/kit';

export const load = async () => {
    const isTrue = false;  // This is where you'd check your actual condition.
    console.log(isTrue);
    if (!isTrue) {
        throw redirect(307, '/livescores/countdown');  // Redirect to the countdown page
    }

    return { message: 'Hello' };  // Pass the message if condition is true
};
