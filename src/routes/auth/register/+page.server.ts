import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;
		const passwordConfirm = data.get('passwordConfirm') as string;

		if (!email || !password || !passwordConfirm) {
			return fail(400, {
				error: true,
				message: 'Missing email or password'
			});
		}

		if (password !== passwordConfirm) {
			return fail(400, {
				error: true,
				message: 'Passwords do not match'
			});
		}

		try {
			const emailHandle = email.split('@')[0].toLowerCase();
			const randomDigits = Math.floor(1000 + Math.random() * 9000);
			const username = `${emailHandle}${randomDigits}`;

			// check if email already exists
			const existingEmail = await locals.pb
				.collection('users')
				.getFirstListItem(`email="${email}"`);

			if (existingEmail) {
				return fail(400, {
					error: true,
					message: 'Email already exists'
				});
			}

			await locals.pb.collection('users').create({
				username,
				email,
				password,
				passwordConfirm
			});
		} catch (err) {
			console.error(`Error registering user: ${err}`);
			if (err instanceof Response) throw err;

			return fail(500, {
				error: true,
				message: 'An unknown error occurred'
			});
		}
	}
};
