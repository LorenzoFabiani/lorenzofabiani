import dynamic from 'next/dynamic';
import {FC, memo} from 'react';  

import Page from '../components/Layout/Page';

const ImpunityIndexPageMeta = {
  title: 'The Impact of European Union Funds on Regional Per Capita GDP, An Econometric Analysis',
  description: 'Authors: Lorenzo Fabiani and Andrea Toto',
  description2: 'Presented at the 6th International Conference on Decision Economics - DECON, Salamanca, Spain (Online), June 26-28, 2024',
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
        height: '100vh',  
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
            <strong>Abstract:</strong> The funding policies of the European Union (EU) are pivotal in reducing re-gional disparities and promoting balanced economic growth. Despite sub-stantial financial allocations, their effectiveness remains debated. This study examines the impact of EU funding policies on regional per capita GDP, us-ing data on GDP, EU fund allocations, education rates, and private invest-ments in agriculture, manufacturing, and services. By focusing on these sec-tors and incorporating one- and two-year lags for EU funds and investments, the study captures delayed effects on economic growth. Employing Ordinary Least Squares (OLS) regression and Instrumental Variables (IV) techniques, this research addresses potential endogeneity issues, ensuring robust esti-mates. The dataset includes NUTS2 level data from 2014 to 2021, encom-passing regional GDP per capita, private sectoral investments, education lev-els, and EU funds. The results show a negative relationship between EU funds and regional GDP per capita, suggesting that higher allocations do not necessarily lead to immediate economic growth. Conversely, investments and tertiary education positively impact GDP per capita. These findings con-tribute to the discourse on the efficacy of EU funding policies and provide valuable insights for policymakers. Optimizing fund allocation and designing targeted interventions are crucial for fostering sustainable regional growth. The study underscores the complexity of regional development and the im-portance of considering various factors influencing economic outcomes.
          </p>
        </div>
      </section>
    </Page>
  );
});

// Esporta il componente ImpunityIndex
export default ImpunityIndex;
