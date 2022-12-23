import Image from "next/image";
import lubaczowAirPollutionImg1 from "../public/images/Lubaczow-air-pollution-above.png";

export default function AboutProject() {
  return (
    <div>
      <div className="img-wrapper" style={{ height: "35vh" }}>
        <Image
          src={lubaczowAirPollutionImg1}
          alt="miasto Lubaczów z unoszącym się smogiem w powietrzu"
          placeholder="blur"
          fill
        />
      </div>

      <div className="container">
        <h1>O projekcie</h1>
        <p>
          Projekt polegał na zbudowaniu systemu do monitorowania jakości
          powietrza w Lubaczowie. Powodem powstania projektu, jest mała
          świadomość mieszkańców na temat faktycznej jakości powietrza w
          mieście. Na jednym z osiedli mieszkalnych miasta została umieszczona
          stacja pomiarowa, zabrane przez nią dane, są następnie przesłane do
          centralnego serwera, gdzie będą one analizowane i prezentowane w
          przystępnej formie.
        </p>
        <p>
          W ten sposób mieszkańcy będą mogli na bieżąco śledzić jakość powietrza
          w swojej okolicy i w razie potrzeby zareagować. Projekt został
          sfinansowany z budżetu inicjatora, a jego celem jest uświadomienie
          mieszkańcom miasta na temat faktycznej jakości powietrza, w którym
          żyją.
        </p>
        <h2>Plany na przyszłość</h2>
        <p>
          W przyszłości planuje się zwiększenie dostępności danych na temat
          jakości powietrza dla mieszkańców miasta.
        </p>
        <p>Planowane działania:</p>
        <ul>
          <li>
            umożliwienie mieszkańcom przeglądania danych historycznych jakości
            powietrza w swojej okolicy
          </li>
          <li>zwiększenie liczby stacji pomiarowych</li>
          <li>dalsza rozbudowa strony internetowej</li>
          <li>rozszerzenie systemu na inne miasta w regionie.</li>
        </ul>
      </div>
    </div>
  );
}
