import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },

  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
})
