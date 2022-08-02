<script lang="ts">
	import StartPage from '../components/StartPage.svelte';
	import supabase from '../lib/supabaseClient';

	console.log(supabase);
</script>

<div class="mt-20 px-3 md:px-24 lg:px-40 md:mt-40">
	<div class="flex flex-col gap-5 text-center">
		<h1 class="text-6xl font-bold text-center">Putting the "WE" in WAGMI.</h1>

		<h2 class="text-3xl font-light text-center">
			Accept donations in crypto. Powered by Solana, and open-source.
		</h2>

		<StartPage />

		<p class="text-center">It's free, and takes less than a minute</p>
	</div>
</div>

<style>
	* {
		line-height: 1.2;
	}
</style>
