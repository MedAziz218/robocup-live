<script lang="ts">
	import type { PageData } from './$types.js';
	import { Separator } from '$lib/components/ui/separator';
	import AllTerrainForm from './all-terrain-form.svelte';
	export let data: PageData;
</script>

<div
	class="mx-auto max-w-2xl rounded-lg border border-gray-700 bg-background p-6 text-foreground shadow-lg"
>
	<div class="mb-2">
		<h3 class="text-lg font-medium">Formulaire d'inscription au concours TOUT TERRAIN :THE HELLISH BLAST</h3>
		<p class="text-sm text-muted-foreground"></p>

        <div class="">
            <h1 class="font-bold text-red-600 mb-2">RoboCup ENSI</h1>
            <p class="text-sm mb-2">« RoboCup ENSI » est un événement annuel organisé par l'Association Robotique ENSI. La sixième édition aura lieu le 13 octobre 2024 au sein de l’École Nationale des Sciences de l’Informatique sous le thème :</p>
            <h2 class=" font-semibold text-red-500 mb-2">CHEMICAL CHAOS</h2>

            <p class="text-sm mb-2">Ce formulaire est dédié à ceux qui veulent s'inscrire au concours :</p>
            <h2 class=" font-semibold text-red-500 mb-2">THE HELLISH BLAST - Robot téléguider tout-terrain</h2>

            <div class="bg-gray-200 border-l-4 border-red-500 p-4 rounded-lg mb-4 dark:bg-gray-800 dark:border-red-300">
                <h3 class="text-base font-semibold text-red-600 mb-1">Présentation du thème :</h3>
                <p class="text-sm mb-2">Ma vie n’a pas toujours été ainsi. Ce qui semble maintenant être un endroit solitaire était autrefois vibrant et plein de vie. Les forêts luxuriantes, les vastes océans et les montagnes imposantes caractérisaient cette planète prospère. Les rires des enfants, les mélodies des oiseaux et les brises douces étaient constants tout au long de l’année. Les volcans n’étaient pas craints, mais vénérés, fournissant une énergie propre précieuse. Mes pouvoirs assuraient la paix et l’harmonie.</p>
                <p class="text-sm mb-2">Tout s’est effondré avec la perte de l’élément feu. Une nuit, un bruit étrange m’a réveillée : les plantes hurlaient de douleur. En me précipitant à la fenêtre, j’ai vu l’atmosphère se teinter d’un rouge profond et inquiétant, chargée de gaz lithium, toxique et suffocant.</p>
                <p class="text-sm mb-2">Le paysage, autrefois serein, est maintenant en ruines. Les forêts vibrantes sont devenues des vestiges squelettiques sous un ciel pourpre. Le sol, autrefois fertile, est fissuré et stérile, écrasé par le poids du gaz. Les cris désespérés des créatures résonnent dans le désert, leur quête de refuge étant vaine.</p>
                <p class="text-sm mb-2">En observant la dévastation, j’ai réalisé l’ampleur de la catastrophe : l’équilibre des éléments a été brisé. La perte de l’élément feu a non seulement éteint les flammes physiques mais aussi provoqué un cataclysme ravageur. Les gens errent dans les rues, leurs visages déformés par l’agonie. Le rire des enfants a cédé la place à des cris de désespoir, et les oiseaux se sont tus. Les volcans ont éclaté violemment, les forêts se sont fanées, et les océans grouillants sont devenus morts.</p>
                <p class="text-sm mb-2">Mes pouvoirs, jadis une force d’harmonie, semblent désormais insuffisants face à la destruction. J’ai réussi à temporairement stopper quelques volcans, mais ce n’est qu’un répit. Désespérée, j’ai décidé de lancer une nouvelle mission avec vos capacités avancées. Chers robots, vous êtes notre dernier espoir. Vous devez partir à la recherche de l’élément manquant et sauver ce qui peut encore l’être. Le chemin sera difficile et semé d’embûches, mais votre technologie offre une lueur d’espoir.</p>
            </div>
        </div>
	</div>
	<Separator />
	<AllTerrainForm data={data.form} />
</div>

<style>

</style>
