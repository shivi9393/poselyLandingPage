import { BsCameraFill, BsFillStarFill } from "react-icons/bs";
import { PiImageFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "1,000+",
        icon: <PiImageFill size={34} className="text-blue-500" />,
        description: "Curated poses across various categories and difficulty levels."
    },
    {
        title: "4.9",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Star rating from photographers and models worldwide."
    },
    {
        title: "50,000+ ",
        icon: <BsCameraFill size={34} className="text-green-600" />,
        description: "Photo setups and lighting configurations saved by our users."
    }
];