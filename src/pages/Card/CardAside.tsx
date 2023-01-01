import React, { useEffect } from "react";
import { useLazyGetItemSimilarsQuery } from "../../redux/rtk/cardRtk";

export const CardAside = () => {
  const [getSimilars, { data: similarsData, isSuccess: similarsSuccess }] =
    useLazyGetItemSimilarsQuery();

  const path = document.location.pathname;
  const pathId = path.replace("/card/", "");

  useEffect(() => {
    getSimilars(pathId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNewPathId = (newPathId: string) => {
    document.location.pathname = newPathId;
  };

  return (
    <>
      {similarsSuccess && similarsData && (
        <div className="card__aside">
          <div className="card__aside-title">Похожие:</div>
          <ul className="card__aside-list">
            {similarsData.items.map((item) => (
              <li
                className="card__aside-item"
                key={item.filmId}
                onClick={() => setNewPathId(`${"/card/" + item.filmId}`)}
              >
                <div className="card__aside-item-image">
                  <img
                    className="card__aside-item-img"
                    src={item.posterUrlPreview}
                    alt=""
                  />
                </div>
                <div className="card__aside-item-textbox">
                  <div className="card__aside-item-title">{item.nameRu}</div>
                  <div className="card__aside-item-title">
                    "{item.nameOriginal}"
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
