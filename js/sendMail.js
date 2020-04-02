// import nodemailer from "nodemailer";

// async function sendMail() {
//   try {
//     let testAccount = await nodemailer.createTestAccount();

//     let transporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: testAccount.user, // generated ethereal user
//         pass: testAccount.pass // generated ethereal password
//       }
//     });

//     transporter.sendMail({
//       from: '"Desafio 333 👻" <victor@desafio333.com>', // sender address
//       to: "vsampaio@pm.me", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world? deu certo essa caralha</b>" // html body
//     });

//     console.log("Message sent: %s", info.messageId);

//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   } catch (error) {
//     console.error(error);
//     throw new Error(error);
//   }
// }

// export default sendMail;
