import { ModeToggle } from "@/components/theme-provider/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,

} from "@/components/ui/navigation-menu";

import Link from "next/link";

function VernonNavbar() {
  return (
    <NavigationMenu style={{margin: "2em auto"}}>
      <NavigationMenuList>
        <NavigationMenuItem style={{marginRight: "1em"}}>
          <Link href="#about" className="nav-links">About Me</Link>
    
        </NavigationMenuItem>
        <NavigationMenuItem style={{marginRight: "1em"}}>
          <Link href="#my-work" className="nav-links">My Work</Link>
         
        </NavigationMenuItem>
        <NavigationMenuItem style={{marginRight: "1em"}}>
          <Link href="#contact" className="nav-links">Contact</Link>
        
        </NavigationMenuItem>
        <NavigationMenuItem>
        <a
            href={"https://github.com/Kacelo/portfolio/blob/main/public/VKaceloCV.pdf"}
            id="resume"
            target="_blank"
            className="px-10 py-3 m: px-1 py-1 bg-blue-600 text-white rounded-full text-sm"
            download
          >
            Download Resume
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
export default VernonNavbar;
