import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { orchidSpecies } from '@/lib/orchidData';
import SpeciesCard from '@/components/SpeciesCard';
import { motion } from 'framer-motion';
import { Leaf, Map, FlaskConical } from 'lucide-react';

const Index = () => {
  const { t } = useI18n();

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <Leaf
              key={i}
              className="absolute text-primary-foreground"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + i * 16}%`,
                transform: `rotate(${i * 60}deg)`,
                width: `${30 + i * 8}px`,
                height: `${30 + i * 8}px`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3 font-semibold text-sm hover:bg-primary-foreground/90 transition-colors shadow-lg"
              >
                <Leaf className="h-4 w-4" />
                {t('explore')}
              </Link>
              <Link
                to="/map"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 text-primary-foreground px-6 py-3 font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                <Map className="h-4 w-4" />
                {t('viewMap')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Species */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
            {t('popularSpecies')}
          </h2>
          <p className="text-muted-foreground mb-8">{t('catalogDesc')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {orchidSpecies.map((species, i) => (
              <motion.div
                key={species.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <SpeciesCard species={species} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="bg-botanical-cream py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Map, title: t('map'), desc: t('mapDesc'), to: '/map' },
              { icon: Leaf, title: t('lifecycle'), desc: t('lifecycleDesc'), to: '/lifecycle' },
              { icon: FlaskConical, title: t('cultivation'), desc: t('cultivationDesc'), to: '/cultivation' },
            ].map(({ icon: Icon, title, desc, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={to}
                  className="block rounded-xl border bg-card p-6 botanical-card group"
                >
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
