import * as React from 'react';

interface HeroProps {
    isSmart?: boolean;
}
const dataBaseIcon = `${
    import.meta.env.VITE_REACT_DEMOS_BASE_URL || ''
}./assets/grid/prompt-controlled/data base - icon.png`;
const dataBaseIconAI = `${
    import.meta.env.VITE_REACT_DEMOS_BASE_URL || ''
}./assets/grid/prompt-controlled/data base - icon - AI.png`;

export const Hero = (props: HeroProps) => {
    return (
        <div className="hero">
            {props.isSmart ? (
                <img src={dataBaseIconAI} alt="DB AI Icon" className="hero-icon" />
            ) : (
                <img src={dataBaseIcon} alt="DB Icon" className="hero-icon" />
            )}
            <div className="hero-content">
                <h4 className="hero-title">Ask Your Data Grid Anything</h4>
            </div>
        </div>
    );
};
