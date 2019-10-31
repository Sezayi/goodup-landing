import "../styles/index.css";
import Explainer from "../components/Explainer";
import Layout from "../components/Layout";
import Thankyou from "../components/Thankyou";
import GaWrapper from "../components/GaWrapper"

export default () => (
    <GaWrapper>
        <Layout>
            <Explainer />
            <Thankyou />
        </Layout>
    </GaWrapper>
);
