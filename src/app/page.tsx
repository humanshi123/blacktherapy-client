import DashboardAssignment from "@/components/DashboardAssignment";
import DashboardCard from "@/components/DashboardCard";

const Home = () => {
  const nextAppointment = {
    date: '31 July 24',
    chat: true,
    videoChat: true,
  };

  const previousAppointment = {
    date: '12 July 24',
    chat: true, 
    videoChat: false,
  };

  const previousBilled = {
    amount: '$25.36',
    balance: '$50.36',  
  };
  return(
    <>     
    <h1 className="font-antic text-[#283C63] text-[30px] leading-[1.2em] mb-[25px] lg:text-[40px] lg:mb-[50px]">
      Welcome
    </h1>
    <div className="bg-[url(../assets/images/banner.jpg)] bg-[cover] bg-[center] rounded-[10px]">
     <h2 className="text-[#fff] py-[50px] px-[15px] lg:py-[78px] lg:px-[110px]">
       Welcome to  The <br /> 
       Black Therapy Network 
     </h2> 
   </div>
   <DashboardCard 
     nextAppointment={nextAppointment}
     previousAppointment={previousAppointment}
     previousBilled={previousBilled}
   />
   <DashboardAssignment /> 
  </>
  );
};
export default Home

