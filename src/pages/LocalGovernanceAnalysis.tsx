import dynamic from 'next/dynamic';
import {FC, memo} from 'react';  

import Page from '../components/Layout/Page';

const ImpunityIndexPageMeta = {
  title: 'Empowering Local Governance for Creating Public Value: A Preliminary Analysis',
  description: 'Authors: Lorenzo Fabiani and Simone Cifolelli',
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
      }}>
        <div style={{maxWidth: '800px'}}> 
          <h1 style={{textAlign: 'center', marginBottom: '20px', color: 'white'}}>{title}</h1> 
          <p style={{marginBottom: '20px', color: 'white'}}>{description}</p>
          {description2 && (
            <p style={{marginBottom: '20px', color: 'white'}}>{description2}</p>
          )}
          <p style={{marginBottom: '20px', color: 'white'}}>
            <strong>Abstract:</strong> This paper investigates the impact of local governance on municipal perfor-mance, specifically through the lens of European Union (EU) fund utiliza-tion. Focusing on Italian municipalities with populations exceeding 50,000, the study explores how the characteristics of mayors - age, gender, and edu-cation -correlate with the effective use of EU resources. By analyzing a com-prehensive dataset, this preliminary analysis seeks to identify patterns and trends that clarify the role of mayoral attributes in fostering public value through efficient fund management. The findings aim to contribute to the discourse on public administration and governance, offering insights that can inform policy and support the enhancement of municipal governance structures across Italy and potentially other EU regions.
          </p>
        </div>
      </section>
    </Page>
  );
});

// Esporta il componente ImpunityIndex
export default ImpunityIndex;
