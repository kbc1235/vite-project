import { UserType } from '../page/user';
import styled from 'styled-components';

interface userProps {
    user : UserType;
}

export default function Usercard({user}:userProps) {
  const {name, old, isDev} = user;
  return (
    <div.userBox>
        <p>이름 : {name}</p>
        <p>나임 : {old}</p>
        <p>개발 출신 : {isDev ? '🤖' : '🐻'}</p>
    </div.userBox>
  )
}

const div = {
  userBox : styled.li`
    list-style: none;
    min-width: 200px;
    padding: 20px;
    border:1px solid #e2e2e2;
    border-radius: 4px;
    & > p{
      font-size:16px;
      line-height: 1;
      & + p {
        margin-top:10px;
      }
    }
  `
}
