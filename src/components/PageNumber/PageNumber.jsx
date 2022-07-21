import styled from "styled-components"

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
`

export const PageNumber = () => {
  return (
    <Box>
      <div>

      </div>
    </Box>
  )
}