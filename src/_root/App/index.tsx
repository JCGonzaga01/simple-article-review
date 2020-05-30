import React from "react";
import Header from "_root/Header";
import Footer from "_root/Footer";
import styles from "./App.module.scss";

const App: React.FC = (props) => {
  return (
    <div className={styles.App}>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default App;
