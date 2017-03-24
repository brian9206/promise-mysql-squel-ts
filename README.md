# promise-mysql-squel-ts
TypeScript wrapper of promise-mysql and squel in one module

# TypeScript definition
```
npm install --save-dev https://github.com/brian9206/ts-promise-mysql.git
npm install --save-dev https://github.com/warrenseymour/squel.d.ts.git
```

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
    .from("sometable");

let results = await MySql.executeStatement(conn, query);

console.log(results);
```