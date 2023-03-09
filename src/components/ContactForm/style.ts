import { Input } from '@/components/Input'
import styled from '@emotion/styled'
import InputMask from 'react-input-mask'

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

export const InputTel = styled(InputMask)`
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.aliceblue};
  height: 40px;
  padding: 0 20px;
`
