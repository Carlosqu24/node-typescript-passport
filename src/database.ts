import mongoose from 'mongoose'
import config from './config/config'


mongoose.connect(config.DB.URI)
      .then(db => console.log('DB is connected'))
      .catch(error => console.log(error));