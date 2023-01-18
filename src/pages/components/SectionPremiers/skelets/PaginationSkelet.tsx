import React, { FC } from "react"
import ContentLoader from "react-content-loader"

export const PaginationSkelet: FC = () => (
  <ContentLoader 
  className="sectionpremiers__pagination"
    speed={2}
    width={155}
    height={45}
    viewBox="0 0 155 45"
    backgroundColor="#878787"
    foregroundColor="#a1a1a1"
  >
    <circle cx="22" cy="22" r="22" /> 
    <circle cx="132" cy="22" r="22" /> 
    <circle cx="77" cy="22" r="22" />
  </ContentLoader>
)