const Room = () => {
  return (
    <div className="relative bg-white w-full h-[960px] text-left text-7xl text-grey-grey-400 font-body-2-medium">
      <div className="absolute top-[0px] left-[0px] bg-white w-[220px] h-[960px] flex flex-col items-start justify-start pt-8 px-3 pb-0 box-border gap-[32px] text-dodgerblue">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[21px]">
          <img
            className="relative w-[30px] h-10"
            alt=""
            src="/d78db4d398303024c2fb933c6c51f79e-1-traced.svg"
          />
          <div className="relative font-medium">Novotel</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm text-grey-grey-600">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-3 gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/dashboard2.svg"
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
          <div className="self-stretch rounded-lg bg-primary-primary-50 flex flex-row items-center justify-start py-2 px-3 gap-[12px] text-primary-primary-600">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/rooms1.svg"
            />
            <div className="relative leading-[150%] font-medium">Room</div>
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
      <div className="absolute top-[104px] left-[240px] flex flex-col items-start justify-start gap-[16px] text-xs">
        <div className="relative leading-[150%] font-medium">Room</div>
        <div className="rounded-lg bg-white w-[1020px] overflow-hidden flex flex-col items-start justify-start gap-[16px] text-sm text-grey-grey-600">
          <div className="self-stretch bg-white flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[16px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
              <div className="rounded-81xl bg-primary-primary-50 flex flex-row items-center justify-center py-[7.5px] px-4 text-primary-primary-600 border-[1px] border-solid border-primary-primary-500">
                <div className="relative leading-[150%] font-medium">
                  All room(100)
                </div>
              </div>
              <div className="rounded-81xl flex flex-row items-center justify-center py-[7.5px] px-4 border-[1px] border-solid border-grey-grey-300">
                <div className="relative leading-[150%] font-medium">
                  Available room(20)
                </div>
              </div>
              <div className="rounded-81xl flex flex-row items-center justify-center py-[7.5px] px-4 border-[1px] border-solid border-grey-grey-300">
                <div className="relative leading-[150%] font-medium">
                  Booked(80)
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-white">
              <div className="rounded-lg bg-primary-primary-500 flex flex-row items-center justify-center py-[9.5px] px-6">
                <div className="relative leading-[150%] font-medium">
                  Add room
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-primary-primary-50">
            <div className="self-stretch w-[150px] flex flex-col items-start justify-start text-grey-grey-900">
              <div className="self-stretch bg-grey-grey-50 flex flex-row items-center justify-start py-2.5 px-6 gap-[8px] text-xs text-grey-grey-500">
                <div className="relative bg-grey-grey-100 w-5 h-5 overflow-hidden shrink-0 hidden" />
                <div className="relative leading-[150%] font-medium">
                  Room number
                </div>
              </div>
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%] font-medium">
                  #001
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%] font-medium">
                  #002
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%] font-medium">
                  #003
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%] font-medium">
                  #004
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%] font-medium">
                  #005
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%] font-medium">
                  #006
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%] font-medium">
                  #007
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%] font-medium">
                  #008
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
            </div>
            <div className="self-stretch w-[200px] flex flex-col items-start justify-start">
              <div className="self-stretch bg-grey-grey-50 flex flex-row items-center justify-start py-2.5 px-6 gap-[8px] text-xs text-grey-grey-500">
                <div className="relative bg-grey-grey-100 w-5 h-5 overflow-hidden shrink-0 hidden" />
                <div className="relative leading-[150%] font-medium">
                  {" "}
                  Bed type
                </div>
              </div>
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">Double bed</div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">Single bed</div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">VIP</div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">VIP</div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">Single bed</div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">Double bed</div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">Double bed</div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">Single bed</div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
            </div>
            <div className="self-stretch w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch bg-grey-grey-50 flex flex-row items-center justify-start py-2.5 px-6 gap-[8px] text-xs text-grey-grey-500">
                <div className="relative bg-grey-grey-100 w-5 h-5 overflow-hidden shrink-0 hidden" />
                <div className="relative leading-[150%] font-medium">
                  {" "}
                  Room floor
                </div>
              </div>
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">Floor - 1</div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  <span>Floor -2</span>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  <span>Floor -1</span>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  <span>Floor -1</span>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  <span>Floor -1</span>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  <span>Floor -2</span>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  <span>Floor -3</span>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  <span>Floor -5</span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-grey-grey-50 flex flex-row items-center justify-start py-2.5 px-6 gap-[8px] text-xs text-grey-grey-500">
                <div className="relative bg-grey-grey-100 w-5 h-5 overflow-hidden shrink-0 hidden" />
                <div className="relative leading-[150%] font-medium">
                  Room facility
                </div>
              </div>
              <div className="self-stretch bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  AC, shower, Double bed, towel bathtub, TV
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  AC, shower, Double bed, towel bathtub, TV
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  AC, shower, Double bed, towel bathtub, TV
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  AC, shower, Double bed, towel bathtub, TV
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  AC, shower, Double bed, towel bathtub, TV
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  AC, shower, Double bed, towel bathtub, TV
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  AC, shower, Double bed, towel bathtub, TV
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch bg-white flex flex-row items-center justify-start py-[17px] px-6 gap-[8px]">
                <div className="flex-1 relative bg-grey-grey-100 h-5 overflow-hidden hidden" />
                <div className="flex-1 relative leading-[150%]">
                  AC, shower, Double bed, towel bathtub, TV
                </div>
              </div>
            </div>
            <div className="self-stretch w-[150px] flex flex-col items-start justify-start text-center text-xs text-success-success-400">
              <div className="self-stretch bg-grey-grey-50 flex flex-row items-center justify-start py-2.5 px-6 gap-[8px] text-left text-grey-grey-500">
                <div className="relative bg-grey-grey-100 w-5 h-5 overflow-hidden shrink-0 hidden" />
                <div className="relative leading-[150%] font-medium">
                  Status
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[15px] px-6 text-primary-primary-400">
                <div className="flex-1 flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-primary-primary-50 flex flex-row items-center justify-center py-0.5 px-2">
                    <div className="relative leading-[150%]">Available</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[15px] px-6 text-error-error-400">
                <div className="flex-1 flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-error-error-50 flex flex-row items-center justify-center py-0.5 px-2">
                    <div className="relative leading-[150%]">Booked</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[15px] px-6 text-error-error-400">
                <div className="flex-1 flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-error-error-50 flex flex-row items-center justify-center py-0.5 px-2">
                    <div className="relative leading-[150%]">Booked</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-success-success-50 flex flex-row items-center justify-center py-0.5 px-2">
                    <div className="relative leading-[150%]">Reserved</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-success-success-50 flex flex-row items-center justify-center py-0.5 px-2">
                    <div className="relative leading-[150%]">Reserved</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[15px] px-6 text-warning-warning-400">
                <div className="flex-1 flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-warning-warning-50 flex flex-row items-center justify-center py-0.5 px-2">
                    <div className="relative leading-[150%]">Waitlist</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-success-success-50 flex flex-row items-center justify-center py-0.5 px-2">
                    <div className="relative leading-[150%]">Reserved</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-start py-[15px] px-6 text-warning-warning-400">
                <div className="flex-1 flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-warning-warning-50 flex flex-row items-center justify-center py-0.5 px-2">
                    <div className="relative leading-[150%]">Blocked</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[72px] flex flex-col items-start justify-start text-xs text-grey-grey-500">
              <div className="self-stretch bg-grey-grey-50 flex flex-row items-center justify-start py-2.5 px-6 gap-[8px]">
                <div className="relative bg-grey-grey-100 w-5 h-5 overflow-hidden shrink-0 hidden" />
                <div className="relative leading-[150%] font-medium hidden">
                  Details
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-center py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start p-2">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/more1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-center py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start p-2">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/more1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-center py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start p-2">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/more1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-center py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start p-2">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/more1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-center py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start p-2">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/more1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-center py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start p-2">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/more1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-center py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start p-2">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/more1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-primary-primary-50 h-px" />
              <div className="self-stretch flex-1 bg-white flex flex-row items-center justify-center py-[15px] px-6">
                <div className="flex-1 flex flex-row items-start justify-start p-2">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/more1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between text-grey-grey-500">
            <div className="w-[1020px] flex flex-row items-center justify-between pt-[11px] px-6 pb-4 box-border">
              <div className="rounded-lg flex flex-row items-center justify-center py-[7.5px] pr-4 pl-2 gap-[8px] opacity-[0.2] border-[1px] border-solid border-grey-grey-400">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-left.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Previous
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[2px] text-center text-grey-grey-400">
                <div className="rounded-lg bg-grey-grey-50 w-10 h-10 flex flex-col items-center justify-center py-3 px-3.5 box-border text-primary-primary-600">
                  <div className="relative leading-[20px] font-medium">1</div>
                </div>
                <div className="rounded-lg w-10 h-10 flex flex-col items-center justify-center py-3 px-3.5 box-border">
                  <div className="relative leading-[20px] font-medium">2</div>
                </div>
                <div className="rounded-lg w-10 h-10 flex flex-col items-center justify-center py-3 px-3.5 box-border">
                  <div className="relative leading-[20px] font-medium">3</div>
                </div>
                <div className="rounded-lg w-10 h-10 flex flex-col items-center justify-center py-3 px-3.5 box-border">
                  <div className="relative leading-[20px] font-medium">4</div>
                </div>
                <div className="rounded-lg w-10 h-10 flex flex-col items-center justify-center py-3 px-3.5 box-border">
                  <div className="relative leading-[20px] font-medium">5</div>
                </div>
                <div className="rounded-lg w-10 h-10 flex flex-col items-center justify-center py-3 px-3.5 box-border">
                  <div className="relative leading-[20px] font-medium">6</div>
                </div>
                <div className="rounded-lg w-10 h-10 flex flex-col items-center justify-center py-3 px-3.5 box-border">
                  <div className="relative leading-[20px] font-medium">7</div>
                </div>
              </div>
              <div className="rounded-lg flex flex-row items-center justify-center py-[7.5px] pr-2 pl-4 gap-[8px] border-[1px] border-solid border-grey-grey-400">
                <div className="relative leading-[150%] font-medium">Next</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
