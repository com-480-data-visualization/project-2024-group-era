import { CircularPacking } from "./CircularPacking";
import { data } from "./MeasuresData";

const MeasuresSection = ({ width = 700, height = 400 }) => {
    if (width === 0) {
        return null;
    }

    return (
        <div id="actions" className="min-h-screen pt-24">
            <h2 className="text-3xl font-semibold text-center mt-10">Conservation Actions</h2>
            <div className="flex flex-col items-center ]lg:mt-20">
                <p className="mt-10 text-lg text-center max-w-4xl">
                    Discover the conservation measures taken to protect endangered species.
                </p>
                <CircularPacking width={width} height={height} data={data} />
            </div>
        </div>
    );
};

export default MeasuresSection;