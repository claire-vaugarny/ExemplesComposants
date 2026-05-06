import DesactivateAccount from "./DesactivateAccount";
import MusicCard from "./MusicCard";
import IDCard from "./IDCard";
import CoffeeMachine from "./CoffeeMachine";
import SunsetCard from "./SunsetCard";
import Toasters from "./Toasters";
import OrderTracker from "./OrderTracker";
import TimeFlies from "./TimeFlies";
import ImageCard from "./ImageCard";
import BorderCard from "./BorderCard";
import GlowingFlipCard from "./GlowingFlipCard";

function App() {
  return (
 <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start gap-6 p-6">        <MusicCard />
        <DesactivateAccount />
        <IDCard />
        <CoffeeMachine />
        <SunsetCard />
        <Toasters />
        <OrderTracker />
        <TimeFlies />
        <ImageCard />
        <BorderCard />
        <GlowingFlipCard />
    </main>
  );
}

export default App;
