import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { ExcelExport, ExcelExportColumn, ExcelExportColumnGroup } from '@progress/kendo-react-excel-export';
import { process } from '@progress/kendo-data-query';

interface DataItem {
    dataKey: string;
    '29/02/2020': number;
    type: string;
    '28/02/2019': number;
    '28/02/2018': number;
}

interface SheetConfig {
    data: DataItem[];
    groupBy: string;
    groupTitles: {
        [key: string]: string;
    };
    headings: string[];
    ref: string;
    title: string;
    format: {
        [key: string]: string;
    };
}

const data: DataItem[] = [
    {
        dataKey: 'Sample1',
        '29/02/2020': 1,
        type: 'revenueandData',
        '28/02/2019': 2,
        '28/02/2018': 3
    },
    {
        dataKey: 'Sample2',
        '29/02/2020': 4,
        type: 'revenueandData',
        '28/02/2019': 5,
        '28/02/2018': 6
    },
    {
        dataKey: 'Sample3',
        '29/02/2020': 7,
        type: 'SampleandData',
        '28/02/2019': 8,
        '28/02/2018': 9
    },
    {
        dataKey: 'Sample4',
        '29/02/2020': 10,
        type: 'SampleandData',
        '28/02/2019': 11,
        '28/02/2018': 12
    }
];

const sheet: SheetConfig = {
    data: data,
    groupBy: 'type',
    groupTitles: {
        SampleandData: 'Group1',
        revenueandData: 'Group2'
    },
    headings: ['29/02/2020', '28/02/2019', '28/02/2018'],
    ref: 'sheet4',
    title: 'Testing',
    format: {}
};

const App = () => {
    const _exporter = React.createRef<ExcelExport>();

    const save = (component: React.RefObject<ExcelExport>) => {
        const options = component.current!.workbookOptions();

        // Check if sheets exists and has at least one sheet
        if (!options.sheets?.length) {
            console.error('No sheets found in the workbook options.');
            return;
        }

        let images: { [key: string]: any } = {};
        let drawings: any[] = [];
        images[
            'wiki'
        ] = `https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609354453305-MB26067K3SCAYBSB12MU/Wikipedia-logo+2021.jpg`;
        drawings.push({
            topLeftCell: 'A2',
            width: 100,
            height: 90,
            image: 'wiki',
            offsetX: 0,
            offsetY: 0
        });

        Object.keys(images).forEach(function (id: string) {
            var url = images[id];
            loadBinary(url, function (data: ArrayBuffer | null, contentType: string | null) {
                images[id] = { type: contentType, data: data };
            });
        });

        // in a real application, the setTimeout should be replaced with a promise
        // that ensures that all the images are loaded
        setTimeout(function () {
            // Type assertion to allow "images" on options
            (options as any).images = images;
            if (options.sheets && options.sheets.length > 0) {
                (options.sheets[0] as any).drawings = drawings;
            }
            component.current!.save(options);
        }, 2000);
    };

    const excelExport = () => {
        if (_exporter.current) {
            save(_exporter as React.RefObject<ExcelExport>);
        }
    };

    function loadBinary(url: string, callback: (data: ArrayBuffer | null, contentType: string | null) => void) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            callback(xhr.response, xhr.getResponseHeader('Content-Type'));
        };
        xhr.onerror = function () {
            callback(null, null);
        };
        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.send();
    }
    const SampleGroupHeader = (columnProps: any, titles: { [key: string]: string }) => {
        return titles[columnProps.value];
    };

    const dataForSheet = sheet.groupBy
        ? process(sheet.data, {
              group: [
                  {
                      field: sheet.groupBy
                  }
              ]
          }).data
        : sheet.data;
    return (
        <div>
            <Button onClick={excelExport}>Export to Excel</Button>

            <ExcelExport
                data={dataForSheet}
                {...{ group: [{ field: sheet.groupBy }] }}
                fileName={'Products.xlsx'}
                ref={_exporter}
                key={sheet.ref}
            >
                <ExcelExportColumn field="dataKey" title=" " width={300} />
                <ExcelExportColumnGroup
                    title={sheet.title}
                    headerCellOptions={{
                        textAlign: 'left',
                        fontSize: 20,
                        bold: true
                    }}
                >
                    {sheet.headings.map((heading) => (
                        <ExcelExportColumn
                            field={heading}
                            title={heading}
                            width={150}
                            key={heading}
                            cellOptions={{
                                format: sheet.format ? sheet.format[heading] : undefined
                            }}
                        />
                    ))}
                </ExcelExportColumnGroup>
                {sheet.groupBy && (
                    <ExcelExportColumn
                        field={sheet.groupBy}
                        hidden={true}
                        groupHeader={(x: any) => SampleGroupHeader(x, sheet.groupTitles)}
                        groupHeaderCellOptions={{ wrap: true }}
                    />
                )}
            </ExcelExport>
        </div>
    );
};

export default App;
