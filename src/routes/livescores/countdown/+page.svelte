<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Home } from 'lucide-svelte';

	// Replace this with your actual event start date and time
	const eventStartDate = new Date('2024-10-13T09:00:00');

	let timeLeft = '';
	let days, hours, minutes, seconds;

	function updateCountdown() {
		const now = new Date();
		//@ts-ignore
		const difference = eventStartDate - now;

		if (difference > 0) {
			days = Math.floor(difference / (1000 * 60 * 60 * 24));
			hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
			minutes = Math.floor((difference / 1000 / 60) % 60);
			seconds = Math.floor((difference / 1000) % 60);

			timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;
		} else {
			timeLeft = 'Event has started!';
		}
	}

	onMount(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="flex min-h-screen items-center justify-center">
	<Card class="mx-4 w-full max-w-md  bg-card">
		<CardHeader>
			<CardTitle class="text-4xl font-bold"
				>Robocup <span class="text-muted-foreground">7.0</span></CardTitle
			>
			<CardDescription>Live Scores</CardDescription>
		</CardHeader>
		<CardContent>
			<!-- <div class="mb-6">
          <img src="/placeholder.svg?height=100&width=100" alt="Robocup Logo" class="mx-auto h-24 w-24" />
        </div> -->
			<p class="mb-6 text-xl">The event hasn't started yet. Please check back later!</p>
			<div class="rounded-md bg-muted p-4">
				<p class="mb-2 text-lg font-semibold text-muted-foreground">Event starts in:</p>
				<p class="text-center text-3xl font-bold">{timeLeft}</p>
			</div>
			<p class="mt-6 text-sm text-muted-foreground">
				We'll display live scores here once the event begins.
			</p>

			<Input type="text" placeholder="Enter your email" class="mt-4 w-full bg-muted" />
			<Button class="mt-2 w-full" variant="default">Notify Me When Event Starts</Button>
			<Button class="mt-4 w-full" variant="outline" href="/">
				<Home class="mr-2 h-4 w-4" />
				Back to Home page</Button>
		</CardContent>
	</Card>
</div>

