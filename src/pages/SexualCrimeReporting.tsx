import dynamic from 'next/dynamic';
import {FC, memo} from 'react';  

import Page from '../components/Layout/Page';

const ImpunityIndexPageMeta = {
  title: 'Heterogeneity of sexual crimes reporting in Italian provinces and the effect of the Impunity',
  description: 'Authors: Lorenzo Fabiani and Mario Eboli',
  description2: 'Work in Progress...',
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
            <strong>Abstract:</strong> The complex interplay between impunity, socioeconomic factors, and the reporting of sexual violence remains an underexplored domain. This study bridges this gap by examining the influence of perceived impunity and economic conditions on the propensity to report sexual violence across 106 Italian provinces from 2008 to 2020. Utilizing a robust panel data analysis, we delve into the nonlinear dynamics governing reporting behaviors. Our findings reveal that higher levels of perceived impunity, indicative of a less efficient judicial system, significantly deter victims from reporting sexual violence. Moreover, the study uncovers the nonlinear impact of economic conditions, such as GDP per capita and female unemployment rates, on reporting rates. These intricate relationships underscore the multifaceted nature of crime reporting, shaped by a tapestry of cultural, economic, and legal factors. The study contributes to the discourse on crime reporting by highlighting the necessity for comprehensive strategies that address not only the judicial inefficiencies but also the socioeconomic and cultural barriers to reporting. Our findings advocate for a holistic approach, where enhancing judicial efficiency is complemented by raising rights awareness and promoting equitable economic policies. This research holds implications for policymakers and law enforcement agencies, emphasizing the need to consider the submerged portion of unreported crimes and the complex factors influencing reporting behaviors. By shedding light on these dynamics, the study tiles the way for more informed policies and practices aimed at encouraging the reporting of sexual violence and, ultimately, fostering a safer and more just society. 
          </p>
        </div>
      </section>
    </Page>
  );
});

// Esporta il componente ImpunityIndex
export default ImpunityIndex;
