// ads/adsdata.js
import dotenv from 'dotenv';
dotenv.config();

export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export const adStyles = {
  full: {
    maxWidth: '700px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
  sidebar: {
    maxWidth: '160px',
    maxHeight: '600px',
    layout: 'right',
    margin: '12px 0',
    padding: '0',
  },
  below: {
    maxWidth: '700px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
  square: {
    maxWidth: '300px',
    maxHeight: '250px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
};



export const fullAds = [
  {
    id: 'fujitsu_full',
    image: `${BASE_URL}/ads/fujitsu_full.png`,
    title: 'Smarter Optical Networks',
    description: 'Explore Fujitsu’s 800G innovation transforming network performance globally.',
    link: 'https://networkblog.global.fujitsu.com/2023/10/12/how-the-coherent-dsp-evolution-is-enabling-800g-waves-everywhere/?utm_source=google&utm_medium=d-ad&gad_source=5&gad_campaignid=20973821981&gclid=Cj0KCQjwj8jDBhD1ARIsACRV2Tuq0ASUFFxtv7BDpdvkuISIWVfEZsZAR_uo8vat2_7PqYm1fZqc6pgaAnBCEALw_wcB',
  },
  {
    id: 'indeed_full',
    image: `${BASE_URL}/ads/indeed_full.png`,
    title: 'Hire Faster with Indeed',
    description: 'Sponsored job posts help you attract the right talent quickly.',
    link: 'https://in.indeed.com/hire/sponsored-jobs?gclid=EAIaIQobChMIoPvMp6i3jgMVGJxsCR31pAOCEAEYASAAEgJpYfD_BwE&dclid=CIOP3NOot44DFaCeSwUdWZwb9w',
  },
  {
    id: 'maps_full',
    image: `${BASE_URL}/ads/maps_full.png`,
    title: 'Google Maps Platform India',
    description: 'Power your business with real-time location data using Google Maps APIs.',
    link: 'https://mapsplatform.google.com/india/?utm_source=google&utm_medium=cpc&utm_campaign=gmp25_in_pmax_business_pricing&gad_source=5&gad_campaignid=22577154719&gclid=CjwKCAjwmenCBhA4EiwAtVjzmjDnOcTFi3FFahd2mzsMHflxKE5bHkDGE2_H23Pzt2rFmDyb2qw3ORoCrSUQAvD_BwE&gclsrc=aw.ds',
  },
  {
    id: 'semrush_full',
    image: `${BASE_URL}/ads/semrush_full.png`,
    title: 'All-in-One Marketing Toolkit',
    description: 'SEO, PPC, and competitive research tools in one platform.',
    link: 'https://www.semrush.com/lp/marketer-toolkit/en/?dclid=CN3l2-ymt44DFd7NPAIdqjgbLA&sitedcmid=3213511&medium=cpc&campaignid=33529574&placementid=421116644&creativeid=234927878&utm_source=dv360&utm_medium=display&gclid=EAIaIQobChMI1eL9waa3jgMV3s48Ah0gphj4EAEYASAAEgL3svD_BwE',
  },
  {
    id: 'siemens_full',
    image: `${BASE_URL}/ads/siemens_full.png`,
    title: 'Adaptive Production by Siemens',
    description: 'Discover digital solutions for smarter factories and efficiency.',
    link: 'https://www.siemens.com/us/en/company/topic-areas/digital-enterprise/adaptive-production.html?stc=uscg212940&dclid=CjgKEAjwmenCBhCu79H5jtWGtUsSJADI2YtL7KWaEJ9VBvFN2aKU8S7ikbFoE6O3qHrGbz_kxGNI8vD_BwE&gad_source=7',
  },
  {
    id: 'aws_full',
    image: `${BASE_URL}/ads/aws_full.png`,
    title: 'AWS for GenAI Startups',
    description: 'Join AWS programs for startups building with generative AI.',
    link: 'https://aws.amazon.com/startups/programs/generative-ai?trk=39a8adcc-74ac-4af0-bc48-9d109383f501&sc_channel=display+ads',
  },
  {
    id: 'youtube_full',
    image: `${BASE_URL}/ads/youtube_full.png`,
    title: 'Watch the Oscars on YouTube TV',
    description: 'Stream the Oscars live and more with unlimited DVR space.',
    link: 'https://tv.youtube.com/learn/oscars/?utm_campaign=ytv_dr_oscars_q1_2025&utm_source=paid_media&utm_medium=dv360&utm_content=imgs&dclid=CjgKEAjwj8jDBhCR6PzYiq_e_0wSJABCIrLJwaxU_nLpYDGnu8NwPLB18qRK_rFdOAIu3W-va5PJE_D_BwE&gclid=Cj0KCQjwj8jDBhD1ARIsACRV2Tv8IohUcW0XdzJYVhMrQoFeDHXVQPGQk8R6UWOarcqHZelSWtsns-IaAu1OEALw_wcB',
  },
];

export const sidebarAds = [
  {
    id: 'adobe_side',
    image: `${BASE_URL}/ads/adobe_side.png`,
    title: 'Adobe Creative Cloud',
    description: 'Get powerful tools like Photoshop and Illustrator in one plan.',
    link: 'https://www.adobe.com/creativecloud/plans.html?plan=individual&sdid=HCS3XFTQ&mv=display&mv2=display',
  },
  {
    id: 'fiverr_side',
    image: `${BASE_URL}/ads/fiverr_side.png`,
    title: 'Hire Freelancers on Fiverr',
    description: 'Find top-rated talent for design, writing, tech & more.',
    link: 'https://www.fiverr.com/?utm_source=dv360&utm_medium=cpm&utm_campaign=dynamic_rmk&gclid=Cj0KCQjwj8jDBhD1ARIsACRV2Tt8kHCEhfbw7xuvc44DsAJdgcJdNpqwQa0tmDSYzACLSKxhzFfLaC8aAtD2EALw_wcB&dclid=CjgKEAjwj8jDBhCR6PzYiq_e_0wSJABCIrLJjj6O-B95gA4hBBQS9rMQNsJjkeerBbzoanQ6nxRBZ_D_BwE',
  },
  {
    id: 'indeed_side',
    image: `${BASE_URL}/ads/indeed_side.png`,
    title: 'Reach More Job Seekers',
    description: 'Promote your job posts with Indeed sponsored listings.',
    link: 'https://in.indeed.com/hire/sponsored-jobs?gclid=EAIaIQobChMIz_PyqKi3jgMVwAGDAx2JsDCdEAEYASAAEgKL6vD_BwE&dclid=COmYidWot44DFR3ZPAIdoAY0Vg',
  },
  {
    id: 'youtube_side',
    image: `${BASE_URL}/ads/youtube_side.png`,
    title: 'YouTube TV - No Cable Box',
    description: 'Stream live TV and sports on all your devices, anywhere.',
    link: 'https://tv.youtube.com/welcome/?utm_campaign=ytv_dr_evergreen_fy_2025&utm_source=paid_media&utm_medium=dv360&utm_content=imgs&dclid=CMCcgZGPuI4DFaK9jggd3nIpXg&gclid=EAIaIQobChMIv9Wmh4-4jgMVeZ-OCB3OPj2DEAEYASAAEgKrgvD_BwE',
  },
];

export const squareAds = [
  {
    id: 'adobe_square',
    image: `${BASE_URL}/ads/adobe_square.png`,
    title: 'Creative Cloud by Adobe',
    description: 'Design, edit, and create with the best tools in the industry.',
    link: 'https://www.adobe.com/creativecloud/plans.html?plan=individual&sdid=HCS3XFTQ&mv=display&mv2=display',
  },
  {
    id: 'aws_square',
    image: `${BASE_URL}/ads/aws_square.png`,
    title: 'AWS GenAI for Startups',
    description: 'Build and scale faster with AWS tools and funding support.',
    link: 'https://aws.amazon.com/startups/programs/generative-ai?trk=39a8adcc-74ac-4af0-bc48-9d109383f501&sc_channel=display+ads',
  },
  {
    id: 'semrush_square',
    image: `${BASE_URL}/ads/semrush_square.png`,
    title: 'Traffic Analytics by Semrush',
    description: 'Understand your competitors’ strategies and get ahead.',
    link: 'https://www.semrush.com/lp/marketer-toolkit-trafficandmarket/en/?dclid=CKn-19umt44DFYvfPAId2YElhg&sitedcmid=3213511&medium=cpc&campaignid=33592829&placementid=421797763&creativeid=235706912!&utm_source=dv360&utm_medium=display&gclid=EAIaIQobChMIhuSo0aa3jgMVZ5VLBR1VmxFEEAEYASAAEgLljfD_BwE',
  },
  {
    id: 'workspace_square',
    image: `${BASE_URL}/ads/workspace_square.png`,
    title: 'Google Workspace for Business',
    description: 'Secure business email and collaboration tools for your team.',
    link: 'https://workspace.google.com/lp/business/?utm_source=DV360&utm_medium=Display&utm_campaign=1710070-Workspace-DR-APAC-IN-en-DV360-Prospecting-Display-na-393956331-214462517-GWS-2TBStorage100FileTypes&utm_content=%7Bdevice%7D-%7Badgroupid%7D-%7Bnetwork%7D-%7Btargetid%7D-%7Bloc_physical_ms%7D-%7Bcampaignid%7D&utm_term=%7Bkeyword%7D&dclid=CjgKEAjwmenCBhCu79H5jtWGtUsSJADI2YtLp3cHwwdUMyjgvXtL21UzLZqaksVPrJ4ia7xfWXBAd_D_BwE&gad_source=7&gclid=CjwKCAjwmenCBhA4EiwAtVjzml-E3DbG-J1psW-M3y5rU0fHyZc5Ia4GP6WxAMrjjwswIqGSgYvVABoCRdsQAvD_BwE',
  },
];

export const belowAds = [
  ...fullAds,
  {
    id: 'maps_full2',
    image: `${BASE_URL}/ads/maps_full2.png`,
    title: 'Advanced Mapping Tools',
    description: 'Unlock powerful location solutions for enterprise and startups.',
    link: 'https://mapsplatform.google.com/india/?utm_source=google&utm_medium=cpc&utm_campaign=gmp25_in_pmax_business_pricing&gad_source=5&gad_campaignid=22577154719&gclid=CjwKCAjwmenCBhA4EiwAtVjzmgXBu7ivbom9vN7X-mpMTPR0Vr1WJmI3CHDG6L0FbwaOWVGOU6ejiRoC4uEQAvD_BwE&gclsrc=aw.ds',
  },
];


export const ads = {
  full: fullAds,
  sidebar: sidebarAds,
  below: belowAds,
  square: squareAds,
};
