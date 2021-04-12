<script>
export let OLSKPlaceholderHTML = '';

import { OLSKLocalized } from 'OLSKInternational';
</script>

<div class="OLSKPlaceholder OLSKDecorTextVisual">{ @html OLSKPlaceholderHTML || OLSKLocalized('OLSKPlaceholderText') }</div>

<style>
.OLSKPlaceholder {
	opacity: 0.5;
	text-align: center;

	color: var(--OLSKCommonForeground);

	/* OLSKPlaceholderFlexbox:Parent */
	display: flex;
	justify-content: center;
	align-items: center;
}

:global(.OLSKIsLoading) .OLSKPlaceholder {
	visibility: hidden;
}
</style>
