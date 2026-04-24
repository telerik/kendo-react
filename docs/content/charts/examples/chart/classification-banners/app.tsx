import React, { useRef, useCallback } from 'react';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  exportVisual,
} from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';
import { exportImage, Text, Path, geometry, drawing } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

// A Chart export is a Kendo Drawing scene graph group
type DrawingGroup = drawing.Group;

const addSolidBackground = (visual: DrawingGroup, color: string): void => {
  const b = visual.bbox();
  const rect = new geometry.Rect(
    [b.origin.x, b.origin.y],
    [b.size.width, b.size.height]
  );
  const bg = Path.fromRect(rect);
  bg.fill(color);
  bg.stroke('none');
  visual.insert(0, bg);
};

const addClassMarkingsOutside = (chartVisual: DrawingGroup): DrawingGroup => {
  const bbox = chartVisual.bbox();
  const outsideTop = 28;
  const outsideBottom = 22;
  const padX = 20;
  const font = 'bold 16px Arial';

  // TOP — UNCLASSIFIED
  const topText = new Text('UNCLASSIFIED', [0, 0], {
    font,
    fill: { color: '#000' },
  });
  const topBox = topText.bbox();
  topText.position([
    bbox.origin.x + padX,
    bbox.origin.y - outsideTop - topBox.size.height,
  ]);

  // BOTTOM — UNCLASSIFIED
  const bottomText = new Text('UNCLASSIFIED', [0, 0], {
    font,
    fill: { color: '#000' },
  });
  const bottomBox = bottomText.bbox();
  bottomText.position([
    bbox.origin.x + bbox.size.width - padX - bottomBox.size.width,
    bbox.origin.y + bbox.size.height + outsideBottom,
  ]);

  chartVisual.append(topText);
  chartVisual.append(bottomText);

  addSolidBackground(chartVisual, '#ffffff');

  return chartVisual;
};

const App = () => {
  // Chart is a React component; this ref ends up being its instance.
  // This is the best practical typing without going back to `any`.
  const chartRef = useRef<Chart | null>(null);

  const onImageExportClick = useCallback(() => {
    if (!chartRef.current) return;

    const chartVisual = exportVisual(chartRef.current) as DrawingGroup | null;
    if (!chartVisual) return;

    addClassMarkingsOutside(chartVisual);

    exportImage(chartVisual).then((dataURI) => {
      saveAs(dataURI, 'chart-unclassified.png');
    });
  }, []);

  return (
    <div>
      <Button type="button" onClick={onImageExportClick}>
        Export as Image
      </Button>

      <div style={{ marginTop: 12 }}>
        <div
          style={{
            fontWeight: 700,
            letterSpacing: '0.05em',
            fontSize: 16,
            marginLeft: 8,
            marginBottom: 8,
          }}
        >
          UNCLASSIFIED
        </div>

        <Chart ref={chartRef} style={{ height: 420 }}>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={[2015, 2016, 2017, 2018]} />
          </ChartCategoryAxis>
          <ChartSeries>
            <ChartSeriesItem data={[110, 230, 200, 78]} />
          </ChartSeries>
        </Chart>

        <div
          style={{
            fontWeight: 700,
            letterSpacing: '0.05em',
            fontSize: 16,
            marginRight: 8,
            marginTop: 8,
            textAlign: 'right',
          }}
        >
          UNCLASSIFIED
        </div>
      </div>
    </div>
  );
};

export default App;
