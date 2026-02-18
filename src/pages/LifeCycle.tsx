import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, Leaf, TreeDeciduous, Flower2, Sun } from 'lucide-react';

const LifeCycle = () => {
  const { t, lang } = useI18n();
  const [active, setActive] = useState(0);

  const stages = [
    {
      key: 'seedStage' as const,
      icon: Sprout,
      color: 'bg-amber-100 text-amber-700',
      ring: 'ring-amber-300',
      en: 'Orchid seeds are among the smallest in the plant kingdom — dust-like and lacking endosperm. They require a mycorrhizal fungal partner (Rhizoctonia or Tulasnella) for germination, as the fungus provides essential nutrients.',
      ru: 'Семена орхидей одни из самых мелких в растительном мире — пылевидные и лишённые эндосперма. Для прорастания необходим микоризный гриб (Rhizoctonia или Tulasnella), обеспечивающий питательные вещества.',
      kk: 'Орхидея тұқымдары өсімдіктер әлеміндегі ең ұсақ тұқымдардың бірі. Өсу үшін микоризалық саңырауқұлақ серіктес қажет.',
    },
    {
      key: 'protocorm' as const,
      icon: Leaf,
      color: 'bg-lime-100 text-lime-700',
      ring: 'ring-lime-300',
      en: 'After germination, the embryo develops into a protocorm — a small, round, undifferentiated mass of cells. This unique structure absorbs nutrients from the fungal partner and slowly develops its first root and shoot.',
      ru: 'После прорастания зародыш развивается в протокорм — маленькую округлую недифференцированную массу клеток. Эта уникальная структура поглощает питательные вещества от гриба-партнёра и медленно развивает первый корень и побег.',
      kk: 'Өнгеннен кейін ұрық протокорм — ұсақ, дөңгелек жасуша массасына айналады. Бұл құрылым саңырауқұлақтан қоректік заттарды сіңіреді.',
    },
    {
      key: 'seedling' as const,
      icon: TreeDeciduous,
      color: 'bg-emerald-100 text-emerald-700',
      ring: 'ring-emerald-300',
      en: 'The seedling stage begins when the first true leaf and root emerge. The young plant is still heavily dependent on mycorrhizal fungi. This stage can last 2–4 years in wild orchids, during which the plant builds its root system.',
      ru: 'Стадия проростка начинается с появления первого настоящего листа и корня. Молодое растение всё ещё сильно зависит от микоризных грибов. Этот этап может длиться 2–4 года.',
      kk: 'Көшет кезеңі алғашқы нағыз жапырақ пен тамыр пайда болғанда басталады. Бұл кезең 2–4 жыл созылуы мүмкін.',
    },
    {
      key: 'juvenile' as const,
      icon: Sun,
      color: 'bg-teal-100 text-teal-700',
      ring: 'ring-teal-300',
      en: 'The juvenile plant has developed multiple leaves and a well-established root system. It begins photosynthesis but does not yet flower. This vegetative growth phase lasts 3–8 years depending on species and conditions.',
      ru: 'Ювенильное растение имеет несколько листьев и развитую корневую систему. Начинает фотосинтез, но ещё не цветёт. Этот этап длится 3–8 лет в зависимости от вида и условий.',
      kk: 'Ювенильді өсімдік бірнеше жапырақ пен дамыған тамыр жүйесіне ие. Фотосинтез басталады, бірақ әлі гүлдемейді. Бұл кезең 3–8 жыл созылады.',
    },
    {
      key: 'adult' as const,
      icon: Flower2,
      color: 'bg-purple-100 text-purple-700',
      ring: 'ring-purple-300',
      en: 'The adult flowering plant has reached maturity after 5–12 years. It produces its characteristic flower spike, attracting pollinators through shape, color, and scent mimicry. Many Kazakhstan orchids flower for only 2–4 weeks annually.',
      ru: 'Взрослое цветущее растение достигает зрелости через 5–12 лет. Оно образует характерный цветонос, привлекая опылителей формой, цветом и ароматом. Многие орхидеи Казахстана цветут всего 2–4 недели в году.',
      kk: 'Ересек гүлдеген өсімдік 5–12 жылда жетіледі. Ол тозаңдатқыштарды тартатын тән гүл масағын түзеді. Қазақстан орхидеялары жылына тек 2–4 апта гүлдейді.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-3xl font-bold mb-2">{t('lifecycleTitle')}</h1>
        <p className="text-muted-foreground mb-10">{t('lifecycleDesc')}</p>
      </motion.div>

      {/* Timeline */}
      <div className="flex items-center justify-between mb-10 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <button
              key={stage.key}
              onClick={() => setActive(i)}
              className={`relative z-10 flex flex-col items-center gap-2 group`}
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  active === i
                    ? `${stage.color} ring-4 ${stage.ring} scale-110`
                    : 'bg-muted text-muted-foreground hover:bg-secondary'
                }`}
              >
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <span
                className={`text-xs font-medium transition-colors hidden sm:block ${
                  active === i ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {t(stage.key)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl border bg-card p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            {(() => {
              const Icon = stages[active].icon;
              return (
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stages[active].color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              );
            })()}
            <h2 className="font-serif text-2xl font-bold">{t(stages[active].key)}</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {stages[active][lang]}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LifeCycle;
