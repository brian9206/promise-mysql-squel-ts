# promise-mysql-squel-ts
TypeScript wrapper of promise-mysql and squel in one module

# Basic usage
```ts
import { MySql } from 'promise-mysql-squel-ts';

let conn = MySql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
});

let query = MySql.QueryBuilder
    .select()
    .from("sometable")
    .toParam();

let results = await MySql.executeQueryBuilder(conn, query);

console.log(results);
```