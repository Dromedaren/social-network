# social-network
A small project (mini social network) that allows for users to post things on other peoples walls and chat with eachother.

# Project Description
Detta är ett projekt i kursen TDP013
Projektet är en Social webbplats där man kan lägga till vänner, posta meddelanden på sin och andras profiler.

Testning av användargränssnittet är gjort med med Selenium, testning med Mocha (med JSCoverage).

Endast den nya informationen som efterfrågas av användaren uppdateras.
Användare kan registrera sig, logga in på en personlig sida samt logga ut.
Användare kan söka efter andra användare.
Användare kan lägga till andra användare som vänner.
Användare kan se en lista över sina vänner.
Användare kan se sina vänners sidor.
Användare kan posta meddelanden på sina vänners sidor.


Krav: imagemagick installerat på systemet, görs t.ex med "sudo apt-get install imagemagick"

Design.
Många av våra designval har gjorts baserat på hur stora sociala nätverk och
likande applikationer har löst samma problem, därför kan man se en ganska
stor likhet mellan webbsidor som twitter och facebook. Vi har en rak linje
över på webbsidan med en logotyp som representerar oss och sen har vi de
relevanta länkarna och ett sökfält. Även användarprofilen är inspirerad av 
dessa två webbsidor vilket är ganska tydligt, vi har användar informationen
längst till vänster på sidan och meddelande feeden stor och tydlig i mitten.

Selenium.
Vi har använt selenium för att testa alla element användaren kan intergara med.
Detta inkluderar registrering, login, skicka meddelanden, lägga till vänner 
och logga ut. Vi testar så att data hanteras rätt och att den validering som
vi har implementerat fungerar som tänkt. Man ska t ex inte kunna skriva ett 
meddelande som är längre än 140 tecken och inte heller skicka ett tomt 
meddelande. Vi testar även så att användaren blir korrekt hanterad om hen 
anger felaktig information vid inloggnign eller ett användarnamn som är upptaget
vid registrering.

Mocha.
Projektet har mocha tester för alla routes som är åtkomliga när man inte är 
inloggad. Tyvär har vi inte kunnat skriva mocha tester för routes som kräver
att användaren är inloggad då detta krävt en sessioncookie från användaren
och trots många försök har vi inte lyckas få sessions att fungera med mocha.