<script>
  import { Turnstile } from 'svelte-turnstile';
  import {PUBLIC_recaptcha_site_key} from '$env/static/public'
</script>

<Turnstile siteKey={PUBLIC_recaptcha_site_key} />