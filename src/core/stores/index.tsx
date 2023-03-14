import { createContext, useContext } from 'react';

// eslint-disable-next-line require-jsdoc
function createStores() {
  return {};
}

export const stores = createStores();

export const StoresContext = createContext(stores);

export const useStores = () => useContext(StoresContext);
