
import React from 'react';

export const SortDown = ({color, width, height, percent, title}) => (
    <svg 
        className       = 'icon icon-sort-down'
        key             = 'icon'
        xmlns           = 'http://www.w3.org/2000/svg'
        width           = {`${width * (percent / 100)}px`}
        height          = {`${height * (percent / 100)}px`}
        viewBox         = {`0 0 50 50`}
        aria-labelledby = 'title'
        version         = '1.1'
    >
        <title id="title">{title}</title>
        <path fill={color} d='M3.035,15.948l13.998,13.998c0.819,0.819,1.894,1.225,2.967,1.22c1.073,0.005,2.148-0.401,2.967-1.22l13.998-13.998 c1.627-1.628,1.627-4.266,0-5.894c-1.628-1.628-4.266-1.628-5.894,0L20,21.126L8.929,10.055c-1.628-1.628-4.266-1.628-5.894,0 S1.407,14.321,3.035,15.948'/>
    </svg>
);

SortDown.defaultProps = {
    width  : 50,
    height : 50,
    percent: 100,
    color  : '#007396'
};

export default SortDown;