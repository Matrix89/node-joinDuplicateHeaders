That's some confusing behavior from node.
Docs: https://nodejs.org/docs/latest-v18.x/api/http.html#messageheaders
## Requests
```
===/same-case===
headers: {
    authorization: 'Bearer 123',
    authorization: 'Bearer 234',
    authorization: 'Bearer 345',
}
```
```
===/diff-case===
headers: {
    authorization: 'Bearer 123',
    Authorization: 'Bearer 234',
    Authorization: 'Bearer 345',
}
```
## Results
```
====joinDuplicateHeaders: true====
====/same-case====
{
  host: 'localhost:3000',
  connection: 'keep-alive',
  authorization: 'Bearer 345',
  accept: '*/*',
  'accept-language': '*',
  'sec-fetch-mode': 'cors',
  'user-agent': 'undici',
  'accept-encoding': 'gzip, deflate'
}
====/diff-case====
{
  host: 'localhost:3000',
  connection: 'keep-alive',
  authorization: 'Bearer 123, Bearer 345',
  accept: '*/*',
  'accept-language': '*',
  'sec-fetch-mode': 'cors',
  'user-agent': 'undici',
  'accept-encoding': 'gzip, deflate'
}
====joinDuplicateHeaders: false====
====/same-case====
{
  host: 'localhost:3000',
  connection: 'keep-alive',
  authorization: 'Bearer 345',
  accept: '*/*',
  'accept-language': '*',
  'sec-fetch-mode': 'cors',
  'user-agent': 'undici',
  'accept-encoding': 'gzip, deflate'
}
====/diff-case====
{
  host: 'localhost:3000',
  connection: 'keep-alive',
  authorization: 'Bearer 123, Bearer 345',
  accept: '*/*',
  'accept-language': '*',
  'sec-fetch-mode': 'cors',
  'user-agent': 'undici',
  'accept-encoding': 'gzip, deflate'
}
```
