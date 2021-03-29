<script>
import { OLSKLocalized } from 'OLSKInternational';
</script>

<div class="OLSKDetailPlaceholder OLSKDecorTextVisual">{ OLSKLocalized('OLSKDetailPlaceholderText') }</div>

<style>
.OLSKDetailPlaceholder {
	opacity: 0.5;
	text-align: center;

	color: var(--OLSKCommonForeground);

	/* OLSKDetailPlaceholderFlexbox:Parent */
	display: flex;
	justify-content: center;
	align-items: center;
}

:global(.OLSKIsLoading) .OLSKDetailPlaceholder {
	visibility: hidden;
}
</style>
