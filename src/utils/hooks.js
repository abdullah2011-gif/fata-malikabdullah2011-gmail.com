import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const useReduxUser = () => {
  return useSelector((state) => state.user.user);
};

export const useRouterQuery = () => {
  return useRouter().query;
};
