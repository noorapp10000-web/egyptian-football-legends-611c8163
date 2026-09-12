// صور رؤساء النادي وهدافيه وأساطيره — مرفوعة من أرشيف النادي.
import presSayedMetwally from "@/assets/people/pres-sayed-metwally.jpeg";
import presKamelAboAli from "@/assets/people/pres-kamel-abo-ali.jpeg";
import presAliFaragAllah from "@/assets/people/pres-ali-farag-allah.jpg";
import presAbdelwahabKota from "@/assets/people/pres-abdelwahab-kota.jpeg";
import presYasserYehia from "@/assets/people/pres-yasser-yehia.jpg";
import presSamirHalabia from "@/assets/people/pres-samir-halabia.jpg";
import presAbdelrahmanLotfy from "@/assets/people/pres-abdelrahman-lotfy.jpeg";
import scSayedEldazwy from "@/assets/people/sc-sayed-eldazwy.jpg";
import scMosaadNour from "@/assets/people/sc-mosaad-nour.jpeg";
import scMohamedShahin from "@/assets/people/sc-mohamed-shahin.jpg";
import scGamalGouda from "@/assets/people/sc-gamal-gouda.jpeg";
import scMohamedBadawy from "@/assets/people/sc-mohamed-badawy.jpg";
import scAhmedGomaa from "@/assets/people/sc-ahmed-gomaa.jpeg";
import scIbrahimElmasry from "@/assets/people/sc-ibrahim-elmasry.jpeg";
import scEno from "@/assets/people/sc-eno.jpeg";
import legendAbdelrahmanFawzi from "@/assets/people/legend-abdelrahman-fawzi.jpg";
import legendMohsenSaleh from "@/assets/people/legend-mohsen-saleh.jpeg";

// مفتاح الاسم كما هو مكتوب في قائمة الرؤساء (history-content.ts)
export const PRESIDENT_PHOTOS: Record<string, string> = {
  "السيد متولي": presSayedMetwally,
  "كامل أبو علي": presKamelAboAli,
  "علي فرج الله": presAliFaragAllah,
  "عبد الوهاب قوطة": presAbdelwahabKota,
  "ياسر يحيى": presYasserYehia,
  "سمير حلبية": presSamirHalabia,
  "عبد الرحمن باشا لطفي": presAbdelrahmanLotfy,
};

export type TopScorer = {
  rank: number;
  name: string;
  goals: number;
  photo: string | null;
};

// المصدر: ويكيبيديا — الأكثر تهديفًا للنادي المصري في الدوري (آخر تحديث 30 مايو 2019)
export const TOP_SCORERS: TopScorer[] = [
  { rank: 1, name: "السيد الضظوي", goals: 89, photo: scSayedEldazwy },
  { rank: 2, name: "مسعد نور", goals: 87, photo: scMosaadNour },
  { rank: 3, name: "محمد شاهين", goals: 64, photo: scMohamedShahin },
  { rank: 4, name: "جمال جودة", goals: 56, photo: scGamalGouda },
  { rank: 5, name: "محمد بدوي", goals: 45, photo: scMohamedBadawy },
  { rank: 6, name: "أحمد جمعة", goals: 39, photo: scAhmedGomaa },
  { rank: 7, name: "إبراهيم المصري", goals: 32, photo: scIbrahimElmasry },
  { rank: 8, name: "عوض الحارثي", goals: 28, photo: null },
  { rank: 9, name: "إينو", goals: 24, photo: scEno },
  { rank: 10, name: "ياسر محمد", goals: 23, photo: null },
];

export type Legend = {
  name: string;
  role: string;
  era?: string;
  note: string;
  photo: string | null;
};

// أساطير النادي المصري: رموز صنعت تاريخ النسور الخضراء عبر الحقب.
export const LEGENDS: Legend[] = [
  {
    name: "السيد الضظوي",
    role: "مهاجم",
    era: "السبعينيات",
    note: "هدّاف النادي التاريخي برصيد 89 هدفًا في الدوري — رقم صمد لعقود ولم يقترب منه أحد.",
    photo: scSayedEldazwy,
  },
  {
    name: "مسعد نور «الكاستن»",
    role: "جناح",
    era: "السبعينيات – الثمانينيات",
    note: "رمز المصري الأشهر وثاني هدافيه بـ 87 هدفًا، وقائد جيل كامل في ذاكرة جماهير بورسعيد.",
    photo: scMosaadNour,
  },
  {
    name: "عبد الرحمن فوزي",
    role: "مهاجم",
    era: "الثلاثينيات",
    note: "نجم المصري في ثلاثينيات القرن الماضي، وصاحب أول هدفين لمصر في كأس العالم 1934.",
    photo: legendAbdelrahmanFawzi,
  },
  {
    name: "حلمي أبو المعاطي",
    role: "لاعب وسط",
    era: "الخمسينيات – الستينيات",
    note: "من رموز جيل الستينيات الذهبي الذي جعل المصري مصنعًا لكبار نجوم الكرة المصرية.",
    photo: null,
  },
  {
    name: "محسن صالح",
    role: "لاعب وسط",
    era: "السبعينيات",
    note: "ابن بورسعيد الذي بدأ مسيرته في المصري قبل أن يصبح من أبرز أسماء الكرة المصرية لاعبًا ومدربًا.",
    photo: legendMohsenSaleh,
  },
  {
    name: "إبراهيم المصري «مارادونا بورسعيد»",
    role: "صانع ألعاب",
    era: "التسعينيات",
    note: "أسطورة التسعينيات ومهاريّ الفريق الأول، لُقّب بمارادونا بورسعيد لمهاراته الاستثنائية.",
    photo: scIbrahimElmasry,
  },
  {
    name: "محمد شاهين",
    role: "مهاجم",
    era: "الثمانينيات – التسعينيات",
    note: "ثالث هدافي النادي في الدوري بـ 64 هدفًا، وأحد رموز خط هجوم النسور الخضراء.",
    photo: scMohamedShahin,
  },
  {
    name: "إينو",
    role: "مهاجم",
    era: "الألفينات",
    note: "المهاجم النيجيري الذي أصبح من أشهر المحترفين الأجانب في تاريخ النادي بأهدافه الحاسمة.",
    photo: scEno,
  },
];
