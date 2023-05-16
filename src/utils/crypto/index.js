import CryptoJS from 'crypto-js'
import JSEncrypt from 'jsencrypt'

const JSEncryptInstance = new JSEncrypt()

// AES加密
export const encryptByAES = (cipherContent, key) => {
  const aesKey = CryptoJS.enc.Utf8.parse(key)
  const newValue =
    typeof cipherContent === 'string' ? cipherContent : cipherContent.toString()
  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(newValue),
    aesKey,
    { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
  )
  return encrypted.toString()
}

// AES解密
export const decryptByAES = (plainContent, key) => {
  const aesKey = CryptoJS.enc.Utf8.parse(key)
  const decrypt = CryptoJS.AES.decrypt(plainContent, aesKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  const decString = CryptoJS.enc.Utf8.stringify(decrypt).toString()
  return decString
}

export const encryptByRSA = (cipherContent, publicKey) => {
  const newValue =
    typeof cipherContent === 'string' ? cipherContent : cipherContent.toString()
  JSEncryptInstance.setPublicKey(publicKey)
  return JSEncryptInstance.encrypt(newValue) // 注意：加密类型为string
}

export const decryptByRSA = (key, cipherContent) => {
  const newValue =
    typeof cipherContent === 'string' ? cipherContent : cipherContent.toString()
  JSEncryptInstance.setPrivateKey(key)
  return JSEncryptInstance.decrypt(newValue) // 注意：加密类型为string
}

export const initAESKey = () => {
  const keySize = 8
  const randomKey = CryptoJS.lib.WordArray.random(keySize)
  const aesKey = CryptoJS.enc.Hex.stringify(randomKey)
  return aesKey
}

const Crypto = {
  encryptByAES,
  decryptByAES,
  encryptByRSA,
  initAESKey,
  decryptByRSA,
}
export default Crypto
