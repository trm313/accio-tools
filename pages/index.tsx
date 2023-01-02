import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout/Layout";
import Cover from "../components/Layout/Cover";
import ToolLinks from "../components/Layout/ToolLinks";

export default function Home() {
  return (
    <Layout>
      <Cover />
      <ToolLinks />
    </Layout>
  );
}
