import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter
} from "recharts";


const Statistics = () => {
    const data = useLoaderData()
    return (
        <div className='min-h-screen mb-10'>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] pt-10 pb-13 ">
                <h1 className="font-bold text-3xl text-center text-white">Statistics</h1>
                <p className="font-normal text-base text-center text-white mt-3">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

            </div>
            <div className='max-w-[1250px] mx-auto'>
                <div className='max-w-11/12 mx-auto'>
                    <div>
                        <h1 className="font-bold text-lg mt-4">Statistics</h1>
                    </div>


                    <div className="flex justify-left items-center bg-white shadow mt-4">
                        <ComposedChart
                            width={1100}
                            height={400}
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 100,
                                left: 20
                            }}
                        >
                            <CartesianGrid stroke="green" />
                            <XAxis dataKey="product_title" angle={-45} textAnchor="end" tick={{ fontSize: 10 }} />
                            <YAxis dataKey="price" />
                            <Tooltip />
                            <Legend layout="horizontal"
                                verticalAlign="bottom"
                                align="center"
                                wrapperStyle={{ position: "relative", bottom: 40 }} />
                            <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="price" barSize={20} fill="#413ea0" />
                            <Scatter dataKey="rating" fill="red" />
                        </ComposedChart>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Statistics;