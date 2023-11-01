import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Layout = styled.div`
  width: 100vw;
  font-size: 14px;
  display: flex;
  justify-content: center;
  background-color: #eee;
  height: calc(var(--vh,1vh)*100);
`

const StartPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffea35;
  width: 100%;
  max-width: 900px;
  height: 100%;
  color: #413730;
`

const StartLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
`

const LogoText  = styled.div`
    background-color: #413730;
    color: #ffea35;
    width: 100px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`

const LogoArrow = styled.div`
  margin-top: -15px;
`

const StartButton = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-top: 20px;
`

const Question = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #bacce0;
  width: 100%;
  max-width: 900px;
  height: 100%;
  overflow: hidden;
`

const MbtiTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  font-weight: 700;
`

const BigTitle = styled.div`
  display: flex;
  flex: 1;
` 

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

const QuestionItem = styled.div`
  display: flex;
  flex: 1;
  margin: 10px 15px 5px 15px;
`

const AnswerItem = styled.div`
  width: 100%;
  background-color: #fff;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  background-color: #a1b6e9;
  border-radius: 15px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
`

const ProfileCircle = styled.div`
  background-color: #cbd6f2;
  width: 8px;
  height: 8px;
  border-radius: 4px;
`

const ProfileRectangle = styled.div`
  background-color: #cbd6f2;
  width: 16px;
  height: 8px;
  border-radius: 8px 8px 0px 0px;
  margin-top: 2px;
`

const ChatList = styled.div`
  display: flex;
  flex-direction: column;
`

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 60vw;
  margin: 3px 0px 12px 0px;
`

const ChatBoxArrow = styled.div`
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
`

const ChatBoxText = styled.div`
  padding: 7px 10px 7px 10px;
  background-color: #fff;
  margin-left: -4px;
  border-radius: 10px;
  text-align: left;
`

const AchatBox = styled.div`
  display: flex;
  width: 100%;
  color: #969696;
  font-size: 22px;
  border-bottom: 1px solid #eee;
  margin-bottom: 25px;
`

const AchatBoxPlus = styled.div`
  display: flex;
  flex:1;
  padding: 10px;
  box-sizing: border-box;
`

const AchatBoxHash = styled.div`
  padding: 10px;
`

const AnswerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  text-align: center;
  box-shadow: 2px 2px 0px #ededed;
  border: 1px solid #ededed;
  margin: 0px 20px 15px 20px;
  border-radius: 10px;
