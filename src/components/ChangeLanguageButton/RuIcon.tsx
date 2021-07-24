import React, { memo } from 'react';

export type Props = React.HTMLAttributes<SVGElement>;

export const RuIcon = memo<Props>(({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
    <path
      fill="#F5F5F5"
      d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621v73.471h512v-73.471
C512,105.443,494.833,88.276,473.655,88.276z"
    />
    <path
      fill="#FF4B55"
      d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345
v-73.471H0V385.379z"
    />
    <rect y="200.09" fill="#41479B" width="512" height="111.81" />
  </svg>
));
