import { useRef } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

import {
    Title,
    Container,
    Form,
    ContainerInputs,
    Input,
    InputLabel,
} from './styles';

import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';

function Home() {
    const inputName = useRef();
    const inputAge = useRef();
    const inputEmail = useRef();

    const navigate = useNavigate()

   async function registerNewUser() {
  try {
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    });

    toast.success("Usuário cadastrado com sucesso!", {
      autoClose: 3000
    });

    setTimeout(() => {
      navigate('/lista-de-usuarios');
    }, 4000);

  } catch (error) {
    toast.error("Erro ao cadastrar usuário.");
    console.error(error);
  }
}

    return (
        <Container>

            <TopBackground />

            <Form>

                <Title>Cadastrar Usuários</Title>

                <ContainerInputs>
                    <div>
                        <InputLabel htmlFor="nome">
                            Nome <span>*</span>
                        </InputLabel>
                        <Input id="nome"
                            type="text"
                            placeholder="Nome do usuário"
                            name="nome"
                            autoComplete="name"
                            ref={inputName}
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="idade">
                            Idade <span>*</span>
                        </InputLabel>
                        <Input
                            id="idade"
                            type="number"
                            placeholder="Idade do usuário"
                            name="idade"
                            autoComplete="bday"
                            ref={inputAge}
                        />
                    </div>
                </ContainerInputs>

                <div style={{ width: '100%' }}>
                    <InputLabel htmlFor="email">
                        E-mail <span>*</span>
                    </InputLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder="E-mail do usuário"
                        name="email"
                        autoComplete="email"
                        ref={inputEmail}
                    />
                </div>

                <Button type="button" onClick={registerNewUser} theme="primary">
                    Cadastrar Usuários
                </Button>
            </Form>

            <Button type="button" onClick={() => navigate('/lista-de-usuarios')} >
                Ver Lista de Usuários
            </Button>
        </Container>
    );
}

export default Home;
