<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="register-container">
	<div class="register-header">
		<h2>Create your account</h2>
	</div>

	<div class="register-form-container">
		<form class="register-form" method="POST" use:enhance>
			{#if form?.error}
				<p class="error-message">{form.message}</p>
			{/if}
			<div class="form-group">
				<label for="email">Email address</label>
				<div>
					<input id="email" name="email" type="email" autocomplete="email" required />
				</div>
			</div>

			<div class="form-group">
				<div>
					<label for="password">Password</label>
				</div>
				<div>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="new-password"
						required
					/>
				</div>
			</div>

			<div class="form-group">
				<div>
					<label for="passwordConfirm">Confirm Password</label>
				</div>
				<div>
					<input
						id="passwordConfirm"
						name="passwordConfirm"
						type="password"
						autocomplete="new-password"
						required
					/>
				</div>
			</div>

			<div class="register-button-container">
				<button type="submit" class="register-button"> Register </button>
			</div>
		</form>

		<p class="login-link-container">
			Already a member?
			<a href="/auth/login" class="login-link"> Sign in </a>
		</p>
	</div>
</div>

<style>
	.register-container {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 1.5rem;
	}

	.register-header {
		max-width: 20rem;
		margin: 0 auto;
		width: 100%;
	}

	.register-header h2 {
		margin-top: 2.5rem;
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		line-height: 2.25rem;
		letter-spacing: -0.025em;
		color: var(--text-primary);
	}

	.register-form-container {
		margin-top: 2.5rem;
		max-width: 30rem;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.register-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.error-message {
		color: rgb(239, 68, 68);
		background-color: rgba(239, 68, 68, 0.2);
		padding: 0.5em;
		border-radius: 0.25em;
		font-size: 0.875rem;
	}

	.form-group label {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.5rem;
		color: var(--text-primary);
	}

	.form-group {
		width: 100%;
	}

	.form-group input {
		display: block;
		width: 100%;
		margin-top: 0.5rem;
		padding: 0.375rem 0.75rem;
		border-radius: 0.375rem;
		border: 1px solid var(--border-primary);
		color: var(--text-tertiary);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		font-size: 0.875rem;
		line-height: 1.5rem;
		box-sizing: border-box;
	}

	.form-group input:focus {
		outline: 2px solid var(--accent-primary);
		outline-offset: 2px;
	}

	.register-button-container {
		margin-top: 1.5rem;
		width: 100%;
		align-self: center;
	}

	.register-button {
		display: flex;
		width: 100%;
		justify-content: center;
		padding: 0.375rem 0.75rem;
		background-color: var(--accent-primary);
		color: white;
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1.5rem;
		border-radius: 0.375rem;
		border: none;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		cursor: pointer;
	}

	.register-button:hover {
		background-color: var(--accent-secondary);
	}

	.register-button:focus {
		outline: 2px solid var(--accent-primary);
		outline-offset: 2px;
	}

	.login-link-container {
		margin-top: 2.5rem;
		text-align: center;
		font-size: 0.875rem;
		color: #6b7280;
	}

	.login-link {
		font-weight: 600;
		color: #4f46e5;
		text-decoration: none;
	}

	.login-link:hover {
		color: #4338ca;
	}

	@media (min-width: 640px) {
		.register-header,
		.register-form-container {
			max-width: 30rem;
		}
	}
</style>
