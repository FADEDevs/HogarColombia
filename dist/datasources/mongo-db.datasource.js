"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mongoDB',
    connector: 'mongodb',
    url: 'mongodb+srv://FaDeDevs:Devs2022@clusterhogarcolombia.qrr14xx.mongodb.net/HogarColombiaDB?retryWrites=true&w=majority',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongoDbDataSource = class MongoDbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongoDbDataSource.dataSourceName = 'mongoDB';
MongoDbDataSource.defaultConfig = config;
MongoDbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.mongoDB', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongoDbDataSource);
exports.MongoDbDataSource = MongoDbDataSource;
//# sourceMappingURL=mongo-db.datasource.js.map