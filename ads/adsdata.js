// ads/adsdata.js
import dotenv from 'dotenv';
dotenv.config();

export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export const adStyles = {
  full: {
    maxWidth: '700px',
    maxHeight: '90px',
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
    maxHeight: '90px',
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
    id: 'ad1',
    image: `${BASE_URL}/ads/full1.jpeg`,
    title: 'Make it with Creative Cloud',
    description: 'Apps for photography, design, video, and web from US$9.99/mo.',
    link: 'https://www.adobe.com/in/creativecloud.html?sdid=2XBSBSCZ&mv=search&mv2=paidsearch&ef_id=CjwKCAjwyb3DBhBlEiwAqZLe5L1FZWCmsOXX2SOvIFhx7nOMjcyf4qRA0jbpIetIHCzMbOMJVhKmhBoCVNwQAvD_BwE:G:s&s_kwcid=AL!3085!3!697692787589!b!!g!!adobe%20character%20animator%20trial!8628335439!158378632541&gad_source=1&gad_campaignid=8628335439&gbraid=0AAAAADoVWmR_tnOFf2AvnWIdGS9ruzpqB&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5L1FZWCmsOXX2SOvIFhx7nOMjcyf4qRA0jbpIetIHCzMbOMJVhKmhBoCVNwQAvD_BwE',
  },
  {
    id: 'ad2',
    image: `${BASE_URL}/ads/full2.jpeg`,
    title: 'Service Now plans',
    description: 'Streamlining processes with embedded AI',
    link: 'https://www.servicenow.com/blogs/2024/how-leaders-are-using-ai-platforms?campid=232207&cid=ap:awa:albu:prgg:25q2:idcbloghowtechnology_nas_paitw2:none:sna:ctr&utm_medium=display&utm_source=dv360&cmcid=33259447&cmpid=418566586&cmaid=611386730&&cmrid=233286679&dclid=CKSqpruBtI4DFTm-ZgIdO3gvBQ&gclid=EAIaIQobChMI76_AuYG0jgMVMJ7YBR3_ExHfEAEYASAAEgLvrfD_BwE',
  },
];

export const sidebarAds = [
  {
    id: 'ad3',
    image: `${BASE_URL}/ads/side1.jpeg`,
    title: 'Make it with Creative Cloud',
    description: 'Apps for photography, design, video, and web from US$9.99/mo.',
    link: 'https://www.adobe.com/in/creativecloud.html?sdid=2XBSBSCZ&mv=search&mv2=paidsearch&ef_id=CjwKCAjwyb3DBhBlEiwAqZLe5L1FZWCmsOXX2SOvIFhx7nOMjcyf4qRA0jbpIetIHCzMbOMJVhKmhBoCVNwQAvD_BwE:G:s&s_kwcid=AL!3085!3!697692787589!b!!g!!adobe%20character%20animator%20trial!8628335439!158378632541&gad_source=1&gad_campaignid=8628335439&gbraid=0AAAAADoVWmR_tnOFf2AvnWIdGS9ruzpqB&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5L1FZWCmsOXX2SOvIFhx7nOMjcyf4qRA0jbpIetIHCzMbOMJVhKmhBoCVNwQAvD_BwE',
  },
  {
    id: 'ad4',
    image: `${BASE_URL}/ads/side2.jpeg`,
    title: 'Smart Investing with ICICI Lombard',
    description: 'Grow your money with local investment insights.',
    link: 'https://www.icicilombard.com/travel-insurance?source=prodcategory&opt=travel#products',
  },
];
export const squareAds = [
    {
    id: 'ad5',
    image: `${BASE_URL}/ads/square1.jpeg`,
    title: 'Make it with Creative Cloud',
    description: 'Apps for photography, design, video, and web from US$9.99/mo.',
    link: 'https://www.adobe.com/in/creativecloud.html?sdid=2XBSBSCZ&mv=search&mv2=paidsearch&ef_id=CjwKCAjwyb3DBhBlEiwAqZLe5L1FZWCmsOXX2SOvIFhx7nOMjcyf4qRA0jbpIetIHCzMbOMJVhKmhBoCVNwQAvD_BwE:G:s&s_kwcid=AL!3085!3!697692787589!b!!g!!adobe%20character%20animator%20trial!8628335439!158378632541&gad_source=1&gad_campaignid=8628335439&gbraid=0AAAAADoVWmR_tnOFf2AvnWIdGS9ruzpqB&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5L1FZWCmsOXX2SOvIFhx7nOMjcyf4qRA0jbpIetIHCzMbOMJVhKmhBoCVNwQAvD_BwE',
  },
      {
    id: 'ad6',
    image: `${BASE_URL}/ads/square2.jpeg`,
    title: 'Hisense TV',
    description: 'TVs with Dolby Vision HDR and 4K UHD',
    link: 'https://www.amazon.in/dp/B0F4X6CM36/?aref=%5B%5BCS_MADS_TOKEN%5D%5D&aaxitk=5355da6c92bd6fbbc4f447e1075bedd6&ref=AAP_%7BCREATIVE_ID%7D&tag=ss-us-20&th=1',
  },
]

export const belowAds = [...fullAds];

export const ads = {
  full: fullAds,
  sidebar: sidebarAds,
  below: belowAds,
  square: squareAds,
};
