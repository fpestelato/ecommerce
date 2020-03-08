import React from 'react';
import { Button } from 'carbon-components-react';
import ArrowLeft16 from '@carbon/icons-react/lib/arrow--left/16';

export default function BackButtonRow({ history }) {
  return (
    <div className="bx--row back-button">
      <div className="bx--col-16">
        <Button
            className="back-button"
            iconDescription="Back icon"
            kind="ghost"
            onClick={()=> history.goBack() }
            size="default"
            tabIndex={0}
            type="button"
          >
            <ArrowLeft16/>Back
          </Button>
      </div>
    </div>
  );
}