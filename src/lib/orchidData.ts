import { Lang } from './i18n';

export interface OrchidSpecies {
  id: string;
  scientificName: string;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  habitat: Record<Lang, string>;
  morphology: {
    roots: Record<Lang, string>;
    leaves: Record<Lang, string>;
    flowers: Record<Lang, string>;
  };
  regions: string[];
  coordinates: [number, number][];
  imageUrl: string;
  color: string; // fallback gradient
}

export const orchidSpecies: OrchidSpecies[] = [
  {
    id: 'cypripedium-calceolus',
    scientificName: 'Cypripedium calceolus',
    name: {
      en: "Lady's Slipper Orchid",
      ru: 'Венерин башмачок настоящий',
      kk: 'Шынайы Венера аяқкиімі',
    },
    description: {
      en: 'One of the most iconic European orchids, distinguished by its large yellow pouch-shaped lip. Found in shaded deciduous and mixed forests of northern and eastern Kazakhstan.',
      ru: 'Одна из самых знаменитых европейских орхидей, отличающаяся крупной жёлтой губой в форме башмачка. Встречается в тенистых лиственных и смешанных лесах северного и восточного Казахстана.',
      kk: 'Еуропаның ең танымал орхидеяларының бірі, ірі сары аяқкиім тәрізді еріні бар. Қазақстанның солтүстік және шығыс жапырақты және аралас ормандарында кездеседі.',
    },
    habitat: {
      en: 'Altay Mountains, northern forests of Kazakhstan. Prefers calcareous soils in semi-shaded woodland clearings at 800–1800m altitude.',
      ru: 'Горы Алтая, северные леса Казахстана. Предпочитает известковые почвы на полутенистых лесных полянах на высоте 800–1800 м.',
      kk: 'Алтай таулары, Қазақстанның солтүстік ормандары. 800–1800 м биіктікте жартылай көлеңкелі орман алаңдарында әктасты топырақты ұнатады.',
    },
    morphology: {
      roots: {
        en: 'Thick, fleshy rhizome with numerous adventitious roots. Mycorrhizal association essential for germination.',
        ru: 'Толстое мясистое корневище с многочисленными придаточными корнями. Микоризная связь необходима для прорастания.',
        kk: 'Көптеген қосымша тамырлары бар қалың, етті тамырсабақ. Өсу үшін микоризалық байланыс қажет.',
      },
      leaves: {
        en: 'Broad, elliptical, ribbed leaves (3–5), up to 18cm long, arranged alternately along the stem.',
        ru: 'Широкие, эллиптические, ребристые листья (3–5), до 18 см длиной, расположены поочерёдно на стебле.',
        kk: '3-5 кең, эллипстік, қырлы жапырақтар, ұзындығы 18 см-ге дейін, сабақта кезектесіп орналасқан.',
      },
      flowers: {
        en: 'Distinctive yellow slipper-shaped lip (3–4cm) with maroon-brown lateral petals. Flowers May–June.',
        ru: 'Характерная жёлтая губа в форме башмачка (3–4 см) с тёмно-коричневыми боковыми лепестками. Цветёт в мае–июне.',
        kk: 'Қоңыр-қызыл бүйірлік жапырақшалары бар сары аяқкиім тәрізді ерін (3–4 см). Мамыр-маусым айларында гүлдейді.',
      },
    },
    regions: ['Altay', 'East Kazakhstan'],
    coordinates: [[49.2, 86.0], [50.1, 82.5]],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Cypripedium_calceolus_-_Biebrza_National_Park.jpg/480px-Cypripedium_calceolus_-_Biebrza_National_Park.jpg',
    color: 'from-yellow-600 via-amber-500 to-green-700',
  },
  {
    id: 'orchis-militaris',
    scientificName: 'Orchis militaris',
    name: {
      en: 'Military Orchid',
      ru: 'Ятрышник шлемовидный',
      kk: 'Шлемтәрізді ятрышник',
    },
    description: {
      en: 'Named for its helmet-shaped hood resembling a soldier\'s headpiece. Found in mountain meadows and light forests of the Tien Shan range.',
      ru: 'Назван по шлемовидному капюшону цветка, напоминающему головной убор воина. Встречается на горных лугах и в светлых лесах Тянь-Шаня.',
      kk: 'Жауынгердің бас киіміне ұқсас шлем тәрізді гүл қалпағы бойынша аталған. Тянь-Шань тау шалғындары мен жарық ормандарында кездеседі.',
    },
    habitat: {
      en: 'Western Tien Shan mountains. Found in alpine meadows and forest margins at 1200–2500m. Prefers calcareous grasslands.',
      ru: 'Западный Тянь-Шань. Встречается на альпийских лугах и опушках леса на высоте 1200–2500 м. Предпочитает известковые луга.',
      kk: 'Батыс Тянь-Шань таулары. 1200–2500 м биіктікте альпілік шалғындар мен орман шетінде кездеседі.',
    },
    morphology: {
      roots: {
        en: 'Two ovoid tubers (2–3cm), one spent from previous year, one developing for next season.',
        ru: 'Два яйцевидных клубня (2–3 см): один отработанный прошлогодний, другой развивающийся на следующий сезон.',
        kk: 'Екі жұмыртқа тәрізді түйнек (2–3 см): бірі өткен жылдан, екіншісі келесі маусымға дамып жатыр.',
      },
      leaves: {
        en: 'Oblong-lanceolate basal leaves (3–5), glossy green, up to 15cm. Upper leaves sheath the stem.',
        ru: 'Продолговато-ланцетные прикорневые листья (3–5), блестяще-зелёные, до 15 см. Верхние листья охватывают стебель.',
        kk: 'Сопақша-найзалы түбір жапырақтар (3–5), жылтыр жасыл, 15 см-ге дейін.',
      },
      flowers: {
        en: 'Dense conical spike (5–15cm) with pink-purple hooded flowers. Each flower has a spotted labellum. Blooms May–July.',
        ru: 'Плотный конический колос (5–15 см) с розово-пурпурными шлемовидными цветками. На каждом цветке пятнистая губа. Цветёт в мае–июле.',
        kk: 'Қызғылт-күлгін шлем тәрізді гүлдері бар тығыз конустық масақ (5–15 см). Мамыр-шілде айларында гүлдейді.',
      },
    },
    regions: ['Western Tien Shan', 'Karatau'],
    coordinates: [[42.3, 70.2], [43.5, 68.8]],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Orchis_militaris_-_Valkse.jpg/480px-Orchis_militaris_-_Valkse.jpg',
    color: 'from-pink-500 via-purple-400 to-green-600',
  },
  {
    id: 'dactylorhiza-fuchsii',
    scientificName: 'Dactylorhiza fuchsii',
    name: {
      en: 'Common Spotted Orchid',
      ru: 'Пальчатокоренник Фукса',
      kk: 'Фукс саусақтамыры',
    },
    description: {
      en: 'One of the most widespread orchids in the Northern Hemisphere. Recognized by its deeply lobed lip with distinctive dark markings and spotted leaves.',
      ru: 'Одна из самых распространённых орхидей Северного полушария. Узнаётся по глубоко лопастной губе с характерными тёмными узорами и пятнистым листьям.',
      kk: 'Солтүстік жарты шардағы ең кең тараған орхидеялардың бірі. Терең бөлінген ерні мен дақты жапырақтарымен танылады.',
    },
    habitat: {
      en: 'Altay and Zhongar Alatau mountains. Grows in moist meadows, marshes, and open woodland from 600–2200m altitude.',
      ru: 'Алтай и горы Жонгар Алатау. Растёт на влажных лугах, болотах и открытых лесах на высоте 600–2200 м.',
      kk: 'Алтай және Жоңғар Алатауы таулары. 600–2200 м биіктікте ылғалды шалғындар мен ашық ормандарда өседі.',
    },
    morphology: {
      roots: {
        en: 'Palmate (hand-shaped) tubers with 2–5 finger-like lobes. Shallow root system adapted to marshy conditions.',
        ru: 'Пальчатые (ладонеобразные) клубни с 2–5 пальцевидными долями. Поверхностная корневая система, приспособленная к болотистым условиям.',
        kk: '2–5 саусақ тәрізді бөліктері бар алақан тәрізді түйнектер. Батпақты жағдайға бейімделген.',
      },
      leaves: {
        en: 'Narrow lanceolate leaves (4–8) with characteristic dark purple spots. Lower leaves 10–20cm long.',
        ru: 'Узколанцетные листья (4–8) с характерными тёмно-пурпурными пятнами. Нижние листья 10–20 см длиной.',
        kk: 'Қоңыр-күлгін дақтары бар тар найзалы жапырақтар (4–8). Төменгі жапырақтар 10–20 см ұзын.',
      },
      flowers: {
        en: 'Cylindrical spike with pink to lilac flowers. Three-lobed lip with dark loops and dashes. Blooms June–August.',
        ru: 'Цилиндрический колос с розовыми до лиловых цветками. Трёхлопастная губа с тёмными петлями и штрихами. Цветёт в июне–августе.',
        kk: 'Қызғылт-күлгін гүлдері бар цилиндрлік масақ. Маусым-тамыз айларында гүлдейді.',
      },
    },
    regions: ['Altay', 'Zhongar Alatau'],
    coordinates: [[49.5, 86.5], [45.0, 80.0]],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dactylorhiza_fuchsii_01.jpg/480px-Dactylorhiza_fuchsii_01.jpg',
    color: 'from-pink-400 via-fuchsia-300 to-emerald-600',
  },
  {
    id: 'epipactis-helleborine',
    scientificName: 'Epipactis helleborine',
    name: {
      en: 'Broad-leaved Helleborine',
      ru: 'Дремлик широколистный',
      kk: 'Кеңжапырақты дремлик',
    },
    description: {
      en: 'A remarkably adaptable orchid found in diverse habitats from deep forest shade to urban parks. Distinguished by its drooping, bell-shaped greenish-purple flowers.',
      ru: 'Удивительно приспособляемая орхидея, встречающаяся в разнообразных местообитаниях от глубокой лесной тени до городских парков. Отличается поникающими колокольчатыми зеленовато-пурпурными цветками.',
      kk: 'Орман көлеңкесінен қалалық саябақтарға дейін кездесетін бейімделгіш орхидея. Салбыраңқы қоңырау тәрізді жасыл-күлгін гүлдерімен ерекшеленеді.',
    },
    habitat: {
      en: 'Karatau Mountains, various forest zones across Kazakhstan. Tolerates a wide range of conditions from 400–2000m. Often found near beech and oak.',
      ru: 'Горы Каратау, различные лесные зоны Казахстана. Переносит широкий диапазон условий от 400 до 2000 м. Часто встречается у бука и дуба.',
      kk: 'Қаратау таулары, Қазақстанның әр түрлі орман аймақтары. 400–2000 м биіктікте кең жағдайларға төзімді.',
    },
    morphology: {
      roots: {
        en: 'Creeping rhizome producing multiple stems. Dense cluster of fibrous roots. Strong mycorrhizal dependence.',
        ru: 'Ползучее корневище, образующее несколько стеблей. Густое скопление мочковатых корней. Сильная микоризная зависимость.',
        kk: 'Бірнеше сабақ түзетін жорғалаушы тамырсабақ. Тығыз талшықты тамырлар. Микоризаға тәуелді.',
      },
      leaves: {
        en: 'Broadly ovate leaves (5–9), strongly ribbed, arranged spirally. Up to 17cm long, progressively smaller upward.',
        ru: 'Широкояйцевидные листья (5–9), с выраженными жилками, расположены спирально. До 17 см длиной, уменьшаются кверху.',
        kk: 'Кең жұмыртқа тәрізді жапырақтар (5–9), спираль бойынша орналасқан. 17 см-ге дейін ұзын.',
      },
      flowers: {
        en: 'Loose, one-sided raceme of 15–50 flowers. Greenish-pink with a dark-veined, cup-shaped epichile. Blooms July–September.',
        ru: 'Рыхлая, однобокая кисть из 15–50 цветков. Зеленовато-розовые с тёмно-жилкованным чашевидным эпихилем. Цветёт в июле–сентябре.',
        kk: '15–50 гүлден тұратын бір жақты шоғыр. Жасылдау-қызғылт. Шілде-қыркүйекте гүлдейді.',
      },
    },
    regions: ['Karatau', 'Central Kazakhstan forests'],
    coordinates: [[43.5, 68.5], [47.0, 70.0]],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Epipactis_helleborine_060707.jpg/480px-Epipactis_helleborine_060707.jpg',
    color: 'from-emerald-500 via-lime-400 to-purple-500',
  },
];

export const getSpeciesById = (id: string) => orchidSpecies.find(s => s.id === id);
