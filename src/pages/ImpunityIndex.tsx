import dynamic from 'next/dynamic';
import {FC, memo} from 'react';  

import Page from '../components/Layout/Page';

const ImpunityIndexPageMeta = {
  title: 'The Role of Impunity: Proposal for a Composite Index',
  description: 'Authors: Mario Eboli and Lorenzo Fabiani',
  description2: 'Presented at the 14th Annual Conference Spanish Association of Law and Economics – AEDE, Barcelona, June 27-28, 2024.',
};

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});  

const ImpunityIndex: FC = memo(() => {
  const {title, description, description2} = ImpunityIndexPageMeta;  

  return (
    <Page description={description} title={title}>
      <Header />
      <section style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minheight: '100vh',  
        textAlign: 'justify', 
        padding: '20px',
      }}>
        <div style={{maxWidth: '800px'}}> 
          <h1 style={{textAlign: 'center', marginBottom: '20px', color: 'white'}}>{title}</h1> 
          <p style={{marginBottom: '20px', color: 'white'}}>{description}</p>
          {description2 && (
            <p style={{marginBottom: '20px', color: 'white'}}>{description2}</p>
          )}
          <p style={{marginBottom: '20px', color: 'white'}}>
            <strong>Abstract:</strong> This study introduces a pioneering methodology to quantify impunity at a provincial level within Italy, focusing on the period from 2008 to 2021. By aggregating various indicators, we present the "Impunity Index" that offers insights into regional variations and trends in impunity dynamics. A novel aspect of our approach is the emphasis on economic dimensions, augmenting the traditionally criminal-centric view of impunity. Utilizing techniques like the Analytic Hierarchy Process (AHP) for variable weighting and the Compounded Average Growth Rate (CAGR) for temporal analysis, our study reveals significant regional disparities in impunity levels. Geographical analyses further underscore a north-south gradient, with northern regions typically exhibiting lower impunity levels. This study, one of the first to investigate the issue of impunity at such a granular level, offers a novel perspective on the matter and can possibly be a foundation for further research in Italy and potentially other nations.
          </p>
        </div>
      </section>
    </Page>
  );
});

// Esporta il componente ImpunityIndex
export default ImpunityIndex;
