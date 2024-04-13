import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/huntersguild.png" 
            alt="Hunter's Guild" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Hunter's Guild
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/Ahjin.png" 
            alt="Ahjin Guild" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Ahjin Guild
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/dragon.png" 
            alt="Drakonia" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Guild Drakonia
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/valhalla.png" 
            alt="Valhalla" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Valhalla
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/Tenjiku.png" 
            alt="Tenjiku" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          The Tenjiku
        </Button>
      </div>
    </footer>
  );
};