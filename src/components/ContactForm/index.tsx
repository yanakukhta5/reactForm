import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'

import { Input } from '@/components/Input'
import { Output } from '@/components/Output'
import { Label } from '@/components/Label'
import { Button } from '@/components/Button'
import { Textarea } from './style'

export function ContactForm() {
  const [name, setName] = useState(localStorage.getItem('username') || '')

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control
  } = useForm({
    mode: 'onBlur'
  })

  async function onFormSubmit() {
    reset({
      password: ''
    })
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Label htmlFor="name">
        <Input
          {...register('name', {
            required: 'Введите имя',
            minLength: {
              value: 2,
              message:
                'Имя пользователя не может состоять менее чем из 2 символов'
            }
          })}
          id="name"
          placeholder="Имя пользователя"
        />
        <Output>{errors?.name?.message as string}</Output>
      </Label>

      <Label htmlFor="tel">
        <Controller
          name="tel"
          control={control}
          rules={{
            required: {
              value: true,
              message: "k;jgljgljgjhg"
            }
          }}
          render={({ field: { ref, ...field }, fieldState: {invalid, error} }) => (
            <>
            <InputMask
              mask="99/99"
              maskChar=""
              value={field.value}
              onChange={field.onChange}
            ></InputMask>
            <p>{error}</p>
            </>
          )}
        />
        <Output>{errors?.tel?.message as string}</Output>
      </Label>

      <Label htmlFor="message">
        <Textarea
          {...register('message', {
            required: 'Введите сообщение',
            minLength: {
              value: 5,
              message: 'Слишком маленькое сообщение'
            }
          })}
          id="message"
          placeholder="Сообщение пользователя"
        />
        <Output>{errors?.message?.message as string}</Output>
      </Label>

      <Button variant="primary" value="Отправить" type="submit">
        Отправить форму
      </Button>
    </form>
  )
}
