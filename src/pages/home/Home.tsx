import CTA from "../../components/cta/CTA";
import Category from "../../components/category/Category";
import HomeSection from "../../components/cardSection/HomeSection";


function Home() {
  return (
    <main className="w-full h-auto">
<div className="my-5">
      <HomeSection/>

  
</div>
<div className="my-5">
  
      <Category/> 
</div>
<div className="my-5">
      <CTA/> 
</div>


    </main>
  );
}

export default Home;
