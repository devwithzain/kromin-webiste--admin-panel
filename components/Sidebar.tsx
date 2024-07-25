"use client";
import Logo from "./Logo";
import {
	MdOutlineEventAvailable,
	MdOutlineSettings,
	MdOutlineWebStories,
} from "react-icons/md";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { LuContact } from "react-icons/lu";
import { GrServices } from "react-icons/gr";
import { PiPathBold } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BiStoreAlt, BiSupport } from "react-icons/bi";
import { sideBarItem } from "@/constants";

export default function Sidebar() {
	const router = useRouter();
	const pathName = usePathname();
	return (
		<div className="w-[15%] rounded-lg bg-[#F7F7F7] py-6 px-4 h-[97%] fixed">
			<div className="flex flex-col gap-2">
				<Logo />
				<hr className="bg-black text-black w-full" />
				<h1 className="text-[#081226] text-[16px] uppercase font-medium text-left w-full">
					Main Menu
				</h1>
			</div>
			<div className="w-full flex flex-col justify-between gap-2 py-6">
				<div className="flex flex-col gap-2">
					{sideBarItem.map((item) => (
						<div
							className="group transition-all duration-200 ease-linear"
							key={item.id}>
							<Link
								href={item.href}
								className={`transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226] ${
									pathName === item.href ? "bg-[#081226]" : ""
								}`}>
								<div
									className={`text-[#081226] group-hover:text-white ${
										pathName === item.href ? "text-white" : ""
									}`}>
									{item.icon}
								</div>
								<h1
									className={`text-[#081226] group-hover:text-white ${
										pathName === item.href ? "text-white" : ""
									}`}>
									{item.title}
								</h1>
							</Link>
						</div>
					))}
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
					<div
						className="group transition-all duration-200 ease-linear"
						onClick={() => router.push("/user-profile")}>
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
