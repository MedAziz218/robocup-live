<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Card } from '../ui/card';
	import { formSchema, type FormSchema } from './formschema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
    import {cn } from '$lib/utils';
	export let eventDescription: string = 'Default event description';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<div
	class="mx-auto max-w-2xl rounded-lg  p-6 text-foreground shadow-lg  bg-[#E1DBBD] dark:bg-[#1D1C18]"
>
	<h2 class="mb-4 text-2xl font-bold">Challenge Registration</h2>

	<p class="mb-6">{eventDescription}</p>
	<form method="POST" use:enhance class="space-y-4">
		<Card class="bg-white dark:bg-black px-4 py-4">
			<Form.Field {form} name="username">
				<Form.Control let:attrs>
					<Form.Label>Username</Form.Label>
					<Input class="h-min" {...attrs} bind:value={$formData.username} />
				</Form.Control>
				<Form.FieldErrors class="text-red-500" />
			</Form.Field>
		</Card>
        <Card class="bg-white dark:bg-black px-4 py-4">
			<Form.Field {form} name="password" >
				<Form.Control let:attrs>
					<Form.Label>password</Form.Label>
					<Input type="password" {...attrs} bind:value={$formData.password} />
				</Form.Control>
				<Form.FieldErrors class="text-red-500" />
			</Form.Field>
		</Card>
		<Form.Button>Submit</Form.Button>
	</form>
</div>
