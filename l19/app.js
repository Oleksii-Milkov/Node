const express = require('express'),
    app = express();
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io", //smtp сервер mailtrap
    port: 2525,
    auth: {
        user: "b20f9d06d7de61",
        pass: "12723c82b77f75"
    }
});

app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));

// Отдаю юзеру главную
app.get("/", function (req, res) {
    res.render("index", { title: "Main" });
});

//Отдаю юзеру контакты
app.get("/contacts", function (req, res) {
    res.render("contacts", { title: "Contacts", message: null });
});

//Обработка запроса юзера
app.post("/contacts", function (req, res) {
    let mailOptions = {
        from: req.body.email,
        to: "admin@gmail.com",
        subject: "Необходимо ответить пользователю",
        text: `Имя пользователя: ${req.body.name},\nКонтактный номер телефона: ${req.body.phone}`
    };
    if (req.body.name !== "" && req.body.email !== "" && req.body.phone !== "") {
        res.render("contacts", { message: true });
        transport.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log("Письмо отправлено: " + info.response);
            }
        });
    }
    else {
        res.render("contacts", { message: false });
    }

    res.redirect("/contacts");
});

//Отдаю юзеру инф. страницу
app.get("/aboutUs", function (req, res) {
    res.render("aboutUs", { title: "About Us" });
});

app.listen(3000, function () {
    console.log("App at http://localhost:3000");
});

