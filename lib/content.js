// Course content. Each word: [term, meaning, pronunciation?]
// For English the "meaning" is a plain-English explanation of when to use the phrase.

const lesson = (id, title, blurb, rows) => ({
  id,
  title,
  blurb,
  words: rows.map(([term, meaning, pron]) => ({ term, meaning, pron: pron || null })),
});

export const LANGUAGES = [
  {
    id: "english", name: "English", flag: "/assets/English.png", speech: "en-US", color: "#524fd5",
    lessons: [
      lesson("greetings", "Greetings", "Say hello and goodbye politely.", [
        ["Good morning", "A greeting used before noon"],
        ["How are you?", "A polite way to ask about someone's wellbeing"],
        ["Nice to meet you", "Said when meeting someone for the first time"],
        ["Thank you", "Used to show gratitude"],
        ["You're welcome", "A reply when someone thanks you"],
        ["See you later", "An informal way to say goodbye"],
      ]),
      lesson("essentials", "Everyday essentials", "Phrases that get you through the day.", [
        ["Excuse me", "Used to politely get someone's attention"],
        ["Could you repeat that?", "Asking someone to say something again"],
        ["How much is this?", "Asking the price of something"],
        ["Where is the restroom?", "Asking where the toilet is"],
        ["I'd like a coffee, please", "A polite way to order a drink"],
        ["I don't understand", "Telling someone you did not follow what they said"],
      ]),
    ],
  },
  {
    id: "spanish", name: "Spanish", flag: "/assets/spanish.png", speech: "es-ES", color: "#e5484d",
    lessons: [
      lesson("greetings", "Greetings", "Say hello and goodbye politely.", [
        ["Hola", "Hello", "OH-lah"],
        ["Buenos días", "Good morning", "BWEH-nohs DEE-ahs"],
        ["Buenas noches", "Good night", "BWEH-nahs NOH-chehs"],
        ["Gracias", "Thank you", "GRAH-see-ahs"],
        ["Por favor", "Please", "por fah-VOR"],
        ["Adiós", "Goodbye", "ah-dee-OHS"],
      ]),
      lesson("essentials", "Everyday essentials", "Phrases that get you through the day.", [
        ["¿Cómo estás?", "How are you?", "KOH-moh ehs-TAHS"],
        ["Me llamo…", "My name is…", "meh YAH-moh"],
        ["Lo siento", "I'm sorry", "loh see-EHN-toh"],
        ["¿Cuánto cuesta?", "How much does it cost?", "KWAN-toh KWEHS-tah"],
        ["No entiendo", "I don't understand", "noh ehn-tee-EHN-doh"],
        ["¿Dónde está el baño?", "Where is the bathroom?", "DOHN-deh ehs-TAH el BAH-nyoh"],
      ]),
    ],
  },
  {
    id: "french", name: "French", flag: "/assets/france.png", speech: "fr-FR", color: "#2f6fed",
    lessons: [
      lesson("greetings", "Greetings", "Say hello and goodbye politely.", [
        ["Bonjour", "Hello / Good day", "bon-ZHOOR"],
        ["Bonsoir", "Good evening", "bon-SWAHR"],
        ["Merci", "Thank you", "mehr-SEE"],
        ["S'il vous plaît", "Please", "seel voo PLEH"],
        ["Au revoir", "Goodbye", "oh ruh-VWAHR"],
        ["Excusez-moi", "Excuse me", "ex-kew-zay MWAH"],
      ]),
      lesson("essentials", "Everyday essentials", "Phrases that get you through the day.", [
        ["Comment allez-vous ?", "How are you? (formal)", "koh-mohn tah-lay VOO"],
        ["Je m'appelle…", "My name is…", "zhuh mah-PEL"],
        ["Enchanté", "Nice to meet you", "ahn-shahn-TAY"],
        ["Je ne comprends pas", "I don't understand", "zhuh nuh kom-PRAHN pah"],
        ["Combien ça coûte ?", "How much does it cost?", "kom-BYAN sah KOOT"],
        ["Où sont les toilettes ?", "Where is the bathroom?", "oo sohn lay twah-LET"],
      ]),
    ],
  },
  {
    id: "german", name: "German", flag: "/assets/germany.png", speech: "de-DE", color: "#d98e04",
    lessons: [
      lesson("greetings", "Greetings", "Say hello and goodbye politely.", [
        ["Hallo", "Hello", "HAH-loh"],
        ["Guten Morgen", "Good morning", "GOO-ten MOR-gen"],
        ["Gute Nacht", "Good night", "GOO-teh NAHKHT"],
        ["Danke", "Thank you", "DAHN-keh"],
        ["Bitte", "Please / You're welcome", "BIT-teh"],
        ["Auf Wiedersehen", "Goodbye", "owf VEE-der-zayn"],
      ]),
      lesson("essentials", "Everyday essentials", "Phrases that get you through the day.", [
        ["Wie geht's?", "How are you?", "vee GAYTS"],
        ["Ich heiße…", "My name is…", "ikh HY-seh"],
        ["Entschuldigung", "Excuse me / Sorry", "ent-SHOOL-di-goong"],
        ["Ich verstehe nicht", "I don't understand", "ikh fer-SHTAY-eh nikht"],
        ["Wie viel kostet das?", "How much does this cost?", "vee feel KOS-tet dahs"],
        ["Wo ist die Toilette?", "Where is the toilet?", "voh ist dee toy-LET-teh"],
      ]),
    ],
  },
  {
    id: "italian", name: "Italian", flag: "/assets/Italy.png", speech: "it-IT", color: "#18a058",
    lessons: [
      lesson("greetings", "Greetings", "Say hello and goodbye politely.", [
        ["Ciao", "Hi / Bye (informal)", "chow"],
        ["Buongiorno", "Good morning", "bwon-JOR-noh"],
        ["Buonanotte", "Good night", "bwoh-nah-NOT-teh"],
        ["Grazie", "Thank you", "GRAH-tsee-eh"],
        ["Per favore", "Please", "pehr fah-VOH-reh"],
        ["Arrivederci", "Goodbye", "ah-ree-veh-DEHR-chee"],
      ]),
      lesson("essentials", "Everyday essentials", "Phrases that get you through the day.", [
        ["Come stai?", "How are you? (informal)", "KOH-meh STY"],
        ["Mi chiamo…", "My name is…", "mee KYAH-moh"],
        ["Mi dispiace", "I'm sorry", "mee dee-SPYAH-cheh"],
        ["Quanto costa?", "How much does it cost?", "KWAN-toh KOS-tah"],
        ["Non capisco", "I don't understand", "non kah-PEE-skoh"],
        ["Dov'è il bagno?", "Where is the bathroom?", "doh-VEH eel BAH-nyoh"],
      ]),
    ],
  },
  {
    id: "portuguese", name: "Portuguese", flag: "/assets/portugese.png", speech: "pt-BR", color: "#0e9f6e",
    lessons: [
      lesson("greetings", "Greetings", "Say hello and goodbye politely.", [
        ["Olá", "Hello", "oh-LAH"],
        ["Bom dia", "Good morning", "bohm JEE-ah"],
        ["Boa noite", "Good night", "BOH-ah NOY-chee"],
        ["Obrigado / Obrigada", "Thank you (m / f)", "oh-bree-GAH-doo / -dah"],
        ["Por favor", "Please", "poor fah-VOR"],
        ["Tchau", "Bye", "chow"],
      ]),
      lesson("essentials", "Everyday essentials", "Phrases that get you through the day.", [
        ["Como vai você?", "How are you?", "KOH-moo vy voh-SEH"],
        ["Meu nome é…", "My name is…", "meh-oo NOH-mee eh"],
        ["Desculpe", "Sorry / Excuse me", "dehs-KOOL-pee"],
        ["Quanto custa?", "How much does it cost?", "KWAN-too KOOS-tah"],
        ["Não entendo", "I don't understand", "now ehn-TEN-doo"],
        ["Onde fica o banheiro?", "Where is the bathroom?", "ON-jee FEE-kah oo bah-NYAY-roo"],
      ]),
    ],
  },
  {
    id: "korean", name: "Korean", flag: "/assets/south-korea.png", speech: "ko-KR", color: "#7c4dff",
    lessons: [
      lesson("greetings", "Greetings", "Say hello and goodbye politely.", [
        ["안녕하세요", "Hello", "an-nyeong-ha-se-yo"],
        ["안녕히 가세요", "Goodbye (to someone leaving)", "an-nyeong-hi ga-se-yo"],
        ["감사합니다", "Thank you", "gam-sa-ham-ni-da"],
        ["네", "Yes", "ne"],
        ["아니요", "No", "a-ni-yo"],
        ["죄송합니다", "I'm sorry", "joe-song-ham-ni-da"],
      ]),
      lesson("essentials", "Everyday essentials", "Phrases that get you through the day.", [
        ["만나서 반갑습니다", "Nice to meet you", "man-na-seo ban-gap-seum-ni-da"],
        ["제 이름은 … 입니다", "My name is …", "je i-reum-eun … im-ni-da"],
        ["얼마예요?", "How much is it?", "eol-ma-ye-yo"],
        ["모르겠어요", "I don't know / I don't understand", "mo-reu-ge-sseo-yo"],
        ["화장실이 어디예요?", "Where is the bathroom?", "hwa-jang-sil-i eo-di-ye-yo"],
        ["잘 먹겠습니다", "I will eat well (said before a meal)", "jal meok-get-seum-ni-da"],
      ]),
    ],
  },
  {
    id: "chinese", name: "Chinese (Mandarin)", flag: "/assets/china.png", speech: "zh-CN", color: "#e0392b",
    lessons: [
      lesson("greetings", "Greetings", "Say hello and goodbye politely.", [
        ["你好", "Hello", "nǐ hǎo"],
        ["早上好", "Good morning", "zǎoshang hǎo"],
        ["晚安", "Good night", "wǎn'ān"],
        ["谢谢", "Thank you", "xièxie"],
        ["请", "Please", "qǐng"],
        ["再见", "Goodbye", "zàijiàn"],
      ]),
      lesson("essentials", "Everyday essentials", "Phrases that get you through the day.", [
        ["你好吗？", "How are you?", "nǐ hǎo ma"],
        ["我叫…", "My name is…", "wǒ jiào"],
        ["对不起", "I'm sorry", "duìbuqǐ"],
        ["多少钱？", "How much is it?", "duōshao qián"],
        ["我不明白", "I don't understand", "wǒ bù míngbai"],
        ["厕所在哪里？", "Where is the restroom?", "cèsuǒ zài nǎlǐ"],
      ]),
    ],
  },
];

export const getLanguage = (id) => LANGUAGES.find((l) => l.id === id) || null;

export const getLesson = (langId, lessonId) =>
  getLanguage(langId)?.lessons.find((l) => l.id === lessonId) || null;

export const totalLessons = () => LANGUAGES.reduce((n, l) => n + l.lessons.length, 0);
