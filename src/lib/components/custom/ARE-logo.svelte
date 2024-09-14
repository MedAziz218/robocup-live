<script lang="ts">
	import ARE_Dark from '$lib/imgs/ARE-Logo-DarkMode.png?enhanced';
	import ARE_Light from '$lib/imgs/ARE-Logo-LightMode.png?enhanced';
</script>

<enhanced:img src={ARE_Light} class="dark:hidden" alt="ARE Logo" {...$$restProps} />
<enhanced:img src={ARE_Dark} class="hidden dark:flex" alt="ARE Logo" {...$$restProps} />
