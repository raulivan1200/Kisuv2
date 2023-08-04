import BigText from "@/components/Bigtext";
import CursorComponent from "@/components/CursorComponent";
import Foot from "@/components/Foot";
import { Model } from "@/components/Model";
import Spparabigtxt from "@/components/SpanishComponents/SpBigtext";
import SpBrutalcallus from "@/components/SpanishComponents/SpBrutalcallus";
import Spcards from "@/components/SpanishComponents/SpCards";
import Spscroll from "@/components/SpanishComponents/SpaHorizontalscroll";
import Spfaq from "@/components/SpanishComponents/Spfaq";
import Spform from "@/components/SpanishComponents/Spform";
import Videosr from "@/components/Videosr";

const Esp = () => {
    return ( 
        <div>
                <div style={{position:"relative",height:"100vh",width:"100%"}}>
      <Model/>
      <BigText/>
                </div>
    <CursorComponent/>
    <Spparabigtxt/>
            <Spscroll/>
            <SpBrutalcallus/>
            <Spcards/>
            <Videosr/>
            <Spfaq/>
            <Spform/>
            <Foot/>
        </div>
     );
}
 
export default Esp;