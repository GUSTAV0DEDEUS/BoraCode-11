import styled from "styled-components";
import IMG from '../../assets/img.png';


export const Home = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(---Gray-50);
  @media screen and (max-width:869px){
    justify-content: center;
  }

`
export const Form = styled.div`

  padding-left: 11.2rem;

  figure{
    top: 4rem;
    position: absolute;
  }
  .formArea{
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .text h1{
    font-style: normal;
    color: var(---Gray-800);
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
  .text p{
    color: var(---Gray-600);
    font-size: 1.6rem;
    font-weight: 400;
    max-width: 351px;
  }
  form{
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 38.4rem;
  }
  form .content{
    /* width: 100%; */
    display: grid;
    row-gap: 1.6rem;
  }
  .content .input{
    display: flex;
    flex-direction: column;
    gap: .8rem;
  }
  .input label, .input .line label{
    font-size: 1.4rem;
    font-weight: 600;
    color: var(---Gray-800);
  }
  .input input, .input .password input{
    padding: 1.6rem 1.2rem;
    background-color: #fff;
    outline: 0;
    border: 1px solid var(---Gray-200);
    border-radius: 4px;

    font-size: 1.4rem;
    font-weight: 400;
    color: var(---Gray-800);
    transition: all .4s;
  }
  input:hover, input:focus,
  .input .password input:hover, .input .password input:focus
  {
    border: 1px solid var(---purple);
  }
  input::placeholder{
    color: var(---Gray-400);
  }
  input.invalid,
  .input .password input.invalid
  {
    border: 1px solid #ED3A5A;
  }
  small{
    color: #ED3A5A;
    font-weight: 400;
    font-size: 1.4rem;
  }
  .input .line{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
  .input .password{
    position: relative;
  }
  .input .password input{
    width: 100%;
  }
  .input .password .icon{
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  button{
    padding: 1.6rem 2.4rem;
    outline: 0;
    border: 0;

    border-radius: 4px;
    background-color: var(---purple);
    font-size: 1.6rem;
    color: #fff;
    font-weight: 700;

    transition: all .6s;
  }
  button:hover, button:focus, button:active{
    background: #9f67ff;
    cursor: pointer;
  }
  a{
    font-size: 1.4rem;
    color: #7C3AED;
    font-weight: 600;
    text-decoration: none;
  }
  p {
    font-size: 1.6rem;
    color: var(---Gray-600);
    font-weight: 400;
  }
  p a{
    font-size: 1.6rem;
    font-weight: 700;
  }
  p a:hover, p a:focus, p a:active{
    text-decoration: underline;
  }

  @media screen and (max-width: 1100px){
    padding-left : 4rem;
  }
  @media screen and (max-width:869px){
    padding: 0;
  }
  @media screen and (max-width:413px){
    text-align: center;
    form{
      align-self: center;
    }
  }
`
export const Imagem = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  @media screen and (max-width:869px){
    display: none;
  }
  .img{
    background: url(${IMG}) no-repeat top center;
    background-size: cover;
    height: 100%;
    z-index: 0;
  }
  .img::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(---purple);
    mix-blend-mode: screen;
  }

`