import React from 'react'
import '../Home/index.css'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

const index = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <>
            <section>
                <Carousel afterChange={onChange}>
                    <div className='contentstyle carousel1'>
                        <div className='content'>
                            <h1>The New Way To Display Product by <span style={{ color: '#0fb78d' }}>Colorlib</span></h1>
                            <Link>EXPLORE NOW</Link>
                        </div>
                    </div>
                    <div className='contentstyle carousel2'>
                    </div>
                </Carousel>
            </section>
            <section className='icons'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <i class="fa-solid fa-truck"></i>
                            <h3>WORLDWIDE DELIVERY</h3>
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                        </div>
                        <div className='col'>
                            <i class="fa-solid fa-shield"></i>
                            <h3>SECURE PAYMENTS</h3>
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                        </div>
                        <div className='col'>
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                            <h3>SIMPLE RETURNS</h3>
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className='boy'>
                <div className='container'>
                    <div className='content'>
                        <span>Limited Offers 20% OFF</span>
                        <h2>Week Deal</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index
