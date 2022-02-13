import React from "react";
import styled from "styled-components";

type TabsComponentProps = {
  props: React.HTMLProps<HTMLDivElement>;
};

type TabProps = {
  tabSetter?: React.Dispatch<React.SetStateAction<number>>;
  children?: Array<TabsComponentProps> | any;
  classNameHeader?: string;
  currentTab: number;
  className?: string;
  trail?: boolean;
  moveOnTabClick?: boolean;
};

const TabHeadBtn = styled.div`
  color: #bdbdbd;
  &.active {
    color: #4f4f4f;
    border-bottom: 0.3rem solid #fab60b;
  }
`;

const TabHead = styled.div`
  border-bottom: 1px solid #e2e2e2;
`;

const TabBody = styled.div`
  padding-top: 3rem;
`;

export const TabP = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.08em;

  &.active {
    color: #fab60b;
  }
`;

function Tab({
  children,
  tabSetter,
  currentTab,
  trail,
  moveOnTabClick,
  ...props
}: TabProps) {
  return (
    <div className={props.className}>
      <TabHead
        className={`md:flex flex-row hidden ${props.classNameHeader}`}
      >
        {children.map(
          (component: TabsComponentProps, idx: number) => (
            <TabHeadBtn
              key={idx}
              onClick={() =>
                moveOnTabClick
                  ? tabSetter && tabSetter(idx)
                  : undefined
              }
              className={`w-1/${children.length} ${
                trail
                  ? currentTab >= idx
                    ? "active"
                    : ""
                  : currentTab === idx
                  ? "active"
                  : ""
              }`}
            >
              <TabP className={currentTab === idx ? "active" : ""}>
                {component.props.title}
              </TabP>
            </TabHeadBtn>
          )
        )}
      </TabHead>
      <TabBody>{children[currentTab]}</TabBody>
    </div>
  );
}

export default Tab;
