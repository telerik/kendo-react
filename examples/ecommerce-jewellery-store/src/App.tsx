import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AllProductsListView } from "./pages/AllProductsListView";
import "@progress/kendo-theme-default/dist/all.css";
import { SizedParent } from "./components/SizedParent";

function App() {


  return (
    <>
      <SizedParent>
        <Header />
        <AllProductsListView></AllProductsListView>
        <Footer />
      </SizedParent>
    </>
  );
}

export default App;
