
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
