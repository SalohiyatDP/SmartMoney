# SMC Academy Ultimate

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-Windows-lightgrey.svg)

**Professional Offline ICT/SMC Trading Education Platform**

100% Offline | No Internet Required | Desktop Application

---

## 🎯 Maqsad

SMC Academy Ultimate - bu Smart Money Concepts (SMC) va Inner Circle Trader (ICT) metodologiyasi bo'yicha noldan professional treyder darajasigacha o'rgatuvchi to'liq offline o'quv platformasi.

## ✨ Asosiy Xususiyatlar

- ✅ **100% Offline** - Internet talab qilinmaydi
- ✅ **Login/Registratsiya yo'q** - Darhol foydalanish mumkin
- ✅ **17 ta to'liq dars moduli** - Professional darajadagi ta'lim
- ✅ **Interaktiv simulyatorlar** - Amaliy mashqlar
- ✅ **Candlestick animatsiyalar** - Vizual ta'lim
- ✅ **Trading Playground** - Virtual savdo tajribasi
- ✅ **Test tizimi** - Bilimni tekshirish
- ✅ **Progress tracking** - O'qish jarayonini kuzatish
- ✅ **XAUUSD maxsus moduli** - Gold trading strategiyalari
- ✅ **PDF eksport** - Materiallarni saqlash
- ✅ **Sertifikat** - Kurs yakunida

## 📚 O'quv Modullari

1. **CHoCH** - Change of Character
2. **BOS** - Break of Structure
3. **Sell Momentum** - Sotish strategiyasi
4. **Buy Momentum** - Sotib olish strategiyasi
5. **Liquidity** - Likvidlik tushunchasi
6. **Liquidity Pool** - Likvidlik hovuzi
7. **Liquidity Grab** - Likvidlikni yig'ish
8. **Liquidity Sweep** - Likvidlikni supurish
9. **Institutional Orders** - Institutsional buyurtmalar
10. **Smart Money** - Aqlli pul kontsepti
11. **Order Block** - Buyurtma bloki
12. **Fair Value Gap (FVG)** - Adolatli qiymat bo'shlig'i
13. **Premium Zone** - Premium zonasi
14. **Discount Zone** - Chegirma zonasi
15. **Mitigation** - Yumshatish zonasi
16. **Repricing** - Qayta narxlash
17. **Market Structure** - Bozor strukturasi

## 🛠 Texnologiyalar

- **Electron** - Desktop application
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Vite** - Build tool
- **LocalStorage** - Data persistence

## 📦 O'rnatish

### Talablar

- Node.js 18+ 
- npm yoki yarn

### Tezkor Boshlash

```bash
# 1. Repository ni clone qiling
git clone https://github.com/SalohiyatDP/SmartMoney.git
cd SmartMoney

# 2. Dependencies o'rnating
npm install

# 3. Development rejimida ishga tushiring
npm run dev

# 4. Production build
npm run build

# 5. Windows .exe yaratish
npm run build:win
```

### Batafsil Yo'riqnomalar

- **Build Guide**: [docs/BUILD_GUIDE.md](docs/BUILD_GUIDE.md)
- **User Guide**: [docs/USER_GUIDE.md](docs/USER_GUIDE.md)

## 🚀 Ishga Tushirish

### Development Mode

```bash
npm run dev
```

Bu ikki jarayonni parallel ishga tushiradi:
- Vite dev server (port 5173)
- Electron app

### Production Build

```bash
# Web build
npm run build

# Windows executable
npm run build:win
```

Build fayllar `dist-electron` papkasida yaratiladi.

## 📱 Foydalanish

1. **Dashboard** - Progress va statistikani ko'rish
2. **Library** - Barcha darslar ro'yxati
3. **Lesson Viewer** - Dars o'qish
4. **Simulator** - Pattern topish mashqlari
5. **XAUUSD Module** - Gold trading strategiyalari
6. **Test System** - Bilimni tekshirish
7. **Playground** - Virtual trading
8. **Search** - Tezkor qidiruv
9. **Certificate** - Sertifikat olish

## 📊 Loyiha Strukturasi

