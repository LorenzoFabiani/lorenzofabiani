import dynamic from 'next/dynamic';
import {FC, memo} from 'react';  

import Page from '../components/Layout/Page';

const ImpunityIndexPageMeta = {
  title: 'Regional Disparities and Economic Convergence in Italy: A Theoretical and Empirical Perspective',
  description: 'Authors: Lorenzo Fabiani and Andrea Toto',
  description2: 'Presented at the 6th International Conference on Decision Economics - DECON, Salamanca, Spain (Online), June 26-28, 2024.',
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
        minHeight: '100vh',  
        textAlign: 'justify', 
        padding: '20px',
        overflowY: 'auto',
        paddingTop: '10vh',
    }}>
        <div style={{maxWidth: '800px'}}> 
          <h1 style={{textAlign: 'center', marginBottom: '20px', color: 'white'}}>{title}</h1> 
          <p style={{marginBottom: '20px', color: 'white'}}>{description}</p>
          {description2 && (
            <p style={{marginBottom: '20px', color: 'white'}}>{description2}</p>
          )}
          <p style={{marginBottom: '20px', color: 'white'}}>
            <strong>Abstract:</strong> This study examines economic convergence among Italian regions from 1995 to 2022, focusing on beta and sigma convergence. Beta convergence assesses whether poorer regions grow faster than richer ones by analyzing the relationship between initial per capita GDP levels and subsequent growth rates. The results show no overall beta convergence for the entire period, as economic disparities widened. Notably, a trend toward convergence is observed from 1995 to 2008, followed by divergence from 2008 to 2022, primarily due to the eco-nomic crisis. Sigma convergence, which measures the reduction in regional dis-parities, aligns with these findings, showing a decrease in disparities before the crisis and an increase afterward. Significant regional variations are highlighted, with Basilicata experiencing growth due to a resurgence in automotive produc-tion, while regions like Umbria and Valle d'Aosta face stagnation due to struc-tural issues. These results underscore the need for targeted policies to promote economic convergence and reduce regional disparities, considering the spatial distribution of economic activities and localized dynamic externalities. The anal-ysis emphasizes the impact of the economic crisis on regional dynamics, exacer-bating pre-existing differences and hindering convergence efforts.
          </p>
        </div>
      </section>
    </Page>
  );
});

// Esporta il componente ImpunityIndex
export default ImpunityIndex;
