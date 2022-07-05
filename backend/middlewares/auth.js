const jwt = require('jsonwebtoken')

const secret_base64 = 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUF3Umg4NHNLalBNUFIvU3BiTFp4MQpNcmR3WGUrazN5aEwzeUt4UldvaW9WVHBKOVpZWjVTeTkyOGtNMWZaMHd2MkE2bGdaR29ibXBBMEFiU1Z3dE85ClVHMTRURFFjYjkzcm0xSU5xU1hLM2pyN01TdFdSbUxrbnZCNWFGYUIwM210Q1V1N0pQRXpXSllBaW5iRXkydmUKMWloSFpCVEVGSWRVYnU4NTN2cWc5elloS1JHRm1QMlN6THdpb0d5L2lOL0R6SkZvNUVZbkpsVDdNSUl0WmZBRApZYVdjR2h6SktEbWxTVjFLWWVXa1hNclgrM0NoU245VGlPcCtBbUJTcE9wZkp4aVEyVElPWmFrN2hYNjdaMkcwCk9KUkl2em8xYnBDdHVIcDdhQXltL1RhKzUzNW5XZGFkVUhQbmlpcGcwRjVoSlRTbTRTaGVQOU1GS1lZNUZGRHcKSTVlVlorNEwraDBNcDU5WkR6YlJHQytQQUJCYVFXcG44VmZuNFUwbEdhbkhUV0xuOUcxM2NIRVhPaGsyTnNaNApaZ3lqbmozOWVyek92TEg3OUVpTmxEZFFzS3orUG1xNXF2eVB3dm9zek11OFA4Wk14T3NkTGp5Ui9lNFFnMk12CmNtcCtwN3ViQlQyVGJMaTBKOUZ0OWxHR09rR28wSVlHVTZobGlGQW9lbmwzaXBkQlNlWFdVRG53cjlWMkx3Z3YKd1FCVHRCTW5uY0l1STdrLzBob0lwRzBFVDJIaDRMY0wwR2RKVVBSNVBWa1pQM1J5a2tnNEJRaTFaRnJpalJwRgp3ZUt2NnEwbHArYkpiR0NWL1U4b0M1QXV3aHdqOWZadzhOWExnT2xIRktrVWhpM2RvZGhJK1g3Nm5sY2VJSUltCjcyRlV5S0tuQ2JURTZjeVhxYTlwVkpjQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ=='
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
