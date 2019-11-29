import "../styles/index.css";
import Signup from "../components/Signup";
import Explainer from "../components/Explainer";
import Layout from "../components/Layout";
import GaWrapper from "../components/GaWrapper";
import Head from 'next/head'

export default () => (
  <div>
    <Head>
     <title>Purpose Powered by People Ebook - The complete guide to activate employees and embed purpose in your organisation</title>
     <meta name="The complete guide to activate employees and embed purpose in your organisation" content="Download a free ebook on purpose and how to activate in your organisation"/>
     <meta property="og:description" content="The complete guide to activate employees and embed purpose in your organisation."/>
      <meta property="og:type" content="Purpose powered by People - The complete guide to activate employees and embed purpose in your organisation" />
      <meta property="og:title" content="Purpose Powered by People Ebook"/>
      <meta property="og:site_name" content="Purpose Powered by People Ebook" />
      <meta property="og:url" content="https://purpose.goodup.com" />
      <meta property="og:image" content="http://goodup.com/wp-content/uploads/2019/11/email-banner.png"/>
    </Head>
      <GaWrapper>
        <Layout>
            <Explainer />
            <Signup />
        </Layout>
      </GaWrapper>
  </div>
);
