import { useState } from 'react'

import { Button } from './components/Button'
import { Container } from './components/Container'
import { Modal } from './components/Modal'
import { ContactForm } from './components/ContactForm'

function App() {
  const [formOpen, setFormOpen] = useState(false)

  const buttonClick = function () {
    setFormOpen((prevState) => !prevState)
  }

  return (
    <Container>
      <Button onClick={buttonClick} variant="primary">
        Вызвать модальное окно с кнопкой
      </Button>
      
      {formOpen && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
    </Container>
  )
}

export default App
