import React from 'react';

export const Check = ({color, width, height, percent}) => (
    <svg 
        className       = 'icon icon-check'
        key             = 'icon'
        xmlns           = 'http://www.w3.org/2000/svg'
        width           = {`${width * (percent / 100)}px`}
        height          = {`${height * (percent / 100)}px`}
        viewBox         = {`0 0 97 103.75`}
        aria-labelledby = 'title'
        version         = '1.1'
    >
        <g>
            <path fill = {color} d="M0 43c2,-4 6,-9 13,-7 6,2 10,8 13,16 24,-27 44,-46 68,-52 3,0 4,0 2,2 -26,18 -51,45 -71,80 -1,1 -2,1 -3,0 -4,-10 -7,-20 -12,-30 -2,-5 -5,-9 -10,-9z"/>
        </g>
    </svg>
);


Check.defaultProps = {
    width  : 50,
    height : 50,
    percent: 100,
    color  : '#007396'
};

export default Check;