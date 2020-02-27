import { StorageProxy } from './proxy';
export declare const storage: StorageProxy<Pick<Storage, "clear" | "getItem" | "setItem" | "removeItem">>;
export default storage;
