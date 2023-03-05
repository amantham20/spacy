import React from "react";
import tw from "tailwind-styled-components";
import HomepageFooter from "./HomepageFooter/HomepageFooter";
import HomepageHead1 from "./HomepageHeader/Homepage1";

const Container = tw.div`
  max-w-2xl
  mx-auto
  px-4
  py-8
`;

const Title = tw.h1`
  text-3xl
  font-bold
  mb-4
  text-white font-extrabold tracking-tight

`;

const ItemTitle = tw.h2`
  text-xl
  font-semibold
  mt-8
  mb-2
  text-white font-extrabold tracking-tight
`;

const ItemDescription = tw.p`
  text-gray-300
  leading-relaxed
  mb-4
`;

const ItemDate = tw.p`
  text-sm
  text-gray-300
`;

const RssFeed = () => {
  const items = [
    {
      title: "NASA’s Quantum Detector Achieves World-Leading Milestone",
      description:
        "A new JPL- and Caltech-developed detector could transform how quantum computers, located thousands of miles apart, exchange huge quantities of quantum data.",
      pubDate: "Thu, 02 Mar 2023 00:00:00 -0800",
      link: "https://www.jpl.nasa.gov/news/nasas-quantum-detector-achieves-world-leading-milestone",
    },
    {
      title: "Removing Traces of Life in Lab Helps NASA Scientists Study Its Origins",
      description:
        "A specialized laboratory setup at JPL removes the chemical influence of modern organisms so scientists can study the chemistry that may have led to life’s emergence.",
      pubDate: "Tue, 28 Feb 2023 00:00:00 -0800",
      link: "https://www.jpl.nasa.gov/news/removing-traces-of-life-in-lab-helps-nasa-scientists-study-its-origins",
    },
    {
      title: "Study Finds Venus’ ‘Squishy’ Outer Shell May Be Resurfacing the Planet",
      description:
        "The research uses archival NASA data to show that Venus may be losing heat from geologic activity in regions called coronae, possibly like early tectonic activity on Earth.",
      pubDate: "Thu, 23 Feb 2023 00:00:00 -0800",
      link: "https://www.jpl.nasa.gov/news/study-finds-venus-squishy-outer-shell-may-be-resurfacing-the-planet",
    },
    {
      title: "Dynamic NASA-Built Weather Sensors Enlisted to Track Tropical Cyclones",
      description:
        "Known as COWVR and TEMPEST, the duo is demonstrating that smaller, less expensive science instruments can play an important role in weather forecasting.",
      pubDate: "Thu, 23 Feb 2023 00:00:00 -0800",
      link: "https://www.jpl.nasa.gov/news/dynamic-nasa-built-weather-sensors-enlisted-to-track-tropical-cyclones",
    },
  ];

  return (
    <>
    <div className="flex justify-center pt-20 pb-20 bg-gray-900">

    < HomepageHead1 />
    <Container >
      <Title>News and Features - NASA's Jet Propulsion Laboratory</Title>
      {items.map((item, index) => (
        <div key={index}>
          <ItemTitle>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </ItemTitle>
          <ItemDescription>{item.description}</ItemDescription>
          <ItemDate>{item.pubDate}</ItemDate>
        </div>
      ))}
    </Container>


    </div>
    <HomepageFooter />

    </>
  );
};

export default RssFeed;
