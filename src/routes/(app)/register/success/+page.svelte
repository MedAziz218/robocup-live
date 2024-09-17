<script lang="ts">
	import { CheckCircle, Home, Users  } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
    import { Badge } from "$lib/components/ui/badge";
	import { MapPin} from 'lucide-svelte';
    export let data;
	const Event = {
		name: 'Robocup 7.0',
		organizer:"Association Robotique ENSI",
		location: 'National School of Computer Science',

		// street: '123 Event Street',
		// city: 'City',
		// state: 'State',
		// zipCode: '12345',
		// country: 'Country',
		mapUrl: 'https://maps.app.goo.gl/dfXGVadATginpb8t6'
	};
</script>


<div
	class="flex min-h-screen items-center justify-center "
>
	<Card class="w-full max-w-md border-black  dark:bg-[#1D1C18]">
		<CardHeader class="text-center">
			<div
				class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 dark:bg-primary/10"
			>
				<CheckCircle class="h-10 w-10 text-primary" />
			</div>
			<CardTitle class="text-2xl font-bold text-primary">Registration Successful!</CardTitle>
		</CardHeader>
		<CardContent class="text-center">
			<div class="mb-6">
				<p class="text-muted-foreground">
					Thank you for registering for our event. We're excited to have you join us!
				</p>
				<div class="mt-4 flex items-center justify-center space-x-2">
					<Users class="h-5 w-5 text-primary" />
					<span class="text-lg font-semibold">Team:</span>
					<Badge variant="secondary" class="text-lg font-semibold">
						{data.robotName}
					</Badge>
				</div>
			</div>
			<div class="mt-6 space-y-2 text-left">
				<p><strong>Event:</strong> RoboCup 7.0</p>
				<p><strong>Date:</strong> October 13, 2024</p>
				<p><strong>Location:</strong> 
				<a
						href={Event.mapUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center text-blue-400 transition-colors duration-200 hover:text-blue-300"
					>
						<MapPin size={18} class="mr-1" />
						{Event.location}
					</a>
				</p>
			</div>
		</CardContent>
		<CardFooter class="flex justify-center space-x-4">
			<Button variant="default">
				<Home class="mr-2 h-4 w-4" />
				<a href="/">Return to Home</a>
			</Button>
		</CardFooter>
	</Card>
</div>
