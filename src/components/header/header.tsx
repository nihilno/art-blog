import Logo from "@/components/globals/logo";
import Navbar from "@/components/header/navbar";

function Header() {
  return (
    <header className="card-with-lines border-foreground container mx-auto mt-8 flex h-12 justify-between border-b">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
