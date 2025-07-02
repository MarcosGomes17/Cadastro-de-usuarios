import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Title = styled.h2`
    color: #ffffff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top: 30px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin:  40px 0;

    @media (max-width: 750px) {
        grid-template-columns: 1fr; 
    }
`

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;
  max-width: 380px;
  transition: 0.3s;

  &.selected {
    border: 2px solid white;
    background-color: #2a2d44;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h3 {
    color: #ffffff; 
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize;
    margin-right: 20px;
  }

  p {
    color: #ffffff;
    font-size: 15px;
    font-weight: 200;
    margin-right: 20px;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px; 
`

export const TrashIcon = styled.img`
    cursor: pointer;
    margin-right: 5px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background-color: #2a2d44;
  padding: 40px 30px;
  border-radius: 20px;
  color: white;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  gap: 5px;
`

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 16px;
`

export const ActionButtons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const AvatarUser = styled.img`
    height: 80px;
`