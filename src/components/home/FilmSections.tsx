import {
  getAllFilms,
  getNewReleases,
  getFilmsByLanguage,
  getFilmsByGenre,
} from '@/lib/getFilms';
import type { Film } from '@/types';
import FilmRowSection from './FilmRowSection';

const SECTIONS: Array<{
  label: string;
  title: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  getFilms: () => Film[];
}> = [
  {
    label: 'Curated Series',
    title: 'The Archive',
    description:
      'Our selection is updated every midnight. Discover hand-picked visions from the global underground.',
    viewAllHref: '/browse',
    viewAllLabel: 'View Complete Index',
    getFilms: getAllFilms,
  },
  {
    label: 'Latest',
    title: 'New Releases',
    viewAllHref: '/browse?sort=newest',
    getFilms: () => getNewReleases(),
  },
  {
    label: 'Language',
    title: 'Kannada',
    viewAllHref: '/browse?language=kannada',
    getFilms: () => getFilmsByLanguage('Kannada'),
  },
  {
    label: 'Language',
    title: 'Tamil',
    viewAllHref: '/browse?language=tamil',
    getFilms: () => getFilmsByLanguage('Tamil'),
  },
  {
    label: 'Language',
    title: 'Telugu',
    viewAllHref: '/browse?language=telugu',
    getFilms: () => getFilmsByLanguage('Telugu'),
  },
  {
    label: 'Language',
    title: 'Hindi',
    viewAllHref: '/browse?language=hindi',
    getFilms: () => getFilmsByLanguage('Hindi'),
  },
  {
    label: 'Language',
    title: 'Malayalam',
    viewAllHref: '/browse?language=malayalam',
    getFilms: () => getFilmsByLanguage('Malayalam'),
  },
  {
    label: 'Region',
    title: 'Other Regional',
    viewAllHref: '/browse?region=other',
    getFilms: () =>
      getAllFilms().filter(
        (f) =>
          !['Kannada', 'Tamil', 'Telugu', 'Hindi', 'Malayalam'].some(
            (l) => l.toLowerCase() === (f.language ?? '').toLowerCase()
          )
      ),
  },
  {
    label: 'Genre',
    title: 'Folklore',
    viewAllHref: '/browse?genre=folklore',
    getFilms: () => getFilmsByGenre('folklore'),
  },
  {
    label: 'Genre',
    title: 'Drama',
    viewAllHref: '/browse?genre=drama',
    getFilms: () => getFilmsByGenre('drama'),
  },
  {
    label: 'Genre',
    title: 'Social',
    viewAllHref: '/browse?genre=social',
    getFilms: () => getFilmsByGenre('social'),
  },
  {
    label: 'Genre',
    title: 'Urban',
    viewAllHref: '/browse?genre=urban',
    getFilms: () => getFilmsByGenre('urban'),
  },
  {
    label: 'Genre',
    title: 'Experimental',
    viewAllHref: '/browse?genre=experimental',
    getFilms: () => getFilmsByGenre('experimental'),
  },
  {
    label: 'Genre',
    title: 'Fantasy',
    viewAllHref: '/browse?genre=fantasy',
    getFilms: () => getFilmsByGenre('fantasy'),
  },
  {
    label: 'Genre',
    title: 'Action',
    viewAllHref: '/browse?genre=action',
    getFilms: () => getFilmsByGenre('action'),
  },
  {
    label: 'Genre',
    title: 'Sci-Fi',
    viewAllHref: '/browse?genre=sci-fi',
    getFilms: () => getFilmsByGenre('sci-fi'),
  },
  {
    label: 'Genre',
    title: 'Thriller',
    viewAllHref: '/browse?genre=thriller',
    getFilms: () => getFilmsByGenre('thriller'),
  },
  {
    label: 'Genre',
    title: 'Mystery',
    viewAllHref: '/browse?genre=mystery',
    getFilms: () => getFilmsByGenre('mystery'),
  },
  {
    label: 'Genre',
    title: 'Horror',
    viewAllHref: '/browse?genre=horror',
    getFilms: () => getFilmsByGenre('horror'),
  },
];

export default function FilmSections() {
  return (
    <section className="py-40 px-6 md:px-12 max-w-[1800px] mx-auto space-y-24">
      {SECTIONS.map((section) => (
        <FilmRowSection
          key={section.title}
          label={section.label}
          title={section.title}
          description={section.description}
          viewAllHref={section.viewAllHref}
          viewAllLabel={section.viewAllLabel}
          films={section.getFilms()}
        />
      ))}
    </section>
  );
}
