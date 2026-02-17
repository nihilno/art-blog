import Logo from "@/components/globals/logo";
import Navbar from "@/components/header/navbar";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="card-with-lines border-foreground container mx-auto mt-8 flex h-12 justify-between border-b">
      <Logo />
      <div className="hidden md:block">
        <Navbar />
      </div>
      <Menu className="size-8 md:hidden" aria-label="Open menu" />
    </header>
  );
}

export default Header;
