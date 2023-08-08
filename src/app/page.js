
import Faq from "../components/Faq";
import Form from "../components/Form";
import Scroll from "../components/Horizontalscroll";
import Cards from "../components/Cards.js"
import CursorComponent from "../components/CursorComponent.js"
import Foot from "../components/Foot"
import BigText from "../components/Bigtext";
import Head from "next/head";
import Videosr from "@/components/Videosr";
import Brutalcallus from "@/components/Brutalcallus";
import Parabigtxt from "@/components/Parabigtxt";
import { Model } from "@/components/Model";

const home = () => {
  return ( 
<>
    <div>
{/*
  */ }
    <div style={{position:"relative",height:"100vh",width:"100%"}}>
      <Model/>
  <BigText/>
  <img
  src="/mouse.gif"
  alt="mouse animation"
  width={100}
  className="hom"
  style={{
    position: "absolute",
    zIndex: "-9",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "0",
  }}
/>

    </div>
    <Parabigtxt/>
    <CursorComponent/>
    <Scroll/>
    <Brutalcallus/>
    <Cards/>
    <Videosr/>
      <Faq/>
      <Form/>
      <Foot/>
    </div>
</>
   );
}
 
export default home;