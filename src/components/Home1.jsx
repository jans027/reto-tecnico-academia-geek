
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import cover1 from '../images/cover1.jpeg'
import { TextIntro2, Container1, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2 } from "../styles/PagIntro"
import React, { useState, useEffect } from 'react';
import { collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase"
export const Home1 = () => {


  // const [work, setwork] = useState([])

  // const [filtrado, setfiltrado] = useState([])
  //     const ObtenerDatos = async () => {
  //         const data =await fetch("http://localhost:3001/ejercicios");
  //         const Preg= await data.json()
  //         setwork(Preg)
  //         console.log(work)

  //     }
  //     useEffect(() => {
  //     ObtenerDatos()

  //     },[])

  //     useEffect(() => {
  //         filtrar("Body")
  //         },[])


  //hooks
  const [ejercicios1, setejercicios1] = useState([])
  // const [ejercicios2, setejercicios2] = useState([])
  const [filtrado, setfiltrado] = useState([])
  //refrerenciamos a la db firestore

  const ejerciciosCollection = collection(db, "ejercicios")

  //funcion para mostrar todos los docs

  const getEjercicios = async () => {

    const data = await getDocs(ejerciciosCollection)
    console.log(data.docs)
    const ejercicios2 = data.docs

    const info = ejercicios2.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(info)
    const ejercicios = info;
    setejercicios1(ejercicios)
  }


  useEffect(() => {
    getEjercicios()
  }, [])

  const filtrar = (cat) => {

    const filtrado1 = ejercicios1.filter(elemento => elemento.categoria === cat);
    setfiltrado(filtrado1)
  }


  function siguiente() {
    let sliderSectionLast = document.querySelectorAll(".slider__section")[0];
    const slider = document.querySelector("#slider");
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement('beforeend', sliderSectionLast);
      slider.style.marginLeft = "0";
    }, 500);
  }

  function anterior() {
    let sliderSection = document.querySelectorAll(".slider__section");
    const slider = document.querySelector("#slider");
    let sliderSectionFirst = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement('afterbegin', sliderSectionFirst);
      slider.style.marginLeft = "0";
    }, 500);
  }




  return (
    <div className="col-12">
      <div className="row">

        <NavBar />


        <div className="col-12" Style="margin-top:140px;" >
          <div className="container d-flex" Style="justify-content: center;aling-items:center;">
            <div className="slider__contenedor">
              <div classname="slider" id="slider" Style="background:none;">

                <div className="slider__section">
                  <div className="row">
                    <div className="col-6">
                      <TextIntro2>
                        <h1>warm up</h1>
                        <p Style="font-size:10px;">Before Training, be sure to warm up, give it 5 - 10 minutes</p>
                      </TextIntro2>
                    </div>
                    <div className="col-6">
                      <img Style="background:none;" className="imgPortada" src={img2} alt="" />
                    </div>
                  </div>
                </div>

                <div className="slider__section">
                  <div className="row">
                    <div className="col-6">
                      <TextIntro2>
                        <h1>Stretching</h1>
                        <p Style="font-size:10px;">Perform the stretching exercise statically, maintaining the position, without bouncing or sudden movements</p>
                      </TextIntro2>
                    </div>
                    <div className="col-6">
                      <img Style="background:none;" className="imgPortada" src={img3} alt="" />
                    </div>
                  </div>
                </div>

                <div className="slider__section">
                  <div className="row">
                    <div className="col-6">
                      <TextIntro2>
                        <h1>Exercise with weights</h1>
                        <p Style="font-size:10px;">Never start an exercise with your maximum weight. The first series should be light and comfortable for your muscles and joints to prepare</p>
                      </TextIntro2>
                    </div>
                    <div className="col-6">
                      <img Style="background:none;" className="imgPortada" src={img4} alt="" />
                    </div>
                  </div>
                </div>

                <div className="slider__section">
                  <div className="row">
                    <div className="col-6">
                      <TextIntro2>
                        <h1>ABS</h1>
                        <p Style="font-size:10px;">No matter what type of sit-up you perform, your back and especially your lower back must be straight. It is a very common mistake to arch the spine.</p>
                      </TextIntro2>
                    </div>
                    <div className="col-6">
                      <img Style="background:none;" className="imgPortada" src={img5} alt="" />
                    </div>
                  </div>
                </div>

                <div className="slider__section">
                  <div className="row">
                    <div className="col-6">
                      <TextIntro2>
                        <h1>Functional exercises</h1>
                        <p Style="font-size:10px;">Functional training has the great quality that it can be adapted to anyone, and that it perfectly complements all sports and strength training</p>
                      </TextIntro2>
                    </div>
                    <div className="col-6">
                      <img Style="background:none;" className="imgPortada" src={img6} alt="" />
                    </div>
                  </div>
                </div>

              </div>
              <button id="btnSiguiente" className="slider__btn slider__btn--right" onClick={() => { siguiente() }}><i Style="background:none;" className='bx bxs-chevron-right' ></i></button>
              <button id="btnAtras" className="slider__btn slider__btn--left" onClick={() => { anterior() }}><i Style="background:none;" className='bx bxs-chevron-left'></i></button>
            </div>
          </div>
        </div>


        <div className="col-12" Style="margin-top:20px">
          <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:20px;">
            <ButtonHome >
              <span></span>
              <span></span>
              <span></span>
              <span></span> Discover
            </ButtonHome>

            <Link to='/home2'>
              <ButtonHome>
                <span></span>
                <span></span>
                <span></span>
                <span></span>My Workouts
              </ButtonHome>
            </Link>
          </div>
        </div>


        <div className="col-12" Style=";margin-top:20px;">
          <div className="container" Style=" text-align: center; aling-items:center; justify-contet:center;">
            <Buttonfilter onClick={() => { filtrar("body") }}>All body</Buttonfilter>
            <Buttonfilter onClick={() => { filtrar("triceps") }}>Triceps</Buttonfilter>
            <Buttonfilter onClick={() => { filtrar("biceps") }}>Biceps</Buttonfilter>
            <Buttonfilter onClick={() => { filtrar("breast") }}>Breast</Buttonfilter>
            <Buttonfilter onClick={() => { filtrar("back") }}>Back</Buttonfilter>
            <Buttonfilter onClick={() => { filtrar("legs") }}>Legs</Buttonfilter>
          </div>
        </div>


        <div className="col-12" Style="margin-top:50px">
          <div className="container d-flex" Style="justify-content: center;aling-items:center;">
            <ButtonIntro2>
              <Link to="/new">
                NEW WORKOUT
              </Link>
            </ButtonIntro2>
          </div>
        </div>

        {
          filtrado.map(elemento => (
            <div className="col-12 mt-4">
              <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                <Container1>
                  <div className="col-12">
                    <img src={elemento.img} Style="height:110px; width:360px; margin-left:18px;" alt="cover" />
                  </div>
                  <div className="col-12" Style="margin-top:130px; text-align:start; margin-left:-320px">
                    <div className="row">
                      <div className="col-8">
                        <h1 Style="text-align: start; font-size:13px; background:none;">{elemento.name}</h1>
                      </div>
                      <div className="col-4">
                        <h5 Style="text-align: center; font-size: 12px; background:none;">{elemento.duracion}</h5>
                      </div>
                    </div>
                    <div className="col-12">
                      <p Style="text-align:start; font-size:8px; font-weight:300px; margin-right:40%; background:none;">{elemento.descripcion}</p>
                    </div>
                  </div>
                </Container1>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

