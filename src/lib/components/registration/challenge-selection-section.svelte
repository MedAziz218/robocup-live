<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';

	const challenges = [
	{
		id: 1,
		name: 'Junior',
		description: 'Young drivers race to victory by completing missions and taking the lead.',
		href: '/register/junior'
	},
	{
		id: 2,
		name: 'Line Follower',
		description: 'Race the track with speed and accuracy. Follow the line, finish first.',
		href: '/register/linefollower'
	},
	{
		id: 3,
		name: 'All Terrain',
		description: 'Robots clash in a test of power and strategy. Only the toughest survive.',
		href: '/register/all-terrain'
	},
	{
		id: 4,
		name: 'Autonomous',
		description: 'Your robot completes missions autonomously, scoring higher with each calculated move.',
		href: '/register/autonomous'
	}
];


	function handleRegister(challengeName: string) {
		alert(`You've registered for the ${challengeName}!`);
		// Here you would typically handle the registration process
	}

	function handleKeyDown(event: KeyboardEvent, challengeName: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleRegister(challengeName);
		}
	}
</script>

<div class="container mx-auto px-4 py-4">
	<h1 class="mb-4 text-center text-3xl font-bold">Robocup Registration</h1>
	<p class="mb-8 text-center text-muted-foreground">
		Choose one of the following challenges to register for our exciting event!
	</p>
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
		{#each challenges as challenge}
			<a
				class="card-wrapper"
				style="all: unset;"
				href="{challenge.href}"
			>
				<Card
					class={cn(
						'w-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-ring hover:ring-offset-2',
						'transform-gpu  ring-offset-transparent transition-all duration-300 ease-out hover:ring-2 hover:ring-primary ',
						'bg-[#E1DBBD] dark:bg-[#1D1C18]'
					)}
				>
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-semibold">{challenge.name}</h2>
						<p class="mb-4 text-muted-foreground">{challenge.description}</p>
						<p class="text-sm text-muted-foreground">
							Click to register for this challenge and showcase your skills!
						</p>
					</div>
				</Card>
			</a>
		{/each}
	</div>
	<p class="my-8 text-center text-muted-foreground">
		Feel free to register for multiple challenges and showcase your diverse skills!
	</p>
</div>

<style>
	.card-wrapper:hover h2 {
		color: var(--are-color-yellow);
		transition: color 0.25s ease-out;
	}
</style>
