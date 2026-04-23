import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Button type="button" onClick={toggleDialog} id="open-window">
                Open Window
            </Button>
            {visible && (
                <Window title={'Arm Chair'} onClose={toggleDialog} initialHeight={400} initialWidth={450}>
                    <h4>Armchair 402</h4>
                    <div className="armchair">
                        <img
                            src="https://demos.telerik.com/kendo-ui/content/web/window/armchair-402.png"
                            alt="KendoReact Dialogs Armchair Image"
                        />
                    </div>
                    <p>
                        Alvar Aalto is one of the greatest names in modern architecture and design. Glassblowers at the
                        iittala factory still meticulously handcraft the legendary vases that are variations on one
                        theme, fluid organic shapes that let the end user decide the use. Interpretations of the shape
                        in new colors and materials add to the growing Alvar Aalto Collection that remains true to his
                        original design.
                    </p>
                    <p>
                        Born Hugo Alvar Henrik Aalto (February 3, 1898 - May 11, 1976) in Kuortane, Finland, was noted
                        for his humanistic approach to modernism. He studied architecture at the Helsinki University of
                        Technology from 1916 to 1921. In 1924 he married architect Aino Marsio.
                    </p>
                    <p>
                        Alvar Aalto was one of the first and most influential architects of the Scandinavian modern
                        movement, and a member of the Congres Internationaux d'Architecture Moderne. Major architectural
                        works include the Finlandia Hall in Helsinki, Finland, and the campus of Helsinki University of
                        Technology.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://www.aalto.com/about-alvar-aalto.html" title="About Alvar Aalto">
                            www.aalto.com
                        </a>
                    </p>
                </Window>
            )}
        </div>
    );
};
export default App;
