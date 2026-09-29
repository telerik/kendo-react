import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <main className="not-found">
        <p className="not-found__eyebrow">404</p>
        <h1>We could not find that page</h1>
        <p>The collection may have moved, or the link may no longer be available.</p>
        <Button themeColor="primary" onClick={() => navigate("/")}>Return to home</Button>
      </main>
    </Layout>
  );
};
