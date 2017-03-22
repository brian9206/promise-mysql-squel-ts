import * as promiseMysql from 'promise-mysql';
import * as squel from 'squel';

export namespace MySql {
    // MySql wrapper
    export function createConnection(config: any): any {
        return promiseMysql.createConnection(config);
    }

    export function createPool(config: any): any {
        return promiseMysql.createPool(config);
    }
    
    // Squel wrapper
    export let QueryBuilder = squel.useFlavour('mysql');

    export function executeQueryBuilder(conn: any, params: any) {
        return conn.query(params.text, params.values);
    }
}