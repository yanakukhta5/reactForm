import { Input } from '@/components/Input'
import styled from '@emotion/styled'

const TextareaInput = Input.withComponent('textarea')

export const Textarea = styled(TextareaInput)`
  padding: 10px;
  resize: none;
  min-height: 100px;
  outline: none;

  ::placeholder {
    font-family: 'Roboto Medium', Arial, Helvetica, sans-serif;
  }
`
