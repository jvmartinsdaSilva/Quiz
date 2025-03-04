import express from 'express'

const server = express()

server.get("/", (_, res) => res.send("Heloaaaaaaaaasssswww"))

server.listen(3000, () => console.log("http://localhost:3000"))