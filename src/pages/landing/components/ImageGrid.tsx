import pp1 from "@assets/img/pp1.png";
import pp2 from "@assets/img/pp2.png";
import pp3 from "@assets/img/pp3.png";

const ImageGrid = () => (
  <div className="flex flex-row -mx-3 py-14">
    <div className="">
    <img src={pp1} alt="p1" className="px-4 w-2/7" />
    </div>
    <div className=""><img src={pp2} alt="p2" className="px-4 w-2/7" /></div>
    
    <div className=""><img src={pp3} alt="p3" className="px-4 w-3/7" /></div>
    
  </div>
);

export default ImageGrid;