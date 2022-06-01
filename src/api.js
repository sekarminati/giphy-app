import axios from "axios";

export const getGiphy = (setData, keyword, limit) => {
  axios
    .get("https://api.giphy.com/v1/gifs/search", {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        q: keyword,
        limit: limit,
        rating: "g",
      },
    })
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      window.alert(err);
    });
};
