import React from "react";
import { Container, Role, User, Avatar } from "./styles";

interface Props {
  isBot?: boolean;
  nickname: string;
}

const UserRow: React.FC<Props> = ({ isBot, nickname }) => {
  return (
    <User style={{ margin: "10px 0" }}>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Bot - 1</Role>
      <UserRow nickname="bot do lilao" isBot />
      <Role>Disponível - 1</Role>
      <UserRow nickname="Felipe Austríaco" />
      <Role>Offline - 12</Role>
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
      <UserRow nickname="Teste Scroll" />
    </Container>
  );
};

export default UserList;
