const express = require('express'),
    app = express();
const port = 3000;

app.use(express.json());

let courses = [
    {
        id: 1,
        name: "JS"
    },
    {
        id: 2,
        name: "Node JS"
    },
    {
        id: 3,
        name: "Angular"
    }
];

app.get("/", function (req, res) {
    res.send("Hello, world");
});

// Get all courses
app.get("/courses", function (req, res) {
    res.send(courses);
});

// Get course
app.get("/api/courses/:id", function (req, res) {
    let course = courses.find(function (course) {
        return course.id === parseInt(req.params.id);
    })
    res.send(course);
});

//Post one course
app.post("/api/courses", function (req, res) {
    let course = {
        id: Date.now(),
        name: req.body.name
    }

    courses.push(course);
    res.send(courses);
});

//Put 
app.put("/api/courses/:id", function (req, res) {
    const course = courses.find(function (course) {
        return course.id === parseInt(req.params.id);
    });

    course.name = req.body.name;
    res.send(course);

    //если нужен статус вместо данных
    //res.sendStatus(200);
});

//Delete
app.delete("/api/courses/:id", function (req, res) {
    courses = courses.filter(function (course) {
        return course.id !== parseInt(req.params.id);
    });

    res.send(courses);
});

app.listen(port, function () {
    console.log(`Express at http://localhost:${port}`);
});


