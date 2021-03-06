# ElkeLeerlingOnline

Bijdrage leveren? Dat kan!
* Maak een fork en een pull request.
* Meld problemen via de [issues](https://github.com/MakeInBelgium/maskermatch/issues/new).

## Zoekertjes data
De data over de verschillende vragen van scholen wordt door het operations team gebundeld in een Google Sheets:

https://docs.google.com/spreadsheets/d/1TvDQjbYOaIBCXUpN8g0Fa6rU3YCxBiBDQM5EtD9Tlv8/edit#gid=0

De front-end haalt deze op en geeft ze weer via een Handlebars template.

## Deployment

Site is voorlopig beschikbaar in slechts 1 taal:
- NL: https://elke-leerling-online.coronadenktank.be
- FR: ???

Het is een *onepager* en iedere taal heeft zn eigen index bestand:
- index_nl.html
- index_fr.html

## Kom er bij!
Neem dan deel aan de conversatie op de Slack workspace van de Corona-denktank Make in Belgium: https://join.coronadenktank.be (Kanaal: #corona-elke-leerling-online).


# local server
Zelf een lokale server opzetten? Dat kan op verschillende manieren!

## met python
Eenvoudig lokaal previewen met het terminal-commando: `python3 -m http.server 8000` (of `python -m http.server 8000` als python 3 je standaardpython is)
De site is vervolgens bereikbaar op `http://localhost:8000`

## met php
Heb je php op je computer geïnstalleerd? Gebruik dan de PHP built-in webserver:

```
$> php -S 0.0.0.0:8000
```

De site is vervolgens bereikbaar op `http://localhost:8000`
