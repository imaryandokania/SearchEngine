import Link from "next/link";
import { Button } from "./ui/button";
import { SiX, SiGithub, SiDiscord } from "react-icons/si";

export function Footer() {
  return (
    // <footer className="w-full flex fixed bottom-0 right-0 p-1 z-50 bg-background/95">
    <footer className="w-full flex fixed bottom-0 right-0 p-1 z-50">
      <div className="px-1 w-full flex flex-row justify-end space-x-1">
        {/* <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <Link href="https://discord.gg/kKmmqmjx" target="_blank">
            <SiDiscord size={16} />
          </Link>
        </Button> */}
        <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <Link href="https://github.com/imaryandokania" target="_blank">
            <SiGithub size={16} />
          </Link>
        </Button>
     
      </div>
    </footer>
  );
}
