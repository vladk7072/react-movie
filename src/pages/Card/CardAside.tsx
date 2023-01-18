import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useLazyGetItemSimilarsQuery } from "../../redux/rtk/cardRtk";
import { cardSlice } from "../../redux/slices/cardSlice";

export const CardAside = () => {
  const { countItemsAside, btnList } = useAppSelector(
    (state) => state.cardSlice
  );
  const dispatch = useAppDispatch();
  const { setCountItemsAside, setbtnList } = cardSlice.actions;

  const [getSimilars, { data: similarsData, isSuccess: similarsSuccess }] =
    useLazyGetItemSimilarsQuery();

  const paramsid = useParams();
  const arrayPathId = Object.values(paramsid);
  const pathId = arrayPathId[0];

  useEffect(() => {
    if (pathId) {
      getSimilars(pathId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathId]);

  const setNewPathId = (newPathId: string) => {
    document.location.pathname = newPathId;
  };

  const setFullList = (count: number) => {
    dispatch(setCountItemsAside(count));
    dispatch(setbtnList(false));
  };

  return (
    <div className="card__aside">
      {similarsData?.total === 0 && similarsSuccess && similarsData && (
        <div className="card__aside-title">Похожие фильмы не найдены</div>
      )}
      {similarsData?.total !== 0 && similarsSuccess && similarsData && (
        <>
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
        </>
      )}
    </div>
  );
};
