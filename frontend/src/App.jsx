// Páginas
import ItemsPage from './pages/ItemsPage'
// Contextos
import { DialogContentProvider } from './contexts/DialogContext'
import { ItemsSearchProvider } from './contexts/ItemsSearchContext'

// Estilização 
import './App.css'



const App = ()=> {

    return (
        <ItemsSearchProvider>
        <DialogContentProvider>
            <ItemsPage />
        </DialogContentProvider>
        </ItemsSearchProvider>
    )
}

export default App
