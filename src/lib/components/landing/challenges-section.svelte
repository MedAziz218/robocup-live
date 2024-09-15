<script lang="ts">
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
    import P1 from "$lib/imgs/junior-poster.jpg?enhanced";
    import P2 from "$lib/imgs/linefollower-poster.jpg?enhanced";
    import P3 from "$lib/imgs/all-terrain-poster.jpg?enhanced";
    import P4 from "$lib/imgs/autonomous-poster.jpg?enhanced";

    const challenges = [
      {
        name: "Junior",
        description: "48 hours of non-stop coding to build innovative solutions.",
        image: P1,
        link: "https://drive.google.com/file/d/1tjYVVTNzkL2AVGNrcDaKfiN6MbKjOztX/view"
      },
      {
        name: "Line Follower",
        description: "Rapid prototyping and user testing of new product ideas.",
        image: P2,
        link: "https://drive.google.com/file/d/1-wWrkj6ObNDRBDInIWWyBlPNPqPaCXa2/view"
      },
      {
        name: "All Terrain",
        description: "Develop AI models to solve real-world problems.",
        image:P3,
        link: "https://drive.google.com/file/d/1USGhpgPNh6i9TgYXnUoD1fFWmjbcUWE9/view"
      },
      {
        name: "Autonomous",
        description: "Collaborative coding event to create working software.",
        image: P4,
        link: "https://drive.google.com/file/d/1TJIgTUTwW6UDbWdfBVuirJd6JOifGzB8/view"
      }
    ];
  </script>

  <div class="container mx-auto px-4 py-8">
    <div class="mx-auto max-w-5xl text-center">
			<h4 class="text-xl font-bold tracking-tight text-black dark:text-white">Challenges</h4>

			<h2 class="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
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

    <div class="mt-16 mx-8 md:mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {#each challenges as challenge}
        <Card class="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl max-w:">
          <CardHeader class="p-0">
            <enhanced:img
              src={challenge.image}
              alt={challenge.name}
              class="w-full h-65 object-contain"
            />
          </CardHeader>
          <CardContent class="p-4">
            <CardTitle class="text-xl mb-2">{challenge.name}</CardTitle>
            <p class="text-sm text-muted-foreground mb-4">{challenge.description}</p>
          </CardContent>
          <CardFooter class="p-4 pt-0">
            <Button target="_blank" href={challenge.link} variant="default" class="w-full">Learn More</Button>
          </CardFooter>
        </Card>
      {/each}
    </div>
  </div>

  <style>
    :global(.card) {
      display: flex;
      flex-direction: column;
    }

    :global(.card-content) {
      flex-grow: 1;
    }
  </style>