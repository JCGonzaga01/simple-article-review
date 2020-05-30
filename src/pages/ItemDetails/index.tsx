import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import queryString from "query-string";
import data from "_root/data.json";
import styles from "./ItemDetails.module.scss";

const ItemDetails: React.FC = () => {
  const qs = queryString.parse(useLocation().search);
  const details = data.find((item) => JSON.stringify(item.id) === qs.id);
  const [questions, setQuestions] = useState(details?.questions || []);
  const [sortText, setSortText] = useState("sort by latest");
  const url = process.env.PUBLIC_URL + `/assets/itemdetails/${details?.image}`;

  useEffect(() => {
    return () => setQuestions(details?.questions || []);
  }, [details]);

  const handleOnClickSort = () => {
    const isSortLatest = sortText === "sort by latest";
    const sortedQuestions =
      [...questions].sort((a, b) => {
        const curr = moment(a.date).utc().format("YYYYMMDD") as any;
        const next = moment(b.date).utc().format("YYYYMMDD") as any;
        return isSortLatest ? next - curr : curr - next;
      }) || [];
    setQuestions([...sortedQuestions]);
    setSortText(isSortLatest ? "sort by earliest" : "sort by latest");
  };

  return !details ? (
    <></>
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.imageSrc} style={{ backgroundImage: `url(${url})` }}>
        <span className={styles.tag}>{details.tag}</span>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.title}>{details.title}</div>
        <div className={styles.sort} onClick={handleOnClickSort}>
          <span>{sortText}</span>
          <img src={process.env.PUBLIC_URL + "/assets/sort.png"} alt={"sort"} />
        </div>
        {questions.map((item, idx) => {
          return (
            <div key={`${details.id}:${idx}`}>
              <div className={styles.questionTitle}>{item.title}</div>
              <div className={styles.questionDate}>
                <hr className={styles.line} />
                {moment(item.date).utc().format("DD/MM/YYYY")}
              </div>
              <div className={styles.questionText}>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemDetails;
