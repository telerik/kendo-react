
import * as React from 'react';

const baseEventStyle: React.CSSProperties = {
    height: 25,
    marginBottom: 8,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 7,
    paddingRight:4,
    boxSizing: 'border-box',
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1
};

const breakfastStyle = {
    ...baseEventStyle,
    color: ' #FFFFFF',
    backgroundColor: '#FF6358',
    borderColor: '#FF6358'
};

const updatesStyle = {
    ...baseEventStyle,
    backgroundColor: '#FFD246',
    borderColor: '#FF6358'
};

const performanceStyle = {
    ...baseEventStyle,
    color: ' #FFFFFF',
    backgroundColor: '#6610F2',
    borderColor: '#6610F2'
};

const lectureStyle = {
    ...baseEventStyle,
    backgroundColor: '#FFD246',
    borderColor: '#FF6358'
};

const timeStyles: React.CSSProperties = {
    paddingRight: 8,
    float: 'right'
};

export const Events = () => {
    return (
  <>
    <div style={breakfastStyle}><span>Starbuck Breakfast </span><span style={timeStyles}>8:00</span></div>
    <div style={updatesStyle}>Software Updates <span style={timeStyles}>9:00</span></div>
    <div style={performanceStyle}>Performance Review <span style={timeStyles}>14:00</span></div>
    <div style={lectureStyle}>HR Lecture <span style={timeStyles}>19:00</span></div>
  </>
    );
};
