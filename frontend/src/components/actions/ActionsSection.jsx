import { data } from "./ActionsData";
import { ResponsiveContainer } from 'recharts';
import CirclePacking from './CircularPacking';

const ActionsSection = () => {
    return (
        <div id="actions" className="mx-14">
          <div className="flex flex-col items-center py-20 rounded-3xl bg-neutral-800">
            <h1 className="text-4xl font-bold">What actions should we take to protect endangered species?</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20">
              <div className="w-full lg:w-1/2">
                <p className="mx-20">
                This section presents packed circles categorizing the various conservation actions undertaken to protect endangered species. Each circle represents a different category of action, with its size reflecting the number of animals that benefit from that type of action. This visualization is challenging because the original actions data in our dataset are textual descriptions, not categories. To solve this problem, we first utilized a large language model to classify actions data and then created a Python script to count each category. To implement circle packing, we used D3.js. Currently, it is a static visualization, we will make it interactive, such as allowing visitors to zoom in and out, in the next milestone.
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-10">
                <ResponsiveContainer height="100%" width="100%">
                  <CirclePacking width="100%" data={data} />
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ActionsSection;