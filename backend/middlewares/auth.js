const jwt = require('jsonwebtoken')

const secret_base64 = process.env.REACT_APP_JWT_PUBLIC_SECRET
const project_id = process.env.REACT_APP_USERFRONT_PROJECT_ID
const projectID = 'jb7v5wzn'


const secret = Buffer.from(secret_base64, 'base64')

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

    console.log("Authheader", authHeader)
    if (!authHeader) {
        return res.sendStatus(401)
    }

    const token = authHeader.split(' ')[1]

    try {
        const user = jwt.verify(token, secret)

        if (user.authorization[projectID].roles.includes('admin')) {
            next()
        } else {
            res.sendStatus(401) // Unauthorized
        }
    }
    catch {
        res.status(401).json({
            error: new Error('Invalid request')
        })
    }




}
