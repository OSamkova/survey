
import React from 'react';

export const SortUp = ({color, width, height, percent, title}) => (
    <svg 
        className       = 'icon icon-sort-up'
        key             = 'icon'
        xmlns           = 'http://www.w3.org/2000/svg'
        width           = {`${width * (percent / 100)}px`}
        height          = {`${height * (percent / 100)}px`}
        viewBox         = {`0 0 50 50`}
        aria-labelledby = 'title'
        version         = '1.1'
    >
        <title id="title">{title}</title>
        <path fill={color} d='M36.965,24.052L22.967,10.054C22.148,9.235,21.073,8.829,20 8.834c-1.073-0.005-2.148,0.401-2.967,1.22L3.035,24.052 c-1.627,1.628-1.627,4.266,0,5.894c1.628,1.628,4.266,1.628,5.894,0L20,18.874l11.07 11.072c1.628,1.628,4.266,1.628,5.894,0 C38.593,28.318,38.593,25.679,36.965,24.052'/>
    </svg>
);

SortUp.defaultProps = {
    width  : 40,
    height : 40,
    percent: 100,
    color  : '#007396'
};

export default SortUp;