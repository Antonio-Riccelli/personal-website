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
	url?: string;
}

export interface Education {
	institution: string;
	qualification: string;
	field: string;
	period: {
		start: string;
		end: string | 'Present';
	};
	location: string;
	url?: string;
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
}

export interface Skill {
	category: 'Frontend' | 'Backend' | 'DevOps' | 'IT' | 'Other';
	technologies: string[];
}

export interface PersonalData {
	workHistory: Job[];
	educationHistory: Education[];
	projects: Project[];
	skills: string[];
}

export interface ContactLink {
	name: string;
	href: string;
}
