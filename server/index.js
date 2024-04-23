const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000

//Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {console.log(`Server has started on port ${PORT}`);})