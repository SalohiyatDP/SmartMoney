export interface LessonContent {
  id: string
  title: string
  shortDescription: string
  professionalDefinition: string
  simpleDefinition: string
  innerLogic: string
  smartMoneyLogic: string
  retailMistakes: string[]
  entryStrategy: string
  stopLoss: string
  takeProfit: string
  riskManagement: string
  keyPoints: string[]
  examples: string[]
}

export const lessonData: Record<string, LessonContent> = {
  'choch': {
    id: 'choch',
    title: 'CHoCH (Change of Character)',
    shortDescription: 'Market struktura o\'zgarishi - trend o\'zgarishi belgisi',
    professionalDefinition: `CHoCH (Change of Character) - bu bozor strukturasining o'zgarishi bo'lib, 
    mavjud trend yo'nalishining zaiflanishi va potensial teskari yo'nalishga o'tish signalidir. 
    Bu Smart Money harakatining muhim ko'rsatkichi hisoblanadi.`,
    simpleDefinition: `CHoCH - bu trend o'zgarayotganini bildiruvchi signal. 
    Masalan, narx yuqoriga ketayotgan bo'lsa va birdan pastga burilsa, 
    bu trend o'zgarayotganini bildiradi. Xuddi yo'ldagi svetofor kabi - 
    yashil chiroq qizilga o'zgarganda harakatni to'xtatish kerak.`,
    innerLogic: `CHoCH shakllanishi:
    
1. Mavjud trend davom etmoqda (HH va HL yoki LL va LH)
2. Narx oxirgi swing low/high-ni buzadi
3. Struktura o'zgaradi - bu CHoCH hisoblanadi
4. Yangi yo'nalishda harakat boshlanadi

CHoCH vaqtida:
- Smart Money pozitsiyalarini yopmoqda
- Yoki teskari yo'nalishda yangi pozitsiyalar ochmoqda
- Retail treyderlar hali eski trendda davom etishga ishonmoqda`,

    smartMoneyLogic: `Smart Money CHoCH-dan qanday foydalanadi:

1. ACCUMULATION/DISTRIBUTION fazasi
   - Smart Money katta pozitsiyalar to'playapti
   - Retail hali eski trend davom etadi deb o'ylaydi

2. CHoCH SIGNAL
   - Struktura buziladi
   - Smart Money harakati boshlanadi
   - Liquidity grab yuz beradi

3. MANIPULATION
   - False breakout yaratiladi
   - Retail stop loss-larga tegadi
   - Smart Money yana pozitsiya qo'shadi

4. EXPANSION
   - Yangi trend boshlanadi
   - Smart Money profit qiladi`,
    retailMistakes: [
      'CHoCH-ni trend davomi deb o\'ylash',
      'Birinchi CHoCH-da darhol kirish (false signal bo\'lishi mumkin)',
      'Confirmation kutmasdan savdo qilish',
      'Stop Loss-ni juda yaqin qo\'yish',
      'Multiple timeframe tahlil qilmaslik',
      'Liquidity zonalarini e\'tiborsiz qoldirish',
      'Market structure-ni to\'liq tushunmaslik'
    ],
    entryStrategy: `CHoCH Entry Strategiyasi:

1. CHoCH-ni aniqlang
   - Swing low/high buzilishi
   - Struktura o\'zgarishi tasdiqlanishi

2. Retracement kuting
   - CHoCH sodir bo\'lgandan keyin
   - Narx OB yoki FVG-ga qaytadi
   - Bu entry imkoniyati

3. Confirmation signallar:
   - Lower timeframe BOS
   - FVG shakllanishi
   - Order Block faollashuvi
   - Liquidity grab

4. Entry nuqtasi:
   - OB zonasida
   - FVG o\'rtasida
   - Discount zone-da (buy uchun)
   - Premium zone-da (sell uchun)`,

    stopLoss: `Stop Loss Joylashtirish:

1. Conservative SL:
   - CHoCH nuqtasidan 2-5 pips tashqarida
   - Order Block-ning narigi tomonida
   - Swing high/low ortida

2. Aggressive SL:
   - Order Block ichida
   - FVG-ning o\'rtasida
   - Kichikroq risk uchun

3. Structure-based SL:
   - Oxirgi swing nuqtadan narida
   - Key liquidity zonadan tashqarida
   - Market structure-ga asoslangan

Qoidalar:
- SL hech qachon CHoCH nuqtasida bo\'lmasin
- Structure invalidation nuqtasida bo\'lishi kerak
- Risk-reward ratio minimal 1:2 bo\'lishi kerak`,
    takeProfit: `Take Profit Strategiyasi:

1. Birinchi TP (50% pozitsiya):
   - 1:2 Risk-Reward
   - Yaqin liquidity zona
   - Psychological level

2. Ikkinchi TP (30% pozitsiya):
   - 1:3 yoki 1:4 RR
   - Major liquidity pool
   - Key structure level

3. Uchinchi TP (20% pozitsiya):
   - 1:5 yoki undan ko\'p
   - Daily/Weekly level
   - Major swing point

Trailing Stop:
- Birinchi TP-dan keyin SL-ni break-even-ga
- Har bir TP-da SL-ni keyingi OB-ga ko\'chirish
- Structure o\'zgarsa, erta chiqish`,

    riskManagement: `Risk Management Qoidalari:

1. Position Sizing:
   - Kapitalning 1-2% dan ortiq risk qilmang
   - Multiple entry bo\'lsa, umumiy risk 2%
   - Account size-ga mos lot hajmi

2. R:R Ratio:
   - Minimal 1:2 (tavsiya etilgan 1:3)
   - High probability setup-larda 1:2 qabul qilinadi
   - Low probability setup-larda 1:5 kerak

3. Daily/Weekly Limits:
   - Kunlik maksimal 3 ta trade
   - Kunlik 6% dan ortiq yo\'qotish bo\'lsa to\'xtatish
   - Haftasiga 10-15 ta trade

4. Emotional Control:
   - FOMO-dan qoching
   - Revenge trading qilmang
   - Plan-ga amal qiling
   - Journal yuriting`,
    keyPoints: [
      'CHoCH - bu trend o\'zgarishining birinchi belgisi',
      'Har doim confirmation kuting (lower TF BOS)',
      'Retracement-ni entry imkoniyati sifatida ishlating',
      'Multiple timeframe analiz muhim',
      'Liquidity zonalari bilan birga ishlang',
      'Risk management-ni hech qachon unutmang',
      'False CHoCH lar mavjud - ehtiyot bo\'ling',
      'Smart Money manipulatsiyasini tushunish kerak'
    ],
    examples: [
      'EUR/USD 4H: Bullish trend CHoCH - swing low buzildi, retracement OB-ga, sell entry',
      'GOLD 1H: Bearish trend CHoCH - swing high buzildi, pullback FVG-ga, buy entry',
      'GBP/USD 15M: Multiple CHoCH - faqat HTF CHoCH-ga entry, LTF manipulation',
      'USD/JPY Daily: CHoCH + Liquidity Sweep - eng kuchli signal, major reversal'
    ]
  },

  'bos': {
    id: 'bos',
    title: 'BOS (Break of Structure)',
    shortDescription: 'Mavjud trend davomining kuchli tasdiqi',

    professionalDefinition: `BOS (Break of Structure) - bu mavjud trendning davom etayotganini 
    tasdiqlovchi struktura sinishi. Bu trend kuchayganini va yangi impulsiv harakatning 
    boshlanganini bildiradi.`,
    simpleDefinition: `BOS - bu trend davom etayotganini bildiruvchi signal. 
    Masalan, narx yuqoriga ketayotgan bo'lsa va yana yangi yuqori nuqtani sindirib o'tsa, 
    bu trend kuchayganini bildiradi. Bu poyezd stansiyadan yo'lga chiqishga o'xshaydi - 
    harakat davom etmoqda va kuchaymoqda.`,
    innerLogic: `BOS shakllanishi:

1. Mavjud trend aniq (uptrend yoki downtrend)
2. Narx oxirgi swing high/low-ni buzadi
3. Bu struktura sinishi - BOS
4. Trend kuchayadi va davom etadi

BOS vaqtida:
- Smart Money o'z pozitsiyalariga qo'shmoqda
- Institutional orders kirayapti
- Retail ham trendni ko'rib kirayapti
- Momentum kuchli`,
    smartMoneyLogic: `Smart Money BOS-dan qanday foydalanadi:

1. ACCUMULATION davom etmoqda
   - Pozitsiyalarga qo'shish
   - Trend continuation setup

2. BOS CONFIRMATION
   - Trend strength tasdiqlandi
   - Entry signal

3. PULLBACK ENTRY
   - BOS-dan keyin retracement
   - OB yoki FVG-ga qaytish
   - Optimal entry

4. CONTINUATION
   - Kuchli trend davomi
   - Keyingi targets ga harakat`,
    retailMistakes: [
      'BOS-ni trend tugashi deb o\'ylash',
      'Pullback-ni kutmasdan darhol kirish',
      'Structure break-ni confirmation-siz trade qilish',
      'Higher timeframe bias-ni e\'tiborsiz qoldirish',
      'False break-larni haqiqiy BOS deb o\'ylash',
      'Overtrading - har bir kichik break-da kirish',
      'Risk management-ni unutish'
    ],
    entryStrategy: `BOS Entry Strategiyasi:

1. BOS-ni aniqlang
   - Clear structure break
   - HTF bias bilan mos kelishi
   - Volume confirmation

2. Pullback kuting
   - BOS-dan keyin narx qaytadi
   - OB yoki FVG-ga retest
   - Bu eng yaxshi entry

3. LTF Confirmation:
   - 15M yoki 5M-da kirish
   - Mini BOS yoki CHoCH
   - Entry trigger

4. Entry Zone:
   - Order Block ichida
   - FVG zonasida
   - Fibonacci 0.5-0.618 level`,
    stopLoss: `Stop Loss Joylashtirish:

1. Conservative:
   - Structure invalidation ortida
   - Major swing nuqta ortida
   - 20-30 pips

2. Aggressive:
   - Order Block narigi tomonida
   - FVG tashqarisida
   - 10-15 pips

3. BOS-based:
   - BOS nuqtasidan pastda/tepada
   - Structure-ga asoslangan
   - Logical placement`,
    takeProfit: `Take Profit Targets:

1. TP1 (40%):
   - Keyingi minor structure
   - 1:2 RR
   - Quick profit

2. TP2 (40%):
   - Major liquidity pool
   - 1:4 RR
   - Main target

3. TP3 (20%):
   - Daily/Weekly high/low
   - 1:6+ RR
   - Runner

Trailing:
- TP1 dan keyin BE-ga
- Har BOS-da SL-ni ko'tarish`,
    riskManagement: `Risk Management:

1. Position Size:
   - Account-ning 1-2%
   - Multiple entry bo'lsa umumiy 2%
   - Lot calculation

2. Risk:Reward:
   - Minimal 1:2
   - Ideal 1:3 yoki 1:4
   - BOS-da yuqori RR mumkin

3. Trade Management:
   - Partial close strategy
   - Trailing stop
   - Break-even rule

4. Limits:
   - Kunlik 3 ta trade
   - Haftasiga 2% maksimal risk
   - Drawdown limit 10%`,
    keyPoints: [
      'BOS - trend continuation signali',
      'HTF bias bilan mos kelishi kerak',
      'Pullback-dan entry optimal',
      'Structure-based SL eng yaxshi',
      'Multiple TP strategy ishlatish',
      'False BOS-dan ehtiyot bo\'lish',
      'Volume confirmation muhim',
      'Risk management - birinchi o\'rinda'
    ],
    examples: [
      'EUR/USD H4: Bullish BOS - swing high sinildi, pullback 61.8% Fib-ga, buy entry',
      'GOLD 1H: Bearish BOS - swing low sinildi, retest OB-ga, sell setup',
      'GBP/JPY 15M: Multiple BOS - har birida qo\'shish, trailing stop',
      'BTC/USD Daily: Strong BOS + volume - major trend change'
    ]
  }
}
