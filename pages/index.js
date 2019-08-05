import "../styles/index.css";
import Signup from "../components/Signup";
import Explainer from "../components/Explainer";
import Layout from "../components/Layout"

export default () => (
  <div >
    <Layout>
        <Explainer />
        <Signup />
    </Layout>
  </div>
);
