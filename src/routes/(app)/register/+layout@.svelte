<script>
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeftIcon } from 'lucide-svelte';
	import { toast, Toaster } from 'svelte-sonner';
	function goBack() {
		window.history.back();
	}
</script>

<Toaster richColors />
<div >
	<Button variant="ghost" on:click={goBack} class="absolute left-4 top-4 md:left-8 md:top-8">
		<ChevronLeftIcon class="mr-2 size-4" />
		Back
	</Button>
	<div class=" pt-16 w-full ">
		<slot></slot>
	</div>
</div>
