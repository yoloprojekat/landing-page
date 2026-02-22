<div align="center">

# 🌐 YOLO Projekat - Veb Sajt

### _Zvanična Prezentacija i Tehnička Dokumentacija_

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

---

<p align="center">
  <b>Zvanična prezentacija YOLO Projekta</b> služi kao centralno, interaktivno mesto za dokumentaciju ekosistema. 
  <br>Sajt objedinjuje specifikacije za Windows, Android, Linux i Python klijente namenjene upravljanju vozilom.
</p>

</div>

## 🏗️ Vanilla Arhitektura (Zero-Dependency)

Ova verzija sajta je dizajnirana sa apsolutnim fokusom na performanse, prenosivost i lakoću održavanja. Namerno smo **izbegli korišćenje JS framework-a** (kao što je Svelte/React) iz sledećih razloga:

- **Sirove performanse:** Nema Node.js _build step_-a, nema JS hidratacije. _Time to Interactive_ (TTI) je trenutan.
- **Edukativna pristupačnost:** Budući učenici i saradnici mogu modifikovati sajt poznavanjem osnovnih web tehnologija.
- **Prenosivost:** Kompletan sajt se može pokrenuti lokalno otvaranjem `index.html` fajla u bilo kom browseru, bez potrebe za lokalnim serverom ($O(1)$ kompleksnost pokretanja).

---

## 🚀 Pregled Ekosistema i Mrežne Arhitekture

Sajt služi kao baza za podsisteme YOLO projekta. **Tehnička napomena:** Projekat je migrirao sa WebSockets (TCP) na hibridni model komunikacije radi smanjenja latencije u realnom vremenu:

### 📱 Mobilni i Web Klijenti

- **UDP Protokol:** Koristi se za prenos telemetrije i komandi za kretanje ($O(1)$ latencija, idealno za drop-packet toleranciju kod kontrole motora).
- **WebRTC:** Implementiran za peer-to-peer prenos video strima (sa YOLO anotacijama) direktno sa Raspberry Pi kamere, uz minimalno kašnjenje.

### 🖥️ Windows & Linux Desktop

- **WinUI 3 (C#):** Profesionalni komandni panel sa ONNX Runtime inferencom.
- **GTK4 (Python):** Native GNOME aplikacija optimizovana za nisku latenciju na Linux sistemima.

---

## 🛠 Tehnološki Stack

| Komponenta        | Tehnologija          | Uloga                                                              |
| :---------------- | :------------------- | :----------------------------------------------------------------- |
| **Markup**        | **HTML5**            | Semantička struktura sajta                                         |
| **Styling**       | **Vanilla CSS**      | Prilagođeni "Glassmorphism" dizajn, CSS varijable i medijski upiti |
| **Logika**        | **Vanilla JS**       | DOM manipulacija, teme i _IntersectionObserver_ animacije          |
| **Deployment**    | **Cloudflare Pages** | Globalna Edge mreža i Custom Domain routing                        |
| **Core Hardware** | **Raspberry Pi 5**   | Glavna procesorska jedinica YOLO vozila                            |

---

## 🌐 Hostovanje i Pokretanje

- **Produkcija (Live):** Sajt se hostuje preko **Cloudflare Pages** infrastrukture koja omogućava globalni _Edge_ kešing, automatsku optimizaciju resursa i ugrađenu DDoS zaštitu. Projekat je dostupan na zvaničnom domenu: **[yoloprojekat.com](https://yoloprojekat.com)**.
- **Lokalni razvoj:** Samo klonirajte repozitorijum i otvorite `index.html` u browseru. Nikakva instalacija paketa (`npm install`) nije potrebna.

---

<div align="center">

**Autor:** Danilo Stoletović • **Mentor:** Dejan Batanjac  
**ETŠ „Nikola Tesla“ Niš • 2026**

</div>
