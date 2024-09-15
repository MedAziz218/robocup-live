<script lang="ts">
	import { cn } from '$lib/utils';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import P1 from '$lib/imgs/junior-poster.jpg?enhanced';
	import P2 from '$lib/imgs/linefollower-poster.jpg?enhanced';
	import P3 from '$lib/imgs/all-terrain-poster.jpg?enhanced';
	import P4 from '$lib/imgs/autonomous-poster.jpg?enhanced';

	const challenges = [
		{
			name: 'Junior',
			description: 'Young drivers, race to victory by completing missions and taking the lead.',
			image: P1,
			link: 'https://drive.google.com/file/d/1tjYVVTNzkL2AVGNrcDaKfiN6MbKjOztX/view'
		},
		{
			name: 'Line Follower',
			description: 'Race the track with speed and accuracy. Follow the line, finish first.',
			image: P2,
			link: 'https://drive.google.com/file/d/1-wWrkj6ObNDRBDInIWWyBlPNPqPaCXa2/view'
		},
		{
			name: 'All Terrain',
			description: 'Robots clash in a test of power and strategy. Only the toughest survive.',
			image: P3,
			link: 'https://drive.google.com/file/d/1USGhpgPNh6i9TgYXnUoD1fFWmjbcUWE9/view'
		},
		{
			name: 'Autonomous',
			description:
				'Let your robot take charge, navigating missions with precision and scoring higher with each move. ',
			image: P4,
			link: 'https://drive.google.com/file/d/1TJIgTUTwW6UDbWdfBVuirJd6JOifGzB8/view'
		}
	];
</script>

<div class="container mx-auto px-4 py-8">
	<div class="mx-auto max-w-5xl text-center">
		<h4 class="text-xl font-bold tracking-tight text-black dark:text-white">Challenges</h4>

		<h2 class="text-5xl font-bold tracking-tight text-black sm:text-6xl dark:text-white">
			Exciting challenges for everyone.
		</h2>

		<p class="mt-6 text-xl leading-8 text-black/80 dark:text-white">
			Compete in
			{' '}
			<strong>thrilling challenges</strong>
			{' '}
			designed to test your skills, push your limits, and bring out your competitive edge.
		</p>
	</div>

	<div class="mx-8 mt-16 grid grid-cols-1 gap-6 md:mx-16 md:grid-cols-2 lg:grid-cols-4">
		{#each challenges as challenge}
			<Card
				class={cn(
          'flex flex-col',
					'max-w: overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl',
					'transform-gpu  ring-offset-transparent transition-all duration-300 ease-out hover:ring-2 hover:ring-primary '
				)}
			>
				<CardHeader class="p-4">
					<enhanced:img
						src={challenge.image}
						alt={challenge.name}
						class={cn(
							'challenge-poster h-65 w-full object-contain ',
							'border border-gray-800 dark:border-[#E1DBBD]'
						)}
					/>
				</CardHeader>
				<CardContent class="p-4 flex-grow">
					<CardTitle class="mb-2 text-xl">{challenge.name}</CardTitle>
					<p class="mb-4 text-sm text-muted-foreground">{challenge.description}</p>
				</CardContent>
				<CardFooter class="p-4 pt-0">
					<Button target="_blank" href={challenge.link} variant="default" class="w-full"
						>Learn More</Button
					>
				</CardFooter>
			</Card>
		{/each}
	</div>
</div>


<style>
  /* Ensure consistent card heights within rows */
  .grid {
    display: grid;
    grid-auto-rows: 1fr;
  }

  /* Additional styles for flex layout within cards */
  :global(.card) {
    display: flex;
    flex-direction: column;
  }

  :global(.card-content) {
    flex-grow: 1;
  }
</style>