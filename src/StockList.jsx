import React, { useContext } from "react";
import StockCard from "./StockCard";
import StockContext from "./contexts/StockContext";
function StockList() {
  const { stockList } = useContext(StockContext);

  return (
    <>
      {stockList.length > 0 ? (
        stockList.map((s) => <StockCard stock={s} />)
      ) : (
        <h2> No stocks added yet</h2>
      )}
    </>
  );
}

export default StockList;
