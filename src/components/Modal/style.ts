import styled from '@emotion/styled'

export const Overflow = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.dark};
    opacity: 0.5;
  }
`

export const Dialog = styled.dialog`
  display: block;
  border: 0;
  min-width: 70%;
  border-radius: 10px;
`
