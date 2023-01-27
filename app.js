const express = require("express");
const app = express();
const db = require("./models")
const PORT = process.env.PORT || 4000
// const errorHandler = require('./middlewares/errorHandler')
var cors = require('cors')

app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json());

const apiRoutes = require('./routes/routes')

app.get('/', (req, res, next) => {

    res.status(200).json({
        status: 'success',
        data: {
            name: 'all local',
            version: '0.1.0'
        }
    });

});

app.use("/resto",apiRoutes);
// app.use(errorHandler)

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT: ${PORT}`);
    });
});