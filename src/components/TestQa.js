import React from "react";

function TestQa({ questionList, page, handleCkAnswer }) {
  return (
    <>
      <div className="flex flex-col bg-[#bacce0] w-full max-w-4xl h-full overflow-hidden">
        <div className="flex flex-row w-full items-center p-4 box-border font-bold">
          <div className="text-xl flex flex-1">MBTI 테스트</div>
          <div className="text-xl">{`${page} / ${questionList.length}`}</div>
        </div>
        {
            questionList.map((e, i) => {
            return (
                <div className="flex flex-col h-full overflow-scroll scroll" key={i} style={{ display: page === i + 1 ? "flex" : "none" }}>
                    <div className="flex flex-1 m-[10px_15px_5px_15px]">
                        <div className="flex flex-col w-10 h-10 bg-[#a1b6e9] rounded-2xl mr-2 items-center justify-center">
                        <div className="bg-[#cbd6f2] w-2 h-2 rounded"></div>
                        <div className="bg-[#cbd6f2] w-4 h-2 rounded-[8px_8px_0px_0px] mt-0.5"></div>
                        </div>
                        <div className="flex flex-col">
                        {
                            e.q.map((el, index) => {
                                return (
                                <div className="flex flex-row items-start max-w-[60vw] mt-1 mb-3" key={index}>
                                    <div className="text-white text-xs mt-2">◀</div>
                                    <div className="py-2 px-2.5 bg-white -ml-1 rounded-xl text-left md:text-base text-sm">{el}</div>
                                </div>
                                );
                            })
                        }
                        </div>
                    </div>
                    <div className="w-full bg-white pb-3 flex flex-col">
                        <div className="flex w-full text-[#969696] text-xl border-b border-[#eee] mb-6">
                        <div className="flex flex-1 py-3 px-2 box-border text-3xl">+</div>
                        <div className="py-3 px-2 text-3xl">#</div>
                        </div>
                        {
                            e.a.map((el, index) => {
                            return (
                                <div className="flex items-center justify-center md:h-36 h-28 text-center shadow-[2px_2px_0px_#ededed] border border-[#ededed] mx-5 mb-4 rounded-xl cursor-pointer md:text-lg text-base" key={index} onClick={() => handleCkAnswer(el.type, index)}>
                                    {el.text}
                                </div>
                            );
                            })
                        }
                    </div>
                </div>
            );
            })
        }
      </div>
    </>
  );
}

export default TestQa;
