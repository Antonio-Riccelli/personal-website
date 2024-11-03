export interface Job {
	company: string;
	role: string;
	period: {
		start: string;
		end: string | 'Present';
	};
	location: string;
	description: string;
	technologies: string[];
	achievements: string[];
	url?: string; // optional company website
}

export interface Education {
	institution: string;
	degree: string;
	field: string;
	period: {
		start: string;
		end: string | 'Present';
	};
	location: string;
	achievements?: string[]; // Optional
}

export interface Project {
	name: string;
	description: string;
	technologies: string[];
	url?: {
		live?: string;
		github?: string;
	};
	image?: string;
	highlights: string[];
}

export interface Skill {
	category: 'Frontend' | 'Backend' | 'DevOps' | 'IT' | 'Other';
	technologies: string[];
}

export interface PersonalData {
	workHistory: Job[];
	education: Education[];
	projects: Project[];
	skills: string[];
}
