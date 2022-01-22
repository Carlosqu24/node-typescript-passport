"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/jwt-tutorial',
        USER: process.env.MONGODB_USER || '',
        PASSWORD: process.env.MONGODB_PASSWORD || ''
    }
};
