import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import 'antd/dist/antd.css';

const TestList = () => {
  const [list, setList] = useState([]);

  const [roomNumber, setRoomNumber] = useState();

  const roomNumberHandle = e => {
    console.log(e);
    // setRoomNumber(e)
  };

  useEffect(() => {
    fetch('data/testlist/testlist.json')
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  const menu = (
    <Menu
      items={[
        {
          label: (
            <TestRoomNumber
              name="RoomNumber1"
              onClick={name => roomNumberHandle()}
            >
              RoomNumber1
            </TestRoomNumber>
          ),
          key: '0',
        },
        {
          label: <TestRoomNumber>RoomNumber2</TestRoomNumber>,
          key: '1',
        },
        {
          label: <TestRoomNumber>RoomNumber3</TestRoomNumber>,
          key: '2',
        },
        {
          label: <TestRoomNumber>RoomNumber4</TestRoomNumber>,
          key: '3',
        },
      ]}
    />
  );

  return (
    <div>
      <TestListArea>
        <TestListSection>
          <TestListNav>
            <TestListLogo>
              <Link to="/">
                <TestListLogoImg src="/images/logo.png" />
              </Link>
            </TestListLogo>
            <TestListGnb>
              <TestListLogin>로그인</TestListLogin>
              <TestListSignup>회원가입</TestListSignup>
              <TestListSiteMap>사이트맵</TestListSiteMap>
            </TestListGnb>
          </TestListNav>
          <TestListEle>
            <TestListTop>
              <TestHospitalName>
                <TestHospitalNameLeft>병원이름</TestHospitalNameLeft>
                <TestHospitalNameRight>서울대병원</TestHospitalNameRight>
              </TestHospitalName>
              <TestRoomList>
                <TestRoomListLeft>방번호</TestRoomListLeft>
                <TestRoomListRight>
                  <Dropdown
                    overlay={menu}
                    trigger={['click']}
                    placement="bottom"
                  >
                    <Space>
                      선택
                      <DownOutlined />
                    </Space>
                  </Dropdown>
                </TestRoomListRight>
              </TestRoomList>
            </TestListTop>
            <TestListBottom>
              {list.map(
                ({
                  id,
                  examdate,
                  examnum,
                  patientnum,
                  doctorname,
                  examperiod,
                }) => {
                  return (
                    <TestTable key={id}>
                      <TestTableExamDate>{examdate}</TestTableExamDate>
                      <TestTableExamNum>{examnum}</TestTableExamNum>
                      <TestTablePatientNum>{patientnum}</TestTablePatientNum>
                      <TestTableDoctorName>{doctorname}</TestTableDoctorName>
                      <TestTableExamPeriod>{examperiod}</TestTableExamPeriod>
                      <TestTableButtom>상세페이지</TestTableButtom>
                    </TestTable>
                  );
                }
              )}
            </TestListBottom>
          </TestListEle>
        </TestListSection>
      </TestListArea>
    </div>
  );
};

const TestListArea = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 48px;
`;

const TestListSection = styled.section``;

const TestListNav = styled.div`
  height: 80px;
  border-bottom: 1px solid #dfdfdf;
  background-color: #092a5f;
  display: flex;
  justify-content: space-between;
`;

const TestListLogo = styled.div`
  width: 85%;
  height: 100px;
`;

const TestListLogoImg = styled.img`
  padding: 30px 0 0 40px;
`;

const TestListGnb = styled.ul`
  width: 15%;
  display: flex;
  justify-content: space-between;
  padding: 30px 40px 0 0;
`;

const TestListLogin = styled.li`
  font-weight: bold;
  color: gray;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const TestListSignup = styled.li`
  font-weight: bold;
  color: gray;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const TestListSiteMap = styled.li`
  font-weight: bold;
  color: gray;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const TestListEle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 25px;
`;

const TestListTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TestHospitalName = styled.div`
  width: 50%;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 33px;
  font-weight: 700;
  border: 1px solid #000000;
  border-bottom: 0px;
  padding-top: 25px;
`;

const TestHospitalNameLeft = styled.div`
  margin-right: 40px;
`;
const TestHospitalNameRight = styled.div``;

const TestRoomNumber = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const TestRoomList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 260px;
  font-size: 33px;
  font-weight: 700;
  border: 1px solid #000000;
  border-bottom: 0px;
  border-left: 0px;
  padding-top: 25px;
`;
const TestRoomListLeft = styled.div`
  margin-right: 40px;
`;
const TestRoomListRight = styled.div``;
// ----------------------TestListBottom---------------------------

const TestListBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid #000000;
  padding: 14px 0 3px 8px;
`;

const TestTable = styled.ul`
  width: 24%;
  border: 1px solid #000;
  padding-bottom: 10px;
  margin: 0 10px 10px 0;
`;

const TestTableExamDate = styled.li`
  width: 500px;
  padding: 20px 0 0 20px;
  font-size: 20px;
`;
const TestTableExamNum = styled.li`
  padding: 20px 0 0 20px;
  font-size: 20px;
`;
const TestTablePatientNum = styled.li`
  padding: 20px 0 0 20px;
  font-size: 20px;
`;
const TestTableDoctorName = styled.li`
  padding: 20px 0 0 20px;
  font-size: 20px;
`;
const TestTableExamPeriod = styled.li`
  padding: 20px 0 0 20px;
  font-size: 20px;
`;
const TestTableButtom = styled.button`
  padding: 10px 0 10px 0;
  font-size: 20px;
  margin: 25px 0 0 120px;
  width: 150px;
`;

export default TestList;
