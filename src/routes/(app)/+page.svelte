<script lang="ts">
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import { ModeWatcher } from 'mode-watcher';
	import { LightSwitch } from '$lib/components/custom';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import {HeroSection} from '$lib/components/landing';

	let loading = false;
	const toggleLoading = () => (loading = !loading);
	const loadStub = () => {
		toggleLoading();
		setTimeout(toggleLoading, 1000);
	};
</script>

<ModeWatcher />

<HeroSection />
