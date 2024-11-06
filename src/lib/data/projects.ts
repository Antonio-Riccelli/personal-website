import type { Project } from "$lib/types/types";

const projects : Project[] = [
    {
        name: "Cloud Resume Challenge",
        description: "Online CV created and hosted using AWS serverless technology",
        technologies: ["AWS", "DynamoDB", "CloudFront", "CDN", "API Gateway", "Python", "Testing", "TailwindCSS", "HTML", "JavaScript", "Next.js", "CI/CD", "GitHub Actions", "Git", "GitHub"],
        url: {
            live: "https://www.antonio-riccelli-cloud-resume.link/",
            github: "https://github.com/Antonio-Riccelli/cloud-resume-challenge-frontend"
        },
        image: "/images/cloud-resume.gif",
    },
    {
        name: "WordPress NIfTI Format Support",
        description: "Plug-in for WordPress to allow users to upload and display NIfTI format files (WORK IN PROGRESS)",
        technologies: ["WordPress", "PHP"],
        url: {
            github: "https://github.com/Antonio-Riccelli/wordpress-nifti-support"
        },
    },
    {
        name: "Fight for Apollo Tic Tac Toe",
        description: "Rocky IV-inspired Tic Tac Toe game",
        technologies: ["React.js", "CSS", "HTML", "JavaScript"],
        url: {
            github: "https://github.com/Antonio-Riccelli/fight-for-apollo-ticTacToe",
            live: "https://fight-for-apollo.netlify.app/"
        },
        image: "/images/fight-for-apollo-tic-tac-toe.gif"
    }

]

export default projects;