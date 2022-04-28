import { setNewsList } from "../actions/newsActions";
import { setLoading, clearLoading } from "../actions/appActions";
import axios from "axios";

const url ="https://newsdata.io/api/1/news?apikey=pub_69266ad19f7163bc1269d3ac4a5d7ce6b3a6&language=tr,en";

//! getNews fonksiyonu başka bir fonksiyonu döndürüyor. Bu durumda çağırırken dispatch(getNews()) şeklinde kullanmak gerekir.
export const getNews = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await axios.get(url);
      console.log(data);
      dispatch(setNewsList(data.results));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(clearLoading());
    }
  };
};
