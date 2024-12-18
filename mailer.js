const nodemailer = require('nodemailer');

require("dotenv").config();
const transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD
    }
});

const SendMessage = async (req, res) => {
    try {
        const { email, name, message } = req.params;
        const mailOptions = {
            from: process.env.NODEMAILER_USER,
            to: process.env.MY_EMAIL,
            subject: `Message From ${name}`,
            html: `Dear Rohit,<br> You have a new message from ${name}: <br>${message}<br> <br> Email:${email} <br> Thank You<br>`
        };
        const status = await transporter.sendMail(mailOptions)
        if(status.accepted.length!==0){
            res.status(200).json({sent:true});
        }
        else{
            res.status(400).json({sent:false});
        }


    } catch (error) {
        console.log(error);
        res.status(404);
    }
}
module.exports = {
    SendMessage
}