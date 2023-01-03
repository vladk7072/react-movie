import React, { useEffect, useState } from "react";
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

  const [countItemsAside, setCountItemsAside] = useState(6);
  const [btnList, setbtnList] = useState(true);

  const setFullList = (count: number) => {
    setCountItemsAside(count);
    setbtnList(false);
  };

  return (
    <>
      {similarsData?.total !== 0 && similarsSuccess && similarsData && (
        <div className="card__aside">
          <div className="card__aside-title">Похожие:</div>
          <ul className="card__aside-list">
            {similarsData.items.map(
              (item, index) =>
                index < countItemsAside && (
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
                      <div className="card__aside-item-title">
                        {item.nameRu}
                      </div>
                      {item.nameOriginal && (
                        <div className="card__aside-item-title">
                          "{item.nameOriginal}"
                        </div>
                      )}
                    </div>
                  </li>
                )
            )}
          </ul>
          {similarsData.total > 6 && btnList && (
            <div
              className="card__aside-list-btn"
              onClick={() => setFullList(similarsData.total)}
            >
              Показать все
            </div>
          )}
        </div>
      )}
    </>
  );
};
