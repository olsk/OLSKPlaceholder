<script>
import { OLSKLocalized } from 'OLSKInternational';
</script>

<div class="OLSKDetailPlaceholder OLSKLayoutElementTextVisual">{ OLSKLocalized('OLSKDetailPlaceholderText') }</div>

<style>
.OLSKDetailPlaceholder {
	opacity: 0.5;
	text-align: center;

	/* OLSKDetailPlaceholderFlexbox:Parent */
	display: flex;
	justify-content: center;
	align-items: center;
}

:global(.OLSKIsLoading) .OLSKDetailPlaceholder {
	visibility: hidden;
}
</style>
