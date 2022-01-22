import { Router } from "express";
const router = Router();

import passport from "passport";

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
      res.send('My profile')
});


export default router;