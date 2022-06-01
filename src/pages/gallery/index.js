import debounce from "lodash.debounce";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getGiphy } from "../../api";
import Item from "../../components/item";
import List from "../../components/list";
import styles from "./Gallery.module.css";

function Gallery() {
  const location = useLocation();
  const { query } = useParams();
  const isSearch = location.pathname.includes("search");
  const [data, setData] = useState({});
  const [keyword, setKeyword] = useState(query || "iron-man");
  const limit = 9;
  const imageList = data.data?.map((d) => {
    return { id: d.id, title: d.title, url: d.images.downsized.url };
  });

  useEffect(() => {
    getGiphy(setData, keyword, limit);
  }, [keyword, limit]);

  const onInput = debounce((query) => {
    setKeyword(query);
  }, 1000);

  return (
    <div className={styles.gallery}>
      <div className={styles.title}>
        {!isSearch ? (
          <h2>IRON MAN GIPHY</h2>
        ) : (
          <>
            <h2>SEARCH YOUR GIPHY</h2>
            <input onInput={(val) => onInput(val.target.value)}></input>
          </>
        )}
      </div>
      <List
        items={imageList?.map((d) => {
          return <Item title={d.title} image={d.url} />;
        })}
        columns={3}
      />
    </div>
  );
}

export default Gallery;
