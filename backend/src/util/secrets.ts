
require('dotenv').config()

export const MONGODB_URI = process.env.MONGODB_URI
if (!MONGODB_URI) {
    console.log('No mongo connection string. Set MONGODB_URI environment variable.')
    process.exit(1)
}

export const PORT = process.env.PORT
if (!PORT) {
    console.log('No PORT inserted. Set PORT environment variable.')
    process.exit(1)
}

export const JWT_SECRET = process.env.JWT_SECRET as string

if (!JWT_SECRET) {
    console.log('No JWT secret string. Set JWT_SECRET environment variable.')
    process.exit(1)
}
