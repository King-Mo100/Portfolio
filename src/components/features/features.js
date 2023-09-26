import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
     <Title title="Features" des="What I Do"/>
     <div className='grid grid-cols-3 gap-20'>
    <Card
    title="App Development"
    des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
     cupiditate adipisci culpa molestiae corporis id."/>
    <Card title=" SEO Optimisation"
    des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
    cupiditate adipisci culpa molestiae corporis id."/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>

     </div>
    </section>
  );
};

export default Features;
