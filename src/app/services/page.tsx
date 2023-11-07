import Link from "next/link";
import {ArrowUp} from "lucide-react";

export default function Services() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center bg-white h-screen relative" id="home">
        <img src="/assets/cloud-color-7.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg w-[calc(100%-2rem)] sm:w-1/2 min-h-2/3 items-center justify-center relative z-10">
          <h1 className="text-c3 font-bold font-sansita_swashed flex text-center items-center justify-center mt-8 relative z-10">Treatment Offerings</h1>
          <br />
          <nav>
            <ul>
              <li className="text-c2 font-bold font-sansita_swashed text-2xl underline flex items-center justify-center mt-8 relative z-10"> <a href="#section1" >Detox Body Wrap</a></li>
              <br />
              <li className="text-c2 font-bold font-sansita_swashed text-2xl underline flex items-center justify-center mt-8 relative z-10"> <a href="#section2" >Parafin Wax Dip</a></li>
              <br />
              <li className="text-c2 font-bold font-sansita_swashed text-2xl underline flex items-center justify-center mt-8 relative z-10"> <a href="#section3" >Prenatal Massage</a></li>
              <br />
              <li className="text-c2 font-bold font-sansita_swashed text-2xl underline flex items-center justify-center mt-8 relative z-10"> <a href="#section4" >Treatment Massage</a></li>
              <br />
              <li className="text-c2 font-bold font-sansita_swashed text-2xl underline flex items-center justify-center mt-8 relative z-10"> <a href="#section5" >Hot Stone Massage</a></li>
            </ul>
          </nav>
      </div>
      </div>
      <div className="flex flex-col items-center bg-c1 h-2xscreen relative" id="section1">
        <img src="/assets/cloud-color-6.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg mx-auto mt-36 p-4 w-2/3 h-2/3 items-center justify-center relative z-10">
          <h1 className="text-c3 font-bold font-sansita_swashed text-3xl flex items-center justify-center mt-8 relative z-20">Detox Body Wrap   $60</h1>
          <p className="w-4/5 mt-8 relative m-auto z-30">
            Treat yourself to a revitalizing experience that goes beyond the traditional massage. Your skilled therapist begins this
            exclusive treatment by expertly dry brushing your skin, not only leaving it feeling silky-smooth but also stimulating your
            lymphatic system, promoting detoxification from within.

            But that&apos;s not all! It gets taken up a notch with a detoxifying oil blend infused with the goodness of essential oils.
            Your body will bask in the indulgent embrace of these nourishing oils as they work their magic on your skin,
            leaving you feeling rejuvenated and refreshed.

            Once enveloped in the soft, comforting embrace of cotton wraps, your body is given the chance to &quot;cook&quot; in relaxation for 20 minutes.
            During this period, the heat gently encourages your body to sweat out those unwanted toxins, while at the same time, your skin
            absorbs the beneficial properties of the oils.

            To conclude this pampering session, your therapist will treat you to a blissful neck massage. Designed to reduce pain and inflammation,
            this soothing massage will leave you feeling like you&apos;re floating on clouds.

            Beyond its sheer indulgence, the Detox Body Wrap is an excellent way to transition between seasons or kick-start your wellness journey.
            Say goodbye to sluggishness and embrace a renewed sense of vitality.

            Don&apos;t miss out on this amazing opportunity to treat yourself to a revitalizing experience that promises to leave you glowing inside and out.
            Book your session now and let the Detox Body Wrap work its magic! Your body will thank you for it.
          </p>
        </div>
        <Link href="#home" type="submit" className="bg-opacity-75 bg-blur-lg hover:bg-opacity-100 bg-c1 text-c3 border border-c3 drop-shadow-lg hover:bg-c3 hover:text-white hover:border-c2 hover:font-extrabold px-2 py-2 mb-24 mt-10 rounded-md"><ArrowUp /></Link>
      </div>
      <div className="flex flex-col items-center bg-white h-2xscreen relative" id="section2">
        <img src="/assets/cloud-color-4.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg mx-auto mt-36 p-4 w-2/3 h-3/4 items-center justify-center relative z-10">
          <h1 className="text-c3 font-bold font-sansita_swashed text-3xl flex text-center items-center justify-center mt-8 relative z-20">Paraffin Wax Dip For Hands and Feet      $35</h1>
          <p className="w-4/5 mt-8 relative m-auto z-30">
            Discover the transformative power of our Paraffin Wax Dip for your hands and feet.
            This specialized treatment is a true game changer, providing much-needed relief for those experiencing arthritis pain, sore joints, or achy muscles.
            Step into a world of relaxation as your skilled therapist begins by gently applying a soothing massage oil to your hands and/or feet.
            The warm, melted paraffin wax awaits, ready to cocoon your extremities in its comforting embrace. Once submerged, your hands and feet are carefully
            covered with soft cotton mitts, ensuring the wax unleashes its power efficiently.

            But that&apos;s not all - the benefits are astounding! As the paraffin wax begins to cool and solidify, it creates a unique therapeutic experience.
            The warmth helps to alleviate pain, reduces inflammation, and eases muscle tension. As a result, you&apos;ll feel a remarkable difference in your
            range of motion, allowing you to move more freely and comfortably.
            Say goodbye to stiff, uncomfortable hands and feet, and welcome newfound softness and flexibility. This treatment leaves your skin feeling incredibly smooth,
            deeply moisturized, and with an enhanced glow.

            It&apos;s not just a pampering session; it&apos;s a revitalizing experience designed to improve your overall well-being. Whether you&apos;re seeking relief from chronic
            pain or simply yearning for a rejuvenating treat, our Paraffin Wax Dip is the perfect solution.
            Take a step towards better health and increased comfort by booking your session today. Embrace the soothing sensation of the paraffin wax as it works
            wonders on your hands and feet, leaving you feeling like you&apos;re walking on air. Treat yourself or a loved one to this incredible experience,
            and let the healing powers of paraffin wax transform your day. You won&apos;t believe the difference until you try it for yourself!
          </p>
        </div>
        <Link href="#home" type="submit" className="bg-opacity-75 bg-blur-lg hover:bg-opacity-100 bg-c1 text-c3 border border-c3 drop-shadow-lg hover:bg-c3 hover:text-white hover:border-c2 hover:font-extrabold px-2 py-2 mb-24 mt-10 rounded-md"><ArrowUp /> </Link>
      </div>
      <div className="flex flex-col items-center bg-c1 h-2xscreen relative" id="section3">
        <img src="/assets/cloud-color-3.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg mx-auto mt-36 p-4 w-2/3 h-2/3 items-center justify-center relative z-10">
          <h1 className="text-c3 font-bold font-sansita_swashed text-3xl flex text-center items-center justify-center mt-8 relative z-20">Prenatal Massage:  $85 for 60 mins $120 for 90 mins</h1>
          <p className="w-4/5 mt-8 relative m-auto z-30">
            Experience the ultimate care and relaxation through Prenatal Massage. This nurturing massage is specially designed to provide relief from pregnancy-related
            aches and pains, promote improved circulation, and alleviate swelling. Prepare to be pampered as stress melts away, leaving you with a profound sense of
            well-being and rejuvenation.

            Our skilled therapist possess in-depth knowledge of safe practices for expectant mothers, ensuring that you are in the most capable and caring hands.
            With their expertise, the therapist creates a serene and comfortable environment, tailoring the massage to suit your unique needs and preferences.

            During this blissful session, you&apos;ll experience the gentle power of healthy touch, fostering a deeper connection between you and your growing baby.
            The massage not only focuses on easing physical discomforts but also provides a much-needed emotional and mental respite during this transformative phase of life.

            Say goodbye to the common discomforts of pregnancy and embrace a newfound sense of tranquility and vitality. Whether you choose the 60-minute session or indulge
            in the extended 90-minute experience, you&apos;ll leave feeling refreshed, relaxed, and ready to embrace the joys of motherhood.

            Treat yourself or an expectant mother you know to this exceptional journey of wellness and self-care. Our Prenatal Massage is the perfect way to celebrate this
            precious time and cherish the bond between mother and child. Book your session today and let us cater to your well-being with the utmost care and expertise.
          </p>
        </div>
        <Link href="#home" type="submit" className="bg-opacity-75 bg-blur-lg hover:bg-opacity-100 bg-c1 text-c3 border border-c3 drop-shadow-lg hover:bg-c3 hover:text-white hover:border-c2 hover:font-extrabold px-2 py-2 mb-24 mt-10 rounded-md"><ArrowUp /></Link>
      </div>
      <div className="flex flex-col items-center bg-white h-2xscreen relative" id="section4">
        <img src="/assets/cloud-color-2.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg mx-auto mt-36 p-4 w-2/3 h-2/3 items-center justify-center relative z-10">
          <h1 className="text-c3 font-bold font-sansita_swashed text-3xl flex text-center items-center justify-center mt-8 relative z-20">Treatment Massage:  $85 for 60 mins  $120 for 90 mins</h1>
          <p className="w-4/5 mt-8 relative m-auto z-30">
            Unveil the life-changing advantages of Treatment Massage. This tailored massage experience is designed to address your specific needs, ensuring you receive
            the utmost care and relief.

            Our skilled therapist is dedicated to understanding your unique requirements. She will take the time to listen and assess your concerns, helping to determine
            the most suitable approach for your individual situation. Whether you require a comprehensive full-body massage to unwind and rejuvenate or a more targeted
            approach to address specific issues like TMJD, post-surgery rehabilitation, shoulder pain from repetitive stress injuries, sciatica, whiplash, and more,
            our therapist has the expertise to cater to your requirements.

            Don&apos;t let pain or discomfort hold you back from enjoying life to the fullest. Treatment Massage offers a holistic solution to alleviate pain, reduce tension,
            and enhance your overall well-being. Experience the healing power of therapeutic touch as our therapist skillfully applies techniques to ease your concerns
            and promote healing from within.

            This massage is not just a luxurious treat; it&apos;s a powerful tool to restore balance and harmony to your body and mind. By targeting the root of your discomfort,
            Treatment Massage empowers you to feel revitalized, energized, and ready to embrace life&apos;s challenges.

            Don&apos;t miss out on the chance to improve your quality of life. Book your session today and experience the difference that personalized care and expertise can make.
            Invest in your well-being with Treatment Massage, and unlock the path to a healthier, happier you.
          </p>
        </div>
        <Link href="#home" type="submit" className="bg-opacity-75 bg-blur-lg hover:bg-opacity-100 bg-c1 text-c3 border border-c3 drop-shadow-lg hover:bg-c3 hover:text-white hover:border-c2 hover:font-extrabold px-2 py-2 mb-24 mt-10 rounded-md"><ArrowUp /></Link>
      </div>
      <div className="flex flex-col items-center bg-c1 h-2xscreen relative" id="section5">
        <img src="/assets/cloud-color-1.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg mx-auto mt-36 p-4 w-2/3 h-3/4 items-center justify-center relative z-10">
          <h1 className="text-c3 font-bold font-sansita_swashed text-3xl flex text-center items-center justify-center mt-8 relative z-20">Hot Stone Massage:  $85 for 60 mins $120 for 90 mins</h1>
          <p className="w-4/5 mt-8 relative m-auto z-30">

            Indulge in the extraordinary experience of our Hot Stone Massage and prepare to be amazed as the stone&apos;s warmth not only provides a delightful experience but also
            unlocks a plethora of health benefits that will leave you feeling utterly rejuvenated.

            The secret lies in the soothing heat of the stones, which takes relaxation to an entirely new level. Unlike a standard massage, the heat permeates deep into your muscles,
            allowing them to release tension and knots effortlessly. You&apos;ll find yourself reaching a state of unparalleled tranquility as the stones release their benefits on your
            body and mind.
            Moreover, our skilled therapist strategically places the stones on your body, promoting improved blood flow to targeted areas. This increased circulation not only enhances
            the massage&apos;s effectiveness but also facilitates the delivery of oxygen and nutrients to the areas that need it most.

            The Hot Stone Massage is a holistic approach that goes beyond mere physical relief. It has been proven to reduce anxiety and stress, leaving you with a renewed sense of
            inner calm and serenity. Say goodbye to the burdens of the day and embrace a peaceful state of mind. Embrace the myriad benefits of this massage, including improved
            circulation, relief from tension, and a heightened sense of well-being. It&apos;s not just a luxury; it&apos;s a therapeutic journey that nurtures both body and soul.

            Don&apos;t miss this incredible opportunity to enhance your overall health and wellness. Treat yourself to our Hot Stone Massage and let the healing power of these ancient
            stones revitalize your body and restore your energy. Book your session now and experience the blissful harmony of body, mind, and spirit.
          </p>
        </div>
        <Link href="#home" type="submit" className="bg-opacity-75 bg-blur-lg hover:bg-opacity-100 bg-c1 text-c3 border border-c3 drop-shadow-lg hover:bg-c3 hover:text-white hover:border-c2 hover:font-extrabold px-2 py-2 mb-24 mt-10 rounded-md"><ArrowUp /></Link>
      </div>

    </main>
  )
}