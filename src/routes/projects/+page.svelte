<script>
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import projects from '$lib/data/projects';
</script>

<div class="w-full mt-20 mb-20 overflow-auto text-center lightmode-bg dark:bg-black">
	<h1 class="font-extrabold">Projects</h1>
	<div class="flex flex-wrap justify-center dark:text-white text-white">
		{#each projects as { name, description, technologies, url, image }}
			<Card class="max-w-sm m-5 p-0 dark:text-white h-full" img={image} imgClass="h-72">
				<h2 class="font-bold p-2">{name}</h2>
				<p class="p-2 text-start">{description}</p>
				<div class="my-1 text-start">
					{#if url?.live}
						<Button href={url?.live} class="mx-1">
							Live <ArrowRightOutline />
						</Button>
					{/if}
					{#if url?.github}
						<Button href={url.github} class="mx-1">
							GitHub <ArrowRightOutline />
						</Button>
					{/if}
				</div>
				<div>
					<ul class="list-none p-0 m-0 flex flex-wrap">
						{#each technologies as technology}
							<li
								class="p-2 mx-1 my-2 inline-block bg-green-400 text-white dark:bg-blue-600 rounded-lg"
							>
								{technology}
							</li>
						{/each}
					</ul>
				</div>
			</Card>
		{/each}
	</div>
</div>
