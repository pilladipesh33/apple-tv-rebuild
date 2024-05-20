import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Hero } from "@/components/section/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div>
          <Container>usps</Container>
        </div>
        <div>
          <Container>3 col layout</Container>
        </div>
        <div>
          <Container>Carousel with posters</Container>
        </div>
      </main>
    </>
  );
}
