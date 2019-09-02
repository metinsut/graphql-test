import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import database from './config/database';
import optionsCors from './config/cors';

const app = express();
database();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;

if (!dev) {
   app.use(helmet());
   app.use(compression());
}

if (dev) {
   app.use(morgan('tiny'));
}

app.use(cors(optionsCors));

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/graphql', graphqlHTTP({}));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
   const { status = 500, message } = err;
   res.status(status).json({
      error: {
         message,
         unControl: true
      },
      success: null
   });
});

app.listen(port, () => console.log('App is listening on port ' + ROOT_URL));
