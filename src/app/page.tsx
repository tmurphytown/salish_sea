import { AiFillStar } from 'react-icons/ai'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <div className="h-screen">
        <img src="/assets/cloud-color-3.png" className='absolute inset-0 w-4/5 md:w-3/5 xl:w-2/5 left-[-1em] md:left-[-10em] mt[10em] xl:mt-[5%] object-contain' />
        <div className="bg-white flex justify-center h-screen">
          <div className='absolute h-screen w-full flex items-center justify-center z-20 px-20'>
            <img src="./assets/salish sea logo.png" className='w-[40em] flex justify-center relative z-10' alt="logo" />
          </div>
          <img src="/assets/cloud-color-1.png" className='relative z-10 w-3/5 h-2/5 right-[-15em] sm:right-[-15em] lg:right-[-30em] top-[70vh] object-contain-center' />
        </div>
      </div>

      <div className="bg-c1" >
        <div className="flex">
          <div className="flex gap-20 my-20 mx-auto px-10 max-w-[80em] items-center flex-col md:flex-row-reverse min:h-screen">
            <div className='basis-1/2 md:w-5/6'>
              <img className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 z-20" src="./assets/hot-rock-massage.jpg" alt="hot stone" />
            </div>
            <div className="md:w-1/2 lg:2/3">
              <h2 className="font-sansita_swashed font-bold text-3xl pb-6">Why Salish Sea</h2>
              <p>
                If you&apos;re seeking the ultimate relaxation and rejuvenation experience,
                look no further than Salish Sea Massage. As a reputable and highly
                sought-after massage therapist, Angela prides herself on offering a
                multi-sensory journey where the healing power of touch, sound and
                aromatherapy merge into an unforgettable experience for body, mind,
                and soul.</p>
              <p>Angela takes the time to understand your unique needs and preferences,
                tailoring each session to address your specific concerns. Whether you&apos;re
                seeking relief from stress and tension, battling chronic pain,
                or simply desiring a well-deserved escape from the daily grind,
                her blend of time-honored massage techniques and modern therapeutic
                approach strives to deliver a holistic and personalized treatment that
                leaves you feeling revitalized and balanced.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen">
        <div className="flex">
          <img src="/assets/cloud-color-2.png" className='absolute z-10  left-[-5em] mt-[-10%]' />
          <div className=''>
            <div className="flex gap-20 mx-auto px-10 max-w-[80em] relative z-20 flex-col lg:flex-row items-center pt-20 mb-20">
                <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 w-full md:w-1/2 mx-4 m-8 relative" src="./assets/theraputic_massage.jpg" alt="theraputic massage" />
              <div className="px-4 md:px-20 lg:p-0">
                <h2 className="font-sansita_swashed font-bold text-3xl">The Benefits of Massage</h2>
                <p>Massage therapy offers a myriad of benefits that extend well beyond
                  the realms of relaxation and indulgence. First and foremost, massage
                  is a powerful stress-reliever. As our lives become increasingly hectic,
                  the soothing touch of a skilled massage therapist can work wonders in
                  reducing the levels of cortisol, the stress hormone, in our bodies.
                  This decrease in stress not only leaves us feeling more at ease but also
                  helps boost our mood and overall sense of well-being.</p>
                <p>Massage therapy is also renowned for its ability to alleviate muscle
                  tension and soreness. Whether caused by strenuous physical activity,
                  poor posture, or sedentary lifestyles, regular massages can target and
                  release the tightness in our muscles, leading to improved flexibility
                  and range of motion. The increase in blood circulation during a massage
                  also aids in delivering vital nutrients and oxygen to the tissues,
                  promoting quicker recovery from injuries and reducing inflammation.</p>
                <p>Beyond the physical benefits, massage has a profound impact on our
                  mental health. It is known to enhance mental clarity and focus, allowing
                  us to better cope with the challenges of everyday life. Additionally,
                  the calming and nurturing touch of a massage can alleviate symptoms of
                  anxiety and depression, leaving us with a sense of comfort and emotional
                  balance. Overall, the holistic nature of massage therapy makes it a truly
                  valuable practice for enhancing both our physical and mental well-being. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-c1 min-h-screen relative">
        <div className="flex">
          <div className="flex gap-20 my-20 mx-auto px-5 max-w-[80em] items-center lg:flex-row-reverse flex-col">
              <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 w-full md:w-1/2 mx-4 m-8 z-10" src="./assets/oil.jpg" alt="aroma therapy" />
            <div>
              <img src="/assets/cloud-color-5.png" className='absolute z-0 right-[-20em] top-[-15vh] object-contain-center' />

              <div className="px-4 md:px-10 relative z-20">
                <h2 className="font-sansita_swashed font-bold text-3xl pb-6">What My Clients Are Saying</h2>

                <h4 className="font-bold">Wonderfully relaxing</h4>
                <p>“I had a great first experience with Angela. She so warm and kind.
                  Very easy to relax and I left feeling less tension. I look forward
                  to my next massage.”</p>
                <div className="flex flex-row">
                  < AiFillStar />< AiFillStar />< AiFillStar />< AiFillStar />< AiFillStar />
                </div>
                <br />
                <h4 className="font-bold">BEST MASSAGE</h4>
                <p>Angela is AWESOME. She got the PERFECT touch. Gets all the kinks out.
                  I haven&appo;t felt this GREAT for so long. She makes my body feels like
                  BRAND NEW. Good bye my stiff neck and shoulders, my sore body, and
                  headache. Thank you ANGELA. She have the MAGIC touch. And would
                  recommend her to anyone</p>
                <div className="flex flex-row">
                  < AiFillStar />< AiFillStar />< AiFillStar />< AiFillStar />< AiFillStar />
                </div>
                <br />
                <h4 className="font-bold">Perfect!</h4>
                <p>Angela has SUCH a gift. I&appo;ve seen her twice for prenatal massage,
                  and at 21 weeks, I feel amazing. She&appo;s also such a joy to connect
                  with and has such a wonderful energy. Looking forward to many more visits.</p>
                <div className="flex flex-row">
                  < AiFillStar />< AiFillStar />< AiFillStar />< AiFillStar />< AiFillStar />
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
