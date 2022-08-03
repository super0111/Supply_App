import { useSelector } from "react-redux";

export function useIsAuthenticated() {
  return useSelector((store) => {
    return store.auth.isAuthenticated && store.auth.user.kycDone;
  });
}

export function useAuth() {
  return useSelector((store) => store.auth);
}

export function useIsSeller() {
  return useSelector((store) => {
    //auth.user.type
    return store?.auth?.user?.type === "seller";
  });
}

export function useUserRole() {
  return useSelector((store) => {
    //auth.user.type
    return store?.auth?.user?.type;
  });
}
