// server.js
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req,res) => {
    console.log(`Server running on port ${PORT}`);
});
