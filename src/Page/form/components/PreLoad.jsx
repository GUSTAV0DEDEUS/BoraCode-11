import React, {useEffect} from 'react'
import styled from 'styled-components'
import Logo from "../../../assets/logo.svg";
import LogoName from "../../../assets/logoName.svg";
import { preLoaderAnim } from './animated';

const Load = styled.figure`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 999;
  background-color: var(---Gray-50);
  display: flex;
  gap: 2rem;
  justify-content: center;
  place-items: center;
  .text{
    display: flex;
    flex-direction: column;
    width: 0;
    overflow: hidden;
  }
  #load img{
    display: none;
  }
`
export const PreLoad = () => {
  useEffect(()=>{
    preLoaderAnim();
  }, []);
  return (
    <Load id="load">
      <img src={Logo} alt="Logo" />
      <div className="text">
        <img src={LogoName} alt="Vertigo" />
      </div>
    </Load>
  )
}
