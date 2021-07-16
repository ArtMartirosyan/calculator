import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { CalcConfig } from "./config";

const Calculator = () => {
  //input states
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [input, setInput] = useState("");

  //operations states
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  const [isMinusClicked, setIsMinusClicked] = useState(false);
  const [isMultiplyClicked, setIsMultiplyClicked] = useState(false);
  const [isDivideClicked, setIsDivideClicked] = useState(false);
  console.log("firstNumber", firstNumber);
  console.log("secondNumber", secondNumber);
  console.log("isMultiplyClicked", isMultiplyClicked);
  console.log("isDivideClicked", isDivideClicked);

  const handleKeyDown = (event) => {
    if (event.key === "1") {
      handleNumClick(1);
    }
    if (event.key === "2") {
      handleNumClick(2);
    }
    if (event.key === "3") {
      handleNumClick(3);
    }
    if (event.key === "4") {
      handleNumClick(4);
    }
    if (event.key === "5") {
      handleNumClick(5);
    }
    if (event.key === "6") {
      handleNumClick(6);
    }
    if (event.key === "7") {
      handleNumClick(7);
    }
    if (event.key === "8") {
      handleNumClick(8);
    }
    if (event.key === "9") {
      handleNumClick(9);
    }
    if (event.key === "0") {
      handleNumClick(0);
    }
    if (event.key === ".") {
      handleDotClick(".");
    }
    if (event.key === "+") {
      operation("+");
    }
    if (event.key === "-") {
      operation("-");
    }
    if (event.key === "*") {
      operation("*");
    }
    if (event.key === "/") {
      operation("/");
    }
    if (event.key === "Enter") {
      equals();
    }
    if (event.key === "Backspace") {
      allClear();
    }
  };

  useEffect(() => {
    if (firstNumber !== "") {
      setInput(firstNumber);
    }
  }, [firstNumber]);
  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [firstNumber]); // WHY???????????????????????????????????????????????????

  const handleZero = (value) => {
    if (firstNumber[firstNumber.length - 1] === ".") {
      setFirstNumber(`${firstNumber}${value}`);
    } else if (firstNumber[0] === "0" && !firstNumber.includes(".")) {
      return;
    } else if (firstNumber.includes("0")) {
      setFirstNumber(`${firstNumber}${value}`);
    }
    setFirstNumber(`${firstNumber}${value}`);
  };

  const handleNumClick = (value) => {
    if (firstNumber[0] === "0" && firstNumber[1] === ".") {
      setFirstNumber(`${firstNumber}${value}`);
    }
    if (firstNumber[0] !== "0") {
      setFirstNumber(`${firstNumber}${value}`);
    }
  };

  const allClear = () => {
    setFirstNumber("");
    setInput("");
    setSecondNumber("");
  };

  const handleDotClick = (value) => {
    if (!firstNumber.includes(".")) {
      setFirstNumber(`${firstNumber}${value}`);
    }
    if (firstNumber.length < 1) {
      setFirstNumber(`0${value}`);
    }
  };

  const toggleSign = () => {
    if (firstNumber) {
      setFirstNumber(-firstNumber);
    }
    if (secondNumber) {
      setSecondNumber(-secondNumber);
      setInput(-secondNumber);
    }
  };

  const operation = (sign) => {
    //handleAddition
    if (sign === "+") {
      setIsPlusClicked(true);
      if (secondNumber === "") {
        setSecondNumber(firstNumber);
        setFirstNumber("");
      } else {
        let sum = +firstNumber + +secondNumber;
        setInput(sum);
        setFirstNumber("");
        setSecondNumber(sum);
      }
      equals();
    }
    //handleMinus
    if (sign === "-") {
      setIsMinusClicked(true);
      if (secondNumber === "") {
        setSecondNumber(firstNumber);
        setFirstNumber("");
      } else {
        let extracted = +secondNumber - +firstNumber;
        setInput(extracted);
        setFirstNumber("");
        setSecondNumber(extracted);
      }
      equals();
    }
    //handleMultiply
    if (sign === "*") {
      setIsDivideClicked(false);
      setIsMultiplyClicked(true);
      if (secondNumber === "") {
        setSecondNumber(firstNumber);
        setFirstNumber("");
      } else if (firstNumber !== "") {
        let mul = +secondNumber * +firstNumber;
        setInput(mul);
        setFirstNumber("");
        setSecondNumber(mul);
      }
      equals();
    }
    //handleDivide
    if (sign === "/") {
      setIsMultiplyClicked(false);
      setIsDivideClicked(true);
      if (secondNumber === "") {
        setSecondNumber(firstNumber);
        setFirstNumber("");
      } else if (firstNumber !== "") {
        setIsDivideClicked(true);
        let divided = +secondNumber / +firstNumber;
        setInput(divided);
        setFirstNumber("");
        setSecondNumber(divided);
      }
      if (isDivideClicked) {
        equals();
      }
    }
    //handleEquals
    if (sign === "=") {
      equals();
    }
    //handleToggleSign
    if (sign === "+/-") {
      toggleSign();
    }
    if (sign === "AC") {
      allClear();
    }
    //handleDotClick
    if (sign === ".") {
      handleDotClick(".");
    }
  };

  const equals = () => {
    if (isPlusClicked) {
      let sum = +secondNumber + +firstNumber;
      setInput(sum);
      setFirstNumber("");
      setSecondNumber(sum);
      setIsPlusClicked(false);
    }
    if (isMinusClicked) {
      let extracted = +secondNumber - +firstNumber;
      setInput(extracted);
      setFirstNumber("");
      setSecondNumber(extracted);
      setIsMinusClicked(false);
    }
    if (isMultiplyClicked && firstNumber) {
      console.log("isMultiplyClicked && firstNumber");
      let multiplied = +secondNumber * +firstNumber;
      setInput(multiplied);
      setFirstNumber("");
      setSecondNumber(multiplied);
      setIsMultiplyClicked(false);
    }
    if (isDivideClicked && firstNumber) {
      console.log("isDivideClicked && firstNumber");
      let divided = +secondNumber / +firstNumber;
      setInput(divided);
      setFirstNumber("");
      setSecondNumber(divided);
      setIsDivideClicked(false);
    }
  };
  const handleButtonClick = (col) => {
    if (col?.operation) {
      operation(col.operation);
    } else {
      handleNumClick(col.value);
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", outline: "none" }}
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex="0"
    >
      <div className="container">
        <div style={{ backgroundColor: "black" }}>
          <input
            type="readonly"
            style={{
              height: "65px",
              width: "415px",
              backgroundColor: "black",
              color: "white",
              fontSize: "45px",
              textAlign: "end",
            }}
            value={input}
          />
          <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            {CalcConfig.map((row) => {
              return (
                <div>
                  <Row style={{ marginTop: "10px" }}>
                    {row.map((col) => {
                      return (
                        <Col span={col.span ?? 6}>
                          <button
                            className={col.className}
                            onClick={() => handleButtonClick(col)}
                            style={{
                              backgroundColor: col.backgroundColor,
                              width: col.width,
                            }}
                          >
                            {col.value}
                          </button>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
