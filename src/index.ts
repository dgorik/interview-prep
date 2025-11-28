import express from 'express';
import http from 'http';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from '../routes/main';


const app = express();

app.use((cors({
    credentials: true,
})));
app.use(compression());
app.use(bodyparser.json())
app.use(cookieParser());
app.use("/", router)

app.set('view engine', 'ejs');

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})