`

function App() {

  const setVh = () =>{
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`)
  }

  useEffect(()=>{
    setVh()

    function onResize(){
      setVh()
    }

    window.addEventListener('resize',onResize)
  },[])

  const [page,setPage] = useState(0);
  const questionList =  [
    {
      q:['갑자기 일이 생겨서', '오늘 못 만날 것 같아'],
      a:[
        {type:'I',text:'어쩔 수 없지 뭐 ㅠㅠ (오예!!!)'},
        {type:'E',text:'어쩔 수 없지 뭐 ㅠㅠ (다른사람 누구 만나지?)'}
      ]
    },
    {
      q:['너 이번주에 엄청 바빴다며' ,'주말엔 뭐해? '],
      a:[
        {type:'I',text:'너무 힘들었어 ㅠㅠ 집에서 쉬어야지'},
        {type:'E',text:'바빠서 못놀았어 ㅠㅠ 나가 놀아야지'}
      ]
    },
    {
      q:['자주 가는 카페 사장님이 아는척을 했다'],
      a:[
        {type:'I',text:'(이제 그만 와야지)'},
        {type:'E',text:'(더 자주 와야지)'}
      ]
    },
    {
      q:['넌 노래 들을때 뭘 중요하게 생각해?'],
      a:[
        {type:'S',text:'멜로디'},
        {type:'N',text:'가사'}
      ]
    },
    {
      q:['사과하면 뭐가 떠올라?'],
      a:[
        {type:'S',text:'빨갛다.맛있다.동그랗다.'},
        {type:'N',text:'아이폰 로고 ㅋㅋㅋ 백설공주도 생각난다.'}
      ]
    },
    {
      q:['오늘 점심 뭐 먹을래?'],
      a:[
        {type:'S',text:'음, 파스타 먹을까?'},
        {type:'N',text:'파스타 먹을까? 아! 파스타 먹으면 느끼하니까 저녁엔 김치찌개 먹어야겠다!'}
      ]
    },
    {
      q:['나 요즘 너무 우울해서','여행 가려고'],
      a:[
        {type:'F',text:'무슨 일 있어?'},
        {type:'T',text:'어디로 여행가게?'}
      ]
    },
    {
      q:['슬픔을 나누면 어떻게 될까?'],
      a:[
        {type:'F',text:'슬픔이 반이 되지'},
        {type:'T',text:'슬픈사람이 둘이 되겠지'}
      ]
    },
    {
      q:['나 시험에서 떨어졌어 ㅠㅠ'],
      a:[
        {type:'F',text:'많이 속상하겠다...ㅠㅠ'},
        {type:'T',text:'무슨 시험 봤는데 ? 몇점?'}
      ]
    },
    {
      q:['안읽은메시지 갯수 몇개야?'],
      a:[
        {type:'P',text:'10개 이상'},
        {type:'J',text:'0개~한자리수'}
      ]
    },
    {
      q:['여행 일정 짰어?'],
      a:[
        {type:'P',text:'ㅇㅇ 국밥먹고 바다가서 놀다가 카페가자'},
        {type:'J',text:'7시30분 만남 , 8시 할매국밥, 9시 유리박물관, 11시 유리해수욕장, 12시 유리카페...'}
      ]
    },
    {
      q:['2주 뒤에 시험이다.'],
      a:[
        {type:'P',text:'시험이 2주나 남았네'},
        {type:'J',text:'시험이 2주밖에 안남았네.'}
      ]
    },
    {
      q:['테스트가 모두 끝났어. 결과 보러 갈래?'],
      a:[
        {type:'',text:'결과 보러 가기'}
      ]
    }
  ]

  const [mbtiList,setMbtiList] = useState([
    {name : 'I' , count : 0},{name : 'E' , count : 0},{name : 'S' , count : 0},{name : 'N' , count : 0},{name : 'F' , count : 0},{name : 'T' , count : 0},{name : 'P' , count : 0},{name : 'J' , count : 0}
  ])

    
  const handleCkAnswer = (type,index) =>{
    let ls = [...mbtiList]
    for(let i = 0; i < ls.length; i++){
      if(ls[i].name === type){
        ls[i].count = ls[i].count + 1
      }
    }
    setMbtiList(ls)
    setPage(page+1)
    if(index + 1 === questionList.length){
      setMbti();
    }
  }

  const [mbtiContent,setMbtiContent] = useState([])

  function setMbti(){
    let mc = [
      {mbti:'ENTP',content:['말을 잘해요','이상한 말을 자주 해요','혼자서도 잘 해요']},
      {mbti:'INTP',content:['팩폭을 잘해요','감수성이 풍부해요','주관이 뚜렷해요']},
      {mbti:'ESFJ',content:['남을 잘 챙겨요','눈치가 빨라요','새로운 사람과의 술자리를 좋아해요']},
      {mbti:'ESTP',content:['손재주가 좋아요','리더십이 있어요','표현을 아끼지 않아요']},
      {mbti:'ISFJ',content:['남 챙기는거 좋아해요','공감 잘 해요','내가 싫은 건 남한테도 안 해요']},
      {mbti:'ISTP',content:['효율적인 거 좋아해요','관찰력이 뛰어나요','기계조작 잘 하고 좋아해요']},
      {mbti:'ENFJ',content:['분위기 메이커에요','리액션을 잘 해요','남에게 싫은 소리를 잘 못해요']},
      {mbti:'INFJ',content:['집돌이/집순이 성향이 강해요','사람을 보는 통찰력이 있어요','자신만의 철학이 있어요']},
      {mbti:'ENTJ',content:['직감이 좋은 편이에요','주변사람을 잘 챙겨요','열등감이 없어요']},
      {mbti:'INTJ',content:['혼자있는거 좋아해요','돈관리 잘해요','공상 많이 해요']},
      {mbti:'ENFP',content:['소통과 공감을 잘 해요','은근 독립적인 성격이에요','생각을 많이 해요']},
      {mbti:'INFP',content:['MBTI 정말 좋아해요','미룰 수 있는 건 끝까지 미뤄요','호불호가 명확해요']},
      {mbti:'ESFP',content:['사교성이 좋아요','자존감이 높아요','상처 잘 받는데 또 잘 풀려요']},
      {mbti:'ISFP',content:['노는거 은근 좋아해요','근데 집에 있는것도 좋아요','마이웨이 성향이 강해요']},
      {mbti:'ESTJ',content:['호불호가 명확하고 단순해요','기억력이 좋아요','완벽주의자 기질이 있어요']},
      {mbti:'ISTJ',content:['원리원칙적이에요','즉흥적인 거 싫어해요','철벽을 잘 쳐요']},
    ]

    let IorE =
    mbtiList.find((data)=> data.name === 'I').count >
    mbtiList.find((data)=> data.name ==='E').count ? 'I' : 'E' 

    let SorN =
    mbtiList.find((data)=> data.name === 'S').count >
    mbtiList.find((data)=> data.name === 'N').count ? 'S' : 'N' 

    let ForT =
    mbtiList.find((data)=> data.name === 'F').count >
    mbtiList.find((data)=> data.name === 'T').count ? 'F' : 'T' 

    let PorJ =
    mbtiList.find((data)=> data.name === 'P').count >
    mbtiList.find((data)=> data.name === 'J').count ? 'P' : 'J' 
  
    let mbti = IorE + SorN + ForT + PorJ
  

    setMbtiContent(mc.filter((e) => e.mbti === mbti)[0]);
    setPage(questionList.length + 1);

  }

  return (
    <Layout>
      {
        page === 0 ?
        <StartPage>
          <StartLogo>
            <LogoText>MBTI</LogoText>
            <LogoArrow>▼</LogoArrow>
          </StartLogo>
          <StartButton onClick={()=>setPage(1)}>테스트 시작하기</StartButton>
        </StartPage>
        :page <= questionList.length?
        <Question>
          <MbtiTitle>
            <BigTitle>MBTI 테스트</BigTitle>
            <div>{`${page} / ${questionList.length}`}</div>
          </MbtiTitle>
          {
            questionList.map((e,i)=>{
              return(
                <QuestionList key={i} style={{display:page === i + 1 ? 'flex' : 'none'}}>
                  <QuestionItem>
                    <Profile>
                      <ProfileCircle></ProfileCircle>
                      <ProfileRectangle></ProfileRectangle>
                    </Profile>
                    <ChatList>
                    {
                      e.q.map((el,index)=>{
                        return(
                          <ChatBox key={index}>
                            <ChatBoxArrow>◀</ChatBoxArrow>
                            <ChatBoxText>{el}</ChatBoxText>
                          </ChatBox>
                        )
                      })
                    }
                    </ChatList>
                  </QuestionItem>
                  <AnswerItem>
                    <AchatBox>
                      <AchatBoxPlus>+</AchatBoxPlus>
                      <AchatBoxHash>#</AchatBoxHash>
                    </AchatBox>
                    {
                      e.a.map((el,index)=>{
                        return(
                          <AnswerBox key={index} onClick={()=>handleCkAnswer(el.type,index)}>
                            {el.text}
                          </AnswerBox>
                        )
                      })
                    }
                  </AnswerItem>
                </QuestionList>
              )
            })
          }
        </Question>
        :
        <Question>
          <MbtiTitle>
            <BigTitle>MBTI 테스트</BigTitle>
            <div onClick={()=>window.location.reload()}>다시하기</div>
          </MbtiTitle>
          <QuestionList style={{display:'flex'}}>
            <QuestionItem>
              <Profile>
                <ProfileCircle></ProfileCircle>
                <ProfileRectangle></ProfileRectangle>
              </Profile>
              <ChatList>
                <ChatBox>
                  <ChatBoxArrow>◀</ChatBoxArrow>
                  <ChatBoxText>당신의 MBTI는 {mbtiContent.mbti}입니다.</ChatBoxText>
                </ChatBox>
                <ChatBox>
                  <ChatBoxArrow>◀</ChatBoxArrow>
                  <ChatBoxText>{mbtiContent.mbti}는요</ChatBoxText>
                </ChatBox>
                {
                   mbtiContent.content.map((e,i)=>{
                    return(
                      <ChatBox key={i}>
                        <ChatBoxArrow>◀</ChatBoxArrow>
                        <ChatBoxText>{e}</ChatBoxText>
                      </ChatBox>
                    )
                  })
                }
              </ChatList>
            </QuestionItem>
          </QuestionList>
        </Question>
      }
    </Layout>
  );
}

export default App;
