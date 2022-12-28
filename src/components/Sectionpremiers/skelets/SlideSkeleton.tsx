import React from "react";
import ContentLoader from "react-content-loader";

export const SlideSkeleton = () => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={383}
    viewBox="0 0 100% 383"
    backgroundColor="#878787"
    foregroundColor="#a1a1a1"
  >
    <rect x="0" y="0" rx="4" ry="4" width="100%" height="383" />
  </ContentLoader>
);
