import { StorageProxy } from './proxy';
import { storage as webStorage } from "local-storage-fallback";

export const storage = new StorageProxy<Storage | StorageFallback>(webStorage);

export default storage
