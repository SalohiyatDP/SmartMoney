# SMC Academy Ultimate - Build Guide

## 🛠 O'rnatish va Ishga Tushirish

### Talablar

- **Node.js**: 18.0.0 yoki yuqori
- **npm**: 9.0.0 yoki yuqori
- **Git**: 2.0.0 yoki yuqori

### 1. Repository-ni Clone Qilish

```bash
git clone https://github.com/SalohiyatDP/SmartMoney.git
cd SmartMoney
```

### 2. Dependencies O'rnatish

```bash
npm install
```

Bu quyidagi package-larni o'rnatadi:
- React 18.2
- TypeScript 5.3
- Electron 28
- Tailwind CSS 3.3
- Zustand 4.4
- React Router DOM 6.20
- va boshqalar...

### 3. Development Mode

Development rejimda ishga tushirish:

```bash
npm run dev
```

Bu ikkita jarayonni parallel ishga tushiradi:
1. **Vite dev server** - http://localhost:5173
2. **Electron app** - Desktop window

Dev server tayyor bo'lgach, Electron avtomatik ochiladi.

#### Development Mode Xususiyatlari:
- ✅ Hot Module Replacement (HMR)
- ✅ Dev Tools ochiq
- ✅ Fast Refresh
- ✅ Error overlay
- ✅ Source maps

### 4. Production Build

Production uchun build qilish:

```bash
npm run build
```

Bu quyidagilarni bajaradi:
1. TypeScript type checking
2. Vite optimized build
3. Output: `dist/` papka

### 5. Windows Executable Yaratish

Windows uchun .exe fayl yaratish:

```bash
npm run build:win
```

Bu quyidagilarni yaratadi:
- **NSIS Installer** - setup.exe
- **Portable Version** - unpacked folder
- Output: `dist-electron/` papka

#### Build Output:

```
dist-electron/
├── win-unpacked/          # Portable version
│   └── SMC Academy Ultimate.exe
├── SMC Academy Ultimate Setup.exe  # Installer
└── builder-debug.yml
```

## 📦 Package Scripts

| Script | Ta'rif |
|--------|--------|
| `npm run dev` | Development mode (Vite + Electron) |
| `npm run dev:react` | Faqat Vite dev server |
| `npm run dev:electron` | Faqat Electron |
| `npm run build` | Production build (web) |
| `npm run build:electron` | Electron build |
| `npm run build:win` | Windows .exe yaratish |
| `npm run preview` | Build preview |
| `npm run type-check` | TypeScript type checking |

## 🔧 Build Konfiguratsiyasi

### Electron Builder Settings

`package.json` da:

```json
{
  "build": {
    "appId": "com.smcacademy.ultimate",
    "productName": "SMC Academy Ultimate",
    "directories": {
      "output": "dist-electron"
    },
    "files": [
      "dist/**/*",
      "electron/**/*"
    ],
    "win": {
      "target": ["nsis"],
      "icon": "public/icon.ico"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true
    }
  }
}
```

### Vite Configuration

Key settings:
- **Base**: `./` (relative paths)
- **Output**: `dist/`
- **Assets**: `assets/`
- **Port**: 5173

## 🐛 Troubleshooting

### Issue 1: npm install fails

**Solution:**
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue 2: Electron window bo'sh

**Solution:**
```bash
# Vite dev server ishlaganligini tekshiring
curl http://localhost:5173

# Port band bo'lsa
PORT=5174 npm run dev:react
```

### Issue 3: Build fails

**Solution:**
```bash
# Type errors ni tekshiring
npm run type-check

# Dependencies ni yangilang
npm update

# Clean build
rm -rf dist dist-electron
npm run build:win
```

### Issue 4: Windows-da icon ko'rinmayapti

**Solution:**
- `public/icon.ico` faylini yarating
- Minimum 256x256 px
- .ico format (PNG emas!)

## 📱 Platform-specific Builds

### Windows

```bash
npm run build:win
```

Output: `.exe` installer va portable version

### macOS (future)

```bash
npm run build:mac
```

Output: `.dmg` installer

### Linux (future)

```bash
npm run build:linux
```

Output: `.AppImage` yoki `.deb`

## 🚀 Optimization Tips

### 1. Build Size Optimization

```bash
# Analyze bundle size
npm run build -- --mode=analyze
```

### 2. Performance

- Lazy loading for routes
- Code splitting
- Image optimization
- Tree shaking (automatic)

### 3. Caching

- Service Worker (optional)
- localStorage for user data
- IndexedDB for large data

## 📊 Build Size

Taxminiy build sizes:

| Type | Size |
|------|------|
| Web Build (dist/) | ~2 MB |
| Windows Installer | ~80 MB |
| Portable (unpacked) | ~150 MB |

## ✅ Final Checklist

Build qilishdan oldin:

- [ ] TypeScript xatolar yo'q
- [ ] All tests pass (agar mavjud bo'lsa)
- [ ] Version number yangilangan (package.json)
- [ ] README.md yangilangan
- [ ] Icon files mavjud
- [ ] Environment variables to'g'ri
- [ ] Git commit qilingan

## 🎯 Next Steps

Build muvaffaqiyatli bo'lgandan keyin:

1. **Test qiling**: Windows'da ishga tushiring
2. **Distribution**: Installer-ni tarqating
3. **Updates**: Auto-update mechanism (future)
4. **Monitoring**: Error tracking (optional)

## 📞 Support

Issues: https://github.com/SalohiyatDP/SmartMoney/issues

---

**Eslatma**: Bu offline ilova - internet talab qilinmaydi!
