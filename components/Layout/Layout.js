import Head from "next/head";
import { Router } from "next/router";
import { useState } from "react";
import { FRONTEND_URL } from "config";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader/Loader";

const Layout = ({
  children,
  title,
  description,
  keywords,
  type,
  url,
  image,
  banner,
}) => {
  const [pageLoading, setPageLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setPageLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setPageLoading(false);
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href={url} />
        {/* open graph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Atik Faruk" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content={title} />
      </Head>

      {/* loading indicator */}
      {pageLoading && <Loader />}
      {/* navbar and header */}
      <Header banner={banner} />
      {/* all contents */}
      <main>{children}</main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "আতিক ফারুক - লেখালেখি",
  description:
    "আমার লেখালেখির পৃথিবীতে আপনাকে স্বাগত। সামান্য লেখক হিসেবে আপনাদের জন্য আমাদের এসমস্ত আয়োজন।",
  keywords:
    "আতিক ফারুক, atik faruk, আতিকফারুক, atikfaruk, আতিক, atik, ফারুক, faruk, আতিক ফারুক ব্লগ, atik faruk blogs, আতিকফারুকব্লগ, atikfarukblogs, লেখালেখি, lekhalekhi, ব্লগ, blog, blogs, আলোকচিত্র, বইপত্র, চূর্ণভাবনা, সিনেমা, ধর্ম, দিনলিপি, গদ্য, গল্প, কবিতা, লেখক, লিটলম্যাগ, মুক্তগদ্য, অণুগল্প, পত্রালাপ, প্রবন্ধ, সাক্ষাৎকার, ভাষান্তর, ভ্রমণকাহিনি, goddo, golpo, muktogoddo, kobita, probondho, onugolpo, dinlipi, vromonkahini, churnovabona, vashantor, shakkhatkar, littlemag, alokchitro, cinema, boipotro, lekhok, potralap, dhormo",
  type: "website",
  url: `${FRONTEND_URL}`,
  image:
    "https://res.cloudinary.com/dnljodavm/image/upload/v1669628157/atik_faruk_website_banner_ab2e9f166f.jpg",
};
