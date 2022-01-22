import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";
import User from "../models/User";

const options: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret
};

export default new Strategy(options, async (payload, done) => {
      try {
            const foundedUser = await User.findById(payload.id);

            if (foundedUser) {
                  return done(null, foundedUser);
            };

            return done(null, false);
      } catch (error) {
            console.log(error)
      }
})