// Páginas
import ItemsPage from './pages/ItemsPage'
// Contextos
import { DialogContentProvider } from './contexts/DialogContext'
import { ItemsSearchProvider } from './contexts/ItemsSearchContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// Estilização 
import './App.css'



const queryClient = new QueryClient()

const App = ()=> {

    return (
        <QueryClientProvider client={queryClient}>

            <ItemsSearchProvider>
            <DialogContentProvider>
                <ItemsPage />
            </DialogContentProvider>
            </ItemsSearchProvider>

        </QueryClientProvider>
    )
}

export default App
