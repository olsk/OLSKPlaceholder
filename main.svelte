<script>
import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};
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
