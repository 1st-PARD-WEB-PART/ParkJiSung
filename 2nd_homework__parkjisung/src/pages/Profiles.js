import { useParams } from 'react-router-dom';
import myimg from '../imgs/myImg.png';

const data = {
  Pjs: {
    name: '박지성',
    description: '파드의 평균연령 증가 요소',
    description2: "머리, 어디까지 밀어봤니?",
    img: <img alt = "빡빡이" src={myimg} width = "300" height = "300"/>,
  },

};

function Profile() {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <image>{profile.img}</image>
          <h3>{profile.description2}</h3>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
