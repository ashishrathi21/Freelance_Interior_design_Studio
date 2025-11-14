import { ContactCard } from "./ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

function DefaultDemo() {
	return (
		<main className="relative flex size-full min-h-screen w-full items-center justify-center p-4 bg-gradient-to-b from-neutral-950 to-neutral-900
">
			<div className="mx-auto max-w-6xl ">
				<ContactCard
					title="Let’s Design Your Dream Space"
					description="Ready to make your space truly yours? Let’s talk about your ideas and turn them into reality."
					contactInfo={[
						{
							icon: MailIcon,
							label: 'Email',
							value: 'contact@21st.dev',
						},
						{
							icon: PhoneIcon,
							label: 'Phone',
							value: '+92 312 1234567',
						},
						{
							icon: MapPinIcon,
							label: 'Address',
							value: 'Faisalabad, Pakistan',
							className: 'col-span-2',
						}
					]}
				>
					<form action="" className="w-full space-y-4 text-white">
						<div className="flex flex-col gap-2">
							<Label>Name</Label>
							<Input type="text" className="bg-zinc-800 text-white" />
						</div>
						<div className="flex flex-col gap-2">
							<Label>Email</Label>
							<Input type="email" className="bg-zinc-800 text-white" />
						</div>
						<div className="flex flex-col gap-2">
							<Label>Phone</Label>
							<Input type="phone" className="bg-zinc-800 text-white" />
						</div>
						<div className="flex flex-col gap-2">
							<Label>Message</Label>
							<Textarea className="bg-zinc-800 text-white" />
						</div>
						<Button className="w-full bg-zinc-800 text-white" type="button">
							Submit
						</Button>
					</form>
				</ContactCard>
			</div>
		</main>
	);
}

export default DefaultDemo;