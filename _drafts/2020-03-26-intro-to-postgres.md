Create a user

```
postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';
```

alter role to be able to create a database.
```
postgres=# ALTER ROLE me CREATEDB;
```

try to login with created user in the terminal:
```
psql -d postgres -U me // doesnt work

psql -h localhost -d postgres  -U me // this works

```
