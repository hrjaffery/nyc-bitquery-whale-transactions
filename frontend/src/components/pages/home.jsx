import Navbar from "../common/Navbar";
import Hero from "../views/hero";
import NyxCipher from "../views/nyxCipher";
import Advantage from "../views/advantage";
import NyxToolkit from "../views/nyxToolkit";
import NyxVsPaal from "../views/nyxVsPaal";
import Partnering from "../views/partnering";
import JoinUs from "../views/joinUs";
import Faqs from "../views/faqs";
import Footer from "../views/footer";
import WhaleTransactionsChart from "../views/whaleTransaction";
import { useEffect } from "react";

function Home() {

  const transactions = async () => {
    
  }
  useEffect(() => {
    transactions();
  },[]);
  
  return (
    <div id='home'>
      <Navbar />
      <Hero />
      <WhaleTransactionsChart/>
      <NyxCipher />
      <Advantage />
      <NyxToolkit />
      <NyxVsPaal />
      <Partnering />
      <JoinUs />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;