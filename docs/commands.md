## create, install and run svelte-kit project
```bash
    pnpm create svelte
    pnpm i
    pnpm run dev

```
## to install shadcn-svelte in svelte-kit (link)[https://www.shadcn-svelte.com/docs/installation/sveltekit]
```bash
    pnpm dlx svelte-add@latest tailwindcss
```
## edit svelte.config.js to include this alias
```js
    const config = {
    // ... other config
    kit: {
        // ... other config
        alias: {
        "@/*": "./path/to/lib/*",
        },
    },
    };
```


run the shadcn CLI
```bash
    pnpm dlx shadcn-svelte@latest init
```