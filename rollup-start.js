import RollupStart from './main.svelte';

const OLSKDetailPlaceholder = new RollupStart({
	target: document.body,
	props: Object.assign({
		OLSKDetailPlaceholderDispatchStorage () {
			window.TestOLSKDetailPlaceholderDispatchStorage.innerHTML = parseInt(window.TestOLSKDetailPlaceholderDispatchStorage.innerHTML) + 1;
		},
	}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()))),
});

export default OLSKDetailPlaceholder;
