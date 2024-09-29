<script>
	import '../app.css';
    import { ModeWatcher } from 'mode-watcher';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

    injectSpeedInsights();
    inject({ mode: dev ? 'development' : 'production' });
</script>
<ModeWatcher defaultMode={"dark"} />

<slot></slot>
