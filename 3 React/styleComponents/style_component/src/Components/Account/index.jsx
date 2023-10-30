import React, { useState } from "react";
import { Icono } from "../UI";
import styled from "styled-components"
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

const IconoMargin = styled(Icono)`
    margin-top: 2px;
`

const Account = () => {
    const [toggleState, untoggle] = useState(true);

    const toggleHandler = () => {
        untoggle((toggleState) => !toggleState);
    };

    return (
        <div className="box">
            <h2>Cuenta</h2>
            <div style = {{fontSize: "26px", padding: "20px 0"}}>
                Saldo disponible
                <span>
                    <Icono src={dinero} alt="Icono de saldo"/>
                </span>
                {toggleState? (
                    <div className="saldo">
                        <span className="detalle">$</span> 8,621.50
                    </div>
                ):null}
            </div>

            <button className="btn" onClick={toggleHandler}>
                <IconoMargin
                    src={toggleState? privado: ojo}
                    alt="Privacidad de saldo"
                />
            </button>
        </div>
    );
};

export default Account;