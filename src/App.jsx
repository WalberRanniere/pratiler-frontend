import './assets/css/global.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Section } from './components/Section'
import { Separator } from './components/Separator'
import { SectionInverted } from './components/SectionInverted'
import girlReading from './assets/img/menina-lendo.png'
import sereia from './assets/img/sereia.png'
import gnomo from './assets/img/duende.png'


export function App() {

  return (
    <>
      <Header />
      <Main />
      <Separator />
      <Section 
        strong="Organize" 
        title= "suas leituras" 
        text="O sistema deixa sempre disponível as suas leituras atuais, futuras e finalizadas, além de estar sempre disponível para que você adicione livros a sua estante."
        text_two="Comente sobre suas leituras atuais, a partir da página que você comecou a ler até a página que você terminou a leitura, sempre dizendo o que você está achando do livro."
        img={girlReading}
      />
      <SectionInverted
        strong="Conheça" 
        title= "outros leitores" 
        text="Você poderá comentar e curtir postagens de outros leitores, além de poder seguir a conta desses leitores caso você queira continuar acompanhando as postagens. Você pode conhecer novas pessoas que gostam dos mesmos livros que você!"
        img={sereia}
      />
      <Section 
        strong="Novas recomendações" 
        title= "sempre" 
        text="O sistema lista os livros mais populares, além de você poder visualizar os livros mais comentados pelos leitores que você segue."
        img={gnomo}
      />
    </>
  )
}


