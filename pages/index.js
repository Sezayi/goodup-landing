import "../styles/index.css";
import Signup from "../components/Signup";
import Explainer from "../components/Explainer";
import Layout from "../components/Layout";
import GaWrapper from "../components/GaWrapper"

export default () => (
  <div>
      <GaWrapper>
        <Layout>
            <Explainer />
            <Signup />
        </Layout>
      </GaWrapper>
  </div>
);
