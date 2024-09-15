<script>
    export let color = 'gray-300';
    export let thickness = '2px';
    export let length = '100%';
    export let orientation = 'horizontal';
    export let margin = 'my-4';
    export let label = '';
  </script>

  <div class="separator-container {margin} flex items-center justify-center">
    {#if orientation === 'horizontal'}
      <div class="separator-line bg-{color}" style="height: {thickness}; width: {length};"></div>
    {:else}
      <div class="separator-line bg-{color}" style="width: {thickness}; height: {length};"></div>
    {/if}

    {#if label}
      <span class="separator-label mx-2 text-sm text-gray-500">{label}</span>
    {/if}
  </div>

  <style>
    .separator-container {
      display: flex;
      align-items: center;
    }

    .separator-line {
      flex-grow: 1;
    }

    .separator-label {
      white-space: nowrap;
    }
  </style>