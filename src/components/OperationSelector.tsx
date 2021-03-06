import className from "classnames";
import * as React from "react";
import { Operation } from "../model/base";

export interface OperationSelectorProps {
  value: Operation;
  onChange: (newValue: Operation) => void;
}

const Operations: Operation[] = ["buy", "sell"];
const OperationSelector: React.SFC<OperationSelectorProps> = ({
  value,
  onChange
}) => (
  <div className="OperationSelector flex-grid margin-bottom">
    {Operations.map(op => (
      <button
        key={op}
        className={className("col", value === op && "button-selected")}
        onClick={() => onChange(op)}
      >
        {op}
      </button>
    ))}
  </div>
);

export default OperationSelector;
