
export default function About() {
    return (
        <main>
            <div className="bg-c1">
                <div className="flex">
                    <div className="flex gap-20 my-20 mx-auto px-10 max-w-[80em] items-center flex-col lg:flex-row-reverse min:h-screen">

                        <img src="/assets/cloud-color-5.png" className="absolute inset-0 w-full h-full object-cover" />
                        
                            <img className="h-auto transition-all duration-300 rounded cursor-pointer filter grayscale hover:grayscale-0 mt-16 sm:w-2/3 lg:w-1/2 items-center justify-center" src="./assets/angela.jpg" alt="A picture of Angela Ball smiling." />
                            <div className="my-16 mx-4 p-4 bg-white bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg min-h-2/3 items-center justify-center relative z-10">
                                <h1 className="font-sansita_swashed font-bold text-2xl relative z-10">Meet Your Massage Therapist</h1>
                                <h3 className="font-sansita_swashed font-semibold text-xl text-c2 relative z-10">Angela Ball</h3>
                                <p className="relative z-10">With over a decade of experience as a dedicated massage therapist since 2007,
                                    Angela Ball is your trusted partner in holistic wellness.
                                    Angela&appo;s diverse skill set encompasses a wide range of specialized techniques,
                                    making her an ideal choice for your unique needs.</p>
                                <p className="relative z-10">Angela&appo;s passion lies in helping her clients experience the most profound relief
                                    and relaxation. As a trained specialist in pregnancy massage,
                                    she understands the importance of providing gentle and nurturing care to expectant mothers,
                                    ensuring a comfortable and rejuvenating experience.</p>
                                <p className="relative z-10">In addition to her expertise in pregnancy massage, Angela is well-versed in TMJD
                                    release techniques, offering effective solutions for those dealing with jaw-related
                                    discomforts. If you&appo;re seeking to unwind and recharge, Angela&appo;s relaxation
                                    massage will transport you to a state of pure bliss, leaving stress and tension far behind.</p>
                                <p className="relative z-10">For a truly transformative experience, Angela invites you to explore a variety of indulgent
                                    treatments. With her deft touch and meticulous attention to detail, Angela performs
                                    Detox Body Wraps that cleanse and revitalize, Hot Stone Massages that soothe and restore,
                                    and Aromatherapy Massages that envelop you in the calming scents of essential oils.</p>
                                <p className="relative z-10">Angela&appo;s dedication to her craft stems from her genuine love for helping people feel better.
                                    Each session is tailored to address your specific concerns, ensuring a personalized journey
                                    towards enhanced well-being and inner harmony.</p>
                                <p className="relative z-10">Embrace the opportunity to revitalize your body, mind, and spirit with Angela&appo;s expertise
                                    and care. Book your session with her today and discover the unparalleled benefits of her
                                    healing touch. Get ready to experience a new level of relaxation and wellness,
                                    courtesy of Angela Ball, your trusted massage therapist.</p>
                            </div>
                        </div>
                    </div>
                </div>
         
        </main>
    )
}