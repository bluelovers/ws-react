import { StorageProxy } from './proxy';
export declare const storage: StorageProxy<Pick<Storage, "getItem" | "setItem" | "removeItem" | "clear">>;
export default storage;
