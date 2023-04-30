import BaseSection from './BaseSection';
import FeaturedSection from './FeaturedSection';

type SectionProps = typeof BaseSection & {
  FeaturedSection: typeof FeaturedSection;
};

const Section = BaseSection as SectionProps;
Section.FeaturedSection = FeaturedSection;

export default Section;
