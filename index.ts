import * as mysql from 'mysql';
import * as promiseMysql from 'promise-mysql';
import * as squel from 'squel';

export namespace MySql {
    // MySql wrapper
    export function createConnection(config: mysql.IConnectionConfig): promiseMysql.IConnection {
        return promiseMysql.createConnection(config);
    }

    export function createPool(config: mysql.IPoolConfig): promiseMysql.IPool {
        return promiseMysql.createPool(config);
    }
    
    // Squel wrapper
    export let QueryBuilder: QueryBuilder = squel.useFlavour('mysql');

    export function executeParameterizedStatement(conn: promiseMysql.IConnection, params: { text: string, values: any[] }): Promise<any> {
        return conn.query(params.text, params.values);
    }
	
    export function executeStatement(conn: promiseMysql.IConnection, queryBuilder: SqlSelect | SqlInsert | SqlUpdate | SqlDelete) {
	    return executeParameterizedStatement(conn, (queryBuilder as any).toParam());
    }
}