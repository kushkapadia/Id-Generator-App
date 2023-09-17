const express = require('express')
const router = express.Router()
const fileUpload = require('express-fileupload')
const userController = require('./controllers/userController')
const multer = require('multer');
const path = require('path')
router.get('/', userController.home)
router.get('/generate-id', userController.generateId)
router.post('/generate', userController.generate)

//Flutter Testing APIS
router.post("/test", function (req, res) {
    console.log("Good!")
    console.log(req)
    res.json(main = {
        working: "My NAmw iS Kush"
    })
})



router.get("/getReq", function (req, res) {
    console.log("Get Request")

    res.json(data = {
        working: "My NAmw iS Kush"
    })
})








const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, (new Date()).getTime().toString() + ".jpg");
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 6,
    },
    // fileFilter: fileFilter,
});


router.post('/upload', upload.single("img"), function (req, res) {
    console.log("hit")
    console.log(req.body._id)
    // console.log(req.files);
    // const imageStorage = multer.diskStorage({
    //     // Destination to store image     
    //     destination: './uploads',
    //     filename: (req, file, cb) => {
    //         console.log(file);

    //         cb(null, file.fieldname + '_' + Date.now()
    //             + path.extname(file.originalname))
    //         // file.fieldname is name of the field (image)
    //         // path.extname get the uploaded file extension
    //     }
    // });
    // const imageUpload = multer({
    //     storage: imageStorage,
    //     limits: {
    //         fileSize: 1000000 // 1000000 Bytes = 1 MB
    //     },
    //     fileFilter(req, file, cb) {
    //         if (!file.originalname.match(/\.(png|jpg)$/)) {
    //             // upload only png and jpg format
    //             return cb(new Error('Please upload a Image'))
    //         }
    //         cb(undefined, true)
    //     }
    // imageUpload.single("img")
    res.send("ok")
})

const cpUpload = upload.fields([{ name: 'personPhoto', maxCount: 1 }, { name: 'aadharCardPhoto', maxCount: 1 }, { name: 'panCardPhoto', maxCount: 1 }, { name: 'otherDoc', maxCount: 1 }])
router.post('/report', cpUpload, function (req, res) {

    res.send("ok");
}
)


module.exports = router


