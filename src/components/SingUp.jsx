import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ButtonIntro1,
  TextIntro,
  Singupfrm,
  Form,
  Input1,
  InputContainer
} from '../styles/PagIntro'
import { registerWithEmail } from "../Redux/Actions/userAction";
import { DivCard2, DivPadre2 } from "../styles/Styles1";
import Swal from "sweetalert2";

export function SingUp() {
  // const { singup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    displayName: "",
    password: "",
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Sweat alert........................................................
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (user.email === "" || user.displayName=== "" ||  user.password === "") {
      // console.log('eooooooooooooo', user)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los Campos son Obligatorios!',
      })
    } else {
      Swal.fire({
        title: 'Good job!',
        text: 'Usuario Guardado Correctamente!',
        icon: 'success',

      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(registerWithEmail(user.email, user.password, user.displayName))
          // alert('ok')
          navigate("/Login");// cambiar ruta...................................
        }
      })
    }
    e.target.reset();//metodo que resetea campos ................................
  };
  // console.log(user);



  // console.log(user);
  return (
    <section>
      <div className="col-12">
        <div className="row">
          <div className="container">
            <DivPadre2 className="col-12" Style="margin-top:-100px">
              <DivCard2 className="container d-flex" Style="justify-content: center;aling-items:center;">
                <img src="https://i.ibb.co/ck7kfQn/580b57fcd9996e24bc43c325.png" alt="picachu" border="0" />
              </DivCard2>
            </DivPadre2>

            <div className="col-12">
              <div className="container" Style="text-align:center">
                <TextIntro>
                  <div className="col-12">
                    <h2>Create New Account</h2>
                  </div>
                  <div className="col-12">
                    <h5>Create a new account by filling in all the
                      fields or login to an existing account</h5>
                  </div>
                </TextIntro>
              </div>
            </div>


            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <Singupfrm>

                    <Form onSubmit={handleSubmit}>

                      <InputContainer className="mb-2 mt-3">
                        {/* <Label htmlFor="email">Email</Label> */}
                        <Input1 type="email" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" />
                      </InputContainer>
                      <InputContainer className="mb-3 mt-3">
                        {/* <Label htmlFor="name">Name</Label> */}
                        <Input1 type="text" name="name" onChange={(e) => setUser({ ...user, displayName: e.target.value })} placeholder="Username" />
                      </InputContainer>
                      <InputContainer className="mb-2">
                        {/* <Label htmlFor="password">Password</Label> */}
                        <Input1 type="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })}
                          placeholder="Password" />
                      </InputContainer>
                      <div className="col-12">
                        <div className="row">
                          <div className="container d-flex" Style="justify-content:center;">
                            <ButtonIntro1>
                              Register
                            </ButtonIntro1>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </Singupfrm>
                </div>
              </div>
            </div>




            <div className="col-12">
              <div className="row">
                <div className="col-12 container36" Style="margin-top:20px; font-weight:400; font-size:14px; text-align:center">
                  Already have an Account?
                  <Link to="/login" Style="color:#2BE7E8; margin-left:20px;">
                    Login
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

