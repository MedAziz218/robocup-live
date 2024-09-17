<script lang="ts">
	import type { PageData } from './$types.js';
	import { Separator } from '$lib/components/ui/separator';
	import LineFollowerForm from './linefollower-form.svelte';
	export let data: PageData;
</script>

<div
	class="mt-16 mx-auto max-w-2xl rounded-lg border border-gray-700 bg-background p-6 text-foreground shadow-lg"
>
	<div class="mb-2">
		<h3 class="text-lg font-medium">Formulaire d'inscription au concours SUIVEUR DE LIGNE : EARTH'S LAST HOPE</h3>
		<p class="text-sm text-muted-foreground"></p>

        <div class="">
            <h1 class="font-bold text-green-600 mb-2">RoboCup ENSI</h1>
            <p class="text-sm mb-2">« RoboCup ENSI » est un événement annuel organisé par l'Association Robotique ENSI. La sixième édition aura lieu le 13 octobre 2024 au sein de l’École Nationale des Sciences de l’Informatique sous le thème :</p>
            <h2 class="font-semibold text-green-500 mb-2">CHEMICAL CHAOS</h2>

            <p class="text-sm mb-2">Ce formulaire est dédié à ceux qui veulent s'inscrire au concours :</p>
            <h2 class="font-semibold text-green-500 mb-2">EARTH'S LAST HOPE - Robot suiveur de ligne</h2>

            <div class="bg-gray-200 border-l-4 border-green-500 p-4 rounded-lg mb-4 dark:bg-gray-800 dark:border-green-300">
                <h3 class="text-base font-semibold text-green-600 mb-1">Présentation du thème :</h3>
                <p class="text-sm font-semibold text-teal-500 mb-1">Dans le Royaume de la Terre, se dressait un temple sacré dédié à Gaïa, la fabuleuse déesse de la Terre. Au cœur de ce temple trônait la Pierre de Vie, une gemme étincelante remplie d'énergie vitale. Cette pierre assurait prospérité, moissons abondantes, forêts verdoyantes et rivières chantantes au royaume. Mais un jour, BAM ! Le temple se retrouva enseveli sous des montagnes de gravats. La Pierre de Vie se perd alors dans un labyrinthe aussi compliqué qu'un puzzle de 1000 pièces, piégé par le temps et les épreuves. Le Royaume de la Terre n'est plus qu'une ombre de sa splendeur passée. Les champs sont devenus aussi stériles qu'une feuille de papier, les forêts aussi rares qu'un wifi dans la nature, et les rivières, elles, ressemblent plus à des rigoles désolées.</p>
                <p class="text-sm mb-2">Le peuple, au bord du désespoir (et d'une sécheresse de motivation), décide qu'il est grand temps de récupérer la Pierre de Vie pour ramener la prospérité. Mais qui pourrait accomplir une telle mission.</p>
                <p class="text-sm mb-2">Sentant la détresse de son peuple et la souffrance de la terre, Gaïa, la déesse bienveillante, décide d'intervenir. Apparaissant dans un rêve partagé par les plus grands ingénieurs et artisans du royaume, elle leur révèle une vision : celle d'un robot extraordinaire, ZVENDEN. Gaïa leur montre comment utiliser le zinc, un métal rare et magique, pour fabriquer ce protecteur mécanique. Le zinc, avec ses propriétés énergétiques et protectrices, sera essentiel pour canaliser l'énergie de la Pierre de Vie.</p>
            </div>
        </div>
	</div>
	<Separator />
	<LineFollowerForm themeColor="bg-green-600" data={data.form} />
</div>

<style>

</style>
