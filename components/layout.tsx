import React, { useCallback, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }: React.PropsWithChildren) {
  const [navbarState, setNavbarState] = useState(false);
  const toggleNavbar = useCallback(() => setNavbarState((val) => !val), []);

  return (
    <div>
      <Head>
        <title>
          SmogLubaczów.pl | Aktualne informacje o jakości powietrza w mieście
          Lubaczów
        </title>
        <title>
          SmogLubaczów.pl | Aktualne informacje o jakości powietrza w mieście
          Lubaczów
        </title>
        <meta
          name="title"
          content="SmogLubaczów.pl | Aktualne informacje o jakości powietrza w mieście Lubaczów"
        />
        <meta
          name="description"
          content="Nasza strona internetowa zawiera aktualne informacje dotyczące jakości powietrza w mieście Lubaczów. Znajdziesz tu dane na temat poziomu zanieczyszczenia powietrza oraz ostrzeżenia dotyczące smogu i innych zagrożeń dla zdrowia."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smoglubaczow.pl" />
        <meta
          property="og:title"
          content="SmogLubaczów.pl | Aktualne informacje o jakości powietrza w mieście Lubaczów"
        />
        <meta
          property="og:description"
          content="Nasza strona internetowa zawiera aktualne informacje dotyczące jakości powietrza w mieście Lubaczów. Znajdziesz tu dane na temat poziomu zanieczyszczenia powietrza oraz ostrzeżenia dotyczące smogu i innych zagrożeń dla zdrowia."
        />
        <meta
          property="og:image"
          content="https://smoglubaczow.pl/images/lubaczow-smog.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://smoglubaczow.pl" />
        <meta
          property="twitter:title"
          content="SmogLubaczów.pl | Aktualne informacje o jakości powietrza w mieście Lubaczów"
        />
        <meta
          property="twitter:description"
          content="Nasza strona internetowa zawiera aktualne informacje dotyczące jakości powietrza w mieście Lubaczów. Znajdziesz tu dane na temat poziomu zanieczyszczenia powietrza oraz ostrzeżenia dotyczące smogu i innych zagrożeń dla zdrowia."
        />
        <meta
          property="twitter:image"
          content="https://smoglubaczow.pl/images/lubaczow-smog.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="topnav">
        <nav>
          <Link href="/" className="active title">
            🏭 SmogLubaczów.pl
          </Link>
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger-icon"
            onClick={toggleNavbar}
          />
          <div
            className={`links-container ${navbarState ? "show-mobile" : ""}`}
          >
            <Link href="/about">O projekcie</Link>
            {/* <a href="/historical-data">Dane historyczne</a> */}
            <Link href="/contact">Kontakt</Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="copyright">
          <Link href="/">SmogLubaczów.pl - smog-lubaczow@gmail.com</Link>
        </div>
      </footer>
    </div>
  );
}
