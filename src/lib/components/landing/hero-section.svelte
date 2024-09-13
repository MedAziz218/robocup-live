<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';

</script>

<section id="hero" class="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8">
	<h1
		class="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
	>
	 <span class="text-nowrap">
		RoboCup
		<span class="text-primary"> 7.0 </span>
	 </span>
		<br class="hidden md:block" />
		{' '}
		Robots Unleashed
	</h1>
	<p
		class="animate-fade-in mb-8 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl"
	>
		Gear up for an epic showdown of innovation, skill, and cutting-edge robotics at RoboCup 7.0!
		<!-- <br class="hidden md:block" />
		{' '}
		Tailwind CSS, <a href="https://svelte.dev" class="underline underline-offset-2">Svelte</a>, and
		<a href="https://animation-svelte.vercel.app" class="underline underline-offset-2">Svelte Animations</a>. -->
	</p>
	<Button
	class={cn(
		"animate-fade-in -translate-y-4 gap-1 rounded-lgopacity-0 ease-in-out [--animation-delay:600ms] dark:text-black mb-4",

		'group ',
		'transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2'

	)}
	>
		<span>Register Now</span>
		<ArrowRightIcon
			class="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
		/>
	</Button>
</section>
