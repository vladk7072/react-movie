import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { DispatchType, StateType } from "../redux/redux";

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
export const useAppDispatch = () => useDispatch<DispatchType>();