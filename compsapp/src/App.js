import DropDownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';
import Sidebar from './components/navbar/Sidebar';
import Route from './components/navbar/Route';


function App() {

  return (
    <div className="container mx-auto frid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/dropdown'>
          <DropDownPage/>
        </Route>
        <Route path='/buttons'>
          <ButtonPage/>
        </Route>
        <Route path='/modals'>
          <ModalPage/>
        </Route>
        <Route path='/tables'>
          <TablePage/>
        </Route>
        <Route path='/counter'>
          <CounterPage initialCount={1}/>
        </Route>
      </div>
    </div>
  );
}

export default App;
