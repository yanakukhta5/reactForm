import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Input } from '@/components/Input'
import { Output } from '@/components/Output'
import { Label } from '@/components/Label'
import { Button } from '@/components/Button'
import { Textarea, InputTel } from './style'

interface IData {
  name: string,
  tel: string,
  message: string
}

export function ContactForm() {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control
  } = useForm<IData>({
    mode: 'onBlur'
  })

  async function onFormSubmit(data: IData) {
    console.log(data)
    reset({
      name: '',
      tel: '',
      message: ''
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
              message: 'Имя не может состоять менее чем из 2 символов'
            }
          })}
          id="name"
          placeholder="Ваше имя"
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
              message: 'Введите телефон'
            }
          }}
          render={({ field }) => (
            <>
              <InputTel
                {...field}
                mask="99/99"
                onBlur={field.onBlur}
                maskChar=""
                value={field.value}
                placeholder="Ваш телефон"
                ref={field.ref}
              ></InputTel>
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
          placeholder="Ваше сообщение"
        />
        <Output>{errors?.message?.message as string}</Output>
      </Label>

      <Button variant="primary" value="Отправить" type="submit">
        Отправить форму
      </Button>
    </form>
  )
}
