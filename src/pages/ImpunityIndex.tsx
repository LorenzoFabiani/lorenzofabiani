import dynamic from 'next/dynamic';
import {FC, memo} from 'react';  

import Page from '../components/Layout/Page';

const ImpunityIndexPageMeta = {
  title: 'The Role of Impunity: Proposal for a Composite Index',
  description: 'This paper introduces a composite index for impunity, measuring regional disparities in Italy and its impact on socio-economic factors.',
};

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});  

const ImpunityIndex: FC = memo(() => {
  const {title, description} = ImpunityIndexPageMeta;  

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
          <h1 style={{textAlign: 'center', marginBottom: '20px'}}>{title}</h1> 
          <p style={{marginBottom: '20px'}}>{description}</p>
            <p style={{marginBottom: '20px'}}>
            <strong>Abstract:</strong> This paper introduces a composite index for impunity,
            which aims to measure regional disparities in Italy from 2008 to 2021. The index highlights
            the significant socio-economic impacts of impunity, especially on foreign direct investments
            and crime reporting. Through an econometric analysis, the findings emphasize the need for
            stronger legal frameworks and targeted policies to reduce regional disparities and promote
            socio-economic stability.
          </p>
        </div>
      </section>
    </Page>
  );
});

// Esporta il componente ImpunityIndex
export default ImpunityIndex;
