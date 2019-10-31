![](../../kursjs.png)

# KursJS - class

## Zadanie 1
Do pliku index.html dołączone są 2 pliki js: slider.js, w którym jest klasa Slider, którą pisaliśmy [tutaj](https://kursjs.pl/kurs/dom/slider.php).
W pliku app.js przygotowany jest dodatkowy kod klasy MySlider. Ma ona w sobie funkcje odpowiedzialne za stworzenie i rysowanie okrągłego progress baru.

Zamień powyższy kod tak, by klasa MySlider rozszerzała klasę Slider.

- w swoim konstruktorze klasa MySlider powinna odpalać kod konstruktora z klasy Slider przekazując do niej wszystkie parametry jakie dosłała przy tworzeniu pojedynczej instancji. Użyj tutaj rest i spread operatora. Jeżeli w konfiguracji slidera został ustawiony parametr pauseTime na większy niż 0 funkcja powinna też odpalać na starcie funkcję `createTimer()` i `startTimer()`.

- Jeżeli przeanalizowałeś artykuł o budowaniu slidera, wiesz, że przy zmianie slidera odpalana jest metoda changeSlide(). W klasie SuperSlider rozszerz tą metodę tak, by na jej początku odpalany był oryginalny kod, a następnie uruchamiana była funkcja `startTimer()`.

- Dodatkowo możesz pokusić się o rozbudowanie obiektu options o np. właściwość showProgressBar.




