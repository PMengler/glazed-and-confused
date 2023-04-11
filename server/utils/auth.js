import jwt from 'jsonwebtoken';

module.exports =  {
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}

export default new AuthService();