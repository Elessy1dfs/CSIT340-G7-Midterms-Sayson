import { useState } from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio"; 
import Profile from "./components/Profile";
import StatCard from "./components/StatCard";  
import Repositories from "./components/Repositories";
import Footer from "./components/footer";

function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      

      <main className="flex-1 px-20 py-10">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <Bio />
            <div className="mt-6">
              <Profile 
                onFollow={handleFollow} 
                onAddRate={handleAddRate} 
                onReset={handleReset} 
              />
            </div>
          </div>
          <StatCard followers={followers} rate={rate} />
        </div>

        <Repositories 
          portfolioStars={portfolioStars}
          todoStars={todoStars}
          dotfilesStars={dotfilesStars}
          handleStarPortfolio={handleStarPortfolio}
          handleStarTodo={handleStarTodo}
          handleStarDotfiles={handleStarDotfiles}
        />
      </main>

      
    </div>
  );
}

export default App;