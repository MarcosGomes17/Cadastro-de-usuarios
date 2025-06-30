import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBackground from "../../components/TopBackground";
import Button from "../../components/Button/";
import Trash from '../../assets/trash.svg'
import { Container, CardUsers, Title, TrashIcon, ContainerUsers, AvatarUser } from './styles'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios');
      setUsers(data);
    }

    getUsers();
  }, []);

 async function deleteUsers(id) {
  try {
    await api.delete(`/usuarios/${id}`);

    const updateUser = users.filter(user => user.id !== id);
    setUsers(updateUser);

   toast.success("Usuário deletado com sucesso!");
  } catch (error) {
    toast.error("Erro ao deletar o usuário.");
    console.error(error);
  }
}


  return (
    <Container>
      <TopBackground />

      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (

          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash}  alt="icone-delete" onClick={() => deleteUsers(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>

        <Button type="button" onClick={() => navigate('/')} >Voltar</Button>

    </Container>
  );
}

export default ListUsers;
