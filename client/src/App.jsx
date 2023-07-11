import {Loader, Navbar, Welcome, Services, Transactions, Footer} from './components/index.js';

const App = () => {

  return (
    <>
      <div>
        <div className='underline'>
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </>
  )
}

export default App
