import { Request, Response } from "express"
import User, { IUser } from "../models/User";
import jwt from 'jsonwebtoken';
import config from "../config/config";

function createToken(user: IUser) {
      return jwt.sign(
            { 
                  id: user._id, 
                  email: user.email 
            }, 
            config.jwtSecret,
            {
                  expiresIn: 86400
            }
      );
};

export const signUp = async (req: Request, res: Response) => {
      const { email, password } = req.body;

      if (!email || !password) {
            return res.status(400).json({ message: 'Please your email and password' });
      };

      const user = await User.findOne({ email });

      if (user) {
            return res.status(400).json({ message: 'The user already exists!' });
      };

      const newUser = new User({ email, password });
      const savedUser = await newUser.save();

      res.status(201).json(savedUser);
};

export const signIn = async (req: Request, res: Response) => {
      const { email, password } = req.body;

      if (!email || !password) {
            return res.status(400).json({ message: 'Please your email and password' });
      };
      
      const user = await User.findOne({ email });

      if (!user) {
            return res.status(400).json({ message: 'The user does not exists!' });
      };

      const isMatch = await user.comparePassword(password);

      if (isMatch) {
            return res.status(200).json({ token: createToken(user)});
      };

      return res.status(400).json({ message: 'The email or password are wrong' });
};