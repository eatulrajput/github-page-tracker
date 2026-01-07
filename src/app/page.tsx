import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import Track from "./components/track";
import "./globals.css";

export default function Home() {
  return (
    <div className="relative flex justify-center text-center flex-col min-h-screen font-inter bg-[url('https://images.unsplash.com/photo-1663970206579-c157cba7edda')]">
      <Navbar/>
      <Track />
      <Footer/>
    </div>
  );
}
