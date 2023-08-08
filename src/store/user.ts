import { create  } from 'zustand';
import { devtools } from 'zustand/middleware';


export const useUserStore = create(
    devtools(
        (set:any) => ({
            users:[
                {
                  name:"???23123ß",
                  old:1,
                  isDev:false
                }
               ],
        
               addUser: (userObj) => set((state) => {
                const newArr = state.users;
                newArr.push(userObj)
                return {
                  ...state,
                  users : newArr
                };
              }),
        
        
        
            
        })
    )
)