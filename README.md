<div align="center">

# 🌐 Pametno Vozilo - Centralni Hub Ekosistema

### _Zvanična Prezentacija i Tehnička Dokumentacija celokupne mreže_

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Docker](https://img.shields.io/badge/Infrastructure-Docker-2496ed?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

---

<p align="center">
  <b>Pametno Vozilo</b> je modularni AI ekosistem baziran na Raspberry Pi 5 platformi. 
  <br>Ovaj repozitorijum služi kao krovna dokumentacija i ulazna tačka za sve komponente sistema: od Edge AI obrade do višeplatformskih klijenata.
</p>

</div>

## 🏗️ Arhitektura Ekosistema

Projekat je podeljen na specijalizovane module radi lakšeg održavanja i skalabilnosti:

### ⚙️ Core & Infrastruktura
* **[rpi-server](https://github.com/yoloprojekat/rpi-server):** Glavni Dockerizovan Python backend. Upravlja hardverom, **YOLOv26** detekcijom i HTTP MJPEG strimovanjem.
* **[smart-network](https://github.com/yoloprojekat/smart-network):** Osigurava 100% dostupnost vozila. Automatski konfiguriše hotspot u nedostatku eksterne mreže.
* **[model-pipeline](https://github.com/yoloprojekat/model-pipeline):** Optimizovan proces konverzije YOLO modela u TFLite i ONNX formate za hardverski akcelerisanu inferencu.

### 📱 Klijentska Rešenja (Live)
* **[android-client](https://github.com/yoloprojekat/android-client):** Primarna kontrolna stanica građena u Jetpack Compose-u (Kotlin). OCR navigacija i telemetrija u realnom vremenu.
* **[web-dashboard](https://github.com/yoloprojekat/web-dashboard):** Next.js & React kontrolna tabla za udaljeni monitoring putem Web-a.
* **[python-desktop](https://github.com/yoloprojekat/python-desktop):** Napredna Python aplikacija za asinhronu kontrolu i AI analitiku.

### 🏛️ Legacy Moduli (Arhiva)
* **[rpi-server-legacy](https://github.com/yoloprojekat/rpi-server-legacy):** Rana verzija backenda zasnovana na Systemd servisima i WebSockets protokolu.
* **[windows-client-legacy](https://github.com/yoloprojekat/windows-client-legacy)** Originalna WinUI 3 aplikacija sa ONNX Runtime integracijom.
* **[linux-client](https://github.com/yoloprojekat/linux-client)** Native GTK4 klijent za Linux sisteme.
* **[landing-page-legacy](https://github.com/yoloprojekat/landing-page-legacy)** Prethodna verzija sajta rađena u Svelte framework-u.

---

## 🛠 Tehnološki Stack

| Segment | Tehnologije |
| :--- | :--- |
| **Edge AI** | **YOLOv26**, ONNX Runtime, TFLite, OpenCV |
| **Backend** | Python 3.11, Docker, FastAPI, UDP Sockets |
| **Frontend** | Vanilla JS (Main Site), Next.js, Jetpack Compose |
| **Hardware** | Raspberry Pi 5, L298N, PiCamera v2 |

---

## 🚀 Brzi Start za Programere

Ovaj projekat promoviše **Zero-Dependency** pristup za klijente i **Docker-First** pristup za server.

1.  **Za Veb:** Samo otvorite `index.html` u `landing-page` repozitorijumu (nema `npm install`).
2.  **Za Server:** Pokrenite `docker-compose up` unutar `rpi-server` modula na vašem Pi 5 uređaju.
3.  **Za Android:** Importujte `android-client` u Android Studio (zahteva Android 15 SDK i 16KB page alignment podršku).

---

<div align="center">

**Autor:** Danilo Stoletović • **Mentor:** Dejan Batanjac  
**ETŠ „Nikola Tesla“ Niš • 2026**

</div>