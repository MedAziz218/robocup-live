<script lang="ts">
	import { type Infer, type SuperValidated, superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { onMount, onDestroy } from 'svelte';
	import * as Form from '$lib/components/ui/form/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { cn } from '$lib/utils.js';
	import { browser } from '$app/environment';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { InfinityIcon } from 'lucide-svelte';
	import Alert from '$lib/components/ui/alert/alert.svelte';
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import { AutonomousFormSchema as FormSchema} from './formSchema';
	import type {  AutonomousFormSchemaType as FormSchemaType } from './formSchema';
	import { page } from '$app/stores';

	export let data: SuperValidated<Infer<FormSchemaType>>;
	export let themeColor = 'bg-red-500';
	let clearFormOnDestroy = false;
	const setClearFormOnDestroy = (v: boolean) => {
		clearFormOnDestroy = v;
	};
	const getClearFormOnDestroy = () => {
		return clearFormOnDestroy;
	};
	const _form_id = 'autonomous-form';
	const form = superForm(data, {
		validators: zodClient(FormSchema),
		multipleSubmits: 'prevent',
		clearOnSubmit: 'errors',
		applyAction: false,
		autoFocusOnError: true,
		onUpdate: ({ form ,result }) => {
			console.log('type: ',result.type,'status: ',result.status);
			if (result.type=="success" && result.data.googleFormSuccess) {
				const robotName = form.data.robotName;
				const link = `/register/success?robotName=${encodeURIComponent(robotName)}`;
				setClearFormOnDestroy(true);
				clearForm();
				goto(link);
				// console.log('goto link', link);
			}else if (result.type=="failure" && form.valid && !result.data.googleFormSuccess) {
				// goto('/register/failed');
				// console.log(result.type)
				const stat = result.status
				const link = `/register/failed?status=${encodeURIComponent(stat)}`;
				saveForm();
				goto(link);
				// console.log('faileddddddddddddd')

			}

		},

		// onResult: (e) => {
		// 	// console.log('got result', e);

		// 	if (e.result.type === 'success') {
		// 		clearForm();
		// 		setClearFormOnDestroy(true);
		// 		const formData = e.result.data?.form?.data;
		// 		const robotName = formData?.robotName;
		// 		const link = `/register/success?robotName=${encodeURIComponent(robotName)}`;
		// 		// console.log('link', link);
		// 		// console.log('form data', formData);
		// 		// console.log(e);
		// 		goto(link);
		// 	} else {
		// 		throw redirect(500, '/register/failed');
		// 	}
		// },
		invalidateAll: false,
		resetForm: false
	});

	let { form: formData, enhance, delayed, timeout, message } = form;
	
	const isRequired = (field: string) => {
		const requiredFields = [
			'robotName',
			'teamLeaderName',
			'teamLeaderPhoneNumber',
			'otherPhoneNumber',
			'teamLeaderEmail',
			'establishmentName',
			'clubName'
		];

		return requiredFields.includes(field);
	};
	// Save form to localStorage
	const saveForm = () => {
		localStorage.setItem(_form_id, JSON.stringify(form.capture()));
	};

	// Load form from localStorage
	const loadForm = () => {
		const savedForm = localStorage.getItem(_form_id);
		if (savedForm) {
			form.restore(JSON.parse(savedForm));
		}
		// console.log(savedForm);
		// console.log($formData);
	};
	const clearForm = () => {
		form.reset();
		localStorage.removeItem(_form_id);
	};
	onMount(() => {
		try {
			loadForm();
		} catch (e) {}
	});
	onDestroy(() => {
		try {
			if (getClearFormOnDestroy()) {
				clearForm();
			} else {
				saveForm();
			}
		} catch (e) {}
	});
</script>

<form method="POST" class="mb-8 space-y-8" use:enhance id="profile-form">
	<hr class={'h-0.5 rounded-xl  border-0 ' + themeColor} />

	<Form.Field {form} name="robotName">
		<Form.Control let:attrs>
			<Form.Label>
				Nom du robot:
				{#if isRequired('robotName')}<span class="ml-2 text-red-500">*</span>{/if}
			</Form.Label>
			<Input placeholder="le nom de votre robot" {...attrs} bind:value={$formData.robotName} />
		</Form.Control>
		<Form.Description>Nom de votre équipe pour la compétition.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Separator />

	<Form.Field {form} name="teamSize">
		<Form.Control let:attrs>
			<Form.Label>
				Le nombre des membres de l'équipe:
				{#if isRequired('teamSize')}<span class="ml-2 text-red-500">*</span>{/if}
			</Form.Label>
			<Input
				class="hidden"
				type="number"
				placeholder="le nombre des membres de l'équipe"
				{...attrs}
				bind:value={$formData.teamSize}
			/>
			<RadioGroup bind:value={$formData.teamSize}>
				{#each ['1', '2', '3'] as option}
					<div class="flex items-center space-x-2">
						<RadioGroupItem value={option} id={`teamSize-${option}`} />
						<Label for={`teamSize-${option}`}>{option}</Label>
					</div>
				{/each}
			</RadioGroup>
		</Form.Control>

		<Form.FieldErrors />
	</Form.Field>

	<hr class={'h-0.5 rounded-xl  border-0 ' + themeColor} />

	<Form.Field {form} name="teamLeaderName">
		<Form.Control let:attrs>
			<Form.Label>
				Nom et prénom du chef d'équipe:
				{#if isRequired('teamLeaderName')}<span class="ml-2 text-red-500">*</span>{/if}
			</Form.Label>
			<Input
				placeholder="nom et prénom du chef d'équipe"
				{...attrs}
				bind:value={$formData.teamLeaderName}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Separator />

	<Form.Field {form} name="teamLeaderPhoneNumber">
		<Form.Control let:attrs>
			<Form.Label>
				Numéro de téléphone du chef d'équipe:
				{#if isRequired('teamLeaderPhoneNumber')}<span class="ml-2 text-red-500">*</span>{/if}
			</Form.Label>
			<Input
				placeholder="numéro de telephone du chef d'équipe"
				{...attrs}
				bind:value={$formData.teamLeaderPhoneNumber}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Separator />

	<Form.Field {form} name="otherPhoneNumber">
		<Form.Control let:attrs>
			<Form.Label>
				Un autre numéro de téléphone:
				{#if isRequired('otherPhoneNumber')}<span class="ml-2 text-red-500">*</span>{/if}
			</Form.Label>
			<Input
				placeholder="un autre numéro de telephone"
				{...attrs}
				bind:value={$formData.otherPhoneNumber}
			/>
		</Form.Control>
		<Form.FieldErrors />
		<Form.Description
			>un deuxieme numero de telephone pour communiquer avec votre chef d'équipe</Form.Description
		>
	</Form.Field>
	<Separator />

	<Form.Field {form} name="teamLeaderEmail">
		<Form.Control let:attrs>
			<Form.Label>
				E-mail du chef d'équipe:
				{#if isRequired('teamLeaderEmail')}<span class="ml-2 text-red-500">*</span>{/if}
			</Form.Label>
			<Input
				placeholder="email du chef d'équipe"
				{...attrs}
				bind:value={$formData.teamLeaderEmail}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	{#if $formData.teamSize >= '2'}
		<hr class={'h-0.5 rounded-xl  border-0 ' + themeColor} />

		<Form.Field {form} name="secondTeamMemberName">
			<Form.Control let:attrs>
				<Form.Label>
					Nom et Prénom du deuxième membre:
					{#if isRequired('secondTeamMemberName')}<span class="ml-2 text-red-500">*</span>{/if}
				</Form.Label>
				<Input
					placeholder="nom et prénom du membre"
					{...attrs}
					bind:value={$formData.secondTeamMemberName}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="secondTeamMemberPhoneNumber">
			<Form.Control let:attrs>
				<Form.Label>
					Numéro de téléphone du deuxième membre:
					{#if isRequired('secondTeamMemberPhoneNumber')}<span class="ml-2 text-red-500">*</span
						>{/if}
				</Form.Label>
				<Input
					placeholder="numéro de telephone du membre"
					{...attrs}
					bind:value={$formData.secondTeamMemberPhoneNumber}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="secondTeamMemberEmail">
			<Form.Control let:attrs>
				<Form.Label>
					Email du deuxième membre:
					{#if isRequired('secondTeamMemberEmail')}<span class="ml-2 text-red-500">*</span>{/if}
				</Form.Label>
				<Input
					placeholder="email du chef d'équipe"
					{...attrs}
					bind:value={$formData.secondTeamMemberEmail}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
	{/if}
	{#if $formData.teamSize >= '3'}
		<hr class={'h-0.5 rounded-xl  border-0 ' + themeColor} />

		<Form.Field {form} name="thirdTeamMemberName">
			<Form.Control let:attrs>
				<Form.Label>
					Nom et Prénom du troixieme membre:
					{#if isRequired('thirdTeamMemberName')}<span class="ml-2 text-red-500">*</span>{/if}
				</Form.Label>
				<Input
					placeholder="nom et prénom du membre"
					{...attrs}
					bind:value={$formData.thirdTeamMemberName}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Separator />

		<Form.Field {form} name="thirdTeamMemberPhoneNumber">
			<Form.Control let:attrs>
				<Form.Label>
					Numéro de téléphone du troixieme membre:
					{#if isRequired('thirdTeamMemberPhoneNumber')}<span class="ml-2 text-red-500">*</span
						>{/if}
				</Form.Label>
				<Input
					placeholder="numéro de telephone du membre"
					{...attrs}
					bind:value={$formData.thirdTeamMemberPhoneNumber}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Separator />

		<Form.Field {form} name="thirdTeamMemberEmail">
			<Form.Control let:attrs>
				<Form.Label>
					Email du troixieme membre:
					{#if isRequired('thirdTeamMemberEmail')}<span class="ml-2 text-red-500">*</span>{/if}
				</Form.Label>
				<Input
					placeholder="email du chef d'équipe"
					{...attrs}
					bind:value={$formData.thirdTeamMemberEmail}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<br class="rounded-lg border border-red-500" />
	{/if}

	<hr class={'h-0.5 rounded-xl  border-0 ' + themeColor} />

	<Form.Field {form} name="establishmentName">
		<Form.Control let:attrs>
			<Form.Label>
				Établissement:
				{#if isRequired('establishmentName')}<span class="ml-2 text-red-500">*</span>{/if}
			</Form.Label>
			<Input
				placeholder="nom de l'établissement"
				{...attrs}
				bind:value={$formData.establishmentName}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Separator />

	<Form.Field {form} name="clubName">
		<Form.Control let:attrs>
			<Form.Label>
				Nom du Club/Association:
				{#if isRequired('clubName')}<span class="ml-2 text-red-500">*</span>{/if}
			</Form.Label>
			<Input placeholder="nom du club/association" {...attrs} bind:value={$formData.clubName} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<div class="flex justify-between">
		<Form.Button
			on:click={() => {
				saveForm();
			}}
			disabled={$delayed}
		>
			{#if $delayed}
				<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
			{/if}
			Envoyer</Form.Button
		>
		<Button variant="ghost" on:click={clearForm}>Effacer le formulaire</Button>
	</div>
</form>

<!-- {#if browser}
	<SuperDebug data={$formData} />
{/if} -->
