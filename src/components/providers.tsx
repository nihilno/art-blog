import { Toaster } from "./ui/sonner";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}

export default Providers;
