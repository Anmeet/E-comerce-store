import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Shasank Ghimire',
        email:'shasank@example.com',
        password: bcrypt.hashSync('123456',10),
     
    },
    {
        name: 'Dipesh Shrestha',
        email:'dipesh@example.com',
        password:bcrypt.hashSync('123456',10),
       
    }
]

export default users;