const express = require('express');
const app = express();
const connectDB = require('./models/connectDB');
const React = require('react');
const ReactDOM = require('react-dom');
const homeRoutes = require('./routes/home')
const contactRoutes = require("./routes/contacts")
const PORT = process.env.PORT || 3000;

connectDB();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", homeRoutes);
app.use("/contacts", contactRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})