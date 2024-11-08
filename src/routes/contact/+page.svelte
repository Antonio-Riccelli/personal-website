<script>
	import { Listgroup } from 'flowbite-svelte';
	import contactLinks from '$lib/data/contactLinks';
	const listDefaultClass =
		'p-0 w-full hover:bg-sky-500 hover:text-white text-black text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg';
	const listHoverClass =
		'hover:bg-gray-100 text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:hover:outline dark:hover:outline-2 dark:hover:outline-blue-600';
</script>

<div
	class="flex flex-col items-center justify-center flex-wrap mt-20 mb-20 p-6 w-full h-full font-bold text-2xl m-auto text-center lightmode-bg dark:bg-black"
>
	<h1>Find me at:</h1>

	<Listgroup active class="w-48 m-auto my-6 bg-sky-900  text-white dark:bg-gray-800">
		{#each contactLinks as { name, href }}
			<li class="{listDefaultClass} {listHoverClass}">
				<a {href} class="w-full inline-block p-2">{name}</a>
			</li>
		{/each}
	</Listgroup>
</div>
