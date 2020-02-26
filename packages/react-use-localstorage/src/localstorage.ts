import createStorageHook from './core';

export const useStorage = createStorageHook(window.localStorage);

export default useStorage
