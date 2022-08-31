import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ModalSummary from './ModalSummary';
import Modal from 'react-modal';

// import PatientReport from '../Patient/PatientReport';

const SummaryReport = () => {
  const navigate = useNavigate();
  const goToPatient = () => {
    navigate('/patient');
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  // const PatientReport = () => {
  //   document.location.href('/');
  // };
  const [reportData, setReportData] = useState({});
  useEffect(() => {
    fetch('data/SummaryReportData.json')
      .then(res => res.json())
      .then(data => {
        setReportData(data);
      });
  }, []);

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  if (!reportData.id) return;

  return (
    <div>
      <NavContainer>
        <TopContainer>
          <CompanyImages src="/images/SummaryReport/endo.png" />
          <CompanyTitle src="/images/SummaryReport/sena.png" />
          <CompanyName>Medical Progress Report</CompanyName>
          <HospitalLogo src="/images/SummaryReport/seoul.jpeg" />
        </TopContainer>
      </NavContainer>
      <SummaryReportContainer>
        <MiddleContainer>
          <PatientReport>
            <ButtonIs onClick={goToPatient}>Patient Report</ButtonIs>
          </PatientReport>
          <ReportShare>
            <ShareKaKao onClick={() => setIsOpen(!modalIsOpen)}>
              환자정보 미리보기
            </ShareKaKao>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              style={styleModal}
            >
              <ModalSummary />
              <ModalClose onClick={() => setIsOpen(false)}>X</ModalClose>
            </Modal>
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

const ModalClose = styled.button`
  width: 20px;
  height: 25px;
`;
const PhotoOne = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
`;
const SummaryReportContainer = styled.div`
  padding: 50px;
`;
const NavContainer = styled.div``;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 19px;
  font-size: 45px;
  color: #263343;
`;
const CompanyImages = styled.img`
  width: 140px;
  background-color: white;
`;

const CompanyTitle = styled.img`
  width: 140px;
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

const PatientReport = styled.div`
  margin-left: 50px;
  margin-right: 30px;
`;
const ButtonIs = styled.button`
  font-size: 17px;
    line-height: 1.23536;
    font-weight: 400;
    letter-spacing: -.022em;
    font-family: SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-weight: 600;
    width: 100%;
    height: auto;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    text-align: left;
    box-sizing: border-box;
    cursor: pointer;
    min-height: 4.88235rem;
    color: #1d1d1f;
    border: 1px solid #d2d2d7;
    background-color: hsla(0,0%,100%,.8);
    outline: none;
    
 /* background-color: #4CAF50;
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
    } */
}`;
const ReportShare = styled.div`
  margin-right: 40px;
`;
const ShareKaKao = styled.button`
  font-size: 17px;
  line-height: 1.23536;
  font-weight: 400;
  letter-spacing: -0.022em;
  font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  font-weight: 600;
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  text-align: left;
  box-sizing: border-box;
  cursor: pointer;
  min-height: 4.88235rem;
  color: #1d1d1f;
  border: 1px solid #d2d2d7;
  background-color: hsla(0, 0%, 100%, 0.8);
`;
const BottomContainer = styled.div`
  margin: 0 auto;
  flex-direction: column;
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
  font-size: 30px;
  font-weight: bold;
  padding: 5px;
  margin-top: 20px;
`;
const PhotoImages = styled.img`
  width: 350px;
  padding: 5px;
  display: flex;
  justify-content: last baseline;
`;
const styleModal = {
  overlay: {
    background: 'rgba(0,0,0,0.56)',
    overflow: 'hidden scroll',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  content: {
    width: '400px',
    height: '500px',
    position: 'absolute',

    display: 'flex',
    justifyContent: 'center',
    background: '#FFFF',
    overflow: 'auto',
    top: '19vh',
    left: '38vw',
    right: '38vw',
    bottom: '19vh',
    borderRadius: '14px',
    outline: 'none',
    zIndex: 10,
  },
};
export default SummaryReport;
