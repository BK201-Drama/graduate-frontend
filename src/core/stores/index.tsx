import { exerciseKey, exerciseStore } from '@/domains/exercise/store'
import { permissionKey, permissionStore } from '@/domains/permission/store'
import { reversingKey, reversingStore } from '@/domains/reversing/store'
import { roleStore, roleStoreKey } from '@/domains/role/store'
import { createContext, useContext } from 'react'

function createStores() {
  return {
    [permissionKey]: permissionStore,
    [roleStoreKey]: roleStore,
    [exerciseKey]: exerciseStore,
    [reversingKey]: reversingStore,
  }
}

export const stores = createStores()

export const StoresContext = createContext(stores)

export const useStores = () => useContext(StoresContext)
