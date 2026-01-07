import { Navbar } from "./components/navbar";
import Track from "./components/track";
import "./globals.css";

export default function Home() {
  return (
    <div className="relative flex justify-center text-center flex-col min-h-screen font-inter">
      <Navbar/>
      <Track />
    </div>
  );
}
