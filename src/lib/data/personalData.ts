import type { PersonalData } from "$lib/types/types";
import projects from "./projects";
import workHistory from "./work";
import skills from "./skills";
import educationHistory from "./education";

const personalData: PersonalData = {
    projects,
    workHistory,
    skills,
    educationHistory
}

export default personalData;