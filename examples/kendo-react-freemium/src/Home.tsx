import AppBarComponent from "./components/AppBarComponent";
import DrawerComponent from "./components/DrawerComponent";

import "./Home.css";

export default function Home() {
  return (
    <>
      <AppBarComponent />

      <DrawerComponent>
        <footer className="footer">
          <div>Copyright © 2024 Progress Software. All rights reserved.</div>
        </footer>
      </DrawerComponent>
      {/* <Link to="/">
            <Button themeColor="primary" fillMode="flat" className="k-mr-1">Home</Button>
          </Link>
          <Link to="/grid/">
            <Button themeColor="primary" fillMode="flat">Grid</Button>
          </Link> */}

    </>
  )
}
