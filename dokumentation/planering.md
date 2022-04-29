# Planering

## projekt

Filmdatabas

## Deadlines

| Vecka | Hur går det? | Deadlines |
| ----- | ------------ | --------- |
| 17    |              | planering |
| 18    |              |           |
| 19    |              |           |
| 20    |              |           |
| 21    |              |           |
| 22    |              |           |

Veckoplanering

| v.  | Mån | Hur går det? | Ons | Hur går det? | Fre       | Hur går det? |
| --- | --- | ------------ | --- | ------------ | --------- | ------------ |
| 17  | -   | -            | -   | -            | planering |              |
| 18  |     |              |     |              |           |              |
| 19  |     |              |     |              |           |              |
| 20  |     |              |     |              |           |              |
| 21  |     |              |     |              |           |              |
| 22  |     |              |     |              |           |              |

## Databas

Använd gärna [draw.io](https://app.diagrams.net/) för att planera din databas, det finns mallar.
När den är klar kan du köra en MYSQL describe och klistra in resultatet i denna fil.
Exportera även databasen.

två tabeler en för inlogningen och en för filmerna.

## Struktur

Skriv gärna en lista över dina routes som du behöver.

```
GET /
```

Visa en landing-page med inloggning.

```
GET /movies
```

Visa en lista med alla filmer.  
Om man inte är inloggad så ser man bara.  
Om man är inloggad så kan man ändra på saker.

```
GET /movies/CUD
```

En egen rout för att "lätare" kuna ändra filmerna  
(kan ändras till en add i stäle)

```
GET /login
```

Visa en inloggnings sida

```
POST /API/login
```

rout för att loggian

```
POST /API/movie
```

rout för att ändra i databasen (Create, Update, Delete)
