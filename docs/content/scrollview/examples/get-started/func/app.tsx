import * as React from 'react';

import { ScrollView } from '@progress/kendo-react-scrollview';
import './styles.css';

const items: any[] = [
	{ url: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/kukeri.jpg' },
	{ url: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/martenitsa.jpg' },
	{ url: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/rose_festival.jpg' }
];

const App = () => {
	return (
		<div>
			<ScrollView style={{ width: 512, height: 384 }}>
				{items.map((item, index) => {
					return (
						<div key={index}>
							<img
								src={item.url}
								alt={'KendoReact ScrollView Photo'}
								style={{ width: 512, height: 384 }}
								draggable={false}
							/>
						</div>
					);
				})}
			</ScrollView>
		</div>
	);
};

export default App;
