import { Request, Response } from 'express';
import { VerificationService } from '../services/verificationService';
import { VerificationPayload } from '../types';

export class VerificationController {
  private verificationService: VerificationService;

  constructor() {
    this.verificationService = new VerificationService();
  }

  verify = async (req: Request, res: Response) => {
    try {
      const payload: VerificationPayload = req.body;
      const result = await this.verificationService.verifyUser(payload);

      return res.status(200).json({
        error: {
          code: 0,
          message: ''
        },
        data: {
          result
        }
      });
    } catch (error) {
      return res.status(200).json({
        error: {
          code: 500,
          message: 'Internal server error'
        },
        data: {
          result: false
        }
      });
    }
  }
}
