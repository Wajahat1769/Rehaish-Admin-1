const Dashboard = () => {
  return (
    <div className="relative bg-dashboard w-full h-[1102px] overflow-hidden text-left text-sm text-grey-grey-400 font-body-2-medium">
      <div className="absolute top-[96px] left-[220px] bg-white w-[1060px] flex flex-col items-end justify-start py-2.5 px-5 box-border text-grey-grey-600">
        <div className="w-[612px] flex flex-row items-center justify-between">
          <div className="relative leading-[150%] font-medium">
            Friday, November 18,2022
          </div>
          <div className="rounded-lg bg-primary-primary-500 flex flex-row items-center justify-center py-[7.5px] px-6 text-white">
            <div className="relative leading-[150%] font-medium">
              Create booking
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white w-[220px] h-[1102px] flex flex-col items-start justify-start pt-8 px-3 pb-0 box-border gap-[32px] text-7xl text-dodgerblue">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[21px]">
          <img
            className="relative w-[30px] h-10"
            alt=""
            src="/d78db4d398303024c2fb933c6c51f79e-1-traced.svg"
          />
          <div className="relative font-medium">Novotel</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm text-grey-grey-600">
          <div className="self-stretch rounded-lg bg-primary-primary-50 flex flex-row items-center justify-start py-2 px-3 gap-[12px] text-primary-primary-600">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/dashboard3.svg"
            />
            <div className="relative leading-[150%] font-medium">Dashboard</div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-3 gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/reservation.svg"
            />
            <div className="relative leading-[150%] font-medium">
              Front desk
            </div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-3 gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/report.svg"
            />
            <div className="relative leading-[150%] font-medium">Guest</div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-3 gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/rooms.svg"
            />
            <div className="relative leading-[150%] font-medium">Rooms</div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-3 gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/deals.svg"
            />
            <div className="relative leading-[150%] font-medium">Deal</div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-3 gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/rate1.svg"
            />
            <div className="relative leading-[150%] font-medium">Rate</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[220px] bg-white w-[1060px] flex flex-col items-start justify-start py-7 px-0 box-border text-base">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
          <div className="rounded bg-grey-grey-50 box-border w-[400px] flex flex-row items-center justify-center py-2 px-4 gap-[8px] border-[1px] border-solid border-dashboard">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/search.svg"
            />
            <div className="flex-1 relative leading-[150%]">
              Search for rooms and offers
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <div className="flex flex-row items-start justify-start p-2">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/notification.svg"
              />
            </div>
            <img
              className="relative w-10 h-10 object-cover"
              alt=""
              src="/avatar@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[172px] left-[240px] rounded-lg bg-white w-[1020px] h-[135px] overflow-hidden text-center">
        <div className="absolute top-[20px] left-[16px] text-xl leading-[150%] font-medium text-grey-grey-800 text-left">
          Overview
        </div>
        <div className="absolute top-[66px] left-[16px] flex flex-row items-end justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[150%]">Today’s</div>
            <div className="relative text-base leading-[150%] font-medium text-grey-grey-600">
              Check-in
            </div>
          </div>
          <div className="relative text-7xl leading-[125%] font-semibold text-primary-primary-600">
            23
          </div>
        </div>
        <div className="absolute top-[66px] left-[212px] flex flex-row items-end justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[150%]">Today’s</div>
            <div className="relative text-base leading-[150%] font-medium text-grey-grey-600">
              Check-out
            </div>
          </div>
          <div className="relative text-7xl leading-[125%] font-semibold text-primary-primary-600">
            13
          </div>
        </div>
        <div className="absolute top-[66px] left-[415px] flex flex-row items-end justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[150%]">Total</div>
            <div className="relative text-base leading-[150%] font-medium text-grey-grey-600">
              In hotel
            </div>
          </div>
          <div className="relative text-7xl leading-[125%] font-semibold text-primary-primary-600">
            60
          </div>
        </div>
        <div className="absolute top-[66px] left-[599px] flex flex-row items-end justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[150%]">Total</div>
            <div className="relative text-base leading-[150%] font-medium text-grey-grey-600">
              Available room
            </div>
          </div>
          <div className="relative text-7xl leading-[125%] font-semibold text-primary-primary-600">
            10
          </div>
        </div>
        <div className="absolute top-[66px] left-[837px] flex flex-row items-end justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[150%]">Total</div>
            <div className="relative text-base leading-[150%] font-medium text-grey-grey-600">
              Occupied room
            </div>
          </div>
          <div className="relative text-7xl leading-[125%] font-semibold text-primary-primary-600">
            90
          </div>
        </div>
      </div>
      <div className="absolute top-[327px] left-[240px] rounded-lg bg-white w-[1020px] h-[236px] text-center text-xs text-success-success-700">
        <div className="absolute top-[20px] left-[16px] text-xl leading-[150%] font-medium text-grey-grey-800 text-left">
          Rooms
        </div>
        <div className="absolute top-[66px] left-[16px] rounded-lg bg-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] box-border w-[230px] h-[150px] flex flex-col items-start justify-center p-4 gap-[4px] border-[1px] border-solid border-grey-grey-100">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="rounded bg-success-success-100 flex flex-row items-start justify-start py-0.5 px-2">
              <div className="relative leading-[150%] font-medium">2 Deals</div>
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/more1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px] text-4xl text-grey-grey-600">
            <div className="relative text-base leading-[150%] font-medium">
              Single sharing
            </div>
            <div className="relative">
              <span className="leading-[125%] font-semibold">2</span>
              <span className="text-lg leading-[150%] font-medium text-grey-grey-400">
                /30
              </span>
            </div>
            <div className="relative text-primary-primary-600">
              <span className="leading-[125%] font-semibold">$ 568</span>
              <span className="text-base leading-[150%] font-medium text-grey-grey-400">
                / day
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[66px] left-[269px] rounded-lg bg-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] box-border w-[230px] h-[150px] flex flex-col items-start justify-start p-4 gap-[4px] border-[1px] border-solid border-grey-grey-100">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="rounded bg-success-success-100 flex flex-row items-start justify-start py-0.5 px-2">
              <div className="relative leading-[150%] font-medium">2 Deals</div>
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/more1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px] text-4xl text-grey-grey-600">
            <div className="relative text-base leading-[150%] font-medium">
              Double sharing
            </div>
            <div className="relative">
              <span className="leading-[125%] font-semibold">2</span>
              <span className="text-lg leading-[150%] font-medium text-grey-grey-400">
                /35
              </span>
            </div>
            <div className="relative text-primary-primary-600">
              <span className="leading-[125%] font-semibold">$ 1,068</span>
              <span className="text-base leading-[150%] font-medium text-grey-grey-400">
                / day
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[66px] left-[522px] rounded-lg bg-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] box-border w-[230px] h-[150px] flex flex-col items-start justify-end p-4 gap-[4px] border-[1px] border-solid border-grey-grey-100">
          <div className="self-stretch flex flex-row items-center justify-end gap-[4px]">
            <div className="rounded bg-success-success-100 hidden flex-row items-start justify-start py-0.5 px-2">
              <div className="relative leading-[150%] font-medium">2 Deals</div>
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/more1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px] text-4xl text-grey-grey-600">
            <div className="relative text-base leading-[150%] font-medium">
              Triple sharing
            </div>
            <div className="relative">
              <span className="leading-[125%] font-semibold">2</span>
              <span className="text-lg leading-[150%] font-medium text-grey-grey-400">
                /25
              </span>
            </div>
            <div className="relative text-primary-primary-600">
              <span className="leading-[125%] font-semibold">$ 1,568</span>
              <span className="text-base leading-[150%] font-medium text-grey-grey-400">
                / day
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[66px] left-[775px] rounded-lg bg-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] box-border w-[230px] h-[150px] flex flex-col items-start justify-end p-4 gap-[4px] border-[1px] border-solid border-grey-grey-100">
          <div className="self-stretch flex flex-row items-center justify-end gap-[4px]">
            <div className="rounded bg-success-success-100 hidden flex-row items-start justify-start py-0.5 px-2">
              <div className="relative leading-[150%] font-medium">2 Deals</div>
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/more1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px] text-4xl text-grey-grey-600">
            <div className="relative text-base leading-[150%] font-medium">
              VIP Suit
            </div>
            <div className="relative">
              <span className="leading-[125%] font-semibold">4</span>
              <span className="text-lg leading-[150%] font-medium text-grey-grey-400">
                /10
              </span>
            </div>
            <div className="relative text-primary-primary-600">
              <span className="leading-[125%] font-semibold">$ 2,568</span>
              <span className="text-base leading-[150%] font-medium text-grey-grey-400">
                / day
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[583px] left-[240px] rounded-lg bg-white w-[604px] h-[206px] text-base">
        <div className="absolute top-[20px] left-[16px] text-xl leading-[150%] font-medium text-grey-grey-800">
          Room status
        </div>
        <div className="absolute top-[66px] left-[16px] flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[82px] text-grey-grey-600">
            <div className="relative leading-[150%] font-medium">
              Occupied rooms
            </div>
            <div className="relative leading-[150%] font-medium">104</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[172px]">
            <div className="relative leading-[150%]">Clean</div>
            <div className="relative leading-[150%] font-medium">90</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[189px]">
            <div className="relative leading-[150%]">Dirty</div>
            <div className="relative leading-[150%] font-medium">4</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[141px]">
            <div className="relative leading-[150%]">Inspected</div>
            <div className="relative leading-[150%] font-medium">60</div>
          </div>
        </div>
        <div className="absolute top-[66px] left-[351px] flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[95px] text-grey-grey-600">
            <div className="relative leading-[150%] font-medium">
              Available rooms
            </div>
            <div className="relative leading-[150%] font-medium">20</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[172px]">
            <div className="relative leading-[150%]">Clean</div>
            <div className="relative leading-[150%] font-medium">30</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[182px]">
            <div className="relative leading-[150%]">Dirty</div>
            <div className="relative leading-[150%] font-medium">19</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[141px]">
            <div className="relative leading-[150%]">Inspected</div>
            <div className="relative leading-[150%] font-medium">30</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[583px] left-[864px] rounded-lg bg-white w-[396px] h-[206px] overflow-hidden text-center text-xs text-grey-grey-800">
        <div className="absolute top-[20px] left-[16px] text-xl leading-[150%] font-medium text-left">
          Floor status
        </div>
        <div className="absolute top-[66px] left-[49px] w-[200px] h-[110px] text-7xl">
          <img
            className="absolute h-[calc(100%_+_70px)] w-full top-[0px] right-[0px] bottom-[-70px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/ring.svg"
          />
          <div className="absolute top-[calc(50%_+_12px)] left-[calc(50%_-_28px)] w-[57px] h-[33px]">
            <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_28.5px)] leading-[125%] font-semibold">
              80%
            </div>
          </div>
        </div>
        <div className="absolute top-[66px] left-[262px] flex flex-row items-center justify-start gap-[8px] text-grey-grey-400">
          <div className="relative rounded-[50%] bg-primary-primary-400 w-2 h-2" />
          <div className="relative leading-[150%]">Competed</div>
        </div>
        <div className="absolute top-[94px] left-[262px] flex flex-row items-center justify-start gap-[8px] text-grey-grey-400">
          <div className="relative rounded-[50%] bg-dashboard w-2 h-2" />
          <div className="relative leading-[150%]">Yet to Complete</div>
        </div>
      </div>
      <div className="absolute top-[809px] left-[240px] rounded-lg bg-white w-[604px] h-[281px] text-xs">
        <div className="absolute top-[72px] left-[68px] flex flex-col items-start justify-start gap-[41px]">
          <img
            className="relative w-[522px] h-px"
            alt=""
            src="/vector-15.svg"
          />
          <img
            className="relative w-[522px] h-px"
            alt=""
            src="/vector-15.svg"
          />
          <img
            className="relative w-[522px] h-px"
            alt=""
            src="/vector-15.svg"
          />
          <img
            className="relative w-[522px] h-px"
            alt=""
            src="/vector-15.svg"
          />
          <img
            className="relative w-[522px] h-px"
            alt=""
            src="/vector-15.svg"
          />
        </div>
        <div className="absolute top-[67px] left-[16px] flex flex-col items-end justify-center gap-[19px]">
          <div className="relative leading-[150%]">100%</div>
          <div className="relative leading-[150%]">75%</div>
          <div className="relative leading-[150%]">50%</div>
          <div className="relative leading-[150%]">25%</div>
          <div className="relative leading-[150%]">0%</div>
        </div>
        <div className="absolute top-[16px] left-[16px] text-xl leading-[150%] font-medium text-grey-grey-800">
          Occupancy Statistics
        </div>
        <div className="absolute top-[16px] left-[481px] rounded-lg flex flex-row items-center justify-center py-[7.5px] pr-4 pl-2 gap-[8px] text-sm text-grey-grey-500 border-[1px] border-solid border-grey-grey-400">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/calendar.svg"
          />
          <div className="relative leading-[150%] font-medium">Monthly</div>
        </div>
        <div className="absolute top-[73px] left-[68px] flex flex-row items-end justify-start gap-[32px]">
          <div className="w-[22px] h-[170px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] h-[145.1px] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">May</div>
          </div>
          <div className="w-[22px] h-[138px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">Jun</div>
          </div>
          <div className="w-[22px] h-[165px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">Jul</div>
          </div>
          <div className="w-[22px] h-[104px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">Aug</div>
          </div>
          <div className="w-[22px] h-[188px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">Sep</div>
          </div>
          <div className="w-[22px] h-[170px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">Oct</div>
          </div>
          <div className="w-[22px] h-[170px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">Nov</div>
          </div>
          <div className="w-[22px] h-[170px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">Dec</div>
          </div>
          <div className="w-[22px] h-[188px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">Jan</div>
          </div>
          <div className="w-[22px] h-[187px] flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-sm [background:linear-gradient(180deg,_#6fa2ea,_#4990f2)] [transform:_rotate(179.93deg)] [transform-origin:0_0]" />
            <div className="relative leading-[150%]">Feb</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[809px] left-[864px] rounded-lg bg-white w-[396px] h-[281px] overflow-hidden text-grey-grey-600">
        <div className="absolute top-[62px] left-[16px] flex flex-col items-start justify-start gap-[16px]">
          <div className="box-border w-[364px] flex flex-row items-center justify-between pt-0 px-0 pb-2 border-b-[1px] border-solid border-grey-grey-100">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">Mark</div>
              <div className="relative leading-[150%] font-medium text-grey-grey-400">
                Food could be better.
              </div>
            </div>
            <div className="relative leading-[150%] font-medium text-grey-grey-800">
              A201
            </div>
          </div>
          <div className="box-border w-[364px] flex flex-row items-center justify-between pt-0 px-0 pb-2 border-b-[1px] border-solid border-grey-grey-100">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">
                Christian
              </div>
              <div className="relative leading-[150%] font-medium text-grey-grey-400">
                Facilities are not enough for amount paid.
              </div>
            </div>
            <div className="relative leading-[150%] font-medium text-grey-grey-800">
              A101
            </div>
          </div>
          <div className="w-[364px] flex flex-row items-center justify-between pt-0 px-0 pb-2 box-border">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">
                Alexander
              </div>
              <div className="relative leading-[150%] font-medium text-grey-grey-400">
                Room cleaning could be better.
              </div>
            </div>
            <div className="relative leading-[150%] font-medium text-grey-grey-800">
              A301
            </div>
          </div>
        </div>
        <div className="absolute top-[16px] left-[16px] w-[364px] flex flex-row items-center justify-between text-xl text-grey-grey-800">
          <div className="relative leading-[150%] font-medium">
            Customers feedback
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/more1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
