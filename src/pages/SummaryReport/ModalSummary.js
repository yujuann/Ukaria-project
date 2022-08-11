import React from 'react';
import styled from 'styled-components';

export default function ModalSummary() {
  return (
    <NetflixBtn>
      <EventBtn>환자 미리보기 정보</EventBtn>
      <BigEvent>
        <DearDoctor>
          <DetailInfo>Doctor : LEE SHIN HYUN</DetailInfo>
          <DetailInfo>Date of Time: 06-AUG-2022 21:43:20 </DetailInfo>
          <DetailInfo>Patient Number: SNUH19961112</DetailInfo>
          <DetailInfo>Patient Name: JESSICA ALLER G.H</DetailInfo>
          <DetailInfo>Patient Blood Type: B</DetailInfo>
          <DetailInfo>HospitalNam : SNUH.SEOUL</DetailInfo>
        </DearDoctor>
      </BigEvent>
    </NetflixBtn>
  );
}
const DearDoctor = styled.p`
  background-color: whitesmoke;
  width: 350px;
  height: 400px;
`;
const DetailInfo = styled.div`
  font-size: 20px;
  font-weight: lighter;
  margin: 10px;
  padding: 8px;
`;

const NetflixBtn = styled.div`
  width: 700px;
  height: 800px;
  margin: auto;
`;

const EventBtn = styled.div`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 20px;
`;
const BigEvent = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f6f6f6;
`;
// const EventListBtn = styled.div`
//   font-size: 25px;
//   color: begie;
//   margin: 10px 5px 10px 10px;
//   text-align: left;
//   /* 마진 폰트사이즈 컬러  */
// `;
// const FreeZoneDay = styled.div`
//   box-sizing: border-box;
//   border: 1px solid black;
//   border-radius: 5px;

//   p {
//     font-size: 20px;
//     color: grey;
//     margin: 15px 0 0 10px;
//   }
//   /* 폰트사이즈 마진 */
// `;
