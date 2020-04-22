import express, { json } from 'express';
import morgan from 'morgan';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

// initializing packages
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// Importacion de Routes
import studentRoutes from '../src/routes/student';
import teacherRoutes from '../src/routes/teacher';
import testRoutes from '../src/routes/test';
import subjectRoutes from '../src/routes/subject';
import courseRoutes from '../src/routes/course';
import qualificationRoutes from '../src/routes/qualification';

// middlwares
app.use(morgan('dev'));
app.use(json());
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// routes
app.use('/api/student', studentRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/subject', subjectRoutes);
app.use('/api/test', testRoutes);
app.use('/api/qualification', qualificationRoutes);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
