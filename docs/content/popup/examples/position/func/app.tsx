import * as React from 'react'

import { Popup, Align} from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';

import './styles.css';

const AppComponent = () => {
    const anchor = React.useRef<HTMLSpanElement | null>(null);
    const anchorHorizontal = React.useRef<HTMLSelectElement | null>(null);
    const anchorVertical = React.useRef<HTMLSelectElement | null>(null);
    const popupHorizontal = React.useRef<HTMLSelectElement | null>(null);
    const popupVertical = React.useRef<HTMLSelectElement | null>(null);
    const [anchorAlign, setAnchorAlign] = React.useState<Align>({
        horizontal: 'left',
        vertical: 'bottom'
    });
    const [popupAlign, setPopupAlign] = React.useState<Align>({
        horizontal: 'right',
        vertical: 'top'
    });
    const [show, setShow] = React.useState(false);

    const onClick = () => {
        setShow(!show);
    }

    const onConfigChange = () => {
        let aHorizontal: any = anchorHorizontal.current;
        let aVertical: any = anchorVertical.current;
        let pHorizontal: any = popupHorizontal.current;
        let pVertical: any = popupVertical.current;
        if(aHorizontal !== null && aVertical !== null) {
            setAnchorAlign({
                horizontal: aHorizontal.value,
                vertical: aVertical.value
            });
        }
        if(pHorizontal !== null && pVertical !== null) {
            setPopupAlign({
                horizontal: pHorizontal.value,
                vertical: pVertical.value
            })
        }
    }

    return (
    <div>
      <div className="example-config row">
        <div className="col-sm-4 col-xs-12">
          <h4>Anchor align point</h4>
          <p>
            Horizontal <br />
            <select
              onChange={onConfigChange}
              ref={anchorHorizontal}
              value={anchorAlign.horizontal}
              className="k-textbox"
                      >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </p>
          <p>
            Vertical <br />
            <select
              onChange={onConfigChange}
              ref={anchorVertical}
              value={anchorAlign.vertical}
              className="k-textbox"
                      >
              <option value="top">Top</option>
              <option value="middle">Middle</option>
              <option value="bottom">Bottom</option>
            </select>
          </p>
        </div>
        <div className="col-sm-4 col-xs-12">
          <h4>Popup align point</h4>
          <p>
            Horizontal <br />
            <select
              onChange={onConfigChange}
              ref={popupHorizontal}
              value={popupAlign.horizontal}
              className="k-textbox"
                      >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </p>
          <p>
            Vertical <br />
            <select
              onChange={onConfigChange}
              ref={popupVertical}
              value={popupAlign.vertical}
              className="k-textbox"
                      >
              <option value="top">Top</option>
              <option value="middle">Middle</option>
              <option value="bottom">Bottom</option>
            </select>
          </p>
        </div>
        <div className="col-sm-4 col-xs-12">
          <h4>Popup action</h4>
          <br />
          <Button onClick={onClick} themeColor={'primary'} type="button">{show ? 'Close' : 'Open'}</Button>
        </div>
      </div>
      <span
        ref={anchor}
        className="anchor content"
          >
        ANCHOR
      </span>
      <Popup
        anchor={anchor.current}
        anchorAlign={anchorAlign}
        popupAlign={popupAlign}
        show={show}
          >
        <div className="content">
          <p>Popup content.</p>
        </div>
      </Popup>
    </div>
    );
}

export default AppComponent;
