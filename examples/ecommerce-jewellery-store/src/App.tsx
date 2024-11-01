import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AllProductsListView } from "./pages/AllProductsListView";
import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-theme-utils/dist/all.scss";
import { SizedParent } from "./components/SizedParent";

function App() {


  return (
    <>
      <Header />
      <SizedParent>
        <AllProductsListView></AllProductsListView>
      </SizedParent>
      <Footer />
    </>
  );
}

export default App;
