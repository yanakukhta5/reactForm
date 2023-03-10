import ReactDOM from 'react-dom'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'

import { Overflow, Dialog, Close } from './style'

interface ModalProps {
  children: ReactNode
  setFormOpen: Dispatch<SetStateAction<boolean>>
}

export const Modal: React.FC<ModalProps> = function ({
  children,
  setFormOpen
}) {
  const modalRoot = document.getElementById('modal-root')
  const dialog = useRef(null)

  const clickHandler = function (event: React.MouseEvent<HTMLElement>) {
    const dialog = (event.target as HTMLElement).closest('dialog')
    if (!dialog) setFormOpen((prevState) => !prevState)
  }

  return ReactDOM.createPortal(
    <Overflow onMouseDown={clickHandler}>
      <Dialog ref={dialog}>
        {children}
        <Close onClick={() => setFormOpen((prevState) => !prevState)} />
      </Dialog>
    </Overflow>,
    modalRoot as HTMLElement
  )
}
