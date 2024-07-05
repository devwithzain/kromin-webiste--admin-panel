"use client";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import { Heading, Input, Modal } from "@/components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function LoginModal() {
	const router = useRouter();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);

			if (callback?.ok) {
				router.push("/admins");
				toast.success("Logged in");
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading
				title="Welcome back"
				subtitle="Login to continue to Kromin!"
			/>
			<Input
				id="email"
				label="Email"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			title="Login to continue to Kromin admin panel!"
			actionLabel="Continue"
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
		/>
	);
}
