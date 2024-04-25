import { CircularPacking } from "./CircularPacking";
import { data } from "./MeasuresData";

const MeasuresSection = () => {
    return (
        <div id="conservation" className="mx-14">
            <div className="flex flex-col items-center py-20 rounded-3xl bg-neutral-800">
                <h1 className="text-4xl font-bold text-white mb-10 lg:mb-5 w-full text-center">
                    Discover the conservation measures taken to protect endangered species.
                </h1>
                <div className="flex flex-col lg:flex-row items-center justify-center w-full">
                    <div className="w-full lg:w-1/2 px-6">
                        <p className="text-lg text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 px-6 flex items-center justify-center">
                        <CircularPacking width={700} height={500} data={data} legendWidth={360}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeasuresSection;