const jwt = require('jsonwebtoken');

const generateJWT = (uid = '', purpose = 'auth') => {
    return new Promise((resolve, reject) => {
        const payload = { uid, purpose };
        jwt.sign(payload, process.env.SECRET_OR_PRIVATE_KEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el JSON Web Token');
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = {
    generateJWT
}
