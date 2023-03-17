import { Home, Form, Imagem } from "./styles";
import Logo from "../../assets/logo.svg";
import LogoName from "../../assets/logoName.svg";
import validation from "./validation";
import Eyes  from "./eyes";
import EyeOff from '../../assets/eye-off.svg';
import { PreLoad } from "./components/PreLoad";

export default function FormPage() {


  return (
    <Home>
      <PreLoad/>
      <Form>
        <figure>
          <img src={Logo} alt="Logo" />
          <img src={LogoName} alt="Vertigo" />
        </figure>
        <div className="formArea">
          <div className="text">
            <h1>Acesse a plataforma</h1>
            <p>
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje.
            </p>
          </div>
          <form action="#" autoComplete="off" id="form">
            <div className="content">
              <div className="input">
                <label htmlFor="">E-mail</label>
                <input type="text" id="email" name="email" placeholder="Digite seu e-mail" />
                <small id="EmailFail"></small>
              </div>
              <div className="input">
                <div className="line">
                  <label htmlFor="password">Senha</label>
                  <a href="#">Esqueceu a senha?</a>
                </div>
                <div className="password">
                  <input type="password" placeholder="Digite sua senha" name="password" id="password" />
                  <img src={EyeOff}className="icon"alt="Botão de ocultar e ver senha" id="eyes" onClick={Eyes}/>
                </div>
                <small id="PasswordFail"></small>
              </div>
            </div>
            <button type="submit" onClick={validation}>Entrar</button>
            <p>Ainda não tem uma conta? <a href="#">Inscreva-se</a></p>
          </form>
        </div>
      </Form>
      <Imagem>
        <div className="img"></div>
      </Imagem>
    </Home>
  );
}
