import bcrypt from 'bcrypt'

class SaltGenerator {
    generateSalt() {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                if (err) return reject(err)

                return resolve(salt)
            })
        })
    }
}

class HashGenerator {
    generateHash(passowrd, salt) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(passowrd, salt, (err, hash) => {
                if (err) return reject(err)

                return resolve(hash)
            })
        })
    }
}

export const encryptingPassword = async (password) => {
    const salt = await new SaltGenerator().generateSalt()
    const hash = await new HashGenerator().generateHash(password, salt)

    return hash
}