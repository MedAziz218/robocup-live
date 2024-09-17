<script lang="ts">
	import type { PageData } from './$types.js';
	import { Separator } from '$lib/components/ui/separator';
	import AutonomousForm from './autonomous-form.svelte'
	export let data: PageData;
</script>

<div
	class="mt-16 mx-auto max-w-2xl rounded-lg border border-gray-700 bg-background p-6 text-foreground shadow-lg"
>
	<div class="mb-2">
		<h1 class="text-lg font-medium">Formulaire d'inscription au concours AUTONOME : SKYPIEA</h1>

        <div class="">
            <h3 class="font-bold text-blue-600 mb-2">RoboCup ENSI</h3>
            <p class="text-sm mb-2">« RoboCup ENSI » est un événement annuel organisé par l'Association Robotique ENSI. La sixième édition aura lieu le 13 octobre 2024 au sein de l’École Nationale des Sciences de l’Informatique sous le thème :</p>
            <h3 class=" font-semibold text-blue-500 mb-2">CHEMICAL CHAOS</h3>

            <p class="text-sm mb-2">Ce formulaire est dédié à ceux qui veulent s'inscrire au concours :</p>
            <h3 class=" font-semibold text-blue-500 mb-2">SKYPIEA - Robot autonome</h3>

            <div class="bg-gray-200 border-l-4 border-blue-500 p-4 rounded-lg mb-4 dark:bg-gray-800 dark:border-blue-300">
                <h3 class="text-base font-semibold text-blue-600 mb-1">Présentation du thème :</h3>
                <p class="text-sm mb-2">Dans un monde enchanteur, le Royaume des Vents flotte majestueusement dans les cieux, soutenu par une pierre mystique d'une puissance immense. Cette pierre enchantée est protégée par un isolant chimique spécial, qui empêche les gaz toxiques de s'échapper et de polluer l'air pur du royaume. Cependant, un jour fatidique, les ingrédients chimiques précieux viennent à manquer, mettant le royaume en grand danger.</p>
                <p class="text-sm mb-2">C'est alors qu'intervient le Gardien Zephyrus, le protecteur intrépide des cieux. Conscient de la gravité de la situation, il ordonne à son équipe de robots avancés de se lancer dans une mission cruciale. Leur quête : découvrir un nouvel isolant chimique à partir des ingrédients variés présents dans le laboratoire du royaume. Ces robots devront naviguer à travers un labyrinthe de défis scientifiques, déchiffrant les secrets de la chimie pour trouver une solution qui égalera les propriétés protectrices de l'isolant initial.</p>
                <p class="text-sm mb-2">Rejoignez-nous dans cette aventure palpitante où l'innovation rencontre l'urgence, alors que les robots plongent au cœur du laboratoire du Royaume. Leur ingéniosité et leur détermination seront mises à l'épreuve ultime dans une course contre la montre pour sauver leur royaume flottant d'une catastrophe imminente. Découvrez leur périple et le drame de haute volée se dérouler dans cette quête épique pour préserver l'équilibre délicat de leur monde aérien.</p>
            </div>
        </div>
	</div>
	<Separator />
	<AutonomousForm data={data.form}  themeColor="bg-blue-600"/>
</div>

<style>

</style>
