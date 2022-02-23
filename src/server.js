import express from 'express';
import routes from './routes/AppRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';



const PORT = '4000';


/**
 * Initializing express
 */
const app = express();

/**
 * Initialize mongoose connection
 */

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Nodedb', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

/**
 * bodyparser setup
 */

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app)

/**
 * This message will display on browser while opening with port
 */

app.get('/', (req, res) => {
    res.send(`Welcome to node server and port number ${PORT}`);
});

/**
 * reading satic file from public folder
 */
app.use(express.static('public'))

/**
 * A display message in terminal
 */
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
