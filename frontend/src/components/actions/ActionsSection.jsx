import { data } from "./ActionsData";
import { ResponsiveContainer } from 'recharts';
import CirclePacking from './CircularPacking';
import Navbar from '../Navbar';
import ScrollToTopButton from '../ScrollToTopButton';

const ActionsSection = () => {
    return (
      <div id="actions" className="section-container">
        <h1 className="title">What actions should we take to protect endangered species?</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2">
            <p className="px-20 text-justify">
              A wondrous variety of wildlife enriches our lives in many ways. Let us take action now 
              to protect endangered species. These packed circles represent conservation efforts for 
              endangered species, where each circle indicates a category of action. Click to zoom in 
              and reveal subcategories. The size of each circle reflects the number of animals that 
              benefit from these actions. The larger the circle, the wider the impact of this action on 
              endangered species. 
              <br />< br />
              In our original dataset, conservation actions for each species were described textually, 
              making it difficult to determine their categories and importance. Therefore, we used 
              a large language model (LLM) to classify and quantify the conservation actions, enabling 
              us to present this clear visualization.
            </p>
          </div>
          <div className="chart-container">
            <ResponsiveContainer height="100%" width="100%">
              <CirclePacking width="100%" data={data} />
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
}

export default ActionsSection;