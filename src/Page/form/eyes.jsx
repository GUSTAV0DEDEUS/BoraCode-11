import Eye from "../../assets/eye.svg";
import EyeOff from '../../assets/eye-off.svg';
var a = 0;
export default function Eyes(){
  if(a==1){
    document.getElementById('password').type='password';
    document.getElementById('eyes').src=`${EyeOff}`;
    a = 0;
  }
  else{
    document.getElementById('password').type='text';
    document.getElementById('eyes').src=`${Eye}`;
    a = 1;
  }
} 