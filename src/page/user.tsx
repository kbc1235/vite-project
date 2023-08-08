import Usercard from '../component/usercard'
import styled from 'styled-components';
import { useState } from 'react';
import { useUserStore } from '../store/user'

export interface UserType {
    name : string,
    old : number,
    isDev : boolean
}


export default function UserPage() {
   const { users, addUser} = useUserStore()
  return (
    <div.userWrap>
       <UserList list={users} />

       <button onClick={() => {
        addUser({
          name:"kkkk",
          old:3334,
          isDev:true
        })
       }}>add</button>

    </div.userWrap>
  )
}



const UserList  = ( {list} : {list:UserType[]}) => {
  return (
   <div.userList>
    {list?.map((user, i) =>{
      return(
        <Usercard user={user}  key={i} />
      )
    })}

    {/* 
    처음에는 정석대로 map 함수를 돌리는것이 공부에 도움이됨
    { list.map( (data, i) => {
      return (
        <div key={i}>
          ??
        </div>
      )
    })} */}
   </div.userList>
  )
}

const div = {
  userWrap : styled.div`
    overflow:auto;
    width:100%;
    border:1px solid #e2e2e2;
    padding: 20px;
    box-sizing: border-box;
  `,
  userList : styled.ul`
    display:flex;
    flex-wrap: nowrap;
    width:100%;
    gap:10px;
    padding:10px;
   
  `
}