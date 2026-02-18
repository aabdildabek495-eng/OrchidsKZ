import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'ru' | 'kk';

const translations = {
  en: {
    home: 'Home', catalog: 'Catalog', map: 'Map', lifecycle: 'Growth Cycle', cultivation: 'Cultivation',
    heroTitle: 'Orchids of Kazakhstan',
    heroSubtitle: 'An interactive encyclopedia of wild orchids found across the steppes, mountains, and forests of Kazakhstan',
    explore: 'Explore Species', viewMap: 'View Map',
    species: 'Species', habitat: 'Habitat', morphology: 'Morphology', distribution: 'Distribution',
    reportPopulation: 'Report a Population', knownDistribution: 'Known Distribution Zones',
    nutrientMedia: 'Nutrient Media', inVitro: 'In-vitro Multiplication',
    seedStage: 'Seed', protocorm: 'Protocorm', seedling: 'Seedling', juvenile: 'Juvenile', adult: 'Adult Flowering',
    catalogDesc: 'Discover the wild orchid species found across Kazakhstan',
    roots: 'Roots', leaves: 'Leaves', flowers: 'Flowers',
    backToCatalog: '← Back to Catalog',
    clickToReport: 'Click on the map to report a population',
    phLevel: 'pH Level', additives: 'Additives', primaryMedium: 'Primary Medium',
    recommended: 'Recommended', learnMore: 'Learn More',
    lifecycleTitle: 'Orchid Growth Cycle',
    lifecycleDesc: 'From seed to flowering — the remarkable journey of a wild orchid',
    cultivationTitle: 'In-vitro Cultivation',
    cultivationDesc: 'Scientific protocols for orchid multiplication in laboratory settings',
    mapTitle: 'Distribution Map',
    mapDesc: 'Known populations and reported sightings across Kazakhstan',
    yourReport: 'Your Report', reportedAt: 'Reported at',
    popularSpecies: 'Featured Species',
    activatedCharcoal: 'Activated Charcoal', peptone: 'Peptone', coconutWater: 'Coconut Water',
    concentration: 'Concentration', purpose: 'Purpose',
    phenolicAbsorption: 'Phenolic absorption', protocormDev: 'Protocorm development',
    growthStimulation: 'Growth stimulation',
  },
  ru: {
    home: 'Главная', catalog: 'Каталог', map: 'Карта', lifecycle: 'Цикл роста', cultivation: 'Культивирование',
    heroTitle: 'Орхидеи Казахстана',
    heroSubtitle: 'Интерактивная энциклопедия дикорастущих орхидей степей, гор и лесов Казахстана',
    explore: 'Изучить виды', viewMap: 'Открыть карту',
    species: 'Виды', habitat: 'Среда обитания', morphology: 'Морфология', distribution: 'Распространение',
    reportPopulation: 'Сообщить о популяции', knownDistribution: 'Известные зоны распространения',
    nutrientMedia: 'Питательные среды', inVitro: 'Размножение in-vitro',
    seedStage: 'Семя', protocorm: 'Протокорм', seedling: 'Проросток', juvenile: 'Ювенильное', adult: 'Цветущее растение',
    catalogDesc: 'Откройте для себя виды дикорастущих орхидей Казахстана',
    roots: 'Корни', leaves: 'Листья', flowers: 'Цветки',
    backToCatalog: '← Назад к каталогу',
    clickToReport: 'Нажмите на карту, чтобы сообщить о популяции',
    phLevel: 'Уровень pH', additives: 'Добавки', primaryMedium: 'Основная среда',
    recommended: 'Рекомендуемые', learnMore: 'Подробнее',
    lifecycleTitle: 'Цикл роста орхидей',
    lifecycleDesc: 'От семени до цветения — удивительный путь дикой орхидеи',
    cultivationTitle: 'Культивирование in-vitro',
    cultivationDesc: 'Научные протоколы размножения орхидей в лабораторных условиях',
    mapTitle: 'Карта распространения',
    mapDesc: 'Известные популяции и зарегистрированные наблюдения по Казахстану',
    yourReport: 'Ваше наблюдение', reportedAt: 'Отмечено на',
    popularSpecies: 'Избранные виды',
    activatedCharcoal: 'Активированный уголь', peptone: 'Пептон', coconutWater: 'Кокосовая вода',
    concentration: 'Концентрация', purpose: 'Назначение',
    phenolicAbsorption: 'Поглощение фенолов', protocormDev: 'Развитие протокорма',
    growthStimulation: 'Стимуляция роста',
  },
  kk: {
    home: 'Басты бет', catalog: 'Каталог', map: 'Карта', lifecycle: 'Өсу циклі', cultivation: 'Өсіру',
    heroTitle: 'Қазақстан орхидеялары',
    heroSubtitle: 'Қазақстанның дала, тау және орман алқаптарында кездесетін жабайы орхидеялардың интерактивті энциклопедиясы',
    explore: 'Түрлерді зерттеу', viewMap: 'Картаны ашу',
    species: 'Түрлер', habitat: 'Мекендейтін орта', morphology: 'Морфология', distribution: 'Таралуы',
    reportPopulation: 'Популяция туралы хабарлау', knownDistribution: 'Белгілі таралу аймақтары',
    nutrientMedia: 'Қоректік орта', inVitro: 'In-vitro көбейту',
    seedStage: 'Тұқым', protocorm: 'Протокорм', seedling: 'Көшет', juvenile: 'Ювенильді', adult: 'Гүлдеген өсімдік',
    catalogDesc: 'Қазақстанның жабайы орхидея түрлерін ашыңыз',
    roots: 'Тамырлар', leaves: 'Жапырақтар', flowers: 'Гүлдер',
    backToCatalog: '← Каталогқа оралу',
    clickToReport: 'Популяция туралы хабарлау үшін картаны басыңыз',
    phLevel: 'pH деңгейі', additives: 'Қоспалар', primaryMedium: 'Негізгі орта',
    recommended: 'Ұсынылған', learnMore: 'Толығырақ',
    lifecycleTitle: 'Орхидея өсу циклі',
    lifecycleDesc: 'Тұқымнан гүлденуге дейін — жабайы орхидеяның таңғажайып жолы',
    cultivationTitle: 'In-vitro өсіру',
    cultivationDesc: 'Зертханалық жағдайда орхидеяларды көбейту хаттамалары',
    mapTitle: 'Таралу картасы',
    mapDesc: 'Қазақстан бойынша белгілі популяциялар мен бақылаулар',
    yourReport: 'Сіздің бақылауыңыз', reportedAt: 'Белгіленді',
    popularSpecies: 'Таңдаулы түрлер',
    activatedCharcoal: 'Белсендірілген көмір', peptone: 'Пептон', coconutWater: 'Кокос суы',
    concentration: 'Концентрация', purpose: 'Мақсаты',
    phenolicAbsorption: 'Фенолдарды сіңіру', protocormDev: 'Протокорм дамуы',
    growthStimulation: 'Өсуді ынталандыру',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en', setLang: () => {}, t: (k) => k,
});

export const useI18n = () => useContext(I18nContext);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  const t = (key: TranslationKey) => translations[lang][key] || key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};
