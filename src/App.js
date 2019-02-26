import Button from "@pluralsight/ps-design-system-button/react";
import { createPortal } from "react-dom";
import Dialog from "@pluralsight/ps-design-system-dialog/react";
import React, { useState } from "react";
import Switch from "@pluralsight/ps-design-system-switch/react";
import Table from "@pluralsight/ps-design-system-table/react";

function toggleSelections(selections, i) {
  return [
    ...selections.slice(0, i),
    !selections[i],
    ...selections.slice(i + 1)
  ];
}

function Picker(props) {
  const { onSwitch, selections } = props;
  return (
    <div>
      <Table style={{ minWidth: "300px" }}>
        {selections.map((selection, i) => (
          <Table.Row key={i}>
            <Table.Cell>Option {i}</Table.Cell>
            <Table.Cell
              align={Table.aligns.right}
              style={{ paddingRight: "8px" }}
            >
              <Switch
                size={Switch.sizes.small}
                checked={selection}
                onClick={() => onSwitch(toggleSelections(selections, i))}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table>
    </div>
  );
}

function App() {
  const [isOpen, toggleOpen] = useState(false);
  const [el] = useState(document.getElementById("portal"));
  const [selections, setSelection] = useState([false, false, false]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Button onClick={_ => toggleOpen(!isOpen)}>Open Dialog in portal</Button>
      {isOpen &&
        createPortal(
          <Dialog
            aria-label="Options to switch"
            modal
            onClose={() => toggleOpen(false)}
          >
            <Picker onSwitch={setSelection} selections={selections} />
          </Dialog>,
          el
        )}
    </div>
  );
}

export default App;
