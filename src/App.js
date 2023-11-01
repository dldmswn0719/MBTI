import { useState } from 'react';
import questionList from './components/QuestionList';
import mc from './components/MbtiType'
import TestStart from './components/TestStart';
import TestQa from './components/TestQa';
import TestResult from './components/TestResult';

function App() {

  const [type,setType] = useState(mc)
 
  const [page,setPage] = useState(0);

  const [mbtiList,setMbtiList] = useState([
    {name : 'I' , count : 0},{name : 'E' , count : 0},{name : 'S' , count : 0},{name : 'N' , count : 0},
    {name : 'F' , count : 0},{name : 'T' , count : 0},{name : 'P' , count : 0},{name : 'J' , count : 0}
  ])
    
  const handleCkAnswer = (type) =>{
    let ls = [...mbtiList]

    for(let i = 0; i < ls.length; i++){
      if(ls[i].name === type){
        ls[i].count = ls[i].count + 1
      }
    }

    setMbtiList(ls)
    setPage(page+1)

    if(page + 1 === questionList.length){
      setMbti();
    }

  }

  const [mbtiContent,setMbtiContent] = useState([])

  function setMbti(){
    
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
  
    setMbtiContent(type.filter((e) => e.mbti === mbti)[0]);
    setPage(questionList.length + 1);

  }

  return (
    <div className='w-[100vw] text-sm flex justify-center bg-[#eee] h-screen'>
      {
        page === 0 ?
        <TestStart setPage={setPage} />
        :page <= questionList.length?
        <TestQa questionList={questionList} page={page} handleCkAnswer={handleCkAnswer} />
        :
        <TestResult mbtiContent={mbtiContent} />
      }
    </div>
  );
}

export default App;
