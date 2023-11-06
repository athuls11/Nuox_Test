import { Document } from 'mongoose';

export interface UserInterface extends Document {
  username?: string;
  age?: number;
  address?: {
    state: string;
    city: string;
  };
}
