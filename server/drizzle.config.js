"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drizzle_kit_1 = require("drizzle-kit");
const env_1 = require("./src/env");
exports.default = (0, drizzle_kit_1.defineConfig)({
    schema: "./src/db/schema.ts",
    out: './.migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: env_1.env.DATA_BASE_URL,
    },
});
