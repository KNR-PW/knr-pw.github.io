# knr-meil-github.io

Repozytorium zawierające stronę Koła Naukowego Robotyków

## Budowanie i edycja

Strona jest budowana za pomocą statycznego generatora [Hugo](https://gohugo.io/) i hostowana z pomocą [GitHub Pages](https://pages.github.com/)

Jest kilka sposobów pracy i edycji strony:

- Do prostego edytowania zawartości poszczególnych stron można wykorzystać panel administracyjny: https://knr.edu.pl/admin/
- Uruchomienie GitHubowego edytora w przeglądarce (GitHub Codespaces - zielony przycisk `Code` -> `Codespaces` na stronie repozytorium projektu lub przycisk poniżej).  
  [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/alltheplaces/alltheplaces)
- Do wygodnej edycji strony można też lokalnie [zainstalować hugo](https://gohugo.io/installation/) (Np na linuxie `sudo apt install hugo`)

Komenda `hugo server` w terminalu uruchomi dynamiczny serwer z zawartością.

Do samodzielnego zbudowania samych plików wystarczy komenda `hugo`, która zbuduje witrynę w folderze `public`.

### Zawartość projektu

```tree
config.toml
content
├── project  //Tutaj znajdują się wszystkie strony poszczególnych projektów jak selfie, hal, melson
|             // jak chcesz dodać nowy projekt to tutaj
└── article //Tutaj znajdują się inne proste podstrony. Np strona rekrutacji, strona dla sponsorów etc.
data
layouts  // templatki z których budowane są różne typy stron
├── CNAME
├── _default
├── index.html //strona domowa
├── partials // folder z częściowymi templatkami (jak np stopka, czy nagłówek strony)
└── project // definicja wyglądu strony projektu
README.md
static //pliki statyczne, fonty, obrazki etc
├── css
├── fonts
├── images
└── js
```

### Zawartość danej strony

Każda strona jest tutaj reprezentowana jako plik `.md`, który wygląda w up[roszczeniu tak:

```md
---
title: "Sekcja druku 3D"
main_project_image: "/images/druk3d/wydruki.jpg"
archive_image: "/images/druk3d/wydruki.jpg"
main_site: false
short_description:
  "jakiś opis."
---

Tekst napisany w markdownie
```

Pierwsza połowa pliku to parametry druga to już sam tekst artykułu.  
Strona jest renderowana bazując na templatkach ([link do dokumentacji](https://gohugo.io/templates/introduction/)).