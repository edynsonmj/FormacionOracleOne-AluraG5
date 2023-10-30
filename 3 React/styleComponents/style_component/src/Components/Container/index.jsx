import React from "react";
import styled from "styled-components"
import Title from "../Title";
import Account from "../Account";

const StyledContainer = styled.div`
    background-color: #f1f1f1;
    min-height: 90vh;
    padding: 0px 15vw;
`
const StyledContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Container = () =>{
    return (
        <StyledContainer className="container">
            <Title>Smart Bank</Title>
            <StyledContent>
                <Account></Account>
            </StyledContent>
        </StyledContainer>
    );
};

export default Container;