```
SmartMoney/
├── electron/              # Electron main process
│   ├── main.js           # Main process
│   └── preload.js        # Preload script
├── src/
│   ├── components/       # React komponentlar
│   │   ├── Layout.tsx
│   │   ├── LessonCard.tsx
│   │   ├── ProgressBar.tsx
│   │   └── StatCard.tsx
│   ├── pages/            # Sahifalar
│   │   ├── Dashboard.tsx
│   │   ├── Library.tsx
│   │   ├── LessonViewer.tsx
│   │   ├── Simulator.tsx
│   │   ├── XAUUSDModule.tsx
│   │   ├── TestSystem.tsx
│   │   ├── Playground.tsx
│   │   ├── Search.tsx
│   │   └── Certificate.tsx
│   ├── store/            # State management
│   │   └── useStore.ts   # Zustand store
│   ├── data/             # Content
│   │   └── lessonContent.ts
│   ├── App.tsx           # Main app
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── docs/                 # Documentation
│   ├── BUILD_GUIDE.md
│   └── USER_GUIDE.md
├── public/               # Static fayllar
├── package.json
└── README.md
```

## 🎨 Dizayn

- **Dark Theme** - Professional trading platform ko'rinishi
- **Responsive** - Barcha ekran o'lchamlari uchun
- **TradingView Style** - Tanish interfeys
- **Smooth Animations** - Silliq o'tishlar

## 🔒 Offline Xususiyatlari

- Ma'lumotlar localStorage-da saqlanadi
- Internet kerak emas
- Serverga bog'liq emas
- Xavfsiz va maxfiy

## 🤝 Hissa Qo'shish

Pull request-lar xush kelibsiz! Katta o'zgarishlar uchun avval issue oching.

## 📝 Litsenziya

MIT License - batafsil ma'lumot uchun [LICENSE](LICENSE) faylini ko'ring.

## 👨‍💻 Muallif

**Smart Money Academy Team**

## 📞 Bog'lanish

- GitHub: [@SalohiyatDP](https://github.com/SalohiyatDP)

## 📸 Screenshots

### Dashboard
![Dashboard](https://via.placeholder.com/800x400/0a0e17/3b82f6?text=Dashboard+-+Progress+Tracking)

### Library
![Library](https://via.placeholder.com/800x400/0a0e17/10b981?text=Library+-+17+Lessons)

### Lesson Viewer
![Lesson](https://via.placeholder.com/800x400/0a0e17/f59e0b?text=Lesson+Viewer+-+Detailed+Content)

### Trading Playground
![Playground](https://via.placeholder.com/800x400/0a0e17/ef4444?text=Trading+Playground+-+Virtual+Trading)

## 🎯 Roadmap

### Version 1.1 (Planned)
- [ ] PDF export funksiyasi
- [ ] Data backup/restore
- [ ] Dark/Light theme toggle
- [ ] More trading pairs (BTC, EUR/USD)
- [ ] Advanced chart simulator

### Version 2.0 (Future)
- [ ] Video lessons integration
- [ ] Community features (offline)
- [ ] Advanced analytics
- [ ] Custom indicators
- [ ] Mobile version

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

### Development Setup

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR_USERNAME/SmartMoney.git

# Create a branch
git checkout -b feature/amazing-feature

# Make your changes
# Commit your changes
git commit -m 'Add amazing feature'

# Push to your fork
git push origin feature/amazing-feature

# Open a Pull Request
```

## 📄 Changelog

### v1.0.0 (Current)
- ✅ Initial release
- ✅ 17 complete lesson modules
- ✅ Interactive simulator
- ✅ Trading playground
- ✅ Test system
- ✅ XAUUSD module
- ✅ Search functionality
- ✅ Certificate system
- ✅ Progress tracking
- ✅ 100% offline functionality

## 🙏 Minnatdorchilik

- ICT metodologiyasi uchun
- Smart Money Concepts community
- Barcha o'quvchilar va foydalanuvchilar
- Open source community

## ⚖️ Disclaimer

**Muhim**: Bu faqat o'quv platformasi. Financial advice emas.

- Trading juda xavfli
- Kapitalingizni yo'qotishingiz mumkin
- Demo account-da sinab ko'ring
- Risk management qoidalariga amal qiling
- Professional maslahat oling

---

**Eslatma:** Bu o'quv platformasi. Real trading-da qo'llashdan oldin demo account-da sinab ko'ring va risk management qoidalariga amal qiling.

**Made with ❤️ for the SMC Trading Community**

