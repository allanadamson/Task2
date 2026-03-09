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

1. Klooni repositoorium: git clone [https://github.com/allanadamson/Task2.git]
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

### Kasutatud tööriist: Google Gemini

## Kasutamise ulatus ja viis

Tehisintellekti kasutati projekti arendusprotsessis tehnilise nõustaja ja abilisena järgmistes etappides:

TypeScripti tüübivigade lahendamine: Abi liideste (Interfaces) ja andmetüüpide vaheliste konfliktide silumisel, eriti toote lisamise vormi ja andmemudelite ühildamisel.

Struktuuri refaktoreerimine: Konsultatsioonid rakenduse üleviimisel konsoolipõhiselt väljundilt veebipõhisele (GUI) liidesele, sealhulgas abi korrektsete failiteede määramisel dist/ kataloogis.

Koodi optimeerimine: Toetus renderAll funktsiooni täiustamisel, et tagada andmete korrektne liikumine StoreAnalyticsService teenuse ja veebiliidese vahel.

Dokumentatsioon: Abi projekti README.md faili struktureerimisel ja vormistamisel.

## Üliõpilase panus

Rakenduse põhiloogika, andmemudelite struktuur (tooted, kategooriad, tarnijad), algne StoreAnalyticsService realisatsioon ning kasutajaliidese (HTML/Bootstrap) ülesehitus on üliõpilase loodud. Kogu tehisintellekti poolt pakutud kood ja soovitused on üliõpilase poolt läbi vaadatud, käsitsi integreeritud ja testitud, veendumaks, et lahendus vastab püstitatud ülesandele.
