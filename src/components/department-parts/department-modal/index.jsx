import DepartmentNavbar from "./navbar";

const DepartmentModal = () => {
  return (
    <div className="my-8 flex flex-col gap-[80px]">
      <div className="max-w-[691px] mx-auto  p-8 bg-white rounded-[16px]">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2021/10/15/M-Company-Logotype-Logo-Icon-Graphics-18833644-1-580x387.jpg"
          alt="Image"
          className="w-full h-auto rounded-[16px]"
        />
        <div className="flex flex-col gap-[20px] mt-[33px]">
          <h3 className="text-center text-[#000000] font-bold text-[32px] uppercase">
            M TECK
          </h3>
          <p className="text-left text-[#000000] font-semibold text-[16px]">
            M Tech is a forward-thinking technology company dedicated to
            building intelligent, high-performance digital infrastructures for
            modern businesses.We specialize in designing, developing, and
            scaling software solutions that solve real business problems.
          </p>
          <p className="text-left text-[#000000] font-semibold text-[16px]">
            M Tech is a forward-thinking technology company dedicated to
            building intelligent, high-performance digital infrastructures for
            modern businesses.We specialize in designing, developing, and
            scaling software solutions that solve real business problems.
          </p>
        </div>
      </div>

      <DepartmentNavbar />
    </div>
  );
};

export default DepartmentModal;
