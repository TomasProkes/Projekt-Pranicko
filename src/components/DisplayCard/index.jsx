import React from 'react';

const DisplayCard = () => {
  return (
    <>
      {/* <!--
        Tenhle div představuje pozadí celé stránky za přáníčkem.
        Můžeš na něj přidat jednu z následujících tříd pro varianty pozadí:
        .background--red, .background--green, .background--blue, .background--gold
        .background--tree, .background--decorations, .background--snow

        Takže třeba zlaté pozadí bude:
        <div className="background background--gold">
      --> */}
      <div className="background">

        <div className="snow">
          {/* <!--
            Pokud chceš, tak sem vložíš sníh, který bude padat na pozadí.

            Nainstaluj si do projektu tuhle knihovnu:
            https://www.npmjs.com/package/react-snowfall
            A pak vlož a nastav komponentu podle dokumentace.

            Pravděpodobně to bude vypadat nějak takhle:
            <Snowfall snowflakeCount={200} />
          --> */}
        </div>


        {/* <!--
          Na tenhle div půjde kliknout, což by mělo otevřít/zavřít přáníčko.

          Stačí na něj po kliknutí přidat třídu .card--open a přáníčko se otevře.
          Když ji odebereš, tak se zase zavře.

          Přidáním jedné z následujících tříd nastavíš barvu pozadí obálky
          a také levé strany uvnitř přáníčka.
          .card--red, .card--green, .card--blue, .card--gold

          Takže třeba otevřená modrá kartička bude:
          <div className="card card--blue card--open">
        --> */}
        <div className="card">

          {/* <!--
            Vnější obálka
            Nastav do src obrázku správné SVG tvojí vybrané obálky.
          --> */}
          <div className="cover">
            <img className="cover__image" src="images/covers/gifts.svg" />
          </div>

          {/* <!--
            Levá vnitřní strana
            Sem doplníš text přáníčka a podpis.
          --> */}
          <div className="inside-left">
            <div className="inside-left__content">
              <div className="inside-left__text">Šťastné a veselé Vánoce!</div>
              <div className="inside-left__sender">Luděk</div>
            </div>
            <img className="inside-left__logo" src="images/czechitas.svg" alt="Czechitas" />
          </div>

          {/* <!--
            Pravá vnitřní strana
            Fotky jsou v projektu zadané napevno. Klidně si je vyměň za svoje,
            ale zachovej jejich velikost a poměr stran. CSS není na jinou variantu
            připravené a přání by mohlo vypadat divně.
          --> */}
          <div className="inside-right">
            <div className="photo photo1"><img src="images/photos/photo1.jpg" /></div>
            <div className="photo photo2"><img src="images/photos/photo2.jpg" /></div>
            <div className="photo photo3"><img src="images/photos/photo3.jpg" /></div>
            <div className="photo photo4"><img src="images/photos/photo4.jpg" /></div>
          </div>

          {/* </div><!-- konec .card --> */}

          <p className="instructions">Kliknutím mě otevři</p>

        </div>
        {/* <!-- konec .background --> */}
      </div>
    </>
  )
}

export default DisplayCard