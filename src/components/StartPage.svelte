<script lang="ts">
	import { walletStore } from '@svelte-on-solana/wallet-adapter-core';
	import { goto } from '$app/navigation';
	let username: string;

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!$walletStore.connected) {
			const button: HTMLButtonElement = document.querySelector(
				'button.wallet-adapter-button'
			) as HTMLButtonElement;

			button.click();
		} else {
			goto(`/create-page?username=${username}`);
		}
	}
</script>

<form
	class="text-2xl shadow-md rounded-full flex items-center justify-between py-2 px-3"
	on:submit={handleSubmit}
>
	<div class="p-3">
		<span class="font-semibold">blocktip.me/</span>
		<input
			type="text"
			name="username"
			placeholder="yourname"
			id="username"
			class="focus:outline-none"
			bind:value={username}
		/>
	</div>
	<button class="rounded-full font-semibold bg-yellow-300 py-3 px-6" type="submit">
		Start Page
	</button>
</form>
