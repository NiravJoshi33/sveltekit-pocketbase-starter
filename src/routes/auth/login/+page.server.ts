import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		if (!email || !password) {
			return fail(400, {
				error: true,
				message: 'Missing email or password'
			});
		}

		try {
			await locals.pb.collection('users').authWithPassword(email, password);
		} catch (err) {
			console.error(`Error during login: ${err}`);
			if (err instanceof Response) throw err;

			return fail(400, {
				error: true,
				message: 'Invalid email or password'
			});
		}

		redirect(303, '/');
	}
};
