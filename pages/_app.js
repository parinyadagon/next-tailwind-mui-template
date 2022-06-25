import '../styles/globals.css'


import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles';
import DefaultLayout from '@/components/Layout/DefaultLayout';




function MyApp({ Component, pageProps }) {

  return (
    <StyledEngineProvider injectFirst >
      <CssBaseline />
      <DefaultLayout >
        <Component   {...pageProps} />
      </DefaultLayout>
    </StyledEngineProvider>
  )
}

export default MyApp
