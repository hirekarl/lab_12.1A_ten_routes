const express = require("express")

const app = express()

const PORT = 3333

const API_KEY = "f6205057-5a1d-4625-ba61-6d68c4e28720"

const EIGHTBALL_RESPONSES = [
  "It is certain",
  "Reply hazy, try again",
  "Don't count on it",
  "It is decidedly so",
  "Ask again later",
  "My reply is no",
  "Without a doubt",
  "Better not tell you now",
  "My sources say no",
  "Yes definitely",
  "Cannot predict now",
  "Outlook not so good",
  "You may rely on it",
  "Concentrate and ask again",
  "Very doubtful",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
]

// MIDDLEWARE
app.use("/api", (req, res, next) => {
  const key = req.query.key

  if (key && key === API_KEY) {
    next()
  } else {
    res.status(403).send("HTTP Error 403: Forbidden!")
  }
})

app.use("/boss", (req, res, next) => {
  const currentUser = req.query.currentUser

  const now = new Date()

  req.timestamp = now.getTime()
  const ISOString = now.toISOString()

  console.log(`[${ISOString}] ${req.method} /boss${req.path} by ${currentUser || "Anonymous User"}`)

  if (currentUser && currentUser === "boss") {
    next()
  } else {
    res.status(403).send("HTTP Error 403: Forbidden!")
  }
})

// ROUTES
// Root
app.get("/", (req, res) => {
  res.send("You have reached My Amazing App!")
})

// API Routes
app.get("/api", (req, res) => {
  res.send("Welcome to my API")
})

app.get("/api/dashboard", (req, res) => {
  res.send("This is the Admin Dashboard")
})

app.get("/api/profile", (req, res) => {
  res.send("This is the API Profile Screen")
})

app.get("/api/jigglypuff", (req, res) => {
  res.send("Tishana is correct, Jigglypuff IS the best Pokémon")
})

// Greeting
app.get("/greeting/:name", (req, res) => {
  const name = req.params.name
  res.send(`Hello, ${name}!`)
})

// 8-ball
app.get("/8ball", (req, res) => {
  const randomIndex = Math.floor(Math.random() * EIGHTBALL_RESPONSES.length)
  res.send(EIGHTBALL_RESPONSES[randomIndex])
})

// Boss
app.get("/boss/dashboard", (req, res) => {
  res.send("Welcome to the Boss Dashboard!")
})

app.get("/boss/profile", (req, res) => {
  res.send("This is the Boss's Profile.")
})

app.get("/boss/destruction", (req, res) => {
  res.send("Congrats! You just broke the Internet. Forever.")
})

// LISTEN
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
