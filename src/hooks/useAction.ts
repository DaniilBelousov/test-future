import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../redux/asyncAction";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};