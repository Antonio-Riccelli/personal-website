<script>
	import { Timeline, TimelineItem, AccordionItem, Accordion } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import workHistory from '$lib/data/work';
	import educationHistory from '$lib/data/education';
</script>

<div class=" mt-20 mb-20 overflow-auto w-full text-start lightmode-bg dark:bg-black">
	<p class="p-6 m-auto text-justify">A brief snapshot of my work experience and education.</p>
	<div>
		<h2 class="p-6 font-bold text-2xl m-auto text-center">Experience</h2>
		<Timeline class="w-3/4 md:w-1/2 m-auto border-black dark:border-white">
			{#each workHistory as { role, company, period, location, description, technologies, url }}
				<TimelineItem
					classDiv="bg-black dark:bg-white"
					classTime="text-black"
					title={`${role} @ ${company}`}
					date={`${period.start} - ${period.end}`}
				>
					<p>{location}</p>

					<!-- Minimise wall of text  -->
					<Accordion flush class="border-black dark:border-gray-300">
						<AccordionItem borderSharedClass="dark:border-b border-black dark:border-gray-300">
							<span slot="header">Description</span>
							<p>{description}</p>
						</AccordionItem>
					</Accordion>

					<p>
						{#each technologies as technology}
							<span class="p-2 mx-1 my-2 inline-block dark:bg-blue-600 rounded-lg"
								>{technology}</span
							>
						{/each}
					</p>

					<a
						href={url}
						class="flex w-max p-3 my-3 rounded-2xl border-2 border-green-400 hover:bg-sky-900 hover:text-white dark:border-blue-600 hover:dark:bg-gray-800"
						>Company Website<ArrowRightOutline class="ms-2 w-5 h-5" /></a
					>
				</TimelineItem>
			{/each}
		</Timeline>
	</div>

	<div>
		<h2 class="p-6 font-bold text-2xl m-auto text-center">Education</h2>

		<Timeline class="w-3/4 md:w-1/2 m-auto border-black dark:border-white">
			{#each educationHistory as { institution, qualification, field, period, location, url }}
				<TimelineItem
					classDiv="bg-black dark:bg-white"
					classTime="text-black"
					title={`${qualification} in ${field} @ ${institution}`}
					date={`${period.start} - ${period.end}`}
				>
					<p>{location}</p>

					<a
						href={url}
						class="flex w-max p-3 my-3 rounded-2xl border-2 border-green-400 hover:bg-sky-900 hover:text-white dark:border-blue-600 hover:dark:bg-gray-800"
						>Website<ArrowRightOutline class="ms-2 w-5 h-5" /></a
					>
				</TimelineItem>
			{/each}
		</Timeline>
	</div>
</div>
