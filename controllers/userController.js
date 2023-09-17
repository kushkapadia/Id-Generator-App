const { jsPDF } = require('jspdf')

exports.home = function (req, res) {
    console.log("hut")
    res.render('home')
}

exports.generateId = function (req, res) {
    res.render('generate-id')
}

exports.generate = function (req, res) {
    console.log(req.body)
    //    var doc = new jsPDF()
    //    doc.text("Hello", 10, 10)
    //    doc.html()
    //    doc.save()
    res.send("submitted")
}

