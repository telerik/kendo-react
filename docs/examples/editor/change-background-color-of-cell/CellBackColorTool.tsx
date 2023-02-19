import * as React from 'react';
import {
  ColorPicker,
  ColorPickerChangeEvent,
} from '@progress/kendo-react-inputs';

const changeStylesString = (
  styleText: string,
  newStyle: { style: string; value: RegExp; newValue?: string }
): { changed: boolean; style: string | null } => {
  const styleToChange = newStyle.style;
  const regExp = newStyle.value;
  const newValue = newStyle.newValue;

  if (!styleText) {
    return { changed: false, style: null };
  }

  const styles: Array<string> = styleText
    .split(/\s*;\s*/)
    .filter((s) => Boolean(s));
  const filtered = styles.filter((s) => {
    const nameValue = s.split(/\s*:\s*/);
    return !(
      nameValue[0].toLowerCase() === styleToChange && regExp.test(nameValue[1])
    );
  });

  if (newValue) {
    filtered.push(`${styleToChange}: ${newValue}`);
  }

  return {
    style: filtered.join('; ') + (filtered.length ? ';' : ''),
    changed: Boolean(newValue) || filtered.length !== styles.length,
  };
};

function setNodeStyle(nodeAttrs: any, styleType: string, value: string): any {
  let attrs;

  if (new RegExp('[^-]?' + styleType + ':').test(nodeAttrs.style || '')) {
    const { style } = changeStylesString(nodeAttrs.style || '', {
      style: styleType,
      value: /^.+$/,
      newValue: value,
    });

    attrs = { ...nodeAttrs, style };
  } else if (nodeAttrs.style) {
    attrs = {
      ...nodeAttrs,
      style:
        nodeAttrs.style.replace(/;$/, '') +
        '; ' +
        styleType +
        ': ' +
        value +
        ';',
    };
  } else {
    attrs = { ...nodeAttrs, style: styleType + ': ' + value + ';' };
  }

  return attrs;
}

const getCells = (state: any): Array<{ node: any; pos: number }> => {
  const { doc, selection } = state;
  let { ranges } = selection;
  const result: Array<{ node: any; pos: number }> = [];

  ranges.forEach((range) => {
    const from = range.$from.pos;
    const to = range.$to.pos;
    doc.nodesBetween(from, to, (node, pos, _parent, _index) => {
      if (node.isBlock && node.type.name === 'table_cell') {
        result.push({ node, pos });
      }
    });
  });

  return result;
};

export const CellBackColorTool: React.FunctionComponent<any> = (props) => {
  const { view } = props;

  const onChange = React.useCallback(
    (event: ColorPickerChangeEvent) => {
      if (view) {
        event.value;
        const cells = getCells(view.state);
        const transaction = view.state.tr;

        cells.forEach(({ node, pos }) => {
          const attrs = setNodeStyle(
            node.attrs,
            'background-color',
            event.value === 'rgba(255, 255, 255, 1)' ? '' : event.value
          );
          transaction.setNodeMarkup(pos, null, attrs);
        });
        if (transaction.docChanged) {
          view.dispatch(transaction);
        }

        // if (colorpicker paletteView === 'palette') {
        //     view.focus();
        // }
      }
    },
    [view]
  );

  return (
    <ColorPicker
      onChange={onChange}
      onActiveColorClick={onChange}
      disabled={view ? getCells(view.state).length === 0 : true}
      title={'CellBackColorTool'}
    />
  );
};
