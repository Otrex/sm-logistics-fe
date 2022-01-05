import { useRef } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => props.theme.sizes.input.height};
  height: ${(props) => props.theme.sizes.input.height};
  border: 0.5px solid #e5e5e5;
  border-radius: 4px;
  text-align: center;
`;

type IOtpInput = {
  amount: number;
  onCompleted: (data: any) => void;
  onChange: (data: any) => void;
};

const OtpInput = (props: IOtpInput) => {
  const { amount, onCompleted, onChange } = props;
  const data = Array(amount).fill("");
  const ref = useRef<any>(null);

  const checkIfShouldBeOn = (e: any) => {
    const inputs = ref.current!.children;
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        inputs[i].focus();
        break;
      }
    }
  };

  const getValues = () => {
    const inputs = ref.current!.children;
    return Array.from(inputs)
      .map((inp: any) => inp.value)
      .join("");
  };

  const nextInput = (e: any) => {
    let value = "";
    const currenField = e.target.tabIndex;
    const inputs = ref.current!.children;

    if (e.key === "Delete" || e.key === "Backspace") {
      if (currenField > 0 && currenField < amount) {
        inputs[currenField - 1].value = "";
        inputs[currenField - 1].focus();
      }
    } else if (currenField < amount - 1) {
      inputs[currenField + 1].focus();
    } else {
      value = getValues();
      onCompleted(value);
    }
    value = getValues();
    onChange(value);
  };

  return (
    <div ref={ref} className="flex flex-row justify-between">
      {data.map((_, idx) => (
        <Input
          key={idx}
          tabIndex={idx}
          maxLength={1}
          onKeyUp={nextInput}
          autoComplete={"off"}
          onFocus={checkIfShouldBeOn}
        />
      ))}
    </div>
  );
};

OtpInput.defaultProps = {
  onComplete: (data: any) => {},
  onChange: (data: any) => {},
};

export default OtpInput;
