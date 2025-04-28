const express = require('express');
const path = require('path');
const loginRoutes = require('./routes/loginRoutes');
const welcomeRoutes = require('./routes/welcomeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRoutes);
app.use('/welcome', welcomeRoutes); // Now using the separate route file

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});