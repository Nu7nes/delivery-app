import React, { useState } from "react";
import { styled } from "styled-components"

import { BiLogIn, BiLogOut } from "react-icons/bi";

// import './Header.css';
import Dropdown from "./Dropdown";
import Modal from "../Modal";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/slices/userSlice";
import TextInput from "../TextInput";
import Button from "../Button.styled";

const Component = styled.header`
    position: fixed;
    top: 0;
    padding: 0 5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 32px;
    margin-top:10px;
    z-index: 10;
    background-color: var(--bgColor);
    .logo {
        font-weight: bolder;
        font-size: 1.2em;
        /* width: 30px;
        height: 30px; */
    }   
    .selectArea {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .selectArea>div:first-of-type {
        color: var(--contrastColor);
        height: 16px;
    }
    .img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        background-color: rgb(238, 238, 238);
        border: 1px solid grey;
    }
`

function Header(props) {

    const isLogged = useSelector(state => state.currentUser.isLogged)
    const [modal, setModal] = useState({ state: false, type: '' })
    const [user, setUser] = useState({ email: '', password: '' })

    const dispatch = useDispatch()


    function handleLogin(type) {
        type ? setModal({ state: !modal.state, type: type }) : setModal({ state: !modal.state, type: '' })

    }
    function onConcludeModal(e) {
        switch (modal.type) {
            case 'logout':
                dispatch(logout())
                console.log('LOGOUT CONIRMADO');
                e.preventDefault()

                break
            case 'login':
                dispatch(login(user))
                console.log('LOGIN CONIRMADO', user);
                e.preventDefault()

                break
            default:
                return
        }
    }

    function handleEmail(e) {
        setUser({ ...user, email: e.target.value })
        console.log(e.target.value);
    }
    function handlePassword(e) {
        setUser({ ...user, password: e.target.value })
    }

    return (
        <Component>
            <div className="logo">N7</div>
            <Dropdown client={props.info.client} />
            {isLogged ?
                <BiLogOut onClick={() => { handleLogin('logout') }} /> :
                <BiLogIn onClick={() => { handleLogin('login') }} />}

            {modal.state ? <Modal onConcludeModal={onConcludeModal}
                onCloseModal={handleLogin}>
                {modal.type === 'login' ?
                    <form>
                        <h3>Entre para continuar</h3>
                        <TextInput type='email' sample='E-mail' placeholder="Entre com seu E-mail" onHandleChange={handleEmail} />
                        <TextInput type='password' sample='Senha' placeholder="Entre com sua senha" onHandleChange={handlePassword} />
                        <Button type="submit" onClick={onConcludeModal}>Entrar</Button>
                    </form> : ''}
            </Modal> : ''}
        </Component>
    )
}

export default Header;