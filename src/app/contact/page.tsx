
import Link from "next/link"

export default function Contact() {
  return (
    <main>
      <div className="bg-white h-screen">
        <div className="flex items-center justify-center h-screen relative">
        <img src="/assets/cloud-color-7.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg m-auto p-auto w-2/3 h-2/3 xl:w-1/3 items-center justify-center relative z-10">
          <div className="mt-48 relative z-10">
            <h1 className="font-bold font-sansita_swashed 3xl text-center relative z-20">Angela Ball</h1>
            <br />
            <h2 className="font-extrabold 1xl text-center relative z-30">+1(360)809-4414</h2>
            <br />
            <h3 className="font-bold 1xl text-center font relative z-40">106 West Lauridsen Boulevard,</h3>
            <h3 className="font-bold 1xl text-center relative z-50">Port Angeles, WA 98363</h3>
            <br />
            <p className="italic underline text-center relative z-60">Call or Text to set up your appointment!</p>
          </div>
          </div>
          {/* <form className="w-full mx-20 my-48 bg-c1 p-8 rounded-lg border border-c3 relative z-0">
            <div className="w-full group">
              <h1 className="font-sansita_swashed text-center">Have a Question? Contact Us!</h1>
              <input type="email" name="floating_email" id="floating_email" className="block p-2.5 py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-[1px] border-c3 appearance-none dark:text-c3 dark:border-c3 dark:focus:border-c2 focus:outline-none focus:ring-0 focus:border-c2 peer" placeholder="email" required />
              <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-md text-c2 dark:text-c2 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="grid md:grid-cols-2 mt-30 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_first_name" id="floating_first_name" className="block p-2.5 py-2.5 px-0 w-full text-md text-c3 bg-transparent border-0 border-b-[1px] border-c3 appearance-none dark:text-c3 dark:border-c3 dark:focus:border-c2 focus:outline-none focus:ring-0 focus:border-c2 peer" placeholder=" " required />
                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-md text-c2 dark:text-c2 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-c2 peer-focus:dark:text-c2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_last_name" id="floating_last_name" className="block p-2.5 py-2.5 px-0 w-full text-md text-c3 bg-transparent border-0 border-b-[1px] border-c3 appearance-none dark:text-c3 dark:border-c3 dark:focus:border-c2 focus:outline-none focus:ring-0 focus:border-c2 peer" placeholder=" " required />
                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-md text-c2 dark:text-c2 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-c2 peer-focus:dark:text-c2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
              </div>
            </div>
            <textarea id="floating message" className="h-16rem block p-2.5 py-2.5 px-0 w-full text-md text-c3 bg-transparent border-0 border-b-[1px] border-c3 appearance-none dark:text-c3 dark:border-c3 dark:focus:border-c2 focus:outline-none focus:ring-0 focus:border-c2 peer" placeholder="Send me a message..."></textarea>
           <div className="flex items-center justify-center">
            <button type="submit" className="flex justify-center m-10 bg-opacity-75 bg-blur-lg hover:bg-opacity-100 bg-c1 text-c3 border border-c3 drop-shadow-lg hover:bg-c3 hover:text-white hover:border-c2 hover:font-extrabold px-4 py-2 rounded-md">Submit</button>
         </div>
          </form> */}
          </div>
        </div>

    </main >
  )
}