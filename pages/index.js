import Head from "next/head";
import DraggableComponent from "../components/DraggableComponent";
import DrImage from "../components/DrImage";
import DrTitle from "../components/DrTitle";
import DrText from "../components/DrText";
import { ComponentsProvider } from "../contexts/ComponentsContext";
import Preview from "../components/Preview";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ComponentsProvider>
        <main>
          <span style={{
            fontSize:'40px', 
            fontWeight: '500', 
            padding: '1rem 0 1rem 0', 
            display: 'block',
            color: 'hsl(184deg 15% 58%)'
           }}>
            ILABU Page Builder   
          </span>
          <div className={styles.main}>
            <Preview />
            <div 
            style={{ 
              display: 'grid',
              columnGap: '1rem',
              gridTemplateColumns: 'auto auto',
              gridTemplateRows: '6.5rem',
              rowGap: '1rem',
              margin: '0 0 0 2rem'
              }}>
              {/* <DraggableComponent /> */}
              <DrTitle/>
              <DrText/>
              <DrImage/>
            </div>
          </div>
        </main>
      </ComponentsProvider>
    </div>
  );
}
