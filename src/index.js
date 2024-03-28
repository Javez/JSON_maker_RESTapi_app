import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/json.routes.js';

const app = express();

app.use(bodyParser.json());
app.use(router);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
