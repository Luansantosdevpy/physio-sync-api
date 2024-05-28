"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const dependencyContainer_1 = __importDefault(require("./dependencyContainer"));
const logger_1 = __importDefault(require("./infrastructure/log/logger"));
const routes_1 = __importDefault(require("./api/routes/routes"));
const database_1 = __importDefault(require("./infrastructure/data/config/database"));
const mongoose_1 = __importDefault(require("mongoose"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.initialize = () => __awaiter(this, void 0, void 0, function* () {
            yield this.connectToMongoDB();
            yield this.dependencyContainer();
            yield this.middlewares();
            yield this.routes();
        });
        this.start = (port, appName) => {
            this.server = this.express.listen(port, '0.0.0.0', () => {
                logger_1.default.info(`${appName} listening on port ${port}!`);
            });
        };
        this.stop = () => {
            this.server.close();
        };
        this.middlewares = () => __awaiter(this, void 0, void 0, function* () {
            this.express.use(express_1.default.json());
            this.express.use((0, cors_1.default)({
                origin: '*',
                methods: 'POST, GET, PUT, OPTIONS, PATCH, DELETE',
                exposedHeaders: 'X-file-name'
            }));
            this.express.use((0, cors_1.default)());
        });
        this.dependencyContainer = () => __awaiter(this, void 0, void 0, function* () {
            yield (0, dependencyContainer_1.default)(tsyringe_1.container);
        });
        this.routes = () => __awaiter(this, void 0, void 0, function* () {
            this.express.use(yield (0, routes_1.default)());
        });
    }
    connectToMongoDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { uri, options } = database_1.default;
                yield mongoose_1.default.connect(uri, options);
                logger_1.default.info('Connected to MongoDB');
            }
            catch (error) {
                logger_1.default.error('Error connecting to MongoDB:', error);
                process.exit(1);
            }
        });
    }
}
exports.default = App;
