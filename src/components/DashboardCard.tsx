import React from 'react';

type Appointment = {
  date: string;
  chat: boolean;
  videoChat: boolean;
};

type Billed = {
  amount: string;
  balance: string;
};

type DashboardCardProps = {
  nextAppointment: Appointment;
  previousAppointment: Appointment;
  previousBilled: Billed;
};

const DashboardCard: React.FC<DashboardCardProps> = ({ nextAppointment, previousAppointment, previousBilled }) => {
    return (
      <>
        <div className="grid md:grid-cols-3 gap-[15px] mt-[30px]  mb-[30px] lg:gap-[24px] lg:mt-[50px] lg:mb-[45px]">
          <div className="bg-[#CCE9FA] bg-[url('../assets/images/card-bg.png')] bg-[top_right] bg-no-repeat bg-cover rounded-[10px] py-6 px-[15px] lg:px-[30px]">  
            <h6 className="text-[#686868]">Next Appointment</h6>
            <h2>{nextAppointment.date}</h2>
            <div className="flex justify-between items-center gap-10 mt-[10px]">
              <p className="font-gothamMedium">Chat</p>
              <h5>{nextAppointment.chat ? 'yes' : 'No'}</h5>
            </div>
            <div className="flex justify-between items-center gap-10 mt-[10px]">
              <p className="font-gothamMedium">Video Chat</p>
              <h5>{nextAppointment.videoChat ? 'yes' : 'No'}</h5>
            </div>
          </div>
          <div className="bg-[#FFBBCD] bg-[url('../assets/images/card-bg.png')] bg-[top_right] bg-no-repeat bg-cover rounded-[10px] py-6 px-[15px] lg:px-[30px]">
            <h6 className="text-[#686868]">Previous Appointment</h6>
            <h2>{previousAppointment.date}</h2>
            <div className="flex justify-between items-center gap-10 mt-[10px]">
              <p className="font-gothamMedium">Chat</p>
              <h5>{previousAppointment.chat ? 'Start' : 'No'}</h5>
            </div>
            <div className="flex justify-between items-center gap-10 mt-[10px]">
              <p className="font-gothamMedium">Video Chat</p>
              <h5>{previousAppointment.videoChat ? 'Start' : 'No'}</h5>
            </div>
          </div>
          <div className="bg-[#FFD899] bg-[url('../assets/images/card-bg.png')] bg-[top_right] bg-no-repeat bg-cover rounded-[10px] py-6 px-[15px] lg:px-[30px]">
            <h6 className="text-[#686868]">Previous Billed</h6>
            <h3 className="font-gothamBold mt-[4px]">{previousBilled.amount}</h3>
            <h6 className="text-[#686868] mt-[16px]">Balance Amount</h6> 
            <h3 className="font-gothamBold mt-[4px]">{previousBilled.amount}</h3>
          </div>
        </div>
      </>
    );
  };
  
  export default DashboardCard;
  