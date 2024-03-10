
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs
		.sendForm('service_aw8wtd5', 'template_qumgeyg', form.current, 'PHzkIxOEmuOvcMH0W')
		.then(
		  (response) => {
			console.log('Email sent successfully:' );
			form.current.reset();
		  },
		  (error) => {
			console.error('Email failed to send:', error);
		  }
		);
	};
  return (
    <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Contact Us</h1>
				</div>
				<div className="divide-y divide-gray-200">
					
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
					<form ref={form}>
						<div className="relative">
							<input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative my-10">
							<input autocomplete="off" id="message" name="message" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Message" />
							<label for="message" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
						</div>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1"onClick={sendEmail}>Submit</button>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

