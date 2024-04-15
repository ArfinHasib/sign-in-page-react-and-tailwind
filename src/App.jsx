import Form from './components/Form';
import Hero from './components/Hero';

const App = () => {
   return (
      <main className='bg-hero w-full h-[100vh] bg-no-repeat bg-cover'>
         <Hero />
         <Form />
      </main>
   );
};

export default App;
