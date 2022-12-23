import Image from "next/image";
import lubaczowAirPollutionImg1 from "../public/images/Lubaczow-city-with-smog.png";

export default function Contact() {
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
        <h1>Kontakt</h1>
        <p>
          Jeśli jesteś zaniepokojony stanem jakości powietrza w twojej okolicy
          lub masz pytania dotyczące smogu, zachęcamy do kontaktu z nami.
          Jesteśmy grupą lokalnych działaczy, którzy zajmują się monitorowaniem
          jakości powietrza w naszym mieście i walczą o lepsze warunki dla nas
          wszystkich.
        </p>

        <p>
          Jeśli chcesz się z nami skontaktować, możesz wysłać wiadomość na adres
          email:
          <a href="mail:smog-lubaczow@gmail.com">smog-lubaczow@gmail.com</a>.
          Możesz też przesłać nam dowolne materiały, które uważasz za istotne w
          kontekście jakości powietrza w naszym mieście.
        </p>
        <p>
          Niezależnie od tego, czy jesteś zaniepokojony stanem powietrza, czy
          też chcesz się po prostu dowiedzieć więcej na ten temat, zachęcamy do
          kontaktu.
        </p>
      </div>
    </div>
  );
}
