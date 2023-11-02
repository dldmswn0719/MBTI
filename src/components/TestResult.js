import React from "react";

function TestResult({ mbtiContent }) {
  return (
    <>
      <div className="flex-col bg-[#bacce0] w-full max-w-4xl h-full overflow-hidden">
        <div className="flex flex-row w-full items-center p-4 box-border font-bold">
          <div className="flex flex-1">MBTI 테스트</div>
          <div className="cursor-pointer" onClick={() => window.location.reload()}>다시하기</div>
        </div>
        <div className="flex flex-col h-auto overflow-scroll scroll" style={{ display: "flex" }}>
          <div className="flex flex-1 m-[10px_15px_5px_15px]">
            <div className="flex flex-col w-10 h-10 bg-[#a1b6e9] rounded-2xl mr-2 items-center justify-center">
              <div className="bg-[#cbd6f2] w-2 h-2 rounded"></div>
              <div className="bg-[#cbd6f2] w-4 h-2 rounded-[8px_8px_0px_0px] mt-0.5"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-start max-w-[60vw] mt-1 mb-3">
                <div className="text-white text-xs mt-2">◀</div>
                <div className="py-2 px-2.5 bg-white -ml-1 rounded-xl text-left">
                  당신의 MBTI는 {mbtiContent.mbti}입니다.
                </div>
              </div>
              <div className="flex flex-row items-start max-w-[60vw] mt-1 mb-3">
                <div className="text-white text-xs mt-2">◀</div>
                <div className="py-2 px-2.5 bg-white -ml-1 rounded-xl text-left">
                  <img className="w-48 h-48" src={mbtiContent.img} alt={mbtiContent.mbti} />
                </div>
              </div>
              <div className="flex flex-row items-start max-w-[60vw] mt-1 mb-3">
                <div className="text-white text-xs mt-2">◀</div>
                <div className="py-2 px-2.5 bg-white -ml-1 rounded-xl text-left">
                  {mbtiContent.mbti}는요
                </div>
              </div>
              {
                mbtiContent.content.map((e, i) => {
                    return (
                    <div className="flex flex-row items-start max-w-[60vw] mt-1 mb-3" key={i}>
                        <div className="text-white text-xs mt-2">◀</div>
                        <div className="py-2 px-2.5 bg-white -ml-1 rounded-xl text-left">{e}</div>
                    </div>
                    );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestResult;
