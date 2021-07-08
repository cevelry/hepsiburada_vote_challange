
import { LOCALSTORAGEKEY } from "./Contants";

export const LoadDataFromStorage = () => (JSON.parse(localStorage.getItem(LOCALSTORAGEKEY) ?? "[]"));

export const SaveDataToStorage = (links) => { localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(links)) }