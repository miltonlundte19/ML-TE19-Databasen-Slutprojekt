# Slutprojekt

Du har fått i uppdrag att skapa något för webben (se classroom).

## Krav

Sidan ska visa dina samlade kunskaper från kursen. Den ska vara skapad utifrån en design (det måste inte vara perfekt) och innehålla **CR**UD funktionalitet för en resurs kopplad till webbplatsen. Redigeringen av resurser på webbplatsen kan vara skyddat med en inloggning om du så önskar.

Din frontend kan renderas på servern eller så kan frontend och backend vara separerade.

Du behöver designa databasen för sidan. För filmerna ska det åtminstone finnas följande information:

-   [ ] Titel
-   [ ] Regissör
-   [ ] År

Din databas ska följa normalform, det vill säga att regissörer/genrer behöver vara en separat tabell som hämtas med en JOIN på filmId.

Om du vill så kan du utöka informationen, ett tips är att leta efter filmposters på en extern API. Du kan även skydda CRUD funktionaliteten
bakom en login.

### Design

-   [ ] Användbart
-   [ ] Fungerande HTML & CSS

### CRUD

-   [ ] Visa en lista med filmer
-   [ ] Skapa filmer
-   [ ] Uppdatera filmer
-   [ ] Ta bort filmer

### Teknik

-   [ ] Server, node, express eller liknande
-   [ ] Databas, SQL
-   [ ] Säkerhet, filtrering och prep statements

# Design

Du har fått en grund för designen på sidan. Utgå från den.
Det kan krävas att du behöver göra ändringar i denna design.

[Figma design](https://www.figma.com/file/9og4l9GQP1uwQz31ohTjrH/movie?node-id=0%3A1)

## Lagar och regler

Ditt arbete ska följa gällande lagar och regler för en webbplats. Använder du kakor
ska det finnas information till användaren om detta. Sparar du information om
användaren så ska det finnas information om detta.

Använder du en extern API eller andras bilder ska det finnas information om detta
och du ska följa gällande lagar och regler kring det.

Du ska även välja en licens för GITHUB / redigera den MIT licens projektet har.

# Dokumentation

Se mappen [dokumentation](dokumentation/). [Planering](dokumentation/planering.md) ska skrivas pass 1.

## Resurser

-   [Fonts](https://fonts.google.com/share?selection.family=Archivo+Narrow|Six+Caps|Source+Sans+Pro)
-   [Icons](https://fonts.google.com/icons)
-   [Material design](https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=263238&secondary.color=FFB300&secondary.text.color=424242&primary.text.color=F5F5F5)
-   [IMDB](https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc)
-   [open api](http://www.omdbapi.com/)

## Använd

-   [Webbserver](https://jens-andreasson.gitbook.io/webbserverprogrammering/)
-   [Databasdesign](https://jens-andreasson.gitbook.io/webbserverprogrammering/databas/databasdesign)
-   [CRUD](https://jens-andreasson.gitbook.io/webbserverprogrammering/databas/crud)
-   https://lawsofux.com/
