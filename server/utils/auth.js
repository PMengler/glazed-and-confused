import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;
const expiration = '2h';
module.exports =  {
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}

export default new AuthService();