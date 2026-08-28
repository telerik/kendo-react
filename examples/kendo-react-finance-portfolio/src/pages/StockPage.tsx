import { Splitter } from "@progress/kendo-react-layout";
import { classNames } from "@progress/kendo-react-common";

import { Stock } from "../components/Stock/Stock";
import { AddRemoveSymbol } from "../components/AddRemoveSymbol";
import { StockList } from "../components/StockList";
import { ChangeSector } from "../components/SectorChange";
import styles from "./stock-page.module.scss";

export const StockPage = () => {
  return (
    <>
      <Splitter
        className={styles.splitter}
        style={{ height: "100%" }}
        orientation={"vertical"}
        defaultPanes={[{}, {}]}
      >
        <div className={classNames("pt-4 pb-2")}>
          <div className="container">
            <Stock />
          </div>
        </div>
        <div className={classNames(styles["stock-section"], "py-3")} style={{ minHeight: 600 }}>
          <div className="container my-3">
            <div className={styles.portfolioToolbar}>
              <AddRemoveSymbol />
              <ChangeSector />
            </div>
          </div>
          <div className="container">
            <StockList />
          </div>
        </div>
      </Splitter>
    </>
  );
};
