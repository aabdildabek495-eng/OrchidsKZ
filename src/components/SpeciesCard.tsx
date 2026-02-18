import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { OrchidSpecies } from '@/lib/orchidData';
import { MapPin, ArrowRight } from 'lucide-react';

const SpeciesCard = ({ species }: { species: OrchidSpecies }) => {
  const { lang, t } = useI18n();

  return (
    <Link to={`/species/${species.id}`} className="group block">
      <div className="botanical-card rounded-xl overflow-hidden border bg-card">
        <div className={`h-48 bg-gradient-to-br ${species.color} relative overflow-hidden`}>
          <img
            src={species.imageUrl}
            alt={species.name[lang]}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-xs font-mono text-primary-foreground/80 italic">
              {species.scientificName}
            </p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-serif text-lg font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
            {species.name[lang]}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {species.description[lang]}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {species.regions.join(', ')}
            </div>
            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SpeciesCard;
