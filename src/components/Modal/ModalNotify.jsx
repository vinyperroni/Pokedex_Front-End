import styled from "styled-components"
import { useEffect, useContext } from "react"
import GlobalContext  from "../../context/GlobalContext"

const Grayout = styled.div`
  z-index: 100000;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  background-color: rgba(0,0,0, 0.5);
  backdrop-filter: blur(0.5em);
  transition: all 0.25s ease-in-out;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  width: 320px;
  height: 156px;
  padding: 2em 1em 1em 1em;
  text-align: center;
  background-color: white;
  border-radius: 0.5em;
`
const Title = styled.strong`
  font-size: 4em;
  line-height: 0.75em;
`
const Text = styled.p`
  font-size: 1.15em;
  line-height: 1.25em;
`
export const ModalNotify = (props) => {
  const {triggerModal, setTriggerModal} = useContext(GlobalContext)

  useEffect (() => {
    if (triggerModal) {
      setTimeout(() => {document.querySelector(".grayout").style.opacity = "1"}, 100)
      setTimeout(() => {document.querySelector(".grayout").style.opacity = "0"}, 1000)
      setTimeout(() => {setTriggerModal("")}, 1500)
    }    
  }, [])

  return (
    <Grayout className="grayout">
      {triggerModal === "add" ? 
        <Box>
          <Title>Gotcha!</Title>
          <Text>Um pokemon selvagem foi adicionado à sua Pokedex</Text>
        </Box>
      :
        <Box>
          <Title>Oh, no!</Title>
          <Text>Você retirou o pokemon da sua pokedex</Text>
        </Box>
      }
    </Grayout>
  )
}

