import React from 'react'
const aboutitems = [
    {
        label: 'project done',
        number: 45

    },
    {
        label: 'years of experince',
        number: 10
    }
]
const About = () => {
    return (
        <section id="about" className='section'>
            <div className='container'>
                <div className='bf-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
                    <p className="text-ainc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I'm Henry, a professional web developer with a knack for crafting visually
                        stunning and highly functional websites. Combining creativity and technical expertise,
                        I transform your vision into a digital masterpiece that excels in both appearance and performance.
                    </p>
                    <div className="flex flex-wrap items-ceneter gap-4 md:gap-7">
                        {aboutitems.map(({ label, number }, index) => (
                            <div key={index}>
                               <div className='flex items-center md:mb-2'>
                                <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                               </div>
                               <p className='text-sm text-zinc-400'>{label}</p>
                            </div>
                        ))}
                        <img src="./images/logo.svg" alt="logo" weight={30} height={30}  className='ml-auto md:w-[40px] md:-[40px]'/>
                    </div>

                </div>

            </div>
        
        </section >
    )
}

export default About
