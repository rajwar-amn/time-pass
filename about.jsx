import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { Timeline } from 'gsap/gsap-core'
gsap.registerPlugin(ScrollTrigger)


const About = () => {
    const containerRef = useRef()

    useGSAP(() => {
        gsap.utils.toArray('.fadeIn').forEach((el) => {
            gsap.from(el, {
                opacity: 0,
                scrollTrigger: {
                    trigger: el,
                    start: "center+=50 bottom",
                    end: "center+=80 bottom",
                    scrub: 1,
                }
            })
        })


        gsap.utils.toArray('.leftSwipe').forEach((el) => {
            gsap.from(el, {
                x: -25,
                opacity: 0,
                duration: 2,
                ease: 'power1.inOut',
                stagger: 1,
                scrollTrigger: {
                    trigger: el, // Individual trigger for each element
                    start: "top+=20 bottom",
                    end: "bottom+20 bottom",
                    scrub: 1,
                }
            });
        });


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.skillContainer', // Trigger based on the first element
                start: "center bottom",
                end: "bottom+=50 bottom",
                scrub: 2,
            }
        });

        gsap.utils.toArray('.dropAnimate').forEach((el, index) => {
            tl.from(el, {
                y: 25,
                opacity: 0,
                duration: 1,
                ease: 'sine.in',
            }, '-=0.8');
        });

        gsap.utils.toArray('.popUp').forEach((el, index) => {
            gsap.from(el, {
                y: 50,
                opacity: 0.5,
                duration: 1,
                ease: 'sine.in',
                scrollTrigger: {
                    trigger: el,
                    start: "center+=10 bottom",
                    end: "center+=50 bottom",
                    scrub: 1,
                }
            }, '-=.25');
        });





    }, { scope: containerRef.current })
    return (
        <section ref={containerRef} className='relative overflow-hidden text-color1 py-10'>
            <div className=' relative'>
                <div className=' max-w-4xl mx-auto mb-32'>
                    <div className='space-y-12 mb-16 ml-4'>
                        <span className=' fadeIn opacity-100 uppercase text-color1/60 tracking-[0.2em]'>about me</span>
                        <div className='grid grid-cols-1 md:grid-cols-2  mt-5 gap-12'>
                            <div className='space-y-6'>
                                <h1 className=' leftSwipe text-5xl tracking-tight'>
                                    Hi, I'm <span className='text-blue1'>Aman Rajwar</span>
                                </h1>
                                <div className='space-y-4 mt-10'>
                                    <div className='leftSwipe'> <span className='text-color1/60'>Based in Uttarpradesh, India</span></div>
                                    <div className='leftSwipe'> <span className='text-color1/60'>25 Years Old</span></div>
                                    <div className='leftSwipe'> <span className='text-color1/60'>Full Stack Developer</span></div>
                                    <div className='leftSwipe'> <span className='text-color1/60'>1 Year of Work Experience</span></div>
                                </div>
                                <p className=' fadeIn text-lg leading-relaxed'>As a dedicated developer based in the heart of Bavaria, I bring German precision and creative innovation to every project. I specialize in creating robust, scalable web applications that combine cutting-edge technology with intuitive user experiences.</p>
                                <div className='popUp space-y-2 space-x-4 font-bold'>
                                    <a href="" className=' bg-blue1/70 px-6 py-3 rounded-lg'>GetIn Touch</a>
                                    <a href="" className=' border border-blue1/60 px-6 py-3  rounded-lg'>View Projects</a>
                                </div>
                            </div>

                            <div className='space-y-6 relative'>
                                <div className='space-y-4'>
                                    <h3 className='  leftSwipe text-2xl '>
                                        Key Skills
                                    </h3>
                                    <div className=' flex tracking-wide font-semibold flex-wrap gap-2 skillContainer'>

                                        <span className='dropAnimate bg-blue1/20  px-4 py-2 rounded-full content-center'> Typescript</span>
                                        <span className='dropAnimate bg-blue1/20  px-4 py-2 rounded-full content-center'> React</span>
                                        <span className='dropAnimate bg-blue1/20  px-4 py-2 rounded-full content-center'> Javascript</span>
                                        <span className='dropAnimate bg-blue1/20  px-4 py-2 rounded-full content-center'> typescript</span>
                                        <span className='dropAnimate bg-blue1/20  px-4 py-2 rounded-full content-center'> typescript</span>
                                        <span className='dropAnimate bg-blue1/20  px-4 py-2 rounded-full content-center'> typescript</span>

                                    </div>

                                    <div className='space-y-4'>
                                        <h3 className='leftSwipe text-2xl'>Services</h3>
                                        <ul className='space-y-2'>
                                            <li className='leftSwipe'>Full Stack Development</li>
                                            <li className='leftSwipe'>Full Stack Development</li>
                                            <li className='leftSwipe'>Full Stack Development</li>
                                            <li className='leftSwipe'>Full Stack Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="relative p-6 rounded-xl  bg-background/5 backdrop-blur-sm border border-blue1/10 hover:border-blue1/30 transition-all duration-300 group" >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                            </div>
                            <div className="relative text-4xl font-display text-blue1 mb-2" >Junior</div>
                            <div className="relative text-dark/60 dark:text-light/60 text-sm font-medium">Professional Level</div>
                        </div>
                        <div className="relative p-6 rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-blue1/10 hover:border-blue1/30 transition-all duration-300 group" >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-30rounded-xl"></div>
                            <div className="relative text-4xl font-display text-blue1 mb-2" >20+</div>
                            <div className="relative text-dark/60 dark:text-light/60 text-sm font-medium">Projects Completed</div>
                        </div>
                        <div className="relative p-6 rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-blue1/10 hover:border-blue1/30 transition-all duration-300 group" >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                            </div>
                            <div className="relative text-4xl font-display text-blue1 mb-2" >10+</div>
                            <div className="relative text-dark/60 dark:text-light/60 text-sm font-medium">Happy Clients</div>
                        </div>
                        <div className="relative p-6 rounded-xl bg-white/5 dark:bg-black/5  backdrop-blur-sm border border-blue1/10 hover:border-blue1/30 transition-all duration-300 group" >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="relative text-4xl font-display text-blue1 mb-2" >4</div>
                            <div className="relative text-dark/60 dark:text-light/60 text-sm font-medium">Countries Reached</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
