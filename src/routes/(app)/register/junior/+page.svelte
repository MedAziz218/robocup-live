<script lang="ts">
	import type { PageData } from './$types.js';
	import { Separator } from '$lib/components/ui/separator';
	import JuniorForm from './junior-form.svelte';
	export let data: PageData;
</script>

<div
	class="mt-16 mx-auto max-w-2xl rounded-lg border border-gray-700 bg-background p-6 text-foreground shadow-lg"
>
	<div class="mb-2">
		<h3 class="text-lg font-medium">Formulaire d'inscription au concours JUNIOR : WAVE WARDENS</h3>
		<p class="text-sm text-muted-foreground"></p>

        <div class="">
            <h1 class="font-bold text-blue-400 mb-2">RoboCup ENSI</h1>
            <p class="text-sm mb-2">« RoboCup ENSI » est un événement annuel organisé par l'Association Robotique ENSI. La sixième édition aura lieu le 13 octobre 2024 au sein de l’École Nationale des Sciences de l’Informatique sous le thème :</p>
            <h2 class=" font-semibold text-blue-300 mb-2">CHEMICAL CHAOS</h2>

            <p class="text-sm mb-2">Ce formulaire est dédié aux jeunes roboticiens de moins de 18 ans qui veulent s'inscrire au concours</p>
            <h2 class=" font-semibold text-blue-300 mb-2">WAVE WARDENS - Robot Téléguidé</h2>

            <!-- <div class="bg-gray-800 border-l-4 border-blue-500 p-4 rounded-lg mb-4 text-white dark:test-black"> -->
            <div class="bg-gray-200 border-l-4 border-teal-500 p-4 rounded-lg mb-4 dark:bg-gray-800 dark:border-teal-300">

                <h3 class="text-base font-semibold text-blue-400 mb-1">Présentation du thème :</h3>
                <p class="text-sm font-semibold text-teal-300 mb-1">La Quête de Poséidon et de ses Sentinelles Aquatiques</p>
                <p class="text-sm mb-2">Lorsque les quatre essences vitales de l'élixir de vie se dispersèrent, l'eau fut la première à succomber à une dégradation fulgurante. Les rivières, les lacs et les océans, autrefois miroirs cristallins, se muèrent en fosses toxiques. Les créatures marines agonisaient, et les écosystèmes aquatiques menaçaient de s'effondrer sous le poids du déséquilibre chimique des eaux.</p>
                <p class="text-sm mb-2">Les algues toxiques prolifèrent, privant les eaux d'oxygène et créant des zones mortes où la vie ne pouvait plus prospérer. Les coraux, autrefois vibrants et colorés, blanchissaient et mouraient, laissant derrière eux des squelettes tristes et désolés. Les poissons, les mammifères marins, et les oiseaux qui dépendaient de ces eaux pour leur survie, se retrouvaient en grand danger. Les communautés humaines, dont les vies étaient intimement liées à ces ressources, voyaient leur avenir s'assombrir.</p>
                <p class="text-sm mb-2">Poséidon, le gardien des eaux, perçoit instantanément la perturbation qui infligeait son domaine. D'une stature imposante et majestueuse, ses cheveux argentés évoquant l'écume des vagues, il comprit l'ampleur de la tâche qui l'attendait. Galvanisé par un sens du devoir inébranlable, il se précipita vers son laboratoire, déterminé à sauver les océans du monde. D'une voix calme mais ferme, il convoqua ses sentinelles aquatiques, les robots dépollueurs.</p>
                <p class="text-sm mb-2">Ces prodiges technologiques, conçus pour affronter les conditions sous-marines les plus extrêmes, étaient la dernière chance de réhabiliter les eaux souillées. Dotés de capteurs ultra-sensibles, de filtres puissants et de bras mécaniques capables de manipuler les particules les plus minuscules, ils se lancèrent dans une mission périlleuse :</p>
                <p class="text-sm font-semibold text-teal-300 mb-2">La quête du cristal perdu et la restauration de l’équilibre fragile !</p>
                <p class="text-sm">Poséidon compte sur vous, braves sentinelles ! Votre quête du cristal perdu commence maintenant, et l'avenir des océans repose entre vos mains.</p>
            </div>
        </div>
	</div>
	<Separator />
	<JuniorForm data={data.form}  themeColor="bg-blue-400"/>
</div>

<style>

</style>
