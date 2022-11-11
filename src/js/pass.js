import data from "../../db.json" assert { type: "json" };

let users = [data]

function encrypt(password) {
    let encryption = CryptoJS.AES.encrypt(clear, password);
    encryption = encryption.toString();
}

function decrypt(encryption) {

    let decipher = CryptoJS.AES.decrypt(cipher, encryption);
    decipher = decipher.toString(CryptoJS.enc.Utf8);

}
