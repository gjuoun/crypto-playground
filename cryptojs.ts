import CryptoJS from "crypto-js"
import Base64 from 'crypto-js/enc-base64';



const hashObject = CryptoJS.AES.encrypt("hello world", "my key")

console.log(hashObject.toString());

const decrypted = CryptoJS.AES.decrypt(hashObject.toString(), "my key")

console.log(decrypted.toString(CryptoJS.enc.Utf8));

