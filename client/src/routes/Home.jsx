import Destination from "../Component/Destination";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
function Home (){
  return(
    <>
      <Navbar />
      <Hero
      cName="hero"  
      heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=MnwxMjA3fD88MHxwaG90by1wYWdlfHx8fGVufD88fHx8&auto=format&fit=crop&w=870&q=80"
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination."
      />
      <Destination />
    </>
    )
}
export default Home;