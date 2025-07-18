import express from 'express'
import connectDB from './database/database.js'
import userRouter from './routes/user.route.js'
import userEmployeeRouter from './routes/employee.route.js'
import userDepartmentRouter from './routes/department.route.js'
import userLeaveRequestRouter from './routes/leaverequest.route.js'
import userAttendanceRouter from './routes/attendance.route.js';
import dotenv, { configDotenv } from 'dotenv';
// import { verifyToken, authorizationRoles } from './middleware/verifytoken.js';
import authRouter from './routes/auth.route.js'
const app = express()

dotenv.config();

app.use(express.json())
const PORT = process.env.PORT || 3000
connectDB().then(() => {
  console.log('Database connected successfully')
}).catch(err => {
  console.error('Database connection failed:', err)
})


app.use('/api', userRouter)
app.use('/api', userEmployeeRouter)
app.use('/api', userDepartmentRouter)
app.use('/api', userLeaveRequestRouter)
app.use('/api', userAttendanceRouter)
app.use('/api',authRouter)






// for mail

import nodemailer from "nodemailer";

app.post('/send-email', async (req, res) => {
    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'np05cp4a240169@iic.edu.np',
                pass: 'zvvp swog uawr knqi'
            }
        });
        
        // Email options
        const mailOptions = {
            from: 'np05cp4a240169@iic.edu.np',
            to: '23bhandarianil@gmail.com',
            subject: 'Test Email from Node.js',
            text: 'Hello! This is a test email sent using Nodemailer and Node.js.',
            html: '<p>Hello! This is a <b>test email</b> sent using <i>Nodemailer</i> and Node.js.</p>'
        };
        
        // Send mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error:', error);
            }
            console.log('Email sent:', info.response);
        });
        
        res.status(200).send("Email sent successfully");
        
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
    }
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});