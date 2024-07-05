import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getData } from "@/actions/getData";
import getCurrentUser from "@/actions/getCurrentUser";
import { AdminNavbar, EditButton, DeleteButton } from "@/components";

export default async function Admins() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	const response = await getData();
	return (
		<div className="w-full min-h-screen">
			<AdminNavbar currentUser={currentUser} />
			<div className="w-full gap-4 flex flex-col padding-x pt-10">
				<div className="w-full flex justify-between items-center gap-4">
					<div>
						<h1 className="text-[40px] font-serif font-medium text-white">
							Services Management
						</h1>
					</div>
					<div>
						<Link
							href="/admins/add-product"
							className="text-[20px] cursor-pointer font-serif font-medium bg-slate-200 px-6 py-3 rounded-lg">
							Add Product
						</Link>
					</div>
				</div>
				<div className="w-full flex flex-col gap-4 my-5">
					{response?.map((item) => (
						<div
							key={item.id}
							className="w-full rounded-md bg-white border flex items-center justify-between gap-6 divide-x-2">
							<div className="p-4 w-[15%]">
								<h1 className="text-[15px] text-black font-medium font-sans">
									{item.title}
								</h1>
							</div>
							<div className="p-4 w-[35%]">
								<p className="text-[15px] text-black font-medium font-sans">
									{item.description}
								</p>
							</div>
							{item.imageUrl && (
								<Image
									src={item.imageUrl}
									alt="image"
									width={200}
									height={200}
								/>
							)}
							<div className="p-4 w-[15%] flex items-end justify-end gap-4">
								<EditButton id={item.id} />
								<DeleteButton id={item.id} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
