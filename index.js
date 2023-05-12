import { createServer } from 'http';

const makeRequests = () => {
  return Promise.all([
    fetch("http://localhost:3000/same-case", {
      headers: {
        authorization: 'Bearer 123',
        authorization: 'Bearer 234',
        authorization: 'Bearer 345',
      }
    }),
    fetch("http://localhost:3000/diff-case", {
      headers: {
        authorization: 'Bearer 123',
        Authorization: 'Bearer 234',
        Authorization: 'Bearer 345',
      }
    })
  ])
}

const handler = (req, res) => {
  console.log(`====${req.url}====`)
  console.log(req.headers);
  res.writeHead(200)
  res.end()
}

const case_ = (joinDuplicateHeaders) =>
  new Promise(resolve => {
    console.log(`====joinDuplicateHeaders: ${joinDuplicateHeaders}====`)
    const server = createServer(
      { joinDuplicateHeaders },
      handler
    )

    server.on('listening', () => {
      makeRequests().then(() => {
        server.close()
        setTimeout(resolve, 1000)
      })
    })

    server.listen(3000)
  })

await case_(true)
await case_(false)
