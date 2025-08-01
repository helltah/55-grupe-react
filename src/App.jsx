import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Title } from "./components/Title";
import { Calc } from "./components/Calc";
export function App() {
  return (
    <>
      <Header />
      <Main>
        <Title text="Labas rytas, Lietuva!" />
        <div>🟨🟩🟥</div>
        
        <Calc a={7} b={5} />

        <Title text="Apie mus" desc="Trumpas tinklapio pristatymas" />
        <Title text="Paslaugos" desc="Musu teikiamu paslaugu aprasymas" />
        <Title text="Kontaktai" desc="Zinau kur tu gyveni, todel geriau net nekotaktuok" />
      </Main>
      <Footer />
    </>
  );
}

