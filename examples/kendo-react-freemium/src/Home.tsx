import { Link } from "react-router-dom";

import reactUrl from "./assets/react.svg";
import docsUrl from "./assets/documentation.svg";
import classroomUrl from "./assets/classroom.svg";
import designUrl from "./assets/design.svg";
import licenseUrl from "./assets/license.svg";

import {
  Card,
  CardActions,
  CardBody,
  CardHeader,
  CardTitle
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import AppBarComponent from "./components/AppBarComponent";

import "./Home.css";

export default function Home() {
  return (
    <>
      <AppBarComponent />

      {/* <Link to="/">
            <Button themeColor="primary" fillMode="flat" className="k-mr-1">Home</Button>
          </Link>
          <Link to="/grid/">
            <Button themeColor="primary" fillMode="flat">Grid</Button>
          </Link> */}
      <section className="section-container">
          <img src={reactUrl} alt="React Logo" className="react-logo" />
          <div className="k-d-flex k-flex-col k-my-12">
            <h1 className="welcome-title">Welcome to KendoReact</h1>
            <h3 className="welcome-subtitle">Comprehensive React UI Component Library</h3>

            <div className="k-mt-3">
              <Button themeColor="primary" className="k-mr-2">
                <a href="https://www.telerik.com/kendo-react-ui" target="_blank">Try KendoReact</a>
              </Button>
              <Button themeColor="secondary" fillMode="solid">
                <a href="https://vitejs.dev/" target="_blank">More about Vite</a>
              </Button>
            </div>
          </div>
      </section>
      <section className="section-container get-started">
        <div className="center-section">
          <h5 className="section-title">Get started</h5>
          <div className="k-ml-2">Edit home page at <code>src/Home.tsx</code> or set up data source at <code>src/grid/data.json</code></div>
        </div>
      </section>
      <section className="section-container">
        <div className="cards">
          <h5 className="section-title">Highlights</h5>
          <div className="cards-container">
            <Card>
              <CardHeader>
                <img src={docsUrl} alt="Documentation Logo" width={64} height={64} />
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardBody>
                <p>
                  Unlock the full potential of our features! Check KendoReact Documentation for step-by-step guides and insights.
                </p>
              </CardBody>
              <CardActions>
                <Button themeColor="primary" fillMode="flat">
                  <a href="https://www.telerik.com/kendo-react-ui/components/" target="_blank">Learn more</a>
                </Button>
              </CardActions>
            </Card>

            <Card>
              <CardHeader>
                <img src={classroomUrl} alt="Virtual Classroom Logo" width={64} height={64} />
                <CardTitle>Virtual Classroom</CardTitle>
              </CardHeader>
              <CardBody>
                <p>
                  Need to quickly get started with KendoReact or just prefer video on-boarding materials we have Virtual Classroom for you.
                </p>
              </CardBody>
              <CardActions>
                <Button themeColor="primary" fillMode="flat">
                  <a href="https://rb.gy/w21cc8" target="_blank">Get Started</a>
                </Button>
              </CardActions>
            </Card>

            <Card>
              <CardHeader>
                <img src={designUrl} alt="Design System Logo" width={64} height={64} />
                <CardTitle>Design System</CardTitle>
              </CardHeader>
              <CardBody>
                <p>
                  Quickly apply harmonious and consistent styles to the components in your app with the Progress Design System.
                </p>
              </CardBody>
              <CardActions>
                <Button themeColor="primary" fillMode="flat">
                  <a href="https://www.telerik.com/design-system/docs/" target="_blank">Find your style</a>
                </Button>
              </CardActions>
            </Card>

            <Card>
              <CardHeader>
                <img src={licenseUrl} alt="License Logo" width={64} height={64} />

                <CardTitle>Activate your license</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="card-list">
                  <li>Flexible Licensing Policy</li>
                  <li>Maintenance & Support</li>
                  <li>Total Cost of Ownership</li>
                  <li>Enterprise-Ready Offerings</li>
                </ul>
              </CardBody>
              <CardActions>
                <Button themeColor="primary" fillMode="flat">
                  <a href="https://www.telerik.com/purchase.aspx?filter=web#individual-products" target="_blank">Learn more</a>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>Copyright © 2024 Progress Software. All rights reserved.</div>
      </footer>
    </>
  )
}
