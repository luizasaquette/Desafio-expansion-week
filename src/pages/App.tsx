import React from 'react';
import './App.css';

import communicationImage from '../assets/background.png';

function App() {
  return (
    <div className="App">

      <img src={communicationImage} alt="communication"/>

      <div className="content">
        <aside>
          <h1>Comunicação:</h1>
          <p> Você sabe a <br /> 
          importância dessa <br /> skill?</p>   
        </aside>
        <main>
          <p className="box">
            “Quando a comunicação é boa, ela informa.
             Quando é ótima, ela engaja e incentiva
              os colaboradores a agirem” – David Grossman
          </p>
          <p>
            A comunicação está presente em muitos momentos das nossas vidas.
            Ser comunicativo não é uma habilidade importante apenas para quem trabalha com público,
            como estamos acostumados a pensar. Em diferentes ambientes,
            sejam de corporações ou mesmo dentro da sua casa,
            a comunicação atua conectando pessoas e ideias,
            transformando vidas, e criando bons relacionamentos.
          </p>
          <p>
          O ato de se comunicar tem a ver com a capacidade de expressar bem suas ideias,
          seja de forma oral ou escrita, e também, ouvir e compreender as propostas do outro.
          Sendo assim, quando pensamos em um contexto empresarial,
          conseguimos imaginar a importância de estarmos hábeis á comunicação,
          já que precisamos constantemente compartilhar de nossas ideias e propostas com colegas,
          assim como, estarmos dispostos a receber informações e ideias de outros parceiros.
          </p>
          <p className="box">
          Saber compreender e transmitir pensamentos, garante harmonia entre um grupo,
          e promove bons relacionamentos. O alinhamento entre equipes surge com a confiança 
          e a possibilidade poder contar com outras pessoas para atingir um bom desempenho.
          </p>
          <p className="box">
            Mas e além do ambiente empresarial? Quem sou eu sem a comunicação?
          </p>
          <p>
          Manifestar ideias ajuda a mostrar quem somos, quais são nossos propósitos e do que somos capazes.
          É através de diferentes canais de comunicação que conseguimos esclarecer nossos ideais,
          além de reconhecer em outras pessoas coisas das quais não temos conhecimento. 
          </p>
          <p>
            Procure em outras pessoas aquilo que te complementa, e reconheça 
            que grande parte do que já é do seu entendimento, outra pessoa lhe repassou.
            A comunicação nos auxilia no processo de conhecer pessoas , bem como compartilhar experiências
            e ensinamentos.
          </p>
          <p className="box">
            Conecte-se!
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
