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
                <div className=''>
                    <p className="">
                        Welcome! I'm Henry, a professional web developer with a knack for crafting visually
                        stunning and highly functional websites. Combining creativity and technical expertise,
                        I transform your vision into a digital masterpiece that excels in both appearance and performance.
                    </p>
                    <div className="">
                        {aboutItems.map(({ label, number }, index) => (
                            <div key={key}>
                               <div className=''>
                                <span className=''>{number}</span>
                                <span className=''>+</span>
                               </div>
                               <p className=''>{label}</p>
                            </div>
                        ))}
                        <img src="./images/logo.svg" alt="logo" weight={30} height={30}  className=''/>
                    </div>

                </div>

            </div>
        
        </section >
    )
}

export default About
