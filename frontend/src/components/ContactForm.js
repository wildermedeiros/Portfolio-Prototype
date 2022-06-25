import React, {useState} from 'react'
import moment from 'moment'

import styled from 'styled-components'

import {
    Button, TextField
} from 'react95';



const ContactForm = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ sucesso, setSucesso ] = useState(false);
    const [ erro, setErro ] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('')
        setMessage('')
    }

    const contactMeHandler = async (e) => {
        e.preventDefault()

        if ( name === '' || email === '' || message === '') {
            setErro(true)
            return
        }

        const data = {
            Nome: name,
            Email: email,
            Mensagem: message,
            Data: moment().format('DD/MM/YYYY'),
        }
    }

    return(
        <Form onSubmit={contactMeHandler}>
            <InputArea>
                <label>Name:</label>
                <TextField
                    placeholder='Type here...'
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
            </InputArea>
            <InputArea>
                <label>Email:</label>
                <TextField
                    placeholder='Type here...'
                    type="email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </InputArea>
            <InputArea>
                <label>Message:</label>
                <TextField 
                    placeholder='Type here...'
                    multiline rows={4}  
                    fullWidth
                    value={message}
                    onChange={(e) => {setMessage(e.target.value)}}
                />
            </InputArea>
            <Button type="submit">Submit</Button>
            {sucesso && <h4>Mensagem enviada com sucesso!</h4>}
            {erro && <h4>Ocorreu um erro, por favor envie novamente!</h4>}
        </Form>
    )
}


const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    min-width:60vh;
    label {
        color: white;
        padding-top: 1rem;
    }
`;

const Form = styled.form`
    button{
        margin-top: 1rem;
    }
    h4{
        margin-top: 1rem;
    }
    @media (max-width: 1500px) {
        padding: 4rem;
        font-size: 1rem;
    }
`;

export default ContactForm
