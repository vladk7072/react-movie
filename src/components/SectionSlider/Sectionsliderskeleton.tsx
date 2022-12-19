import React from "react";
import ContentLoader from "react-content-loader";

export const Sectionsliderskeleton = () => (
  <ContentLoader
    speed={2}
    width={370}
    height={457}
    viewBox="0 0 370 457"
    backgroundColor="#878787"
    foregroundColor="#a1a1a1"
  >
    <rect x="2" y="1" rx="2" ry="2" width="241" height="370" />
    <rect x="0" y="384" rx="4" ry="4" width="155" height="15" />
    <rect x="56" y="410" rx="5" ry="5" width="81" height="20" />
    <rect x="142" y="410" rx="5" ry="5" width="64" height="20" />
    <rect x="0" y="410" rx="5" ry="5" width="50" height="20" />
    <rect x="0" y="437" rx="5" ry="5" width="65" height="20" />
    <rect x="71" y="437" rx="5" ry="5" width="62" height="20" />
  </ContentLoader>
);
