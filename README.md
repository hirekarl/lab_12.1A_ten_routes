# Lab 12.1A: Tishana's Custom Lab

## Assignment
Create an app with 10 routes:
1. a root route that says "You have reached My amazing App?" or whatever you want it to say, lol
2. a set of `/api` routes that requires middleware and an api key that you come up with like the exercise. You need the following routes:
  A. `/api` that shows "Welcome to my API",
  B. `/api/dashboard` that shows "This is the Admin Dashboard",
  C. `/api/profile` that shows "This is the API Profile Screen", and
  D. `/api/jigglypuff` that shows "Tishana is correct, Jigglypuff IS the best Pokémon". REMEMBER to add an error message if person is FORBIDDEN
3. a `/greetings` route that takes the name in the URL and says "Hello, <person name>!"
4. a `/8ball` route that generates a "Magic 8 ball" like message. Don't know what that is? check out this site: [Magic 8-Ball](https://magic-8ball.com/magic-8-ball-answers/)
5. a  set of `/boss` routes that uses middleware to check if you are the boss before allowing you to get to the `/boss/dashboard` , `/boss/profile` , and `/boss/destruction` routes. Be creative with these... ALL BOSS ROUTES SHOULD BE LOGGED WITH TIMESTAMP
