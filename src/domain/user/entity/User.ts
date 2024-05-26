type User = {
  id: number;
  username: string;
  email: string;
  phoneNumber?: number;
  createdAt: Date;
  isActive: boolean;
};

export { type User };
