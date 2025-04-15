<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="login-container">
	<div class="login-header">
		<h2>Sign in to your account</h2>
	</div>

	<div class="login-form-container">
		<form class="login-form" method="POST">
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
						autocomplete="current-password"
						required
					/>
				</div>
			</div>

			<div class="login-button-container">
				<button type="submit" class="login-button">Sign in</button>
			</div>
		</form>

		<p class="register-link-container">
			Not a member yet?
			<a href="/auth/register" class="register-link">Create an account</a>
		</p>
	</div>
</div>

<style>
	.login-container {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 1.5rem;
	}

	.login-header {
		max-width: 20rem;
		margin: 0 auto;
		width: 100%;
	}

	.login-header h2 {
		margin-top: 2.5rem;
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		line-height: 2.25rem;
		letter-spacing: -0.025em;
		color: var(--text-primary);
	}

	.login-form-container {
		margin-top: 2.5rem;
		max-width: 30rem;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.login-form {
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

	.login-button-container {
		margin-top: 1.5rem;
		width: 100%;
		align-self: center;
	}

	.login-button {
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

	.login-button:hover {
		background-color: var(--accent-secondary);
	}

	.login-button:focus {
		outline: 2px solid var(--accent-primary);
		outline-offset: 2px;
	}

	.register-link-container {
		margin-top: 2.5rem;
		text-align: center;
		font-size: 0.875rem;
		color: #6b7280;
	}

	.register-link {
		font-weight: 600;
		color: #4f46e5;
		text-decoration: none;
	}

	.register-link:hover {
		color: #4338ca;
	}

	@media (min-width: 640px) {
		.login-header,
		.login-form-container {
			max-width: 30rem;
		}
	}
</style>
