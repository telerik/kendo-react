export const styles = `
    /* Use the DejaVu Sans font for displaying and embedding in the PDF file. The standard PDF fonts do not support Unicode characters. */
    div {
        font-family: "DejaVu Sans", "Arial", sans-serif;
        font-size: 12px;
    }

    /* The examples load the DejaVu Sans from the KendoReact CDN. Other fonts have to be hosted from your application.
    The official site of the Deja Vu Fonts project is https://dejavu-fonts.github.io/. */
    @font-face {
        font-family: "DejaVu Sans";
        src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans.ttf") format("truetype");
    }

    @font-face {
        font-family: "DejaVu Sans";
        font-weight: bold;
        src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Bold.ttf") format("truetype");
    }

    @font-face {
        font-family: "DejaVu Sans";
        font-style: italic;
        src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf") format("truetype");
    }

    @font-face {
        font-family: "DejaVu Sans";
        font-weight: bold;
        font-style: italic;
        src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf") format("truetype");
    }
`;
