import * as mysql from 'mysql';
import * as promiseMysql from 'promise-mysql';
import * as squel from 'squel';

export namespace MySql {
    // MySql wrapper
    export function createConnection(config: mysql.IConnectionConfig): IPromisifiedConnection {
        return promiseMysql.createConnection(config);
    }

    export function createPool(config: mysql.IPoolConfig): IPromisifiedPool {
        return promiseMysql.createPool(config);
    }
    
    // Squel wrapper
    export let QueryBuilder: QueryBuilder = squel.useFlavour('mysql');

    export function executeQueryBuilder(conn: IPromisifiedConnection, params: any): Promise<mysql.IQuery> {
        return conn.query(params.text, params.values);
    }
}