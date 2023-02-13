import { Avatar } from "@mui/material";
import { amber } from "@mui/material/colors";

interface AdProps {
    title: string;
    description: string;
    src: string;
    location: string;
    price: string;
    date: string;
}

interface IconText {
    icon: string;
    text: string;
}

const AdIconAndText = (props : IconText) => { 
    return (
        <div className="flex flex-row h-5">
            <img className="h-full" src={props.icon} alt="icon" />
            <p className="text-xs ml-1">{props.text}</p>
        </div>
    )
}


const Ad = (props: AdProps) => {
    return (
        <div className='rounded-lg w-80 h-80 shadow-lg overflow-hidden relative hover:scale-105 hover:shadow-2xl active:scale-100 duration-200 m-3'>
            <div className="flex h-full w-full overflow-hidden bg-cover ">
                <img className="h-full w-full " src={props.src} alt="ad" />
            </div>

            <div className="flex flex-row">

                <div className="flex flex-row bg-white rounded-lg h-auto absolute bottom-0 p-4 justify-between w-full">

                    <div className="w-1/5">
                        <Avatar sx={{bgcolor: amber[500]}}>TH</Avatar>
                    </div>
                    <div className="flex flex-col w-4/5">
                        <h2 className="text-md font-bold">{props.title}</h2>
                        <p className="text-sm my-2">{props.description}</p>
                        <div className="flex flex-row gap-5">
                            <AdIconAndText icon="https://img.icons8.com/ios/50/000000/price-tag-euro.png" text={props.price} />
                            <AdIconAndText icon="https://img.icons8.com/material-sharp/256/map-marker.png" text={props.location} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ad


