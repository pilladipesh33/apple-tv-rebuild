import { Search, ShoppingBag } from "lucide-react";
import { Button } from "./button";
import { Container } from "./container";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast py-2 relative z-20 text-white">
        <Container className="flex min-h-[--header-row-height] justify-between items-center">
          <div>
            <a
              href="/"
              className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
            >
               <span className="sr-only">Back to homepage</span>
            </a>
          </div>
          <div className="flex gap-5">
            <Search className="h-4 w-4 text-white" />
            <ShoppingBag className="h-4 w-4 text-white" />
          </div>
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky py-2 top-0 z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
