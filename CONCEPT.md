Frontend Framework 5.0

# Was soll dabei herauskommen?

Indexer benötigt einen strukturellen Umbau. Folgende Ansichten sollten integriert werden:

- Dauerhafte Navigation (z.B Sidebar links, iFrame rechts) -> schnelle Navigation zwischen Seiten und Komponenten
- Deeplinks, um Seiten, Komponenten und Styles auch als Einzelseite aufrufen zu können
- Möglichkeit im Screen zwischen Desktop, Tablet, Mobile (oder beliebiger Breite) per Klick zu springen
- Auflistung von Seiten, Komponenten und Styles (Styleguide wie Farben, Schriftgrößen usw...) in der Sidebar
- Unterschiedliche Detailansichten für Seiten, Komponenten und Styles:

## Ansicht Seiten
Hier wird immer die "echte" Seite mit Header, Footer und Grid angezeigt. Die dargestellten Komponenten entsprechen exakt der Darstellung auf der dynamisierten Webseite.

## Ansicht Styles
Hier wird ein vorderfiniertes Format ausgegeben, welches in ansprechender Form die Farben, Schriftarten und -größen sowie weitere Styles ausgibt. Dieses Template liegt bereits im `frontend-framework` als Vorlage vor.

## Komponenten
Die Komponenten werden in einer für Entwickler optimierten Version ausgegeben. Hier kann zwischen den einzelnen Varianten gewechselt werden und das Markup, CSS-Styles, JS-Dateien (JSX, TS....), JSON-Struktur und die HBS-Templates in einer Vorschau betrachtet werden.

Komponenten werden grundsätzlich in einer statischen HTML-Variante und als vorkompiliertes HBS-Äquivalent vorgehalten. Zu jeder Komponente wird eine JSON-Datenstruktur generiert, welche benötigt wird, um das HBS-Template zu rendern. Diese Datenstruktur wird aus den Metadaten (siehe template Engine unten) in den jeweiligen Elementen/Komponenten extrahiert.


# Technologie

## Template Engine
Als Template Engine wird Handlebars genutzt, einerseits für das statische Rendern des Markups der Seitenvorschau, sowie zur Precompilation der einzelnen Komponenten. 

Für die Beschreibung der Metadaten von Seiten und Komponenten wird YAML oder JSON im Header der Templates eingefügt und von der Template Engine ausgewertet.

## JavaScript
Für die Entwicklung von Komponenten stehen folgende Technologien zur Auswahl:

- jQuery TypeScript Plugin Boilerplate (kleine und mittlere, modulare Plugins)
- JSX / React(-lite) für Plugins mit Daten- und Nutzer-Interaktion

## CSS
Für die Erstellung von CSS wird grundlegend auf SASS im BEM-Format gesetzt

## Conditional Loading
Für das Nachladen von Komponenten wird grundsätzlich der VI conditional-resource-loader genutzt.

## Useref
Es besteht weiterhin die Möglichkeit die wichtigsten Elemente des Frameworks (Header, Footer, Grid usw.) bereits in einer styles.all.min.js zusammenzufassen

# Aufbau der Komponenten
Die Komponenten setzen sich aus Elementen zusammen, die jeweils das kleinste, wiederverwertbare Markup-Element darstellen. Die Aufteilung ist hier weniger strikt als es zB im Atomic Design gefordert wird. Jedes Element besitzt, sofern Daten dynamisiert werden, eine Beschreibung der Datenstruktur im Header (JSON oder YAML).
