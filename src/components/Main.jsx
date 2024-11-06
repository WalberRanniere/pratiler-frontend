import mainCss from '../assets/css/Main.module.css'
import bookImage from '../assets/img/home-livros-coracoes.png'


export function Main(){
    return(
        <>
            <main className={mainCss.section}>
                <div className={mainCss.section_text_btn}>
                    <p>Uma rede social para <strong>compartilhar</strong> leituras
                    e se <strong>motivar</strong> cada vez mais!</p>
                    <button>Comece Agora</button>
                </div>
                <img src={bookImage} alt="" />
            </main>
        </>
    )
}