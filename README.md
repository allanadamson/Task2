# Projekti pealkiri
Store Inventory Management System (Task2)


## Kirjeldus

Rakendus mis haldab poe laoseisu andmeid. Rakendus on kirjutatud TypeScriptis ning pakub nii interaktiivset veebivaadet kui ka detailset analüütilist raportit brauseri konsoolis.

## Ülesande kirjeldus
Rakenduse eesmärk on hallata tooteid, kategooriaid ja tarnijaid. Süsteem arvutab automaatselt toodete saadavust erinevates ladudes, kuvab vastavaid staatusi ning võimaldab lisada uusi tooteid läbi dünaamilise vormi. Andmed säilitatakse brauseri mälus (LocalStorage), mis tähendab, et lisatud tooted jäävad alles ka pärast lehe värskendamist.


## Kasutatud tehnoloogiad

TypeScript – tüübikindel arendus.

HTML5 & CSS3 – kasutajaliides ja kujundus.

Bootstrap – tundlik disain (Responsive Design).

LocalStorage – andmete püsivus brauseris ilma eraldi andmebaasita.

## Juhend projekti k'ivitamiseks arvutis
Projekti käivitamiseks oma arvutis järgi neid samme:

1. Klooni repositoorium: git clone [siia-pane-oma-repo-link]
2. Paigalda vajalikud sõltvused: npm install
3. Kompileeri TypeScript JavaScriptiks:
Kuna brauser ei loe .ts faile otse, tuleb need esmalt kompileerida: npx tsc
See käsk tekitab dist/ kataloogi, kuhu ilmuvad valmis .js failid.
4. Ava rakendus:
Ava fail task2.html brauseris.
Soovitatav on kasutada VS Code Live Server laiendust, et tagada JavaScripti moodulite (ES Modules) korrektne laadimine.
5. Vaata konsooli:
Detailse inventuuriaruande nägemiseks ava brauseri arendustööriistad (F12 või Inspect -> Console).

## Projekti struktuur

src/ – TypeScripti lähtekood (main.ts, productAdd.ts, productList.ts).

models/ – Andmete struktuurid ja liidesed (Product.ts, Category.ts jne).

services/ – Äriloogika ja arvutused (StoreAnalyticsService.ts).

data/ – Algandmete failid.

dist/ – Kompileeritud kood, mida brauser kasutab.


## Juhend projekti avamiseks brauseris
Ava järgmine URL: https://allanadamson.github.io/Task2/src/task2/task2.html


# AI Usage Disclosure

## Tool used: Google Gemini

## Extent of usage
The AI was used as a technical assistant and debugging tool during the development of this project. Specifically, the AI assisted in:

Debugging TypeScript type errors: Resolving interface mismatches between the Product model and the data entry forms.

Architecture Refactoring: Assistance with transitioning from a Console-based (CLI) application to a Browser-based (GUI) application, ensuring correct file paths in the dist/ directory.

Code Optimization: Refining the renderAll function to ensure clean data flow between the StoreAnalyticsService and the DOM.

Documentation: Assisting in structuring the README.md file to meet professional standards.

## Human Contribution
The core business logic, the structure of the data models (Products, Categories, Suppliers), the initial implementation of the StoreAnalyticsService, and the overall UI layout (HTML/Bootstrap) were designed and implemented by the student. All code generated or suggested by the AI was reviewed, manually integrated, and tested by the student to ensure it met the task requirements.
