<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/auth/login">Login</a></li>
		<li><a href="/auth/register">Register</a></li>
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

	a {
		font-size: 1.2rem;
		color: var(--text-secondary);
		text-decoration: none;
	}

	a:hover {
		color: var(--dark-celadon);
	}
</style>
