import { GoHome } from "react-icons/go";
import Logo from "./Logo";
import { GrServices } from "react-icons/gr";
import { PiPathBold } from "react-icons/pi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import {
	MdOutlineEventAvailable,
	MdOutlineSettings,
	MdOutlineWebStories,
} from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { BiStoreAlt, BiSupport } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
	return (
		<div className="w-[15%] rounded-lg bg-[#F7F7F7] py-6 px-4 h-[98vh] sticky top-3">
			<div className="flex flex-col gap-2">
				<Logo />
				<hr className="bg-black text-black w-full" />
				<h1 className="text-[#081226] text-[16px] uppercase font-medium text-left w-full">
					Main Menu
				</h1>
			</div>
			<div className="w-full flex flex-col justify-between gap-2 py-6">
				<div className="flex flex-col gap-2">
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 bg-[#081226]">
							<GoHome
								size={22}
								className="text-white"
							/>
							<h1 className="text-white">Home</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<BiStoreAlt
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">Agency</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<GrServices
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">
								Services
							</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<MdOutlineWebStories
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">
								Success Stories
							</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<PiPathBold
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">Careers</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<HiOutlineAcademicCap
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">Academy</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<MdOutlineEventAvailable
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">Events</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<LuContact
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">
								Contact Us
							</h1>
						</div>
					</div>
				</div>
				<div className="absolute bottom-4 left-0 px-4 w-full flex flex-col gap-2">
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 text-[#081226] group-hover:bg-[#081226]">
							<BiSupport
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">Support</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<MdOutlineSettings
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">
								Settings
							</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<FiLogOut
								size={22}
								className="group-hover:text-white text-[#081226]"
							/>
							<h1 className="group-hover:text-white text-[#081226]">Logout</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
