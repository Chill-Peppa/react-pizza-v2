import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="305" rx="10" ry="10" width="280" height="19" />
    <rect x="0" y="341" rx="10" ry="10" width="280" height="90" />
    <rect x="2" y="460" rx="10" ry="10" width="95" height="30" />
    <rect x="110" y="452" rx="24" ry="24" width="169" height="45" />
    <circle cx="135" cy="157" r="125" />
  </ContentLoader>
);

export default Skeleton;
