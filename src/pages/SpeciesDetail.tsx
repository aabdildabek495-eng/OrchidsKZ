import { useParams, Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { getSpeciesById } from '@/lib/orchidData';
import { motion } from 'framer-motion';
import { MapPin, Flower2, TreeDeciduous } from 'lucide-react';
import NotFound from './NotFound';

const Section = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border bg-card p-6">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="font-serif text-lg font-bold">{title}</h3>
    </div>
    {children}
  </div>
);

const SpeciesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useI18n();
  const species = getSpeciesById(id || '');

  if (!species) return <NotFound />;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/catalog" className="text-sm text-primary hover:underline mb-6 inline-block">
        {t('backToCatalog')}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Image */}
          <div className={`rounded-xl overflow-hidden h-72 lg:h-96 bg-gradient-to-br ${species.color} relative`}>
            <img
              src={species.imageUrl}
              alt={species.name[lang]}
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <p className="text-sm font-mono orchid-accent italic mb-1">{species.scientificName}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {species.name[lang]}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {species.description[lang]}
            </p>

            <Section icon={MapPin} title={t('habitat')}>
              <p className="text-sm text-muted-foreground leading-relaxed">{species.habitat[lang]}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {species.regions.map(r => (
                  <span key={r} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    {r}
                  </span>
                ))}
              </div>
            </Section>
          </div>
        </div>

        {/* Morphology */}
        <h2 className="font-serif text-2xl font-bold mb-4">{t('morphology')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { key: 'roots' as const, icon: TreeDeciduous, label: t('roots') },
            { key: 'leaves' as const, icon: Flower2, label: t('leaves') },
            { key: 'flowers' as const, icon: Flower2, label: t('flowers') },
          ].map(({ key, icon, label }) => (
            <Section key={key} icon={icon} title={label}>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {species.morphology[key][lang]}
              </p>
            </Section>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SpeciesDetail;
