import { useCallback, useContext, useState } from "react";
import StockContext from "./contexts/StockContext";
import "./StockCardStyling.css";
function StockCard() {
  const { stockList } = useContext(StockContext);
  console.log(stockList);
  console.log(stockList[0].symbol);
  const formatPrice = useCallback((value) => {
    return parseFloat(value).toFixed(2);
  }, []);
  return (
    <>
      {stockList[0].symbol == "" ? (
        <h2> No stocks added yet</h2>
      ) : (
        <div>
          <h2>Stock List</h2>
          <p>Symbol: {stockList[0].symbol}</p>
          <p>Quantity: {stockList[0].qty}</p>
          <p>Purchase Price: {stockList[0].purchasePrice}</p>
          <p>Current Price: {formatPrice(stockList[0].currPrice)}</p>
          <p className={stockList[0].profitLoss > 0 ? "positive" : "negative"}>
            Profit/Loss:
            {stockList[0].profitLoss > 0 && "+"}
            {stockList[0].profitLoss}
          </p>
        </div>
      )}
    </>
  );
}
export default StockCard;
