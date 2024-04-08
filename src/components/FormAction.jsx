'use client'

import {Box, DialogContentText} from '@mui/material'
import {FloatBtn} from '@/components/FloatBtn'
import {useEffect, useState} from 'react'
import {MessageForm} from '@/components/MessageForm'
import {timeOut} from '@/config'
import {BaseModal} from '@/components/base/BaseModal'

export const FormAction = () => {
    const [open, setOpen] = useState(false)
    const [sendForm, setSendForm] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(() => {
        let timeout
        if (sendForm) {
            timeout = setTimeout(() => {
                handleCloseSuccessMessage()
            }, timeOut)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [sendForm])

    useEffect(() => {
        let timeout
        if (isError) {
            timeout = setTimeout(() => {
                handleCloseFailedMessage()
            }, timeOut)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [isError])

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleCloseSuccessMessage = () => {
        setSendForm(false)
    }

    const handleCloseFailedMessage = () => {
        setError(false)
    }

    return (
        <Box>
            <FloatBtn handleOpen={handleClickOpen}/>

            <BaseModal open={open} handleClose={handleClose} title="Связаться с нами">
                <MessageForm handleClose={handleClose} onSendForm={setSendForm} onError={setError}/>
            </BaseModal>

            {sendForm && (
                <BaseModal title="Сообщение отправлено!" open={sendForm} handleClose={handleCloseSuccessMessage}
                           color="var(--green)">
                    <DialogContentText id="alert-dialog-description">
                        Скоро в Вами свяжется наш специалист
                    </DialogContentText>
                </BaseModal>
            )}

            {isError && (
                <BaseModal title="Ошибка сервера!" open={isError} handleClose={handleCloseFailedMessage} color="var(--red)">
                    <DialogContentText id="alert-dialog-description">
                        Попробуйте позже
                    </DialogContentText>
                </BaseModal>
            )}

        </Box>
    )
}
