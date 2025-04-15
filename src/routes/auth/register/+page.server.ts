import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;
		const passwordConfirm = data.get('passwordConfirm') as string;
		console.log('email', email);
		console.log('password', password);
		console.log('passwordConfirm', passwordConfirm);

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
