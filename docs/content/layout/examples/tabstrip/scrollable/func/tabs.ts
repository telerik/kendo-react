export interface Tab {
	title: string;
	location: string;
	image: string;
	contentImage: string;
	currentDegree: string;
	degreeRange: string;
	rainChance: number;
	humidity: number;
}

export const tabs: Tab[] = [
	{
		title: 'London',
		location: 'London, UK',
		image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/sun.png',
		contentImage: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/sun_medium.png',
		currentDegree: '29°',
		degreeRange: '30° / 16°',
		rainChance: 10,
		humidity: 36
	},
	{
		title: 'Sofia',
		location: 'Sofia, BG',
		image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/rain.png',
		contentImage: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/rain_medium.png',
		currentDegree: '19°',
		degreeRange: '13° / 20°',
		rainChance: 90,
		humidity: 45
	},
	{
		title: 'Berlin',
		location: 'Berlin, DE',
		image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/sun.png',
		contentImage: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/sun_medium.png',
		currentDegree: '25°',
		degreeRange: '30° / 22°',
		rainChance: 5,
		humidity: 20
	},
	{
		title: 'Paris',
		location: 'Paris, FR',
		image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/sun.png',
		contentImage: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/sun_medium.png',
		currentDegree: '23°',
		degreeRange: '30° / 18°',
		rainChance: 20,
		humidity: 38
	},
	{
		title: 'Vienna',
		location: 'Vienna, AT',
		image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/rain.png',
		contentImage: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/rain_medium.png',
		currentDegree: '19°',
		degreeRange: '22° / 10°',
		rainChance: 80,
		humidity: 46
	},
	{
		title: 'Stockholm',
		location: 'Stockholm, SE',
		image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/rain.png',
		contentImage: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/tabstrip/rain_medium.png',
		currentDegree: '10°',
		degreeRange: '2° / 15°',
		rainChance: 85,
		humidity: 56
	}
];
