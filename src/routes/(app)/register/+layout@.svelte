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
<svelte:head>
	<script src="https://www.google.com/recaptcha/enterprise.js?render=6LfwbkcqAAAAAA23DZKZ8IrmnbGU3qyozB9I63n9"></script>
	<!-- Your code -->
  </svelte:head>
<Toaster richColors />
<div>
	<Button variant="ghost" on:click={goBack} class="absolute left-4 top-4 md:left-8 md:top-8">
		<ChevronLeftIcon class="mr-2 size-4" />
		Back
	</Button>
	<div class="w-full mb-8">
		<slot></slot>
	</div>
</div>
