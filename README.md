# Eliza Beauty Salon

A kiválasztott, légies weboldal statikus forrása. A négy főoldal, a köszönőoldal és az adatkezelési tájékoztató a `dist/` mappában található. A Netlify a `netlify.toml` alapján ezt a mappát teszi közzé.

## Állapot

- Az időpontkérő űrlap Netlify Formsot használ. A Netlify-oldalon engedélyezni kell a form detectiont, majd az új verziót telepíteni. A Forms → Submission notifications részen külön be kell állítani a hello.elizabeauty@gmail.com címre küldött értesítést; Netlify címmegerősítést kérhet. Az éles próbaküldés és az e-mail beérkezése még nincs ellenőrizve.
- Az Arcápolási Kisokos feliratkozó űrlap még nincs hírlevél-szolgáltatóhoz kapcsolva.
- Az időpontkérő űrlapok kötelező adatkezelési jelölőnégyzetet és részletes, de még nem végleges adatkezelési tájékoztatót tartalmaznak. Közzététel előtt jogilag ellenőrizni kell az adatkezelő kötelező azonosító adatait és az éles Netlify-beállításokat. A meg nem valósult időpontkérések legfeljebb egy évig őrizhetők meg.

## Mentési rend

Minden elfogadott tartalmi vagy képi módosítás után külön, beszédes Git-commit készül, amelyet feltöltünk a privát GitHub-tárolóba.
