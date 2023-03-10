import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Modal } from '@/components/Modal'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ContactForm } from '@/components/ContactForm'

function App() {
  const [formOpen, setFormOpen] = useState(false)

  const buttonClick = function () {
    setFormOpen((prevState) => !prevState)
  }

  return (
    <Container>
      <ToastContainer />
      <Button onClick={buttonClick} variant="primary">
        Вызвать модальное окно с кнопкой
      </Button>

      {formOpen && (
        <Modal setFormOpen={setFormOpen}>
          <ContactForm setFormOpen={setFormOpen} />
        </Modal>
      )}
    </Container>
  )
}

export default App
