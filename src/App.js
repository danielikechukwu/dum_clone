import {Fragment} from 'react'
import Header from './components/Header/Header';
import Main  from './components/main/Main';
import classes from './App.module.css'
import ContactBadge from './components/ContactBadge';

function App() {
  return (
    
    <Fragment className={classes.container}>

      <Header />

      <main>

        <Main />
        
        <ContactBadge />

      </main>
    </Fragment>


  );
}

export default App;
