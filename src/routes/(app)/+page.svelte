<script lang="ts">
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import SphereMask from '$lib/components/magic/SphereMask/SphereMask.svelte';

	import { LightSwitch } from '$lib/components/custom';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { HeroSection, ChallengesSection } from '$lib/components/landing';
	import { Toaster } from '$lib/components/ui/sonner';

	let loading = false;
	const toggleLoading = () => (loading = !loading);
	const loadStub = () => {
		toggleLoading();
		setTimeout(toggleLoading, 1000);
	};
</script>

<Toaster richColors />
<HeroSection />
<SphereMask />
<ChallengesSection/>