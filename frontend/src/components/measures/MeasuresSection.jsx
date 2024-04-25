import { CircularPacking } from "./CircularPacking";
import { data } from "./MeasuresData";

const MeasuresSection = ({ width = 700, height = 400 }) => {
    if (width === 0) {
        return null;
    }

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <p className="mt-10 text-lg text-center max-w-4xl">
                    Conservation Measures: Discover the conservation measures taken to protect endangered species.
                </p>
                <CircularPacking width={width} height={height} data={data} />
            </div>
        </div>
    );
};

export default MeasuresSection;