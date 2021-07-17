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
  console.log("isPlusClicked", isPlusClicked);
  console.log("isMinusClicked", isMinusClicked);
  console.log("isMultiplyClicked", isMultiplyClicked);
  console.log("isDivideClicked", isDivideClicked);

  const handleKeyDown = (event) => {
    // TODO replace to switch case
    switch (event.key) {
      case "1":
        handleNumClick(1);
        break;
      case "2":
        handleNumClick(2);
        break;
      case "3":
        handleNumClick(3);
        break;
      case "4":
        handleNumClick(4);
        break;
      case "5":
        handleNumClick(5);
        break;
      case "6":
        handleNumClick(6);
        break;
      case "7":
        handleNumClick(7);
        break;
      case "8":
        handleNumClick(8);
        break;
      case "9":
        handleNumClick(9);
        break;
      case "0":
        handleZero(0);
        break;
      case ".":
        handleDotClick(".");
        break;
      case "+":
        operation("+");
        break;
      case "-":
        operation("-");
        break;
      case "*":
        operation("*");
        break;
      case "/":
        operation("/");
        break;
      case "Enter":
        equals();
        break;
      case "Backspace":
        allClear();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (firstNumber !== "") {
      setInput(firstNumber);
    }
  }, [firstNumber]);

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
    if (value === "0") {
      handleZero("0");
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
  const clearPreviousOperations = () => {
    if (isMinusClicked) {
      setIsMinusClicked(false);
    }
    if (isPlusClicked) {
      setIsPlusClicked(false);
    }
    if (isDivideClicked) {
      setIsDivideClicked(false);
    }
    if (isMultiplyClicked) {
      setIsMultiplyClicked(false);
    }
  };

  const operation = (sign) => {
    //handleAddition
    if (sign === "+") {
      clearPreviousOperations();
      setIsPlusClicked(true);
      if (secondNumber === "") {
        setSecondNumber(firstNumber);
        setFirstNumber("");
      } else {
        equals(true, secondNumber, firstNumber);
      }
    }
    //handleMinus
    if (sign === "-") {
      clearPreviousOperations();
      setIsMinusClicked(true);
      if (secondNumber === "") {
        setSecondNumber(firstNumber);
        setFirstNumber("");
      } else {
        equals(true, secondNumber, firstNumber);
      }
    }
    //handleMultiply
    if (sign === "*") {
      clearPreviousOperations();
      setIsMultiplyClicked(true);
      if (secondNumber === "") {
        setSecondNumber(firstNumber);
        setFirstNumber("");
      } else if (firstNumber !== "") {
        equals(true, secondNumber, firstNumber);
      }
    }
    //handleDivide
    if (sign === "/") {
      clearPreviousOperations();
      setIsDivideClicked(true);
      if (secondNumber === "") {
        setSecondNumber(firstNumber);
        setFirstNumber("");
      } else if (firstNumber !== "") {
        equals(true, secondNumber, firstNumber);
      }
    }
    //handleEquals
    if (sign === "=") {
      equals(false, secondNumber, firstNumber);
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

  const equals = (isKeepOperationClickedState, _secondNumber, _firstNumber) => {
    let result;

    if (isPlusClicked) {
      result = +_secondNumber + +_firstNumber;
      setIsPlusClicked(isKeepOperationClickedState);
    }

    if (isMinusClicked) {
      result = +_secondNumber - +_firstNumber;
      setIsMinusClicked(isKeepOperationClickedState);
    }

    if (isMultiplyClicked && firstNumber) {
      result = +_secondNumber * +_firstNumber;
      setIsMultiplyClicked(isKeepOperationClickedState);
    }

    if (isDivideClicked && firstNumber) {
      result = +_secondNumber / +_firstNumber;
      setIsDivideClicked(isKeepOperationClickedState);
    }
    if (result !== undefined) {
      setInput(result);
      setFirstNumber("");
      setSecondNumber(result);
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
