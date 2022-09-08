import '../styles/globals.css'
import '../styles/All.scss'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Provider } from 'react-redux'
import {store} from '../Redux/store'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
   return(
      <>
 <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <Component {...pageProps} />
            </Provider>
        </QueryClientProvider>
       
          
        
    </>
   
   )
 
 
 

  
}

export default MyApp






