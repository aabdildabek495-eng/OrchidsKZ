import { useI18n } from '@/lib/i18n';
import { orchidSpecies } from '@/lib/orchidData';
import SpeciesCard from '@/components/SpeciesCard';
import { motion } from 'framer-motion';

const Catalog = () => {
  const { t } = useI18n();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
          {t('catalog')}
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">{t('catalogDesc')}</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {orchidSpecies.map((species, i) => (
          <motion.div
            key={species.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <SpeciesCard species={species} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
