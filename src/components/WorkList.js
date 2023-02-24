import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const WorkList = () => {
  const [workList, setWorkList] = useState([]);
  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get("mockdata/work_list.json");
        if (res.data.code === "0000") {
          console.log(res.data.result);
          setWorkList(res.data.result);
        }
      } catch (e) {
        alert("error");
      }
    };
    getList();
  }, []);
  return (
    <div>
      <CheckboxContainer>
        <Checkbox>
          <input type="checkbox" id="check1" />
          <label for="check1">일반 작업</label>
        </Checkbox>
        <Checkbox>
          <input type="checkbox" id="check1" />
          <label for="check1">고위험 작업</label>
        </Checkbox>
      </CheckboxContainer>
      <ListContainer>
        {workList.map((value) => {
          return (
            <List key={value.workIdx}>
              <Left>
                <Title>{value.title}</Title>
                <Info>
                  {value.location} · {value.company}
                </Info>
              </Left>
              <Right>
                <Level color={value.level}>{value.level}</Level>
                <People>
                  {value.header} · {value.workerNum}명
                </People>
              </Right>
            </List>
          );
        })}
      </ListContainer>
    </div>
  );
};

const CheckboxContainer = styled.span`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const Checkbox = styled.span`
  color: #b9b9b9;
  font-size: 12px;
  font-weight: 500;
`;

const ListContainer = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  overflow-x: hidden;
  overflow-y: auto;
  color: white;
`;

const List = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 20px 0px;
  margin: 0px 20px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

const Left = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
`;
const Right = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Info = styled.div`
  font-size: 14px;
  color: #b9b9b9; ;
`;

const Level = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => (props.color === "일반작업" ? "white" : "#F74464")};
  color: ${(props) => (props.color === "일반작업" ? "white" : "#F74464")};
  border: 1px solid
    ${(props) =>
      props.color === "일반작업"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(247, 68, 101, 0.2)"};
  border-radius: 16px;
  padding: 4px 12px;
  width: fit-content;
`;

const People = styled.div`
  font-size: 14px;
  color: #b9b9b9; ;
`;
export default WorkList;
