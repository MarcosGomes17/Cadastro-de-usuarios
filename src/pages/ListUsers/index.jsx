import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBackground from "../../components/TopBackground";
import Button from "../../components/Button/";
import Trash from '../../assets/trash.svg';
import {
  Container,
  CardUsers,
  Title,
  TrashIcon,
  UserInfo,
  ContainerUsers,
  AvatarUser,
  ModalOverlay,
  ModalContent,
  ModalButtons,
  ActionButtons
} from './styles';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const navigate = useNavigate();

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
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
      toast.success("Usuário deletado com sucesso!");
      setSelectedUserId(null);
    } catch (error) {
      toast.error("Erro ao deletar o usuário.");
      console.error(error);
    }
  }

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      {userToDelete && (
        <ModalOverlay>
          <ModalContent>
            <p>Confirma exclusão do usuário <strong>{userToDelete.name}</strong>?</p>
            <ModalButtons>
              <Button onClick={() => {
                deleteUsers(userToDelete.id);
                setUserToDelete(null);
              }}>
                Sim
              </Button>

              <Button onClick={() => setUserToDelete(null)}>
                Não
              </Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}

      <ContainerUsers>
        {users.map((user) => {
          const isSelected = selectedUserId === user.id;

          return (
            <CardUsers key={user.id} onClick={() => setSelectedUserId(user.id)}
              className={isSelected ? 'selected' : ''}
            >
              <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />

              <UserInfo>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.email}</p>
              </UserInfo>

              {isSelected && (
                <TrashIcon src={Trash} alt="icone-delete" onClick={(e) => {
                  e.stopPropagation(); setUserToDelete(user);
                }}
                />
              )}
            </CardUsers>
          );
        })}
      </ContainerUsers>

      <ActionButtons>

        <Button type="button" onClick={() => navigate('/')}>
          Voltar
        </Button>

        {selectedUserId && (
          <Button type="button" onClick={() => setSelectedUserId(null)}>
            Desmarcar
          </Button>
        )}
      </ActionButtons>
    </Container>
  );
}

export default ListUsers;