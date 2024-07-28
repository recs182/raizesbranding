import { style } from '@vanilla-extract/css';

const responsiveStyle = ({ desktop }) => ({
  '@media': {
    'screen and (min-width: 1268px)': desktop,
  },
});

export const container = style([
  {
    width: '100%',
  },
  responsiveStyle({ desktop: { maxWidth: 1024 } }),
]);

const flexCenter = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const headerMenu = style([
  {
    padding: '48px 0 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  responsiveStyle({ desktop: { padding: '96px 0 48px' } }),
]);

export const headerMenuNav = style([
  {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '28px',
  },
  responsiveStyle({ desktop: { gridTemplateColumns: '1fr 3fr 1fr', maxWidth: '1024px' } }),
]);

export const headerLogo = style({
  flex: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '> img': { width: '180px' },
});

export const headerLink = style([
  {
    display: 'none',
    color: 'black',
    textDecoration: 'none',
  },
  responsiveStyle({ desktop: { display: 'block' } }),
]);

export const headerLinkLeft = style([
  headerLink,
  {
    textAlign: 'left',
  },
]);

export const headerLinkRight = style([
  headerLink,
  {
    textAlign: 'right',
  },
]);

export const sectionNourish = style({
  padding: '96px 48px 48px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const sectionNourishHeadline = style({
  marginBottom: '48px',
  width: '100%',
  maxWidth: '400px',
});

export const sectionNourishSentence = style([
  {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr',
    flexDirection: 'row',
    gap: '48px',
  },
  responsiveStyle({ desktop: { gridTemplateColumns: '1fr 1fr', gap: '96px' } }),
]);

export const sectionNourishCTA = style({
  padding: '8px 52px',
  width: 'fit-content',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: '16px',
  textAlign: 'center',
  textTransform: 'uppercase',
  backgroundColor: '#5C4DEE',
  border: '1px solid #000000',
  borderRadius: '100%',
});

export const landingCta = style([
  {
    position: 'relative',
    padding: '96px 0 150px 48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    selectors: {
      '&::before': {
        content: '',
        position: 'absolute',
        top: 48,
        left: 0,
        width: '100%',
        height: 'calc(100% - 48px)',
        backgroundImage: "url('/landing-background.png')",
        backgroundRepeat: 'repeat',
      },
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "url('/landing-leafs.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      },
    },
  },
  responsiveStyle({
    desktop: {
      selectors: {
        '&::before': {
          height: 'calc(100% - 96px)',
        },
        '&::after': {
          content: '',
        },
      },
    },
  }),
]);

export const landingContainer = style([
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  responsiveStyle({
    desktop: {
      display: 'block',
    },
  }),
]);

export const landingMain = style([
  {
    color: '#EC92F6',
    fontSize: '48px',
    fontWeight: 'bold',
    lineHeight: '48px',
    transition: 'font-size 175ms',
  },
  responsiveStyle({ desktop: { fontSize: '100px', lineHeight: '96px' } }),
]);

export const landingDetail = style([
  {
    position: 'absolute',
    bottom: '-190px',
    left: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '450px',
    height: 120,
    color: 'black',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#A9D8FF',
    border: '1px solid black',
    borderRadius: '100%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },
  responsiveStyle({ desktop: { height: 150, fontSize: '24px' } }),
]);

export const sectionBrands = style([flexCenter]);

export const sectionBrandsContainer = style([
  container,
  {
    padding: '48px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    textAlign: 'center',
    backgroundColor: '#DDE26F',
    borderRadius: '8px',
    boxShadow: '4px 4px 20px rgba(0,0,0,0.10)',
  },
]);

export const sectionBrandsHeadline = style({
  fontSize: '42px',
  textTransform: 'uppercase',
});

export const sectionBrandsWrapper = style([
  {
    marginTop: '32px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    rowGap: '64px',
  },
  responsiveStyle({
    desktop: {
      gridTemplateColumns: '1fr 1fr 1fr',
      alignItems: 'center',
      rowGap: '0',
      columnGap: '64px',
    },
  }),
]);

export const sectionIntroduce = style([
  flexCenter,
  {
    marginTop: '96px',
  },
]);

export const sectionIntroduceHeadline = style({
  fontSize: '42px',
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const sectionIntroducePeople = style([
  {
    marginTop: '72px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '28px',
    '> div': { flex: 1 },
  },
  responsiveStyle({
    desktop: {
      flexDirection: 'row',
    },
  }),
]);

export const sectionIntroducePeoplePhoto = style({ height: '550px', '> img': { maxWidth: '390px', height: 'auto', borderRadius: '16px' } });

export const sectionIntroducePerson = style([
  {
    padding: '0 48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    selectors: {
      '& + &': {
        marginTop: '32px',
      },
    },
  },
  responsiveStyle({
    desktop: {
      padding: 0,
    },
  }),
]);

export const sectionIntroducePersonName = style({ color: '#5C4DEE', fontSize: '18px' });

export const sectionDescription = style([
  flexCenter,
  {
    position: 'relative',
    marginTop: '96px',
    padding: '96px 48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundImage: "url('/description-background.png')",
    backgroundRepeat: 'repeat',
  },
]);

export const sectionDescriptionContainer = style([container, { display: 'flex', flexDirection: 'column', gap: 32 }]);

export const sectionDescriptionHeadline = style([
  {
    fontSize: '28px',
    lineHeight: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  responsiveStyle({ desktop: { fontSize: '48px', lineHeight: '50px' } }),
]);

export const sectionDescriptionText = style({ textAlign: 'center' });

export const sectionDescriptionCTA = style([
  {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    padding: '32px',
    width: 'fit-content',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#F6AF9D',
    border: '1px solid black',
    borderRadius: '50%',
    transform: 'translate(-50%, 50%)',
    whiteSpace: 'nowrap',
  },
  responsiveStyle({ desktop: { padding: '32px 64px' } }),
]);

export const sectionExpertise = style([flexCenter, { marginTop: '32px', padding: '96px 0' }]);

export const sectionExpertiseHeadline = style([
  {
    fontSize: '32px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  responsiveStyle({ desktop: { fontSize: '42px' } }),
]);

export const sectionExpertiseServices = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '28px',
  },
  responsiveStyle({
    desktop: {
      flexDirection: 'row',
    },
  }),
]);

export const sectionExpertiseServicesService = style({
  marginTop: '36px',
  width: '240px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  textAlign: 'center',
});

const sectionExpertiseServiceHighlight = style({
  width: '240px',
  height: '240px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#EC92F6',
  fontSize: '26px',
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export const highlightBranding = style([sectionExpertiseServiceHighlight, { backgroundImage: "url('/services/branding.svg')" }]);

export const highlightSocialMedia = style([sectionExpertiseServiceHighlight, { backgroundImage: "url('/services/social-media.svg')" }]);

export const highlightWebsites = style([
  sectionExpertiseServiceHighlight,
  { color: '#DDE26F', backgroundImage: "url('/services/websites.png')", backgroundSize: 'contain' },
]);

export const sectionExpertiseServiceDescription = style({
  marginTop: '46px',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '12px',
  textAlign: 'center',
});

export const sectionExpertiseServicesDescriptionBorder = style({
  marginTop: '48px',
  width: '100%',
  maxWidth: '80%',
  height: '1px',
  backgroundColor: 'black',
});

const converted = {
  '.text-underline': { fontWeight: 'bold', textDecoration: 'underline' },
  'footer.footer': {
    padding: '0 0 96px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderBottom: '32px solid #DDE26F',
  },
  '.footer-logo': { maxWidth: '180px' },
};
