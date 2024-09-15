<script lang="ts">
	import type { PageData } from './$types.js';
	import ChallengeRegistrationForm from '$lib/components/registration/challenge-registration-form.svelte';
	export let data: PageData;
	console.log(`data:`,data);
</script>

<ChallengeRegistrationForm data={data.form} />
