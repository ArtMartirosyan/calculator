const Operations = {
  Plus: 0,
  0: "Plus",
};

export const CalcConfig = [
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
      operation: "/",
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
      operation: "*",
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
      operation: "-",
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
      key: Operations.Plus,
      backgroundColor: "rgb(187, 126, 36)",
      operation: "+",
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
      operation: "=",
    },
  ],
];

const OperationsConfig = {
  [Operations.Plus]: {
    doOperation(right, left) {},
  },
};
