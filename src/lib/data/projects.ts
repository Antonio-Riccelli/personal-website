import type { Project } from "$lib/types/types";

const projects : Project[] = [
    {
        name: "Cloud Resume Challenge",
        description: "Cloud Resume Challenge",
        technologies: ["AWS", "DynamoDB", "CloudFront", "CDN", "API Gateway", "Python", "Testing", "TailwindCSS", "HTML", "JavaScript", "Next.js", "CI/CD", "GitHub Actions", "Git", "GitHub"],
        url: {
            live: "https://www.antonio-riccelli-cloud-resume.link/",
            github: "https://github.com/Antonio-Riccelli/cloud-resume-challenge-frontend"
        },
        image: "https://private-user-images.githubusercontent.com/39813213/251117525-3650fad1-5988-40ec-ab2e-71a5432a1aab.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA2NTExNDYsIm5iZiI6MTczMDY1MDg0NiwicGF0aCI6Ii8zOTgxMzIxMy8yNTExMTc1MjUtMzY1MGZhZDEtNTk4OC00MGVjLWFiMmUtNzFhNTQzMmExYWFiLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTAzVDE2MjA0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM2MWY5ZDg1ZDc2NTUyMDc0MGIxYmRhMTQyMDI5YjZkZmNhODA3NGYxZDMxODFhZjRiMDY4MTBmYjU2ZGZlOWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.2bw1bx_gJ-1-PVIzveewC943fJkrMI3tmvy9nh4i-DA",
    },
    {
        name: "WordPress NIfTI Format Support",
        description: "WordPress NIfTI Format Support",
        technologies: ["WordPress", "PHP"],
        url: {
            github: "https://github.com/Antonio-Riccelli/wordpress-nifti-support"
        },
    },
    {
        name: "Fight for Apollo Tic Tac Toe",
        description: "Tic Tac Toe Game",
        technologies: ["React.js", "CSS", "HTML", "JavaScript"],
        url: {
            github: "https://github.com/Antonio-Riccelli/fight-for-apollo-ticTacToe"
        },
    }

]

export default projects;