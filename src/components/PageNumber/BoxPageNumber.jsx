import styled from "styled-components"
import GlobalContext from "../../context/GlobalContext";
import { useContext, useState, useEffect } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

const Box = styled.footer`
    position: fixed;
    bottom: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 100%;
    max-width: 16em;
    height: 4em;
    background-color: rgba(255,255,255,0.75);
    backdrop-filter: blur(0.75em);
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em rgba(0,0,0,0.5);
    overflow: hidden;
    user-select: none;

    svg {
      cursor: pointer;
      width: 32px;
      height: 100%;
      color: #0099e0;
      :active {
        transform: scale(0.9);
      }
    }
    input {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 2em;
      height: 2em;
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
      color: white;
      background-color: #0099e0;
      outline: none;
      border: none;
      border-radius: 100%;
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      [type=number] {
        -moz-appearance: textfield;
      }
    }
`

export const BoxPageNumber = () => {
  const {pageNumber, setPageNumber} = useContext(GlobalContext)
  const [auxPageNumber, setAuxPageNumber] = useState(pageNumber)

  useEffect(() => {
    auxPageNumber !== "" && (auxPageNumber) > 0 && setPageNumber(auxPageNumber);
  }, [auxPageNumber])

  return (
    <Box>
      {auxPageNumber > 1 ?
        <FaAngleDoubleLeft onClick={() => setAuxPageNumber(auxPageNumber-1)}/>
      :
        <FaAngleDoubleLeft style={{opacity: "0.5"}}/>
      }
      <input type="number" min={1} max={58} pattern="[0-9]{1,}" value={auxPageNumber} onChange={(e) => setAuxPageNumber(e.target.value)}/>
      {auxPageNumber < 58 ?
        <FaAngleDoubleRight onClick={() => setAuxPageNumber(auxPageNumber+1)}/>
      :
        <FaAngleDoubleRight style={{opacity: "0.5"}}/>
      }
    </Box>
  )
}