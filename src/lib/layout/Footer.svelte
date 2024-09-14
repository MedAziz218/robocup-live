<script lang="ts">
	import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Check } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import {ARE_Logo} from '$lib/components/custom'
	// Easily editable constants for location and social links
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

	const socialLinks = [
		{ name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/association.robotique.ensi' },
		{ name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/association.robotique.ensi/' },
		{ name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@associationrobotiqueensi6742' }
	];
	// Easily modifiable lists for phone numbers and emails
	const phoneNumbers = ['99 640 054'];

	const emails = ['Association.robotique@ensi-uma.tn'];

	let copiedItem = '';
	let timeout: number;
	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text).then(() => {
			clearTimeout(timeout);
			copiedItem = text;
			toast.success('Copied to clipboard!');
			timeout = setTimeout(() => {
				copiedItem = '';
				toast.dismiss();
			}, 2000);
		});
	}
</script>

<footer id="footer" >
	<div class="container mx-auto pt-8 px-4 mt-16 md:mt-32 border-t  border-gray-700 " >
		<div class="flex flex-col items-center justify-between lg:flex-row lg:items-start">
			<!-- <div class="mb-8 hidden sm:block lg:mb-0 lg:mr-8">
				<ARE_Logo style="width: 200px;height: 200px" />
			</div> -->
			<div class="grid grid-cols-1 gap-12 text-center md:grid-cols-3 lg:flex-grow">
				<div class="flex flex-col items-center space-y-4">
					<h3 class="mb-2 text-xl font-semibold">Event Location</h3>
					<p>{Event.location}</p>
					<a
						href={Event.mapUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-2 inline-flex items-center text-blue-400 transition-colors duration-200 hover:text-blue-300"
					>
						<MapPin size={18} class="mr-2" />
						View on Google Maps
					</a>
				</div>
				<div class="flex flex-col items-center space-y-4">
					<h3 class="mb-2 text-xl font-semibold">Contact Us</h3>
					<div class="space-y-2">
						{#each phoneNumbers as phoneNumber}
							<button
								on:click={() => copyToClipboard(phoneNumber)}
								class="flex items-center justify-center transition-colors duration-200 hover:text-blue-400"
							>
								{#if copiedItem === phoneNumber}
									<Check size={18} class="mr-2 text-green-500" />
								{:else}
									<Phone size={18} class="mr-2" />
								{/if}
								{phoneNumber}
							</button>
						{/each}
					</div>
					<div class="space-y-2">
						{#each emails as email}
							<button
								on:click={() => copyToClipboard(email)}
								class="flex items-center justify-center transition-colors duration-200 hover:text-blue-400"
							>
								{#if copiedItem === email}
									<Check size={18} class="mr-2 text-green-500" />
								{:else}
									<Mail size={18} class="mr-2" />
								{/if}
								{email}
							</button>
						{/each}
					</div>
				</div>
				<div class="flex flex-col items-center space-y-4">
					<h3 class="mb-2 text-xl font-semibold">Follow Us</h3>
					<div class="flex space-x-6">
						{#each socialLinks as { name, icon: Icon, url }}
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								class="transition-colors duration-200 hover:text-blue-400"
							>
								<Icon size={28} />
								<span class="sr-only">{name}</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="mt-12  border-gray-700 py-2 text-center text-muted-foreground" >
			<p>&copy; {new Date().getFullYear()} {Event.organizer}. All rights reserved.</p>
		</div>
	</div>
</footer>
