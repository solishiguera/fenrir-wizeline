const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const jwt = require("jsonwebtoken");
const model = require('./model/employee');

dotenv.config();

const app = express();
const port = process.env.PORT || 3002
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.send('Hola, nos pueden dar un internship? :(')
})

async function a() { 
  try {
    const diego = model.Employee.build({
      employee_name: "Sequelize",
      employee_last_name: "No SQL",
      department_id: 101,
      is_admin: true,
      job_title: "Intern",
      profile_picture: "",
      username: "sequelize",
      employee_password: "diego"
    });
    await diego.save();
    
  } catch (error) {
    console.log(error)
  }
}


// Routes //
app.use(require('./routes/routes'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
