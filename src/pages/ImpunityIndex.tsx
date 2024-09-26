import dynamic from 'next/dynamic';
import {FC, memo} from 'react';  // Rimosso lo spazio tra le parentesi graffe

import Page from '../components/Layout/Page';

// Meta dati per la pagina Impunity Index
const ImpunityIndexPageMeta = {
  title: 'The Role of Impunity: Proposal for a Composite Index',
  description: 'This paper introduces a composite index for impunity, measuring regional disparities in Italy and its impact on socio-economic factors.',
};

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});  // Rimosso lo spazio tra le parentesi graffe

// Componente rinominato in ImpunityIndex
const ImpunityIndex: FC = memo(() => {
  const {title, description} = ImpunityIndexPageMeta;  // Rimosso lo spazio tra le parentesi graffe

  return (
    <Page description={description} title={title}>
      <Header />

      {/* Sezione personalizzata per l'abstract */}
      <section style={{padding: '20px'}}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          <strong>Abstract:</strong> This paper introduces a composite index for impunity,
          which aims to measure regional disparities in Italy from 2008 to 2021. The index highlights
          the significant socio-economic impacts of impunity, especially on foreign direct investments
          and crime reporting. Through an econometric analysis, the findings emphasize the need for
          stronger legal frameworks and targeted policies to reduce regional disparities and promote
          socio-economic stability.
        </p>
      </section>

    </Page>
  );
});

// Esporta il componente ImpunityIndex
export default ImpunityIndex;
