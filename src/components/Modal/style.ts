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
  padding-right: 50px;
  position: relative;
  border: 0;
  width: 70%;
  border-radius: 10px;
`

export const Close = styled.button`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 20px;
  z-index: 3;
  border: 0;
  background-color: transparent;
  width: 20px;
  height: 20px;
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 4px;
    background: ${props => props.theme.colors.primary};
  }
  ::before {
    transform: rotate(45deg);
    left: -7px;
  }
  ::after {
    transform: rotate(-45deg);
    left: -7px;
  }
`
