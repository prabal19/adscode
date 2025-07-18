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
  {
  id: 'proton_full',
  image: `${BASE_URL}/ads/proton_full.png`,
  title: 'Proton VPN – Secure Your Online Freedom',
  description: 'Protect your privacy with Proton VPN’s fast, no-log encrypted network.',
  link: 'https://protonvpn.com/l/vpn-home-plans-offer?url_id=0&utm_campaign=ww-all-2c-vpn-gro_aff-g_acq-partners_program&utm_source=aid-tune-11345&utm_medium=link&utm_term=vpn_home_plans_offer_hfp_landing&utm_content=26&phfp=true',
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
  id: 'honda_side',
  image: `${BASE_URL}/ads/honda_side.png`,
  title: 'Honda Special Offers',
  description: 'Explore the latest lease deals and offers on Honda SUVs and more.',
  link: 'https://automobiles.honda.com/tools/current-offers?pid=417084910&cid=pdd_dsc_rpa&cmpcd=PRG_namy_plt_su_mid_suv-lease_html_160x600&gclid=Cj0KCQjwm93DBhD_ARIsADR_DjGYcJlRj-SDOI5u8UBjnE9jPrQLP_KZOc7iRILPA5YXiOYrx4wd-_8aAulvEALw_wcB&dclid=CjkKEQjwm93DBhCf4ovg47mp4aQBEiQAwzAKcD_MKFjzMrJ2AYkki57G-HSiwn7KxryfA_juULs4vePw_wcB#modelseries=pilot',
},
{
  id: 'honda_side2',
  image: `${BASE_URL}/ads/honda_side2.png`,
  title: 'Honda Passport – Adventure Ready',
  description: 'Discover the all-new Honda Passport with smart tech and rugged design.',
  link: 'https://automobiles.honda.com/passport?&pid=417084667&cid=pdd_dsc_rpa&cmpcd=PRG_my26_pas_au_mid_techconnectivity_html_160x600&gclid=Cj0KCQjwm93DBhD_ARIsADR_DjFEDJvDBIfS8I5xQ__g92wKbeAHSJpMwqf9Vl6m0V3m3y_IdDn1SRMaAtpaEALw_wcB&dclid=CjkKEQjwm93DBhCf4ovg47mp4aQBEiQAwzAKcP4kk_N32GFRGJztORH0ZEs_frlsuZxZe8_w2tpu9qTw_wcB',
},
{
  id: 'autodesk_side',
  image: `${BASE_URL}/ads/autodesk_side.png`,
  title: 'Autodesk Media & Entertainment',
  description: 'Create stunning visual effects and animations with Autodesk tools.',
  link: 'https://www.autodesk.com/campaigns/media-entertainment?mktvar002=7108015%7cDSP%7c33659825%7c423580956%7c236644580',
},
{
  id: 'boeing_side',
  image: `${BASE_URL}/ads/boeing_side.png`,
  title: 'Careers at Boeing',
  description: 'Join Boeing and help build the future of aerospace and innovation.',
  link: 'https://jobs.boeing.com/bca?ss=paid&utm_campaign=TB360-PROS-P&utm_medium=display&utm_source=TalentBrew360&utm_content=422062323&gclid=Cj0KCQjwm93DBhD_ARIsADR_DjHBq8gnP771O1qyKBJMuIVkhhFQ47adqaIvkbWS280-y3wPre6y7dMaAj8nEALw_wcB',
},
{
  id: 'comcast_side',
  image: `${BASE_URL}/ads/comcast_side.png`,
  title: 'Comcast Business Bundles',
  description: 'Get reliable internet, phone, and TV solutions for your business.',
  link: 'https://business.comcast.com/business-bundles?CMP=BAC-33620954-6522286-422848377-236223585',
},
{
  id: 'disney_side',
  image: `${BASE_URL}/ads/disney_side.png`,
  title: 'Disney+ Bundle – Stream More',
  description: 'Get Disney+, Hulu, and ESPN+ together. One epic entertainment bundle.',
  link: 'https://www.disneyplus.com/welcome/disney-hulu-espn-bundle?cid=DSS-ProgDisplay-Oath-31838141-421891008-614324578-235915773&dclid=CjkKEQjwm93DBhCf4ovg47mp4aQBEiQAwzAKcGxyjBsO9_gWbOQpEPcBs22Kb7UlsrrjaWgP0PAhacrw_wcB',
},
{
  id: 'disney_side2',
  image: `${BASE_URL}/ads/disney_side2.png`,
  title: 'Disney+, Hulu & Max Bundle',
  description: 'Stream Disney+, Hulu, and Max together in one powerful bundle.',
  link: 'https://www.disneyplus.com/welcome/disney-hulu-hbo-max-bundle',
},

  {
  id: 'toyota_side',
  image: `${BASE_URL}/ads/toyota_side.png`,
  title: 'Toyota Deals & Incentives',
  description: 'Discover the latest local offers and savings on Toyota vehicles.',
  link: 'https://www.toyota.com/westernwashington/deals-incentives/?siteid=tda_dis_wwn_wwtdaa_Infillion_inmarket_banner',
},
{
  id: 'proton_side',
  image: `${BASE_URL}/ads/proton_side.png`,
  title: 'Proton VPN – Secure Your Browsing',
  description: 'Stay private online with fast, encrypted VPN from Proton.',
  link: 'https://protonvpn.com/l/vpn-home-plans-offer?url_id=0&utm_campaign=ww-all-2c-vpn-gro_aff-g_acq-partners_program&utm_source=aid-tune-11345&utm_medium=link&utm_term=vpn_home_plans_offer_hfp_landing&utm_content=26&phfp=true',
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
