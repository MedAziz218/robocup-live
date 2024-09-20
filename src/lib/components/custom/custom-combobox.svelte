<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Search } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { cn } from '$lib/utils';

	export let placeholder = 'Search...';
    export let zeroSuggestionsMessage = "Bienvenue ! Nous ajouterons votre établissement à la liste très bientôt.";
	export let suggestions: string[] = [
        'ENSTAB', // L'Ecole Nationale des Sciences et Technologies Avancées à Borj Cédria
		'ENIT', // École Nationale d'Ingénieurs de Tunis
		'ENIS', // École Nationale d'Ingénieurs de Sfax
		'ENIM', // École Nationale d'Ingénieurs de Monastir
		'ENIG', // École Nationale d'Ingénieurs de Gabès
		'ENISo', // École Nationale d'Ingénieurs de Sousse
		'INSAT', // Institut National des Sciences Appliquées et de Technologie
		'SUPCOM', // École Supérieure des Communications de Tunis
		'ESPRIT', // École Supérieure Privée d'Ingénierie et de Technologies
		'ISET', // Institut Supérieur des Études Technologiques (Various locations)
		'ISAMM', // Institut Supérieur des Arts Multimédia de La Manouba (Tech fields)
		'ENSIT', // École Nationale Supérieure d'Ingénieurs de Tunis
		'POLYTECH', // École Polytechnique de Tunisie
		'ISG', // Institut Supérieur de Gestion (Tech-focused tracks)
        'ENETCOM',
        'ESSTHS',
        'EPT',
        'ENIB',
	].sort();

	export let inputValue = '';
	let showSuggestions = false;
	let inputElement: HTMLInputElement;
	let selectedIndex = -1;

	$: filteredSuggestions = suggestions
		.filter((suggestion) => suggestion.toLowerCase().includes(inputValue.toLowerCase()))
		.slice(0, 5); // Limit to 5 suggestions

	$: if (filteredSuggestions.length === 0) {
		selectedIndex = -1;
	}

	function handleInput() {
		showSuggestions = inputValue.length > 0;
		selectedIndex = -1;
	}

	function handleBlur() {
		setTimeout(() => {
			showSuggestions = false;
			selectedIndex = -1;
		}, 200);
	}

	function selectSuggestion(suggestion: string) {
		inputValue = suggestion;
		showSuggestions = false;
		selectedIndex = -1;
		inputElement.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!showSuggestions) return;

		switch (event.key) {
            case 'Tab':
			case 'ArrowDown':
				event.preventDefault();
				selectedIndex = (selectedIndex + 1) % filteredSuggestions.length;
				break;
			case 'ArrowUp':
				event.preventDefault();
				selectedIndex = selectedIndex <= 0 ? filteredSuggestions.length - 1 : selectedIndex - 1;
				break;
			case 'Enter':
				if (selectedIndex >= 0) {
					event.preventDefault();
					selectSuggestion(filteredSuggestions[selectedIndex]);
				}
				break;
			case 'Escape':
				showSuggestions = false;
				selectedIndex = -1;
				break;
		}
	}
</script>

<div class="relative w-full">
	<div class="relative">
		<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
		<Input
			class="py-2 pl-10 pr-4"
			bind:value={inputValue}
			on:input={handleInput}
			on:blur={handleBlur}
			on:keydown={handleKeydown}
			bind:this={inputElement}
			{placeholder}
			{...$$restProps}
		/>
	</div>
    {#if inputValue.length > 0 && filteredSuggestions.length == 0 && !showSuggestions}
    <p class="px-4 py-3 text-sm text-green-600 italic">
        {zeroSuggestionsMessage}
      </p>
    {/if}

	{#if showSuggestions && filteredSuggestions.length > 0}
		<ul
			class="absolute z-50 mt-1 w-full overflow-hidden rounded-md border bg-white shadow-lg dark:bg-black"
			transition:fly={{ y: -5, duration: 150 }}
		>
			{#each filteredSuggestions as suggestion, index}
				<li>
					<Button
						variant="ghost"
						class={cn(
							'w-full justify-start font-normal',
							index === filteredSuggestions.length - 1 ? ' border-input ' : 'border-b border-r-0',
							index === selectedIndex ? 'bg-accent text-accent-foreground' : ''
						)}
						on:click={() => selectSuggestion(suggestion)}
						on:mouseenter={() => (selectedIndex = index)}
					>
						{suggestion}
					</Button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	:global(.enhanced-autocomplete-button) {
		transition: background-color 0.2s ease;
	}

	:global(.enhanced-autocomplete-button:hover),
	:global(.enhanced-autocomplete-button:focus) {
		background-color: theme(colors.gray.100);
	}
</style>
