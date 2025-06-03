import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shubham',
    email: 'shubham@gmail.com',
    password: bcrypt.hashSync('Abcde', 10),
    isAdmin: true,
  },
 
]

export default users
