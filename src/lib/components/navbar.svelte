<script>
	import { currentUser } from '$lib/stores/user';
	import { pb } from '$lib/pocketbase';
	import { redirect } from '@sveltejs/kit';

	function logout() {
		pb.authStore.clear();
		currentUser.set(null);
		redirect(303, '/');
	}
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		{#if $currentUser}
			<li>
				<span>Welcome, {$currentUser.username || $currentUser.email}</span>
			</li>
			<li>
				<button onclick={logout}>Logout</button>
			</li>
		{:else}
			<li><a href="/auth/login">Login</a></li>
			<li><a href="/auth/register">Register</a></li>
		{/if}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		list-style-type: none;
		gap: 4em;
		padding: 0.25em 0;
	}

	a,
	button {
		font-size: 1.2rem;
		color: var(--text-secondary);
		text-decoration: none;
	}

	a:hover,
	button:hover {
		color: var(--dark-celadon);
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		font-family: inherit;
	}

	span {
		font-size: 1.2rem;
		color: var(--text-secondary);
	}
</style>
