import HeroSection from './ui/hero-section-9'; // Adjust the import path as needed
import { Users, Briefcase, Link as LinkIcon } from 'lucide-react';

const HeroSectionDemo = () => {
  // Sample data to be passed as props
  const heroData = {
    title: (
      <>
        Transforming Spaces  <br /> into Stunning Experiences ✨
      </>
    ),
    subtitle: 'Bringing creativity, comfort, and class together — to design spaces that truly reflect your lifestyle.',
    actions: [
      {
        text: 'Join the Class',
        onClick: () => alert('Join the Class clicked!'),
        variant: 'default',
      },
      {
        text: 'Learn more',
        onClick: () => alert('Learn More clicked!'),
        variant: 'outline',
      },
    ],
    stats: [
      {
        value: '15,2K',
        label: 'Active students',
        icon: <Users className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: '4,5K',
        label: 'Tutors',
        icon: <Briefcase className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: 'Resources',
        label: '',
        icon: <LinkIcon className="h-5 w-5 text-muted-foreground" />,
      },
    ],
    images: [
      'https://dropinblog.net/34246798/files/featured/Home_Interior__Budget_Friendly_Once_for_Every_Homeowner.png',
      'https://www.ibuildinteriors.in/wp-content/uploads/2022/06/3aJPGMr-Shashidar-scaled.jpg',
      'https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg',
    ],
  };

  return (
    <div className="w-full bg-neutral-950 px-4 sm:px-6 lg:px-8 pt-12">
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
      />
    </div>
  );
};

export default HeroSectionDemo;