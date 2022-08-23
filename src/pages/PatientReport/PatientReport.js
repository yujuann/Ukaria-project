import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScript } from '../../hooks';
//

const PatientReport = () => {
  const [patientData, setPatientData] = useState({});
  const navigate = useNavigate();
  const goToSummary = () => {
    navigate('/summary');
  };

  useEffect(() => {
    fetch('data/PatientReportData.json')
      .then(res => res.json())
      .then(data => {
        setPatientData(data);
      });
  }, []);
  // const location = useLocation();

  // const goToPrev = () => {
  //   navigate(`/Report/${location.search}`);
  const currentUrl = window.location.href;
  // kakao SDK import하기
  const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === 'ready' && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init('43cb626e1e2d36adf174a3cfa844e8d0');
      }
    }
  }, [status]);

  // const handleKakaoButton = () => {
  //   window.Kakao.Link.sendScrap({
  //     requestUrl: currentUrl,
  //   });
  // };
  // }; //pdf 캡처 기능 넣어봄 //

  // const onSaveAs = (uri, fileName) => {
  //   console.log('onSaveAs');
  //   let link = document.createElement('a');
  //   document.body.appendChild(link);
  //   link.href = uri;
  //   link.download = fileName;
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const handleKakaoButton = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'text',
      text: `${currentUrl}`,
      link: {
        mobileWebUrl: `${currentUrl}`,
        webUrl: `${currentUrl}`,
      },
    });
  };

  // const onCapture = () => {
  //   console.log('onCapture');
  //   html2canvas(document.getElementById('PointWBox')).then(canvas => {
  //     onSaveAs(canvas.toDataURL('image/png'), 'image-download.png');
  //   });
  // };

  // const onSaveAs = (uri, fileName) => {
  //   console.log('onSaveAs');
  //   let link = document.createElement('a');
  //   document.body.appendChild(link);
  //   link.href = uri;
  //   link.download = fileName;
  //   link.click();
  //   document.body.removeChild(link);
  // };

  if (!patientData.id) return; /*조건부렌더링*/
  return (
    <PatientBigContainer>
      <PatientSmallContainer>
        <PatientBox>
          <PatientImg src="/images/SummaryReport/endo.png" />
          <PatientTitle src="/images/SummaryReport/sena.png" />
          <PatientName>Patient Report List Colonoscopy</PatientName>
          <PatientLogo src="/images/SummaryReport/seoul.jpeg" />
        </PatientBox>
      </PatientSmallContainer>
      <PointContainer>
        <PointBox>
          <PointSBox>
            <ButtonMe onClick={goToSummary}>Doctor Report</ButtonMe>
          </PointSBox>
        </PointBox>
        <PointBox>
          <PointSBox>
            <ButtonMe onClick={handleKakaoButton}>kakao 공유하기</ButtonMe>
          </PointSBox>
        </PointBox>

        {/* <EmailShareButton subject={currentUrl} body="">
          <ButtonMME onClick={onCapture}>PdfButton</ButtonMME>
        </EmailShareButton> */}
      </PointContainer>
      <CancerBox>
        <CancerEvent>환자 검사 결과레포트 </CancerEvent>
      </CancerBox>
      <CancerContainer>
        <CandyCane>
          <CancerAContainer>
            <CancerCInfo>
              <CancerCheck>검사ID</CancerCheck>
              <CancerSpace>sdic2038</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>검사자이름</CancerCheck>
              <CancerSpace>김혜화</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>환자번호</CancerCheck>
              <CancerSpace>K325FS24</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>검사일시</CancerCheck>
              <CancerSpace>23.AUG.2022</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>검사소유시간</CancerCheck>
              <CancerSpace>19:29:11</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>검사소유시간</CancerCheck>
              <CancerSpace>19:29:11</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>등록일시</CancerCheck>
              <CancerSpace>25.AUG.2022</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>수정일시</CancerCheck>
              <CancerSpace>26.AUG.2022</CancerSpace>
            </CancerCInfo>
          </CancerAContainer>
          <CancerBContainer>
            <CancerCInfo>
              <CancerCheck>대장 정결도</CancerCheck>
              <CancerSpace>우수</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>비고</CancerCheck>
              <CancerSpace>KIM YUJU</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>등록일시</CancerCheck>
              <CancerSpace>26.AUG.2022</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>제거돤 용종 갯수</CancerCheck>
              <CancerSpace>12개</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>스냅샵 갯수</CancerCheck>
              <CancerSpace>8장</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>등록일시</CancerCheck>
              <CancerSpace>26.AUG.2022</CancerSpace>
            </CancerCInfo>
            <CancerCInfo>
              <CancerCheck>수정일시</CancerCheck>
              <CancerSpace>26.AUG.2022</CancerSpace>
            </CancerCInfo>
          </CancerBContainer>
        </CandyCane>
        <CancerDContainer>
          <PhotoListA>
            <PhotoTitleA>Procedure Images</PhotoTitleA>
            <PhotoOneA>
              {patientData.patientInfo.map(element => (
                <div key={element.id}>
                  <PhotoImgA src={element.img} alt={element.name} />
                </div>
              ))}
            </PhotoOneA>
          </PhotoListA>
        </CancerDContainer>
      </CancerContainer>
    </PatientBigContainer>
  );
};

export default PatientReport;

// const EmailShareButton = styled.div``;
const CancerBox = styled.div`
  padding-top: 40px;
`;
const CancerEvent = styled.h1`
  color: #333;
  padding-bottom: 5px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 30px;
`;
const CandyCane = styled.div`
  display: flex;
`;
const PhotoImgA = styled.img`
  width: 220px;
  padding: 5px;
  /* display: flex;
  justify-content: last baseline; */
`;
const CancerDContainer = styled.div`
  border-top: 1px solid black;
`;
const PhotoListA = styled.div``;
const PhotoTitleA = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 5px;
  margin-top: 20px;
`;
const PhotoOneA = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const PatientBigContainer = styled.div``;
const PatientSmallContainer = styled.div``;
const PatientBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 19px;
  font-size: 45px;
  color: #263343;
`;
const PatientImg = styled.img`
  width: 140px;
  background-color: white;
`;
const PatientTitle = styled.img`
  width: 240px;
`;
const PatientName = styled.div`
  text-align: right;
`;
const PatientLogo = styled.img`
  width: 140px;
`;
const PointContainer = styled.div`
  padding: 50px;
`;
const PointBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
`;
const PointSBox = styled.div``;
const ButtonMe = styled.button`
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
  outline: none;
`;

// const PointWBox = styled.div``;
const CancerContainer = styled.div`
  display: flex;
  width: 1000px;
  border-top: 2px solid black;
  border: 1px ridge black;
`;
const CancerAContainer = styled.div`
  width: 600px;
`;

const CancerCInfo = styled.div`
  display: flex;
  /* padding: 5px;
  margin-left: 15px; */
`;

const CancerCheck = styled.div`
  font-size: 30px;
  font-weight: slider;
  width: 250px;
  text-align: center;
  padding-top: 15px;
`;

const CancerSpace = styled.div`
  font-size: 26px;
  width: 350px;
  padding: 12px;
`;
const CancerBContainer = styled.div`
  width: 500px;
`;