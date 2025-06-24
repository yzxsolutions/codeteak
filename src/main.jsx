import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import './index.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core';
import ClickSpark from './components/ClickSpark.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ClickSpark
  sparkColor='#ff0000'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
   <App />
</ClickSpark>
     
    </MantineProvider>
  </StrictMode>,
)
