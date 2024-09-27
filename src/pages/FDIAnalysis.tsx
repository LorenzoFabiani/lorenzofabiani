import dynamic from 'next/dynamic';
import {FC, memo} from 'react';  

import Page from '../components/Layout/Page';

const ImpunityIndexPageMeta = {
  title: 'An analysis of the relationship between Foreign Direct Investments and Impunity',
  description: 'Authors: Lorenzo Fabiani and Mario Eboli',
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
            <strong>Abstract:</strong> This study investigates the determinants of Foreign Direct Investment (FDI) in Italy, with a particular focus on the role of local institutions and the prevalence of Impunity as a measure of the quality of legal system. Utilizing a panel dataset from 2008 to 2021 and utilizing fixed effects regression models with robust error estimation techniques, we explore the relationship between FDI and various socio-economic factors such as Impunity, GDP per capita, population size, level of exports, patents, and the business structures. The findings highlight a significant negative impact of impunity on FDI, indicating that an inefficient legal system may elevate perceived investment risks, particularly those related to property rights and dispute resolution. Conversely, factors like population size and regional orientation towards exports and innovation positively correlate with FDI. This comprehensive study underlines the critical role of legal reliability and other economic indicators in attracting FDI, offering valuable insights for policy enhancement to boost Italy's appeal as a destination for foreign investment.
          </p>
        </div>
      </section>
    </Page>
  );
});

// Esporta il componente ImpunityIndex
export default ImpunityIndex;
