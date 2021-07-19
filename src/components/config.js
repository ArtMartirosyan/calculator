// TODO: think about change with numbers (example. 0,1 ...)
const Operations = {
  Equals: "Equals",
  Plus: "Plus",
  Minus: "Minus",
  Multiply: "Multiply",
  Divide: "Divide",
};

const CalcConfig = [
  [
    {
      value: "AC",
      className: "btnTop",
      operation: "AC",
    },
    {
      value: "+/-",
      className: "btnTop",
      operation: "+/-",
    },
    {
      value: "%",
      className: "btnTop",
    },
    {
      value: "/",
      className: "btn",
      backgroundColor: "rgb(187, 126, 36)",
      operation: Operations.Divide,
    },
  ],
  [
    {
      value: "7",
      className: "btn",
    },
    {
      value: "8",
      className: "btn",
    },
    {
      value: "9",
      className: "btn",
    },
    {
      value: "*",
      className: "btn",
      backgroundColor: "rgb(187, 126, 36)",
      operation: Operations.Multiply,
    },
  ],
  [
    {
      value: "4",
      className: "btn",
    },
    {
      value: "5",
      className: "btn",
    },
    {
      value: "6",
      className: "btn",
    },
    {
      value: "-",
      className: "btn",
      backgroundColor: "rgb(187, 126, 36)",
      operation: Operations.Minus,
    },
  ],
  [
    {
      value: "1",
      className: "btn",
    },
    {
      value: "2",
      className: "btn",
    },
    {
      value: "3",
      className: "btn",
    },
    {
      value: "+",
      className: "btn",
      backgroundColor: "rgb(187, 126, 36)",
      operation: Operations.Plus,
    },
  ],
  [
    {
      value: "0",
      className: "btn",
      span: 12,
      width: "170px",
    },
    {
      value: ".",
      className: "btn",
      operation: ".",
    },
    {
      value: "=",
      className: "btn",
      backgroundColor: "rgb(187, 126, 36)",
      operation: Operations.Equals,
    },
  ],
];

const OperationsConfig = {
  [Operations.Plus]: {
    doOperation(right, left) {},
  },
};

export { Operations, CalcConfig };
