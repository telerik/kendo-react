import { Card, CardHeader, CardTitle, CardBody, CardFooter, CardActions } from '@progress/kendo-react-layout';
import kendoka from '../assets/kendoka.svg';

const HeaderCard = () => {
    return (
        <Card className="header-card shadow-xl transition-shadow h-full flex flex-col justify-between">
            <CardHeader className="p-4 border-b">
                <CardTitle>
                    <span className="text-2xl font-bold flex items-center justify-center space-x-2">
                        Kendo React Free
                    </span>
                </CardTitle>
            </CardHeader>
            <CardBody className="p-4 text-gray-700 text-sm flex items-center justify-center">
                <img src={kendoka} className="w-48 h-48" />
            </CardBody>
            <CardFooter className="p-4 h-20 font-semibold border-t">
                Unlock Powerful React UI: 50+ Enterprise-Grade KendoReact Components Now Available for Free
            </CardFooter>
            <CardActions layout="end">
                <a
                    className="action-button bg-primary text-white rounded-lg w-25 m-1 p-1 hover:shadow-md hover:scale-105 transition-transform"
                    href="https://www.telerik.com/blogs/unlock-powerful-react-ui-enterprise-grade-kendoreact-components-now-available-free"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read More
                </a>
            </CardActions>
        </Card>
    );
};
export default HeaderCard;
