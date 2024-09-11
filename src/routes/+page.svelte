<script lang="ts">
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import { ModeWatcher } from 'mode-watcher';
	import { LightSwitch } from '$lib/components/custom';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';

	let loading = false;
	const toggleLoading = () => (loading = !loading);
	const loadStub = () => {
		toggleLoading();
		setTimeout(toggleLoading, 1000);
	};
</script>

<ModeWatcher />
<!-- <Toaster richColors /> -->

<div class="flex h-full flex-col md:flex">
	<div class="flex flex-row items-center justify-between space-y-2 px-4 py-2 md:h-16">
		<h2 class="mr-2 mt-2 text-lg font-semibold">Playground</h2>
		<div class="ml-auto flex space-x-2 sm:justify-end">
			<Button disabled={loading} on:click={loadStub}>
				{#if loading}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				Click Me
			</Button>
			<LightSwitch />
		</div>
	</div>
	<Separator />
</div>
