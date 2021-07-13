import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";

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
      handleAddition();
    }
    if (event.key === "-") {
      handleMinus();
    }
    if (event.key === "*") {
      handleMultiply();
    }
    if (event.key === "/") {
      handleDivide();
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
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [firstNumber]); // WHY???????????????????????????????????????????????????
  const handleZero = (value) => {
    if (firstNumber[firstNumber.length - 1] === ".") {
      setFirstNumber(`${firstNumber}${value.target.innerText}`);
    } else if (firstNumber[0] === "0" && !firstNumber.includes(".")) {
      return;
    } else if (firstNumber.includes("0")) {
      setFirstNumber(`${firstNumber}${value.target.innerText}`);
    }
    setFirstNumber(`${firstNumber}${value.target.innerText}`);
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
    if (isMultiplyClicked) {
      let multiplied = +secondNumber * +firstNumber;
      setInput(multiplied);
      setFirstNumber("");
      setSecondNumber(multiplied);
      setIsMultiplyClicked(false);
    }
    if (isDivideClicked) {
      let divided = +secondNumber / +firstNumber;
      setInput(divided);
      setFirstNumber("");
      setSecondNumber(divided);
      setIsDivideClicked(false);
    }
  };
  const handleMultiply = () => {
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
  };
  const handleDivide = () => {
    setIsDivideClicked(true);
    if (secondNumber === "") {
      setSecondNumber(firstNumber);
      setFirstNumber("");
    } else if (firstNumber !== "") {
      let divided = +secondNumber / +firstNumber;
      setInput(divided);
      setFirstNumber("");
      setSecondNumber(divided);
    }
    equals();
  };
  const handleAddition = () => {
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
  };

  const handleMinus = () => {
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
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
          ></input>
          <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            <Row>
              <Col span={6}>
                <button className="btnTop" onClick={allClear}>
                  AC
                </button>
              </Col>
              <Col span={6}>
                <button className="btnTop" onClick={toggleSign}>
                  +/-
                </button>
              </Col>
              <Col span={6}>
                <button className="btnTop">%</button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  style={{ backgroundColor: "rgb(187, 126, 36)" }}
                  onClick={handleDivide}
                >
                  /
                </button>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleNumClick(e.target.innerText)}
                >
                  7
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleNumClick(e.target.innerText)}
                >
                  8
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleNumClick(e.target.innerText)}
                >
                  9
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  style={{ backgroundColor: "rgb(187, 126, 36)" }}
                  onClick={handleMultiply}
                >
                  *
                </button>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleNumClick(e.target.innerText)}
                >
                  4
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleNumClick(e.target.innerText)}
                >
                  5
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleNumClick(e.target.innerText)}
                >
                  6
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  style={{ backgroundColor: "rgb(187, 126, 36)" }}
                  onClick={handleMinus}
                >
                  -
                </button>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleNumClick(e.target.innerText)}
                >
                  1
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleNumClick(e.target.innerText)}
                >
                  2
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleNumClick(e.target.innerText)}
                >
                  3
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  style={{ backgroundColor: "rgb(187, 126, 36)" }}
                  onClick={handleAddition}
                >
                  +
                </button>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col span={12}>
                <button
                  style={{
                    width: "160px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "grey",
                    fontSize: "25px",
                  }}
                  onClick={(e) => handleZero(e)}
                >
                  0
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  onClick={(e) => handleDotClick(e.target.innerText)}
                >
                  .
                </button>
              </Col>
              <Col span={6}>
                <button
                  className="btn"
                  style={{ backgroundColor: "rgb(187, 126, 36)" }}
                  onClick={equals}
                >
                  =
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
