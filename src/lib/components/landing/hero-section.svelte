<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import BorderBeam from '$lib/components/magic/borderbeam/BorderBeam.svelte';

	import type { ObserverEventDetails } from 'svelte-inview';
	import { inview } from 'svelte-inview';


	import HeroVideoDialog from '../magic/HeroVideoDialog/HeroVideoDialog.svelte';
	export let hero_video_link="https://www.youtube.com/watch?v=SbYXkOAoZpI"

	let inView = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		console.log(detail);
		inView = detail.inView;

	};
</script>

<section id="hero" class="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8">
	<h1
		class="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
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
		class="mb-8 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl"
	>
		Gear up for an epic showdown of innovation, skill, and cutting-edge robotics at RoboCup 7.0!
		<!-- <br class="hidden md:block" />
		{' '}
		Tailwind CSS, <a href="https://svelte.dev" class="underline underline-offset-2">Svelte</a>, and
		<a href="https://animation-svelte.vercel.app" class="underline underline-offset-2">Svelte Animations</a>. -->
	</p>

	<Button
		href="/register"
		class={cn(
			'rounded-lgopacity-0 mb-4 -translate-y-4 animate-fade-in gap-1 ease-in-out [--animation-delay:600ms] dark:text-black',
			'animate-shine bg-[linear-gradient(110deg,#FBD12C,15%,#FFF740,25%,#FBD12C)] bg-[length:200%_100%] ',
			'group ',
			'transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2'
		)}
	>
		<span>Register Now</span>
		<ArrowRightIcon
			class="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
		/>
	</Button>

	<div
		use:inview={{
			unobserveOnEnter: true,
			rootMargin: '-1px'
		}}
		on:inview_change={handleChange}
		class="relative mt-16 md:mt-32 "
	>

	</div>

	<div id="hero-video" class="relative  ">
		<div
			class="rounded-xl border border-white/10 bg-white bg-opacity-[0.01]
			 before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0
			 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)]
			 before:[filter:blur(180px)] {inView?'before:animate-image-glow':''} "
		>
			<BorderBeam />
			<HeroVideoDialog
				animationStyle="from-center"
				videoSrc={hero_video_link}
				thumbnailSrc="%sveltekit.assets%/robocup7.0_flyer.jpg"
				thumbnailAlt="Hero Video"
			/>
		</div>
	</div>
</section>
