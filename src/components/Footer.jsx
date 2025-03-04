import React from 'react'
import { ButtonPrimary } from './Button';
const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://www.github.com/codewithsadee-org'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/codewithsadee_'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/codewithsadee'
    },
    {
        label: 'CodePen',
        href: 'https://codepen.io/codewithsadee'
    }
];
const Footer = () => {
    return (
        <footer className="section">
            <div className="container">

                <div className="">
                    <div className="">
                        <h2 className="headline-1 reveal-up">
                            Let&apos;s work together today!
                        </h2>

                        <ButtonPrimary
                            href="mailto:codewithsadee@gmail.com"
                            label="Start project"
                            icon="chevron_right"
                            classes="revel-up"
                        />


                    </div>
                

                <div className=''>
                    <div className=''></div>
                    <div className=''></div>
                    <div >
                        <p className=''>sitemap</p>
                        <ul>
                            {sitemap.map(({ label, href }, key) => (
                            <li key={key}>
                                <a
                                    href={href}
                                    className=" reveal-up"
                                >
                                    {label}
                                </a>
                            </li>
                         ))}
                        </ul>

                    </div>


                    <div >
                        <p className=''>socials</p>
                        <ul>
                            {socials.map(({ label, href }, key) => (
                            <li key={key}>
                                <a
                                    href={href}
                                    target='_blank'
                                    className=""
                                >
                                    {label}
                                </a>
                            </li>
                         ))}
                        </ul>

                    </div>
                </div>
                </div>

                <div className="">
  <a
    href=""
    className="reveal-up"
  >
    <img
      src="/images/logo.svg"
      width={40}
      height={40}
      alt=""
    />
  </a>

  <p className=''>
    &copy; 2024 <span className=''>codewithsadde</span>
  </p>
</div>


            </div>
        </footer>

    )
}

export default Footer
