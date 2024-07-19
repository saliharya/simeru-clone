import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const users = [
          { id: "1", username: "mhs", password: "mhs", role: "student" },
          { id: "2", username: "dosen", password: "dosen", role: "lecturer" },
          { id: "3", username: "admin", password: "admin", role: "admin" }
        ]

        const user = users.find(user =>
          user.username === credentials.username && user.password === credentials.password
        )

        if (user) {
          return { id: user.id, name: user.username, email: `${user.username}@example.com`, role: user.role }
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/AuthPage',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.role = token.role
      }
      return session
    }
  }
}

export default NextAuth(authOptions)
