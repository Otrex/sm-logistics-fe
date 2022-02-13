import React from "react";
import styled from "styled-components";

const css = {
  head: `
    background: rgba(242, 242, 242, 0.52);
    font-weight: 500;
    padding: 1.4rem 2rem;
    border-radius: .8rem;
`,

  body: `
    font-weight: 400;
    padding:  2rem;
`,
};

const Button = styled.button`
  //styleName: PlaceHolder/Label Text;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-align: center;
  color: rgba(250, 182, 11, 1);
  border: 1px solid #fab60b;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 1rem 1.6rem;
`;

const Wrapper = styled.div<{ head?: boolean }>`
  ${(props) => (props.head ? css.head : css.body)}
  display: flex;
  font-family: Poppins;
  flex-direction: row;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0.08em;
  align-items: center;

  > * {
    width: 100%;
    align-items: center;
  }
`;

const TRow = (props: any) => (
  <Wrapper head={props.head}>{props.children}</Wrapper>
);

const Div = styled.div`
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border-radius: 10rem;
`;

const GreenDiv = styled(Div)`
  background: rgba(173, 215, 196, 0.32);
  color: rgba(0, 129, 72, 1);
`;

const RedDiv = styled(Div)`
  color: rgba(247, 44, 37, 1);
  background: rgba(252, 187, 185, 0.32);
`;

const BlueDiv = styled(Div)`
  background: rgba(188, 214, 249, 0.32);
  color: rgba(47, 128, 237, 1);
`;

const GreyDiv = styled(Div)`
  background: rgba(200, 200, 200, 0.32);
  color: rgba(200, 200, 200, 1);
`;

const statusResolve = (data: string) => {
  let status = <>{data}</>;
  const map = {
    completed: "Completed",
    canceled: "You Canceled",
    in_progress: "In Progress",
  };

  switch (data) {
    case "completed":
      status = <GreenDiv> {map[data]} </GreenDiv>;
      break;

    case "canceled":
      status = <RedDiv> {map[data]} </RedDiv>;
      break;

    case "in_progress":
      status = <BlueDiv> {map[data]} </BlueDiv>;
      break;

    default:
      status = <GreyDiv> {data} </GreyDiv>;
      break;
  }

  return status;
};

export default function HistoryTable({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col">
      <TRow head>
        <div>Item Category</div>
        <div>Destination</div>
        <div>Price</div>
        <div>Status</div>
        <div>Action</div>
      </TRow>
      {data.map((record, key) => (
        <TRow key={key}>
          <div>{record.itemCategory}</div>
          <div>{record.destination}</div>
          <div>{record.price}</div>
          <div>{statusResolve(record.status)}</div>
          <div>
            <Button className="action-btn-2" onClick={record.action}>
              {" "}
              View Details{" "}
            </Button>
          </div>
        </TRow>
      ))}
    </div>
  );
}
