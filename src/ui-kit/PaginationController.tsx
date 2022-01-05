import React from "react";
import styled from "styled-components";

const PaginationBtn = styled.div`
  & > div > button {
    margin-left: 16px;
  }

  & button {
    padding: 4px;
    border-radius: 3px;
    height: 2.8rem;
    width: 2.8rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: 1px solid rgba(200, 200, 200, 0.5);
  }
`;

interface IPaginationController extends React.AllHTMLAttributes<any> {
  total: number;
  from: number;
  next: (...args: any) => void;
  prev: (...args: any) => void;
  to: number;
}

export default function PaginationController(
  props: IPaginationController
) {
  const { total, from, to, next, prev } = props;

  return (
    <div className="w-400 text-right inline-block">
      <div className="flex items-center justify-end">
        <p className="mr-4">
          Showing {from} to {to} of {total}
        </p>
        <PaginationBtn className="inline-block pl-16px">
          <div className="flex flex-row">
            <button onClick={prev}>
              <svg
                width="10"
                height="16"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33331 10.6668L1.66665 6.00016L6.33331 1.3335"
                  stroke={from <= 1 ? "#E0E0E0" : "#000"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={next}>
              <svg
                width="10"
                height="16"
                style={{ transform: "rotate(180deg)" }}
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33331 10.6668L1.66665 6.00016L6.33331 1.3335"
                  stroke={from + to >= total ? "#E0E0E0" : "#000"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </PaginationBtn>
      </div>
    </div>
  );
}
