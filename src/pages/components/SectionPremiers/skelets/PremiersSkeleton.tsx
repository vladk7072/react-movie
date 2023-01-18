import React, { FC } from "react";
import ContentLoader from "react-content-loader";

export const PremiersSkeleton: FC = () => (
  <ContentLoader
    speed={2}
    width={655}
    height={375}
    viewBox="0 0 655 375"
    backgroundColor="#878787"
    foregroundColor="#a1a1a1"
  >
    <rect x="271" y="337" rx="4" ry="4" width="140" height="26" />
    <rect x="269" y="84" rx="4" ry="4" width="52" height="20" />
    <rect x="269" y="58" rx="4" ry="4" width="89" height="20" />
    <rect x="269" y="31" rx="4" ry="4" width="89" height="20" />
    <rect x="420" y="337" rx="4" ry="4" width="140" height="26" />
    <rect x="0" y="0" rx="4" ry="4" width="260" height="370" />
  </ContentLoader>
);
