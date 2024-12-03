import { Request, Response, NextFunction } from 'express';
import { VerificationPayload } from '../types';

export const validatePayload = (req: Request, res: Response, next: NextFunction) => {
  const payload: VerificationPayload = req.body;
  
  // Check if at least one verification parameter is present
  const hasValidParameter = ['address', 'twitter', 'telegram']
    .some(key => payload.hasOwnProperty(key));

  if (!hasValidParameter) {
    return res.status(200).json({
      error: {
        code: 400,
        message: 'At least one verification parameter is required'
      },
      data: {
        result: false
      }
    });
  }

  // Validate timestamps if present
  if (payload.startTimestamp && payload.endTimestamp) {
    const start = new Date(payload.startTimestamp);
    const end = new Date(payload.endTimestamp);
    
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(200).json({
        error: {
          code: 400,
          message: 'Invalid timestamp format'
        },
        data: {
          result: false
        }
      });
    }
  }

  next();
};
