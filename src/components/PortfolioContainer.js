import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onStockClick}) {
  const portfolioJSX = portfolio.map(stock=><Stock key={stock.id} stock={stock} onStockClick={onStockClick} isPortfolio={true}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioJSX}
    </div>
  );
}

export default PortfolioContainer;
