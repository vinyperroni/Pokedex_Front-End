import styled from "styled-components"
import GlobalContext from "../../context/GlobalContext";
import { useContext, useState, useEffect } from "react";

const Box = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 40em;
    height: 2.5em;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em rgba(0,0,0,0.5);

    div {
      height: 100%;
      border: solid;
    }
    input {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 4em;
      height: 100%;
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
      outline: none;
      border: none;
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
    auxPageNumber !== "" && setPageNumber(auxPageNumber);
  }, [auxPageNumber])

  return (
    <Box>
      <div>

      </div>

      <input type="number" min={1} pattern="[0-9]{1,}" value={auxPageNumber} onChange={(e) => setAuxPageNumber(e.target.value)}/>

      <div>

      </div>
    </Box>
  )
}