<script lang="ts" context="module">
	import { z } from 'zod';
	const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])*$|^$/);

	const required_error_message = 'ce champ est obligatoire';
	const too_long_error_message = 'la valeur entree est trop longue';
	const too_short_error_message = 'la valeur entree est trop courte';
	const invalid_phone_number_error_message = 'ce numero de telephone est invalide';
	const invalid_email_error_message = 'ce email est invalide';
	export const lineFollowerFormSchema = z.object({
		robotName: z
			.string()
			.min(1, required_error_message)
			.min(2, too_short_error_message)
			.max(30, too_long_error_message),
		teamSize: z.enum(['1', '2', '3']),
		teamLeaderName: z
			.string()
			.min(1, required_error_message)
			.min(2, too_short_error_message)
			.max(50, too_long_error_message),
		teamLeaderPhoneNumber: z
			.string()
			.min(1, required_error_message)
			.regex(phoneRegex, invalid_phone_number_error_message),
		otherPhoneNumber: z
			.string()
			.min(1, required_error_message)
			.regex(phoneRegex, invalid_phone_number_error_message),
		teamLeaderEmail: z.string().min(1, required_error_message).email(invalid_email_error_message),

		secondTeamMemberName: z.string().min(0).max(50, too_long_error_message).optional(),
		secondTeamMemberPhoneNumber: z
			.string()
			.min(0)
			.regex(phoneRegex, invalid_phone_number_error_message)
			.optional(),
		secondTeamMemberEmail: z.string().min(0).email(invalid_email_error_message).optional(),

		thirdTeamMemberName: z.string().min(0).max(50, too_long_error_message).optional(),
		thirdTeamMemberPhoneNumber: z
			.string()
			.min(0)
			.regex(phoneRegex, invalid_phone_number_error_message)
			.optional(),
		thirdTeamMemberEmail: z.string().min(0).email(invalid_email_error_message).optional(),

		establishmentName: z
			.string()
			.min(1, required_error_message)
			.min(2, too_short_error_message)
			.max(50, too_long_error_message),
		clubName: z
			.string()
			.min(1, required_error_message)
			.min(2, too_short_error_message)
			.max(50, too_long_error_message)
	});

	export type LineFollowerFormSchema = typeof lineFollowerFormSchema;
</script>

<script lang="ts">
	import { type Infer, type SuperValidated, superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { onMount, onDestroy } from 'svelte';
	import * as Form from '$lib/components/ui/form/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { cn } from '$lib/utils.js';
	import { browser } from '$app/environment';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	export let data: SuperValidated<Infer<LineFollowerFormSchema>>;
	export let themeColor = 'bg-red-500';
	const form = superForm(data, {
		validators: zodClient(lineFollowerFormSchema)
	});

	let { form: formData, enhance } = form;
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
		localStorage.setItem('linefollower-form', JSON.stringify($formData));
	};

	// Load form from localStorage
	const loadForm = () => {
		const savedForm = localStorage.getItem('linefollower-form');
		if (savedForm) {
			$formData = JSON.parse(savedForm);
		}
		console.log(savedForm);
		console.log($formData);
	};
	const clearForm = () => {
		$formData = {
			robotName: '',
			teamSize: '1',
			teamLeaderName: '',
			teamLeaderPhoneNumber: '',
			clubName: '',
			establishmentName: '',
			otherPhoneNumber: '',
			teamLeaderEmail: ''
		};
		localStorage.removeItem('linefollower-form');
	};
	onMount(() => {
		loadForm();
	});
	onDestroy(() => {
		saveForm();
	});
</script>

<form method="POST" class="space-y-8" use:enhance id="profile-form">
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
			<!-- <Input
				placeholder="le nombre des membres de l'équipe"
				{...attrs}
				bind:value={$formData.teamSize}
			/> -->
			<RadioGroup bind:value={$formData.teamSize}>
				{#each lineFollowerFormSchema.shape.teamSize.options || [] as option}
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
			}}>Envoyer</Form.Button
		>
		<Button variant="ghost" on:click={clearForm}>Effacer le formulaire</Button>
	</div>
</form>

{#if browser}
	<SuperDebug data={$formData} />
{/if}
