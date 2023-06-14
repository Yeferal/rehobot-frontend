import Image from 'next/image'
import styles from './page.module.css'

// import { ReactQueryClientProvider } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home() {
  const queryClient = new QueryClient();
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
      </div>
    </main>
  )
}
