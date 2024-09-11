<script lang="ts">

    import  ARE_Dark from "$lib/imgs/ARE-Logo-DarkMode.png"
    import  ARE_Light from "$lib/imgs/ARE-Logo-LightMode.png"
    import { mode } from "mode-watcher";
</script>

{#if $mode === "dark"}
<img src={ARE_Dark} alt="ARE Logo" {...$$restProps}/>
{:else}
<img src={ARE_Light} alt="ARE Logo" {...$$restProps}/>
{/if}