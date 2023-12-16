import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner';
import Members from './components/TeamPage';
// import Services from './components/Services';
import Cards from './components/Cards';
import AboutUs from './components/AboutUs';
  
  const App = () => (
    <main className="relative">
      <section>
        <Navbar/>
      </section>
      <section>
        <Banner/>
      </section>
      <section>
        <Cards/>
      </section>
      <section>
        <AboutUs/>
      </section>
      {/* <section>
        <Services/>
      </section> */}
      <section>
        <Members/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
  
  export default App;