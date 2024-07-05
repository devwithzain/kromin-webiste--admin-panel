"use client";
import { TUserMenuProps } from "@/types";
import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MenuItem, Avatar } from "@/components";
import toast from "react-hot-toast";

export default function UserMenu({ currentUser }: TUserMenuProps) {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	const handleClick = () => {
		signOut({ callbackUrl: "/" });
		toast.success("Logout");
	};

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={toggleOpen}
					className="p-4 text-white md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
					<div className="">
						<Avatar src={currentUser?.image} />
					</div>
					<AiOutlineMenu size={25} />
				</div>
			</div>
			{isOpen && (
				<div className="absolute rounded-xl shadow-md w-fit bg-white overflow-hidden right-0 top-12 text-sm">
					<div className="flex flex-col cursor-pointer">
						{currentUser && (
							<>
								<MenuItem
									label="Setting"
									onClick={() => router.push("/admins/user-profile")}
									icon={<CiSettings size={20} />}
								/>
								<hr />
								<MenuItem
									label="Logout"
									onClick={handleClick}
									icon={<LuLogOut size={20} />}
								/>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
