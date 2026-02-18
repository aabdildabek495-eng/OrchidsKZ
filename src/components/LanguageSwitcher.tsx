import { useI18n, Lang } from '@/lib/i18n';

const langs: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'kk', label: 'KK' },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-200 ${
            lang === code
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
