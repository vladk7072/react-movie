import React from "react";
import { Card } from "./Card";
import { CardAside } from "./CardAside";

export const CardСontainer = () => {
  return (
    <div className="main-model__content">
      <Card />
      <div className="main-model__aside">
        <CardAside />
      </div>
    </div>
  );
};
