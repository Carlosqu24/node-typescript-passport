export default {
      DB: {
            URI: process.env.MONGODB_URI || 'mongodb://localhost/jwt-tutorial',
            USER: process.env.MONGODB_USER || '',
            PASSWORD: process.env.MONGODB_PASSWORD || ''
      },
      jwtSecret: process.env.JWT_SECRET || 'somesecrettoken'
}