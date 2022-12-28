import React, { FC } from "react";
import "./title.scss";

interface PropsType {
  title: string
}

export const Title: FC<PropsType> = ({ title }) => {
  return <h2 className="title">{title}</h2>;
};
