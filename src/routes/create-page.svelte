<script lang="ts">
	import InitProfileButton from '../components/buttons/InitProfileButton.svelte';
	import CreatePageInput from '../components/inputs/CreatePageInput.svelte';
	import ImageUpload from '../components/inputs/ImageUpload.svelte';
	import { page } from '$app/stores';
	import createProfile from '../helpers/createProfile';
	import type { User } from '../types/user';
	import { walletStore } from '@svelte-on-solana/wallet-adapter-core';
	import { workSpace } from '@svelte-on-solana/wallet-adapter-anchor';
	import initProfileRpc from '../rpc/initProfile';

	let inputs = {
		name: '',
		username: $page.url.searchParams.get('username') ?? '',
		royalty: true,
		about: '',
		website: '',
		twitter: '',
		youtube: '',
		github: ''
	};

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const user: User = {
			username: inputs.username,
			about: inputs.about,
			display_name: inputs.name,
			royalty: inputs.royalty,
			links: {
				website: inputs.website,
				twitter: inputs.twitter,
				youtube: inputs.youtube,
				github: inputs.github
			},
			wallets: {
				sol: $walletStore.publicKey?.toString() as string
			}
		};

		const { data, error } = await createProfile(user);
		const id = data![0].id;
		const userProfileAccount = await initProfileRpc(
			$walletStore.publicKey,
			$workSpace.program,
			id,
			inputs.royalty
		);
		console.log(userProfileAccount);
	}

	$: console.table(inputs);
</script>

<form
	class="flex flex-col items-center justify-center pt-20 gap-10 mx-auto w-full max-w-md"
	on:submit={handleSubmit}
>
	<h1 class="font-medium text-3xl">Complete your page</h1>

	<ImageUpload />
	<CreatePageInput bind:value={inputs.name} label="Name" placeholder="Name" name="name" />
	<CreatePageInput
		label="Blocktip link"
		name="link"
		bind:value={inputs.username}
		inline="blocktip.me/"
		placeholder="yourname"
	/>
	<CreatePageInput isTextArea label="About" name="about" bind:value={inputs.about} placeholder="" />
	<CreatePageInput
		label="Website or social link"
		placeholder="https://"
		name="website"
		bind:value={inputs.website}
	/>
	<CreatePageInput
		label="Twitter"
		inline="twitter.com/"
		name="website"
		bind:value={inputs.twitter}
	/>
	<CreatePageInput label="Github" inline="github.com/" name="website" bind:value={inputs.github} />
	<CreatePageInput
		label="Youtube"
		inline="youtube.com/"
		name="website"
		bind:value={inputs.youtube}
	/>

	<!-- <InitProfileButton /> -->
	<button type="submit">temp</button>
</form>
