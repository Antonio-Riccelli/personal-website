import type { Education } from "$lib/types/types"

const educationHistory : Education[] = [
    {
        institution: "School Of Code",
        qualification: "Full Stack Software Development Bootcamp",
        field: "Software Development",
        period: {
            start: "November 2021",
            end: "April 2022"
    },
    location: "England, United Kingdom (Remote)",
    url: "https://www.schoolofcode.co.uk/"
},
{
    institution: "Naples Eastern University",
    qualification: "Bachelor's Degree",
    field: "Foreign Languages and Literatures",
    period: {
        start: "September 2011",
        end: "June 2015"
    },
    location: "Naples, Italy",
    url: "https://www.unior.it/it"
}
]

export default educationHistory;