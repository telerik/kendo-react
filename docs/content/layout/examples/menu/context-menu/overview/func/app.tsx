import * as React from 'react';
import { flushSync } from 'react-dom';
import { ContextMenu, MenuSelectEvent, MenuItemModel } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { Offset } from '@progress/kendo-react-popup';
import {
    eyeIcon,
    starIcon,
    downloadIcon,
    shareIcon,
    rotateLeftIcon,
    rotateRightIcon,
    cropIcon,
    trashIcon
} from '@progress/kendo-svg-icons';
import './styles.css';

interface Photo {
    id: number;
    title: string;
    location: string;
    src: string;
    rotation: number;
    starred: boolean;
}

const initialPhotos: Photo[] = [
    {
        id: 1,
        title: 'Alpine Lake',
        location: 'Switzerland',
        src: 'https://picsum.photos/id/29/400/300',
        rotation: 0,
        starred: false
    },
    {
        id: 2,
        title: 'Forest Path',
        location: 'Norway',
        src: 'https://picsum.photos/id/15/400/300',
        rotation: 0,
        starred: true
    },
    {
        id: 3,
        title: 'Coastal Cliffs',
        location: 'Ireland',
        src: 'https://picsum.photos/id/68/400/300',
        rotation: 0,
        starred: false
    },
    {
        id: 4,
        title: 'Desert Dunes',
        location: 'Morocco',
        src: 'https://picsum.photos/id/116/400/300',
        rotation: 0,
        starred: false
    },
    {
        id: 5,
        title: 'Spring Bloom',
        location: 'Japan',
        src: 'https://picsum.photos/id/143/400/300',
        rotation: 0,
        starred: false
    },
    {
        id: 6,
        title: 'Golden Hour',
        location: 'Iceland',
        src: 'https://picsum.photos/id/57/400/300',
        rotation: 0,
        starred: true
    }
];

const App = () => {
    const [photos, setPhotos] = React.useState<Photo[]>(initialPhotos);
    const [show, setShow] = React.useState(false);
    const [offset, setOffset] = React.useState<Offset>({ left: 0, top: 0 });
    const [activeId, setActiveId] = React.useState<number | null>(null);

    const activePhoto = photos.find((p) => p.id === activeId) ?? null;

    const contextItems: MenuItemModel[] = activePhoto
        ? [
              { text: 'View Full Size', svgIcon: eyeIcon, data: { action: 'view' } },
              { text: activePhoto.starred ? 'Remove Star' : 'Add Star', svgIcon: starIcon, data: { action: 'star' } },
              { text: 'Download', svgIcon: downloadIcon, data: { action: 'download' } },
              { text: 'Share', svgIcon: shareIcon, data: { action: 'share' } },
              { separator: true },
              { text: 'Rotate Left', svgIcon: rotateLeftIcon, data: { action: 'rotate-left' } },
              { text: 'Rotate Right', svgIcon: rotateRightIcon, data: { action: 'rotate-right' } },
              { text: 'Crop', svgIcon: cropIcon, data: { action: 'crop' } },
              { separator: true },
              { text: 'Delete Photo', svgIcon: trashIcon, cssClass: 'cm-danger', data: { action: 'delete' } }
          ]
        : [];

    const handleContextMenu = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        flushSync(() => setShow(false));
        setOffset({ left: event.pageX, top: event.pageY });
        setActiveId(id);
        setShow(true);
    };

    const handleSelect = (event: MenuSelectEvent) => {
        setShow(false);
        const action = event.item.data?.action as string;
        if (!activeId) {
            return;
        }

        setPhotos((prev) =>
            prev
                .map((p): Photo | null => {
                    if (p.id !== activeId) {
                        return p;
                    }
                    if (action === 'star') {
                        return { ...p, starred: !p.starred };
                    }
                    if (action === 'rotate-left') {
                        return { ...p, rotation: p.rotation - 90 };
                    }
                    if (action === 'rotate-right') {
                        return { ...p, rotation: p.rotation + 90 };
                    }
                    if (action === 'delete') {
                        return null;
                    }
                    return p;
                })
                .filter((p): p is Photo => p !== null)
        );
    };

    return (
        <div className="gallery-shell">
            <div className="gallery-titlebar">
                <SvgIcon icon={eyeIcon} />
                <span className="gallery-title">My Photos</span>
                <span className="gallery-count">{photos.length} photos</span>
            </div>

            <div className="gallery-grid">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className={`photo-card${activeId === photo.id ? ' photo-card--active' : ''}`}
                        onContextMenu={(e) => handleContextMenu(e, photo.id)}
                    >
                        <div className="photo-img-wrap" style={{ transform: `rotate(${photo.rotation}deg)` }}>
                            <img src={photo.src} alt={photo.title} className="photo-img" />
                        </div>
                        <div className="photo-overlay">
                            <span className="photo-title">{photo.title}</span>
                            <span className="photo-location">{photo.location}</span>
                        </div>
                        {photo.starred && (
                            <span className="photo-star">
                                <SvgIcon icon={starIcon} />
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <p className="gallery-hint">Right-click any photo to open the context menu</p>

            <ContextMenu
                show={show}
                offset={offset}
                items={contextItems}
                onSelect={handleSelect}
                onClose={() => setShow(false)}
            />
        </div>
    );
};

export default App;
