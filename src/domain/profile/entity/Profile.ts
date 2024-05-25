import { User } from '@/domain/user/entity/User';

type Profile = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  bio?: string;
  profilePicture: any;

  userId: number;
  user: User;
};

export { type Profile };
