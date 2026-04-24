import { ToolbarSeparator } from '@progress/kendo-react-buttons';
import { SpreadsheetTab, ExcelExport, Open, Bold, Italic, Underline,
    FontFamily, FontSize,TextColor, BackgroundColor, Alignment, TextWrap,
    GridLines, Format, AddColumnLeft, AddColumnRight, AddRowAbove,
    AddRowBelow, DeleteColumn, DeleteRow, Undo, Redo } from '@progress/kendo-react-spreadsheet';

export const toolbar: SpreadsheetTab[] = [
    {
        text: "File",
        tools: [
            Open,
            ExcelExport
        ]
    }, {
        text: "Home",
        selected: true,
        tools: [
            [ Undo, Redo ],
            ToolbarSeparator,
            FontFamily,
            FontSize,
            [ Bold, Italic, Underline ],
            TextColor,
            ToolbarSeparator,
            BackgroundColor,
            ToolbarSeparator,
            Alignment,
            TextWrap,
            ToolbarSeparator,
            Format,
            ToolbarSeparator,
            GridLines
        ]
    }, {
        text: "Insert",
        tools: [
            [ AddColumnLeft, AddColumnRight, AddRowBelow, AddRowAbove ],
            ToolbarSeparator,
            [ DeleteColumn, DeleteRow ]
        ]
    }
];
