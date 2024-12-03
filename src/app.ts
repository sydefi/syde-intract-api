import express from 'express';
import helmet from 'helmet';
import { VerificationController } from './controllers/verificationController';
import { validatePayload } from './middleware/validatePayload';

const app = express();

// Security middleware
app.use(helmet());

// Body parser
app.use(express.json());

// Controllers
const verificationController = new VerificationController();

// Routes
app.post('/verify', validatePayload, verificationController.verify);

// Error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(200).json({
    error: {
      code: 500,
      message: 'Internal server error'
    },
    data: {
      result: false
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port: ', {PORT});
});
