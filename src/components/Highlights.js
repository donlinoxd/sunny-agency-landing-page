import MilkBottles from "../images/mobile/image-gallery-milkbottles.jpg";
import Orange from "../images/mobile/image-gallery-orange.jpg";
import Cone from "../images/mobile/image-gallery-cone.jpg";
import SugarCubes from "../images/mobile/image-gallery-sugar-cubes.jpg";
import MilkBottlesDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import OrangeDesktop from "../images/desktop/image-gallery-orange.jpg";
import ConeDesktop from "../images/desktop/image-gallery-cone.jpg";
import SugarCubesDesktop from "../images/desktop/image-gallery-sugarcubes.jpg";

const Highlights = () => {
  return (
    <div className="flex flex-wrap">
      <picture className="w-1/2 md:w-1/4">
        <source media="(min-width: 640px)" srcSet={MilkBottlesDesktop} />
        <img src={MilkBottles} alt="Milk Bottles" />
      </picture>
      <picture className="w-1/2 md:w-1/4">
        <source media="(min-width: 640px)" srcSet={OrangeDesktop} />
        <img src={Orange} alt="Orange" />
      </picture>
      <picture className="w-1/2 md:w-1/4">
        <source media="(min-width: 640px)" srcSet={ConeDesktop} />
        <img src={Cone} alt="Cone" />
      </picture>
      <picture className="w-1/2 md:w-1/4">
        <source media="(min-width: 640px)" srcSet={SugarCubesDesktop} />
        <img src={SugarCubes} alt="Sugar Cubes" />
      </picture>
    </div>
  );
};

export default Highlights;
