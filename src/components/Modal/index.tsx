import { Dispatch, ReactNode, SetStateAction } from 'react'
import ReactDOM from 'react-dom'
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
  return ReactDOM.createPortal(
    <Overflow>
      <Dialog>
        {children}
        <Close onClick={() => setFormOpen((prevState) => !prevState)} />
      </Dialog>
    </Overflow>,
    modalRoot as HTMLElement
  )
}
