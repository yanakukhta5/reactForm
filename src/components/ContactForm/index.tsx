import { Dispatch, ReactNode, SetStateAction } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Input } from '@/components/Input'
import { Output } from '@/components/Output'
import { Label } from '@/components/Label'
import { Button } from '@/components/Button'
import { Textarea, InputTel } from './style'

interface IData {
  name: string
  tel: string
  message: string
}

interface ContactFormProps {
  setFormOpen: Dispatch<SetStateAction<boolean>>
}

export const ContactForm: React.FC<ContactFormProps> = function( {setFormOpen} ) {
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
    const ParsedData = {...data, tel: data.tel.replace(/[()\s-]/g, '')}
    console.log(JSON.stringify(ParsedData))
    setFormOpen((prevState) => !prevState)
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
            },
            validate: {
              reqular: (value) => {
                if (value.match(/[0-9a-zA-Z]/))
                  return 'Имя может состоять только из русских букв (в верхнем и нижнем регистре) и дефиса (-)'
              }
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
            },
            minLength: {
              value: 18,
              message: "Введите свой телефон полностью"
            }
          }}
          render={({ field }) => (
            <>
              <InputTel
                {...field}
                mask="+7 (999) 999-99-99"
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
            },
            validate: {
              reqular: (value) => {
                if (!value.match(/^[а-яА-Я0-9_-]/))
                  return 'Сообщение должно состоять из русских букв (в верхнем и нижнем регистре), цифр, символов подчеркивания (_) и дефиса (-)'
              }
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
