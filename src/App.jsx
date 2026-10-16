import { useState } from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio"; 
import Repositories from "./components/Repositories";
import StatCard from "./components/StatCard";  



function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);


  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">

    

      <footer className="mt-auto bg-[#222222] px-20 py-6 text-center text-xl text-[#FAF3E1]">
        <p>Every profile on DevHub is public.</p>
      </footer>
    </div>
  );
}

export default App;
