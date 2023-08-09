import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks]=useState([])
  const [sortBy, setSortBy]=useState("Alphabetically")
  const [filterBy, setFilterBy]=useState('Tech')
  const [portfolio, setPortfolio]=useState([])
  const [isPortfolio, setIsPortfolio]=useState(false)

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(r=>r.json())
    .then(data=>setStocks(data))
  }, [])
  function sortFunc(a, b){
      if(sortBy==="Price"){
        return a.price===b.price ? 0 : a.price>b.price ? 1 : -1
      } else {
        return a.name===b.name ? 0 : a.name>b.name ? 1 : -1
      }
  }
  function handleStockClick(id, portfolioOrNot){
    if(portfolioOrNot){
      const stocksLessOne = portfolio.filter(stock=>stock.id!==id)
      setPortfolio(stocksLessOne)
    } else {
      const stockObj = stocks.find(stock=>stock.id===id)
      if(!portfolio.includes(stockObj)){
        setPortfolio([...portfolio, stockObj])
      }
    }
  }
  
  const displayStocks = stocks.filter(stock=>stock.type===filterBy).sort((a, b)=>sortFunc(a, b))
  return (
    <div>
      <SearchBar onSortChange={setSortBy} onFilterChange={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayStocks} isPortfolio={isPortfolio} onStockClick={handleStockClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} isPortfolio={isPortfolio} onStockClick={handleStockClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
