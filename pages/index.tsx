import { airIndexToEmoji } from "../utils/airIndexToEmoji";
import { airIndexToString } from "../utils/airIndexToString";
import { ProbeData } from "../utils/probeData";

export async function getStaticProps() {
  const res = await fetch("https://smogtok.com/apprest/probedata/E2307225");
  const probeData = await res.json();

  return {
    props: {
      probeData,
      airIndexEmoji: airIndexToEmoji(probeData.IJP),
      airIndexString: airIndexToString(probeData.IJP),
    },
    revalidate: 10,
  };
}

type HomeProps = {
  probeData: ProbeData;
  airIndexEmoji: string;
  airIndexString: string;
};

export default function Home({
  probeData: { DT: lastDataRead, REGS },
  airIndexEmoji,
  airIndexString,
}: HomeProps) {
  const [temp, humidity, pressure, pm0_1, pm2_5, pm10] = REGS;

  return (
    <main>
      <div className="air-index-block center">
        <div className="description">
          Jakość powietrza jest {airIndexString}
        </div>
        <div className="emoji">{airIndexEmoji}</div>
      </div>
      <div className="air-pollution-details">
        <table>
          <thead>
            <tr>
              <th>PM 0.1</th>
              <th>PM 2.5</th>
              <th>PM 10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pm0_1.VALUE} μg/m3</td>
              <td>{pm2_5.VALUE} μg/m3</td>
              <td>{pm10.VALUE} μg/m3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="map-container">
        <p>Lokalizacja stacji pomiarowej:</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.4454708080721!2d23.117194187641935!3d50.1597695369005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b59f03edf3b6f%3A0xc19eca0a8e110abd!2sOsiedle%20Unii%20Lubelskiej%201!5e0!3m2!1spl!2spl!4v1671022161374!5m2!1spl!2spl"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
}
