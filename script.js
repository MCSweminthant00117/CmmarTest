let currentLang = 'EN';

const translations = {
    EN: {
        heroTitle: "Optimize Your PUBG Experience",
        heroDesc: "The most advanced GFX tool for PUBG Mobile. Unlock 90 FPS and HDR graphics.",
        mainBtn: "Download GfxTool",
        cardGfx: "GfxTool Versions",
        cardPubg: "PUBG Original APK + OBB"
    },
    MM: {
        heroTitle: "PUBG အတွေ့အကြုံကို မြှင့်တင်ပါ",
        heroDesc: "အဆင့်မြင့်ဆုံး PUBG GFX Tool ဖြစ်ပါသည်။ 90 FPS နှင့် HDR ဂရပ်ဖစ်များကို အသုံးပြုနိုင်ပါသည်။",
        mainBtn: "GfxTool ဒေါင်းလုဒ်လုပ်ရန်",
        cardGfx: "GfxTool ဗားရှင်းများ",
        cardPubg: "PUBG မူရင်း APK + OBB"
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'EN' ? 'MM' : 'EN';
    document.getElementById('current-lang').innerText = currentLang;
    
    // Update Text
    const langData = translations[currentLang];
    document.getElementById('hero-title').innerText = langData.heroTitle;
    document.getElementById('hero-desc').innerText = langData.heroDesc;
    document.getElementById('btn-main-dl').innerText = langData.mainBtn;
    document.getElementById('card-gfx-title').innerText = langData.cardGfx;
    document.getElementById('card-pubg-title').innerText = langData.cardPubg;
}
