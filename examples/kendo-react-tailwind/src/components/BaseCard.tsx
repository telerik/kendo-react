import { Card, CardHeader, CardTitle, CardBody, CardFooter, CardActions } from '@progress/kendo-react-layout';

interface BaseCardProps {
    key: number;
    title: string;
    image: React.ReactNode;
    description: string;
    url: string;
}

const BaseCard = (props: BaseCardProps) => {
    return (
        <Card className="shadow-xl transition-shadow h-full flex flex-col justify-between ">
            <CardHeader className="border-b">
                <CardTitle>
                    <span className="text-2xl font-semibold flex items-center justify-center space-x-2">
                        {props.title}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardBody className="text-gray-700 text-sm flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 72 72"
                    className="w-48 h-48 text-primary"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    {props.image}
                </svg>
            </CardBody>
            <CardFooter className="p-6 pb-0 h-20 border-t">{props.description}</CardFooter>
            <CardActions layout="end">
                <a
                    className="bg-info text-white rounded-lg w-25 m-1 p-1 hover:shadow-md hover:scale-105 transition-transform"
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Try It
                </a>
            </CardActions>
        </Card>
    );
};
export default BaseCard;
