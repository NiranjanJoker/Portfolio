module.exports = {
  siteTitle: 'Niranjan Surya Prasad',
  siteDescription:
    'Niranjan Surya Prasad is an upcoming Cyber Security Professional, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Niranjan Surya Prasad, Niranjan, Joker, NiranjanSuryaPrasad, Cyber Security, Blockchain, Cloud Developer, python, java, VIT, Bhopal, Chennai',
  siteUrl: 'https://niranjanjoker.github.io/Portfolio/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Niranjan Surya Prasad',
  location: 'Chennai, India',
  email: 'niranjansuryaprasad41@gmail.com',
  github: 'https://github.com/NiranjanJoker',
  twitterHandle: 'https://twitter.com/NiranjanJoker',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/NiranjanJoker',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/niranjan-surya-prasad/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/niranjan_joker/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/NiranjanJoker',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#featured',
    },
    {
      name: 'Certifications',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
