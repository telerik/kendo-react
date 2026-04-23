import React, { useEffect, useRef, useState } from 'react';
import { Surface, SurfaceEvent } from '@progress/kendo-drawing';
import { Popup } from '@progress/kendo-react-popup';
import { drawScene } from './draw-scene';

const App: React.FC = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const [show, setShow] = useState<boolean>(false);
	const [anchor, setAnchor] = useState<HTMLElement | null>(null);
	const [surface, setSurface] = useState<Surface | null>(null);

	useEffect(() => {
		// Create the surface and draw the scene when the component mounts
		const createdSurface = Surface.create(elementRef.current as HTMLDivElement);
		setSurface(createdSurface);
		drawScene(createdSurface);

		// Bind mouse events
		const mouseEnterHandler = (args: SurfaceEvent) => {
			const element = args.element;

			if (element) {
				// Use the original event's target directly
				setAnchor(args.originalEvent.target as HTMLElement);
				setShow(true);
			}
		};

		const mouseLeaveHandler = () => {
			setShow(false);
		};

		createdSurface.bind('mouseenter', mouseEnterHandler);
		createdSurface.bind('mouseleave', mouseLeaveHandler);

		return () => {
			// Cleanup: destroy the surface when the component unmounts
			createdSurface.destroy();
		};
	}, []); // Empty dependency array means this runs only on mount and unmount

	const anchorAlign = {
		horizontal: 'center',
		vertical: 'top'
	};

	return (
		<div className="example-wrapper">
			<div ref={elementRef} />
			<Popup anchor={anchor} anchor-align={anchorAlign} show={show}>
				<div>foo</div>
			</Popup>
		</div>
	);
};

export default App;
