import styled from "styled-components"

const Grayout = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  width: 150vw;
  height: 150vh;
  opacity: 0;
  background-color: rgba(0,0,0,0.1);
  backdrop-filter: blur(0.1em);
  transition: all 0.4s ease-in-out;
`
export const ModalNotify = () => {
  return (
    <Grayout>

    </Grayout>
  )
}