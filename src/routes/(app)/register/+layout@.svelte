<script>
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeftIcon } from 'lucide-svelte';
	import { toast, Toaster } from 'svelte-sonner';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function goBack() {
		// Redirect to the page-defined URL instead of using window history
		if ($page.data.backUrl) {
			console.log('holaa:  --> ', $page.data);
			goto($page.data.backUrl);
		} else {
			window.history.back();
		}
	}
</script>

<Toaster richColors />
<div>
	<Button variant="ghost" on:click={goBack} class="absolute left-4 top-4 md:left-8 md:top-8">
		<ChevronLeftIcon class="mr-2 size-4" />
		Back
	</Button>
	<div class="w-full">
		<slot></slot>
	</div>
</div>
