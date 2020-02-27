import { StorageProxy } from './proxy';
import webStorage from "local-storage-fallback";

export const storage = new StorageProxy(webStorage);

export default storage
