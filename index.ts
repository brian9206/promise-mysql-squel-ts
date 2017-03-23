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

    export function executeParameterizedStatment(conn: IPromisifiedConnection, params: { text: string, values: any[] }): Promise<mysql.IQuery> {
        return conn.query(params.text, params.values);
    }
	
	export function executeStatement(conn: IPromisifiedConnection, queryBuilder: SqlSelect | SqlInsert | SqlUpdate | SqlDelete) {
		executeParameterizedStatment(conn, (queryBuilder as any).toParam());
	}
}