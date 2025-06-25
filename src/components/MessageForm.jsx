import {Box, Button, Checkbox, Typography} from '@mui/material'
import {useForm} from 'react-hook-form'
import {BaseInput} from '@/components/base/BaseInput'
import {useState} from 'react'
import {sendEmail} from '@/lib/sendEmail'
import {BaseDatePicker} from '@/components/base/BaseDatePicker'

export const MessageForm = ({handleClose, onSendForm, onError}) => {
    const regExpEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    const [checked, setChecked] = useState(false)
    const {control, handleSubmit, formState: {errors, isSubmitting}, reset,} = useForm({defaultValues: {
            person: '',
            dateBirth: '',
            phone: '',
            email: '',
            info: ''
        }})

    const onSubmit = async (data) => {
        const resStatus = await sendEmail(data)

        if (resStatus === 250) {
            reset()
            setChecked(false)
            handleClose()
            onSendForm(true)
        } else {
            reset()
            handleClose()
            onError(true)
        }
    }

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}
        >

            <BaseInput control={control} label="Ваше имя" name="person" required={true}
                       errorType={errors?.person?.type} mask='Смирнов Иван'/>
            <BaseDatePicker control={control} label="Дата рождения" name="dateBirth"/>
            <BaseInput control={control} label="Телефон" name="phone" required={true} errorType={errors?.phone?.type} mask='+7 000 000 00 00' regexp={regExpPhone}/>
            <BaseInput control={control} label="Email" name="email" mask='smirnov@mail.ru' errorType={errors?.email?.type} regexp={regExpEmail}/>
            <BaseInput control={control} label="Доп.информация" name="info" multiline={true} mask='Опишите ситуацию'/>

            <Box sx={{display: 'flex'}}>
                <Checkbox checked={checked} onChange={handleChange} sx={{alignSelf: 'start'}}/>
                <Typography sx={{fontSize: 11, lineHeight: '11px'}}>
                    Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в
                    соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и
                    для целей, определенных в Согласии на обработку персональных данных
                </Typography>
            </Box>

            <Box sx={{display: 'flex', gap: '10px'}}>
                <Button type="submit" disabled={!checked || isSubmitting} variant="contained"
                        sx={{backgroundColor: 'var(--main-color)'}}>Отправить</Button>
                <Button onClick={handleClose} sx={{color: 'var(--red)'}}>Отмена</Button>
            </Box>
        </Box>
    )
}
