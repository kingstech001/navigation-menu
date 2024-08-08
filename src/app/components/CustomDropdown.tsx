import Image from 'next/image';
import Link from 'next/link';

interface CustomDropdownProps {
  handleLogout?: () => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ handleLogout }) => {
  return (
    <section className=" bg-[#F1F4F8] rounded-lg shadow-sm p-2 ">
      <h2 className="text-[#4D4E51] p-[10px]">My Account</h2>
      <hr />
      <article className="font-[500] text-[14px] leading-5 text-[#4D4E51]">
        <Link href="/settings" className="flex items-center gap-2 p-[10px] mt-1">
          <Image src="/settings.svg" width={20} height={20} alt="settings" />
          <p>Settings</p>
        </Link>
        <Link href="/help" className="flex items-center gap-2 p-[10px] mt-1">
          <Image src="/help_support.svg" width={20} height={20} alt="help" />
          <p>Help & Support</p>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full bg-[#DA6411] flex items-center gap-2 p-[10px] text-[14px] leading-5 mt-1 rounded-sm text-white"
        >
          <Image src="/logout.svg" width={20} height={20} alt="logout" />
          <p>Log out</p>
        </button>
      </article>
    </section>
  );
};

export default CustomDropdown;
