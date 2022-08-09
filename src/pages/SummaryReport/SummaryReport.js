import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SummaryReport = () => {
  const [reportData, setReportData] = useState({});
  useEffect(() => {
    fetch('data/SummaryReportData.json')
      .then(res => res.json())
      .then(data => {
        setReportData(data);
      });
  }, []);

  if (!reportData.id) return;

  return (
    <div>
      <NavContainer>
        <TopContainer>
          <CompanyImages src="/images/SummaryReport/ikaria.jpeg" />
          <CompanyTitle>Sena </CompanyTitle>
          <CompanyName>Medical Progress Report</CompanyName>
          <HospitalLogo src="/images/SummaryReport/seoul.jpeg" />
        </TopContainer>
      </NavContainer>
      <SummaryReportContainer>
        <MiddleContainer>
          <DearDoctor>
            Doctor : LEE SHIN HYUN <br />
            Date of Time: 06-AUG-2022 21:43:20 <br />
            Patient Patient Number: SNUH19961112 <br />
            HospitalNam : SNUH.SEOUL
          </DearDoctor>
          <PatientReport>
            <ButtonIs>Patient Report</ButtonIs>
          </PatientReport>
          <ReportShare>
            <ShareKaKao>환자 공유하기</ShareKaKao>
          </ReportShare>
        </MiddleContainer>

        <BottomContainer>
          <BottomBox>
            <ReportTitle>
              Gastroenterology :Colonoscopy Procedure Note Sample - SNUH
            </ReportTitle>
          </BottomBox>
          <DetailList>
            <CoverList>
              <InfoContentA>
                <InfoTitle>
                  <InfoNumber>Patient Name</InfoNumber>
                  <InfoSpace>KIM YUJU</InfoSpace>
                </InfoTitle>
                <InfoTitle>
                  <InfoNumber>Date of Birth</InfoNumber>
                  <InfoSpace>12/11/1996</InfoSpace>
                </InfoTitle>
                <InfoTitle>
                  <InfoNumber>Age</InfoNumber>
                  <InfoSpace>25 </InfoSpace>
                </InfoTitle>
                <InfoTitle>
                  <InfoNumber>Procedure Date</InfoNumber>
                  <InfoSpace> 06/08/2022</InfoSpace>
                </InfoTitle>
              </InfoContentA>

              <InfoContentB>
                <InfoTitle>
                  <InfoNumber>MRN</InfoNumber>
                  <InfoSpace>KIM YUJU</InfoSpace>
                </InfoTitle>
                <InfoTitle>
                  <InfoNumber>Admit Type</InfoNumber>
                  <InfoSpace>KIM YUJU</InfoSpace>
                </InfoTitle>
                <InfoTitle>
                  <InfoNumber>Gender</InfoNumber>
                  <InfoSpace>Woman</InfoSpace>
                </InfoTitle>
              </InfoContentB>
            </CoverList>
            <OneCoverList>
              <CoverInfoTitle>
                <CoverNumber>Providers</CoverNumber>
                <CoverSpace>Demonstration Doctor.MD</CoverSpace>
              </CoverInfoTitle>
              <CoverInfoTitle>
                <CoverNumber>Referring Provider</CoverNumber>
                <CoverSpace>Demo Doctor2. MD</CoverSpace>
              </CoverInfoTitle>
              <CoverInfoTitle>
                <CoverNumber>Exam Type</CoverNumber>
                <CoverSpace> Colonoscopy</CoverSpace>
              </CoverInfoTitle>
            </OneCoverList>
            <TwoCoverList>
              <CoverInfoTitle>
                <CoverNumber>Indications</CoverNumber>
                <CoverSpace>
                  Haematochezia, Personal history of colonic polyps
                </CoverSpace>
              </CoverInfoTitle>
              <CoverInfoTitle>
                <CoverNumber>Medications</CoverNumber>
                <CoverSpace>
                  Midazolam 2mg IV, Fentany1 100 micrograms IV
                </CoverSpace>
              </CoverInfoTitle>
              <CoverInfoTitle>
                <CoverNumber>Complications</CoverNumber>
                <CoverSpace>No immediate complications</CoverSpace>
              </CoverInfoTitle>
            </TwoCoverList>
            <PhotoList>
              <PhotoTitle>Procedure Images</PhotoTitle>
              <PhotoOne>
                {reportData.colonInfo.map(element => (
                  <div key={element.id}>
                    <PhotoImages src={element.img} alt={element.name} />
                  </div>
                ))}
              </PhotoOne>
            </PhotoList>
          </DetailList>
        </BottomContainer>
      </SummaryReportContainer>
    </div>
  );
};

const PhotoOne = styled.div`
  display: flex;
`;
const SummaryReportContainer = styled.div`
  padding: 50px;
`;
const NavContainer = styled.div``;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #263343;
  padding: 8px 19px;
  font-size: 45px;
  color: white;
`;
const CompanyImages = styled.img`
  width: 140px;
`;

const CompanyTitle = styled.div`
  text-align: start;
`;
const CompanyName = styled.div`
  text-align: right;
`;
const HospitalLogo = styled.img`
  width: 140px;
`;
const MiddleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
`;
const DearDoctor = styled.p`
  background-color: lightgray;
  margin-left: 30px;
`;
const PatientReport = styled.div`
  margin-left: 50px;
`;
const ButtonIs = styled.button`
 background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover{
        background: yellow;
    }
}`;
const ReportShare = styled.div`
  margin-right: 40px;
`;
const ShareKaKao = styled.button`
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  border: 2px solid #555555;
  cursor: pointer;
  &:hover {
    background: yellow;
  }
`;
const BottomContainer = styled.div`
  margin: 0 auto;
  flex-direction: column;

  /* width: 1500px;
  height: 1800px; */
`;
const BottomBox = styled.div`
  padding-top: 40px;
`;
const ReportTitle = styled.h1`
  color: #333;
  padding-bottom: 5px;
  background-color: whitesmoke;
  margin-left: 20px;
  font-size: 30px;
`;

const DetailList = styled.div`
  /* width: 100%;
  height: 100%; */
`;
const CoverList = styled.div`
  display: flex;
  width: 100%;
  border-top: 2px solid black;
`;
const InfoContentA = styled.div``;

// const MiniTitle = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 40px;
// `;
const InfoTitle = styled.div`
  display: flex;
  padding: 5px;
  /* margin: 30px 0; */
`;

const InfoNumber = styled.p`
  font-size: 30px;
  font-weight: bold;
  width: 250px;
`;
const InfoSpace = styled.p`
  font-size: 26px;
  width: 350px;
  display: inline-block;
`;
const InfoContentB = styled.div``;
const InfoPhoto = styled.button`
  /* padding: 20px;
  width: 90px;
  height: 100px;
  border: 4px solid red; */

  width: 650px;
  border: 1px solid red;
  margin: 0 auto;
  padding-top: 10px;
`;
const OneCoverList = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;
const CoverInfoTitle = styled.div`
  display: flex;
  /* margin: 30px 0; */
`;
const CoverNumber = styled.div`
  font-size: 30px;
  width: 600px;
  padding: 5px;
  font-weight: bold;
`;
const CoverSpace = styled.div`
  font-size: 26px;
`;
const TwoCoverList = styled.div`
  border-bottom: 2px solid black;
`;

const PhotoList = styled.div``;
const PhotoTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  padding: 5px;
  margin-top: 20px;
`;
const PhotoImages = styled.img`
  width: 350px;
`;
export default SummaryReport;
