import headerCss from '../assets/css/Header.module.css'
import pratilerLogo from "../assets/img/pratiler-logo.png"
import iconIn from "../assets/img/icon-going.png"


export function Header(){
    return(
        <>
            <header className={headerCss.header}>
                <img  className={headerCss.logo} src={pratilerLogo} alt="Logo do Projeto Pratiler" />
                <div className={headerCss.buttons}>
                    <button className={headerCss.box_in}>
                        <img src={iconIn} alt="ícone de entrar" />
                        <span>Entrar</span>
                    </button>
                    <button className={headerCss.btn_register}>Cadastre-se</button>
                </div>
            </header>
        </>
    )
}