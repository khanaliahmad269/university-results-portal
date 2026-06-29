const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const projectsRouter = require('./routes/projects');
const contactRouter = require('./routes/contact');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});