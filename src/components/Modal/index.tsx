import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { Overflow, Dialog } from './style'

interface ModalProps {
  children: ReactNode
}

export const Modal: React.FC<ModalProps> = function ({ children }) {
  const modalRoot = document.getElementById('modal-root')
  return ReactDOM.createPortal(
    <Overflow>
      <Dialog>{children}</Dialog>
    </Overflow>,
    modalRoot as HTMLElement
  )
}
