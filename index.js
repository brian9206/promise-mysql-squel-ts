"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promiseMysql = require("promise-mysql");
var squel = require("squel");
var MySql;
(function (MySql) {
    // MySql wrapper
    function createConnection(config) {
        return promiseMysql.createConnection(config);
    }
    MySql.createConnection = createConnection;
    function createPool(config) {
        return promiseMysql.createPool(config);
    }
    MySql.createPool = createPool;
    // Squel wrapper
    MySql.QueryBuilder = squel.useFlavour('mysql');
    function executeParameterizedStatement(conn, params) {
        return conn.query(params.text, params.values);
    }
    MySql.executeParameterizedStatement = executeParameterizedStatement;
    function executeStatement(conn, queryBuilder) {
        return executeParameterizedStatement(conn, queryBuilder.toParam());
    }
    MySql.executeStatement = executeStatement;
})(MySql = exports.MySql || (exports.MySql = {}));
