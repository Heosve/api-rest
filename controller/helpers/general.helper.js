/** packages */
const CryptoJS = require("crypto-js");
const config=require("config")
/**Encrypt Password */

exports.EncryptPassword=(password)=>{
    let secretkey=config.get("secretkeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password,secretkey)
    return encryptedPassword;
};