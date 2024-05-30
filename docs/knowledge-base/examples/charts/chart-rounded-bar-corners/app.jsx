import * as React from 'react';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from '@progress/kendo-react-charts';
import { Circle, Path, geometry, Group } from '@progress/kendo-drawing';
const { transform, Circle: GeomCircle } = geometry;
import 'hammerjs';
const categories = [2002, 2003, 2004];
const series = [
  {
    name: 'India',
    data: [4, 7.943, 7.848],
  },
  {
    name: 'Russian Federation',
    data: [4.743, 7.295, 7.175],
  },
  {
    name: 'Germany',
    data: [0.01, 0.375, 1.161],
  },
  {
    name: 'World',
    data: [1.988, 2.733, 3.994],
  },
];
const mySeriesVisual = (e) => {
  var width = e.rect.size.width;
  var height = e.rect.size.height;
  var radius = height / 2;
  var originY = e.rect.origin.y;
  var originX = e.rect.origin.x;
  var pointX = originX;
  var pointY = originY;

  const geometry = new GeomCircle(
    [pointX + width - radius, pointY + radius],
    radius
  );

  const circle = new Circle(geometry, {
    stroke: { color: e.series.color, width: 1 },
    fill: { color: e.series.color },
  });

  const path = new Path({
    stroke: { color: e.series.color, width: 1 },
    fill: { color: e.series.color },
  });
  path
    .moveTo(pointX, originY)
    .lineTo(originX + width - radius, originY)
    .lineTo(originX + width - radius, originY + height)
    .lineTo(pointX, originY + height)
    .close();

  const group = new Group();
  group.append(circle, path);

  return group;
};

const ChartContainer = () => (
  <Chart>
    <ChartTitle text="Gross domestic product growth GDP annual" />
    <ChartLegend position="top" orientation="horizontal" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={categories} startAngle={45} />
    </ChartCategoryAxis>
    <ChartSeries>
      {series.map((item, idx) => (
        <ChartSeriesItem
          key={idx}
          type="bar"
          data={item.data}
          name={item.name}
          visual={mySeriesVisual}
        />
      ))}
    </ChartSeries>
  </Chart>
);

export default ChartContainer;