import React, { useState, useEffect } from "react";
import { headerLinks } from "constants/global";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isSPView, setIsSPView] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mediaQuerySP = window.matchMedia("(max-width: 743px)");
    const updateMediaQuery = () => setIsSPView(mediaQuerySP.matches);
    updateMediaQuery();

    mediaQuerySP.addListener(updateMediaQuery);
    return () => mediaQuerySP.removeListener(updateMediaQuery);
  }, []);

  const handleOnClickMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.adrenalin}
        src={process.env.PUBLIC_URL + "/assets/adrenalin.svg"}
        alt={"adrenalin"}
      />
      {isSPView ? (
        !isOpenMenu && (
          <img
            className={styles.menu}
            src={process.env.PUBLIC_URL + "/assets/menu.svg"}
            alt={"Menu"}
            onClick={handleOnClickMenu}
          />
        )
      ) : (
        <div className={styles.headerLinks}>
          {headerLinks.map((text, idx) => (
            <span key={idx}>{text}</span>
          ))}
        </div>
      )}
      {isOpenMenu && (
        <div className={styles.menuWrapper}>
          <div className={styles.menuContainer}>
            <img
              className={styles.closeIcon}
              src={process.env.PUBLIC_URL + "/assets/close.png"}
              alt={"close"}
              onClick={handleOnClickMenu}
            />
            <div className={styles.headerLinks}>
              {headerLinks.map((text, idx) => (
                <span key={idx} onClick={handleOnClickMenu}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
