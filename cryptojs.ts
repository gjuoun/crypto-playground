import CryptoJS from "crypto-js"
import Base64 from 'crypto-js/enc-base64';



const hashObject = CryptoJS.AES.encrypt("hello world", "my key")

const encrypted = hashObject.toString(CryptoJS.format.OpenSSL)
console.log(encrypted);


const decrypted = CryptoJS.AES.decrypt(encrypted, "my key")

console.log(decrypted.toString(CryptoJS.enc.Utf8));

