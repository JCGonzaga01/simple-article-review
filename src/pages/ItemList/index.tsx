import React from "react";
import { useHistory } from "react-router-dom";
import data from "_root/data.json";
import { viewDetailsLinkText } from "constants/global";
import styles from "./ItemList.module.scss";

const ItemList: React.FC = () => {
  const history = useHistory();

  const handleOnClickDetails = (id: number) => () => {
    history.push({
      pathname: "/item",
      search: `?id=${id}`,
      state: { id },
    });
  };

  return (
    <div className={styles.wrapper}>
      {data.map((item) => {
        const url = process.env.PUBLIC_URL + `/assets/itemlist/${item.thumb}`;
        return (
          <div key={item.id} className={styles.itemSummary}>
            <div className={styles.imageSrc} style={{ backgroundImage: `url(${url})` }}>
              <span className={styles.tag}>{item.tag}</span>
            </div>
            <div className={styles.titleContainer}>
              <span className={styles.title}>{item.title_long}</span>
              <div className={styles.viewDetailsContainer} onClick={handleOnClickDetails(item.id)}>
                <hr className={styles.line} />
                <span className={styles.link}>{viewDetailsLinkText}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
