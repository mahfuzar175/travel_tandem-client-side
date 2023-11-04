const ContactUs = () => {
    const handleSend = e =>{
        e.preventDefault();
    }
  return (
    <section className="p-6 bg-gray-800 text-white  shadow-2xl">
	<form  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ">
		<h2 className="w-full text-3xl font-bold leadi text-center">Contact us</h2>
		<div>
			<label className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button onClick={handleSend} type="submit"  className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-blue-500 text-white hover:bg-blue-700">Send</button>
		</div>
	</form>
</section>
  );
};

export default ContactUs;
