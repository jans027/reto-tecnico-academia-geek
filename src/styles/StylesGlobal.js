import styled from "styled-components";


export const NavBarStyled = styled.nav`
    background-color: #042275;
    margin:0 +.5em;
    position: fixed;
    top: 0;
    font-size: 1.5em;
    height: 110px;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 .3em 0 1em;
    -webkit-box-shadow: 0px 2px 29px -1px rgba(0,0,0,0.59); 
    box-shadow: 0px 2px 29px -1px rgba(0,0,0,0.59);
    a{
        cursor: pointer;
        background-color: #042275;
        :hover{
            transform: scale(1.2);
        }
        /* width: 1em; */
        height: 2.8em;
        img{
            background-color: #042275;
            height: 90%;
            object-fit: cover;
            object-position: center center;
        }
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #042275;
        h6{
            font-size: .8em;
            margin-right: .5em;
            background-color: #042275;
            padding: .4em 0 0 0;
        }
        svg{
            background-color: #042275;
        }
        path{
            :hover{
            transform: scale(1.2);
            background-color: #042275;
            }
        }

    }
    
    button{
        border: none;
        background-color: #042275;
    }
    input{
        background-color: #042275;
        max-width: 200px;
        border: 1px solid white;
        height: 1.3em;
        border-radius: 1em;
        padding: 1em;
        outline: none;
        font-size: .6em;
        :focus{
            border: 1px solid white;
            background-color: steelblue;
        }
    }
`

export const NavBarStyled1 = styled.nav`
    height: 40px;
    width:100%;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin:10px;
    font-size:22px;
`

export const DivForm = styled.div`
display: grid;
grid-auto-flow: column;
gap: 1rem;

overscroll-behavior-x: contain;
scroll-snap-type: x mandatory;
scrollbar-width: none;
::-webkit-scrollbar {
    display: none;
}
`
export const ImgIntro1 = styled.div`
/* background:; */
border-radius: 10%;
background-repeat: no-repeat;
    width: 270px;
    height: 220px;
    background-size: cover;
    background-position: center;
    margin-top:10px;
 
`
export const Producto = styled.div`
height:500px;
width: 500px;

`
export const ImgIntro2 = styled.div`
/* background:; */
border-radius: 10%;
background-repeat: no-repeat;
    width: 270px;
    height: 220px;
    object-fit: cover;
    scroll-snap-align: start;
  
    background-size: cover;
    background-position: center;
    margin-top:10px;
   
`

export const Titulo = styled.h1`
    padding: 1rem ;
    text-align: center;
    margin: 0;
`

export const ButtonStyled = styled.button`
    background-color: #8e44ad;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    padding: 1.3rem;
    color: white;
    &:hover {
        background-color: #732d91;
    }
    &:focus {
        outline: none;
        background-color: #5e3370;
    }`


export const SpinnerStyled = styled.div`
        width: 100%;
        height: 90vh;
        background-color: #FFF;
        display: flex;
        justify-content:center;
        margin: 20%;
`

export const ContainerStyled = styled.div`
        border-radius: 10px;
        box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
        width: 80%;
        padding: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFF;
`
