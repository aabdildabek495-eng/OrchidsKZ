import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { FlaskConical, Beaker, Droplets, Leaf } from 'lucide-react';

const Cultivation = () => {
  const { t, lang } = useI18n();

  const media = [
    {
      name: 'Knudson C (KC)',
      desc: {
        en: 'Classic orchid medium developed in 1946. Lower mineral concentration suited for initial germination of terrestrial orchids.',
        ru: 'Классическая среда для орхидей, разработанная в 1946 году. Низкая концентрация минералов подходит для первичного прорастания наземных орхидей.',
        kk: '1946 жылы жасалған классикалық орхидея ортасы. Жерүсті орхидеяларының алғашқы өнуіне қолайлы.',
      },
      recommended: true,
    },
    {
      name: 'Murashige & Skoog (MS) ½',
      desc: {
        en: 'Half-strength MS medium provides balanced macro- and micronutrients. Widely used for seed germination and protocorm proliferation.',
        ru: 'Среда MS половинной концентрации обеспечивает сбалансированные макро- и микроэлементы. Широко используется для прорастания семян и пролиферации протокормов.',
        kk: 'Жарты концентрациялы MS ортасы тепе-тең макро- және микроэлементтерді қамтамасыз етеді.',
      },
      recommended: true,
    },
  ];

  const additives = [
    {
      name: t('activatedCharcoal'),
      amount: '1 g/L',
      purpose: t('phenolicAbsorption'),
      icon: Beaker,
    },
    {
      name: t('peptone'),
      amount: '2 g/L',
      purpose: t('protocormDev'),
      icon: FlaskConical,
    },
    {
      name: t('coconutWater'),
      amount: '10–15%',
      purpose: t('growthStimulation'),
      icon: Droplets,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-3xl font-bold mb-2">{t('cultivationTitle')}</h1>
        <p className="text-muted-foreground mb-10">{t('cultivationDesc')}</p>
      </motion.div>

      {/* Primary Media */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-primary" />
          {t('primaryMedium')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {media.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border bg-card p-6 botanical-card"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-lg font-bold">{m.name}</h3>
                {m.recommended && (
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {t('recommended')}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {m.desc[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additives */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          {t('additives')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additives.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border bg-card p-6 botanical-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold mb-1">{a.name}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{a.amount}</p>
                <p className="text-sm text-muted-foreground">{a.purpose}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* pH Level */}
      <section>
        <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
          <Droplets className="h-5 w-5 text-primary" />
          {t('phLevel')}
        </h2>
        <div className="rounded-xl border bg-card p-8 max-w-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">5.0</span>
            <span className="text-sm text-muted-foreground">6.0</span>
          </div>
          <div className="relative h-4 bg-gradient-to-r from-red-300 via-green-400 to-red-300 rounded-full overflow-hidden">
            <div
              className="absolute top-0 h-full bg-primary/60 rounded-full"
              style={{ left: '20%', width: '60%' }}
            />
            <div
              className="absolute top-0 h-full border-2 border-primary rounded-full"
              style={{ left: '20%', width: '60%' }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">Acidic</span>
            <span className="text-center">
              <span className="text-xl font-bold text-primary">5.2 – 5.8</span>
              <p className="text-xs text-muted-foreground mt-1">{t('recommended')}</p>
            </span>
            <span className="text-xs text-muted-foreground">Neutral</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cultivation;
