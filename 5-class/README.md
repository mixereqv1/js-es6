![](../../kursjs.png)

# KursJS - class

## Zadanie 1
Stwórz klasę Brick, która będzie opisywać pojedynczy klocek w Arkanoid.

Niech ma:
- właściwości `x`, `y` podawane przy tworzeniu obiektu
- właściwość `graphic` ustawioną na null
- właściwości `width`, `height` ustawione na 100x60
- właściwość `type` ustawioną na "static"
- właściwość `live` ustawioną na 0

- metodę `render`, która wypisze wszystkie powyższe detale.
- metodę `init`, która wypisze w konsoli "Dodano na planszę"


## Zadanie 2
Stwórz klasy dziedziczące `BrickRed`, `BrickBlue`, `BrickGreen`, które będą dziedziczyć po klasie Brick.

Klasy powinny mieć:

BrickBlue powinien mieć:
- graphic ustawiony na "blue.png"
- live ustawione na 10

BrickRed powinien mieć:
- graphic ustawiony na "red.png"
- live ustawione na 15

BrickGreen powinien mieć:
- graphic ustawiony na "green.png"
- live ustawione na 20


## Zadanie 3
Stwórz klasę BrickAnim, która będzie dziedziczyć po klasie Brick.
Klasa ta powinna mieć:
- właściwości takie jak Brick
- właściwość animated ustawioną na "sprite.png"
- właściwość type ustawioną na "animated"
- właściwość live ustawioną na 10

- metodę render(), która będzie wypisywać w konsoli `animuję!` a następnie wykona kod z metody render() znajdującej się w klasie Brick.

Stwórz kilka obiektów na bazie powyższych klas. Zainicjuj im metody init() i print().