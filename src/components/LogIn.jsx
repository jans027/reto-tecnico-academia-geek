
import "../Global.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { Alert } from "./Pag3";
import { TextIntro, Singupfrm, Form, Input1, InputContainer, ButtonIntro1 } from '../styles/PagIntro'
import logogoogle from '../images/logogoogle.png'
import logofb from '../images/logofb.png'
// import portada from '../images/portada.png'
// import Image from '../styles/PagIntro'
import { loginGoogle, LoginWithEmail } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
// import { NavBar2 } from "./NavBar2";
import { DivCard2, DivPadre2 } from "../styles/Styles1";
import Swal from "sweetalert2";





export function LogIn() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });


    // Sweat alert........................................................
    const handleSubmit = (e) => {
      e.preventDefault();  
      if (user.email === "" || user.password === "") {
  
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Todos los Campos son Obligatorios!',
        })
      } else {
        Swal.fire({
          title:'Good job!',
          text:'Gracias por Regresar!',
          icon:'success',
          
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(LoginWithEmail(user.email, user.password));
            // alert('ok')
            navigate("/home1");// cambiar ruta...................................
          } 
        })
      }
      e.target.reset();//metodo que resetea campos ................................
  }

  const handleGoogle = () => {
    dispatch(loginGoogle())
  }

  return (
    <section>
      <div className="col-12" >
      <div className="row">


        <DivPadre2 className="col-12" Style="margin-top:-100px">
          <DivCard2 className="container d-flex" Style="justify-content: center;aling-items:center;">
          <img src="https://i.ibb.co/bv7RL7v/580b57fcd9996e24bc43c325.png" alt="picachu" border="0" />
          </DivCard2>
        </DivPadre2>


        <div className="col-12" >
          <div className="container" Style="text-align:center">
            <TextIntro>
              <div className="col-12">

                <h2>Welcome back</h2>
              </div>
              <div className="col-12">
                <h5>Sing in to an existing account using your Email</h5>
              </div>
            </TextIntro>
          </div>
        </div>


        <div className="col-12">
          <div className="row">
            <Singupfrm>
              <Form onSubmit={handleSubmit}>
                <InputContainer className="mb-3 mt-3">
                  {/* <Label htmlFor="email">Email</Label> */}
                  <Input1 type="email" name="email" onChange={handleChange} 
                  placeholder="Email" />
                </InputContainer>
                <InputContainer className="mb-2">
                  {/* <Label htmlFor="password">Password</Label> */}
                  <Input1 type="password" name="password" onChange={handleChange}
                    placeholder="Password" />
                </InputContainer>

                <div className="col-12">
                  <div className="row">
                    <div className="container" Style="text-align: center;">
                      <ButtonIntro1 >
                        sing in
                      </ButtonIntro1>
                    </div>
                  </div>
                </div>
              </Form>
            </Singupfrm>
          </div>
        </div>

        <div className="col-12">
          <div className="container" Style="text-align:center; margin-top:50px; font-size:20px">
            <h1>Sing In With</h1>
          </div>
        </div>

        <div className="col-12">
          <div className="row" Style="text-align:center;">
            <div className="container d-flex RedesBotones1">
              <div className="col-6" Style="">
                <button className="botonRedes" Style="border:none">
                  <img Style="height:60px;" src={logofb} alt="" />
                </button>
              </div>
              <div className="col-6" Style="">
                <button className="botonRedes" onClick={handleGoogle} Style="border:none;">
                  <img Style="height:60px; width:60px;" src={logogoogle} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="col-12 ">
          <div className="container container36" Style="margin-top:40px; font-weight:400; font-size:14px; text-align:center;">
            Dont have account?
            <Link to="/singup" Style="color:#2BE7E8; margin-left:10px;">
              Sing up
            </Link>
          </div>
        </div>

      </div>
    </div>
    </section>
  );
}
