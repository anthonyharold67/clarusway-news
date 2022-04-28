import { setNewsList } from "../actions/newsActions";
import { setLoading, clearLoading } from "../actions/appActions";
import axios from "axios";

const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-04-18&" +
  "sortBy=popularity&" +
  "apiKey=fab270379f764beeac1201b195f4f9e5";

//! getNews fonksiyonu başka bir fonksiyonu döndürüyor. Bu durumda çağırırken dispatch(getNews()) şeklinde kullanmak gerekir.
export const getNews = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await axios.get(url);
      dispatch(setNewsList(data.articles));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(clearLoading());
    }
  };
};
