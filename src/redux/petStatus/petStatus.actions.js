import axios from "axios";
import { db } from "../../services/firebase";

import petStatusTypes from "./petStatus.types";

export const eat = () => ({
  type: petStatusTypes.EAT,
});

export const worksout = () => ({
  type: petStatusTypes.WorksOut,
});

export const readsABook = () => ({
  type: petStatusTypes.ReadsABook,
});

export const getsATreat = () => ({
  type: petStatusTypes.GetsATreat,
});

export const sleeps = () => ({
  type: petStatusTypes.Sleeps,
});

export const itemsAreLoading = (loading) => ({
  type: petStatusTypes.ASYNC_LOADING,
  loading,
});

export const itemsFetchDataSuccess = (data) => ({
  type: petStatusTypes.ASYNC_SUCCESS,
  data,
});

export const itemsHaveError = (isError, errorMessage) => ({
  type: petStatusTypes.ASYNC_ERROR,
  isError,
  errorMessage,
});

export function itemsFetchData() {
  return (dispatch) => {
    dispatch(itemsAreLoading(true));

    const users = db.collection("users").get();

    // useEffect(() => {
    //   // const users = db.collection("users").get();

    //   // users.then((snapshot) =>
    //   //   snapshot.forEach((doc) => {
    //   //     console.log(doc.id, "=>", doc.data());
    //   //   })
    //   // );
    // }, []);

    users
      .then((snapshot) => dispatch(itemsFetchDataSuccess(snapshot.val())))
      .catch((e) => dispatch(itemsHaveError(true, e)));
  };
}
