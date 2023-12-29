import { createContext, useContext } from "react";

export const itemState = createContext({
    item:[],
    setItem:()=>{
    }
});

export const useItemState = ()=> useContext(itemState);
