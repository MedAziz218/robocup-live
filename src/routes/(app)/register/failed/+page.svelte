<script lang="ts">
	import { AlertTriangle, RefreshCcw, Home } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
	import { goto } from '$app/navigation';

	export let errorCode: number = 500;
	export let errorMessage: string = "We're sorry, but something went wrong on our end.";

	function tryAgainCallback() {
		goto('/register');
	}
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-r from-destructive/20 to-destructive/10 p-4 dark:from-destructive/10 dark:to-destructive/5"
>
	<Card class="w-full max-w-md border border-black">
		<CardHeader class="text-center">
			<div
				class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/20 dark:bg-destructive/10"
			>
				<AlertTriangle class="h-10 w-10 text-destructive" />
			</div>
			<CardTitle class="text-2xl font-bold text-destructive">Oops! Something Went Wrong</CardTitle>
		</CardHeader>
		<CardContent>
			<Alert variant="destructive">
				<AlertTriangle class="h-4 w-4" />
				<AlertTitle>Error {errorCode}</AlertTitle>
				<AlertDescription>{errorMessage}</AlertDescription>
			</Alert>
			<div class="mt-6 space-y-2">
				<p class="text-center text-muted-foreground">
					We apologize for the inconvenience. Our team has been notified and is working to resolve
					the issue.
				</p>
				<p class="text-center text-muted-foreground">
					In the meantime, you can try again or return to the homepage.
				</p>
			</div>
		</CardContent>
		<CardFooter class="flex justify-center space-x-4">
			<Button on:click={tryAgainCallback}>
				<RefreshCcw class="mr-2 h-4 w-4" />
				Try Again
			</Button>
			<Button variant="outline">
				<a href="/" class="flex items-center">
					<Home class="mr-2 h-4 w-4" />
					Go to Homepage
				</a>
			</Button>
		</CardFooter>
	</Card>
</div>
