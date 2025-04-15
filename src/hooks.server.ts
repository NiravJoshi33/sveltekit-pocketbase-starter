import { createPBInstance } from '$lib/pocketbase';
import type { Handle } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const handle: Handle = async ({ event, resolve }) => {
	const pb = createPBInstance();

	// request auth store data from cookie
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		// verify and refresh the loaded auth model to get up to date data
		if (pb.authStore.isValid) {
			await pb.collection('users').authRefresh();
		}
	} catch (err) {
		console.log(`Error refreshing the auth model: ${err}`);

		// clear the auth store on failed refresh
		pb.authStore.clear();
	}

	event.locals.pb = pb;
	event.locals.user = pb.authStore.record;

	const response = await resolve(event);

	// send back default `pb_auth` cookie to the client with latest store state
	response.headers.set(
		'set-cookie',
		pb.authStore.exportToCookie({ httpOnly: false, sameSite: 'lax', secure: !dev })
	);

	return response;
};
