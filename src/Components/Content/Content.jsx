import React from 'react';
import Header from '../Header/Header';
import style from './Content.module.css'
import ash from '../img/ash.jpg'

const Content = () => {
    return (
        <div>
            <Header/>
            <section className={style.about}>
               
                <div className="container">
                    <h1 className={style.about__title}>Поступайте за границу <br /> с UniPage</h1>
                    <p className={style.about__text}>Ваш эксперт по образованию за рубежом</p>
                    <div className={style.buttons}>
                        <button>Бесплатная консультация</button>
                        <button>Об услугах</button>
                    </div>
                    <div className={style.about__wrapper}>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>2023</p> год основания</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>4 000+</p> cтудентов</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>5 000+</p> публикаций</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>28 000+</p> университетов</a>
                    </div>
                </div>
            </section>
            <section className={style.wrapper}>
                <div className={style.container}> 
                <h1 className={style.wrapper__titles}>Наши специалисты</h1>
                <div className={style.wrapper__grid}>
                    <div className={style.wrapper__card3}><img src=''  alt='ash' /></div>
                    <div className={style.wrapper__card3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ad quae accusantium repellendus eum veritatis. Facere dolores ducimus quae earum? Molestias facere impedit deserunt, eum accusantium illum inventore provident velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, rem eius maiores tempore eveniet magnam aperiam repudiandae velit tempora, quis ea animi beatae. Amet natus qui provident ullam atque placeat laboriosam sequi nesciunt harum. Officiis magni, provident aliquam sint eos rerum consequuntur laudantium! Ab quae accusantium, accusamus, maiores, recusandae labore fugit saepe beatae sint modi nisi molestias pariatur magni illum. Provident ut vel aperiam odio exercitationem, inventore eos nihil atque laboriosam amet similique quidem sed incidunt est culpa non, aspernatur quos dolorem porro commodi quisquam nulla a. Ipsam, ad! Facilis omnis dolorum aperiam eius suscipit pariatur, eveniet nemo ratione corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit accusamus voluptatem mollitia obcaecati officiis numquam ratione fuga omnis commodi fugiat quos dolore, tempora ducimus iusto expedita sint quo est?</div>
                </div>
                <div className={style.wrapper__grid}>
                    <div className={style.wrapper__card3}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGO1Qf0fTZUalU0JkqK5FQmxYhPi6Txc9aQ&usqp=CAU" alt="" /></div>
                    <div className={style.wrapper__card3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ad quae accusantium repellendus eum veritatis. Facere dolores ducimus quae earum? Molestias facere impedit deserunt, eum accusantium illum inventore provident velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, rem eius maiores tempore eveniet magnam aperiam repudiandae velit tempora, quis ea animi beatae. Amet natus qui provident ullam atque placeat laboriosam sequi nesciunt harum. Officiis magni, provident aliquam sint eos rerum consequuntur laudantium! Ab quae accusantium, accusamus, maiores, recusandae labore fugit saepe beatae sint modi nisi molestias pariatur magni illum. Provident ut vel aperiam odio exercitationem, inventore eos nihil atque laboriosam amet similique quidem sed incidunt est culpa non, aspernatur quos dolorem porro commodi quisquam nulla a. Ipsam, ad! Facilis omnis dolorum aperiam eius suscipit pariatur, eveniet nemo ratione corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit accusamus voluptatem mollitia obcaecati officiis numquam ratione fuga omnis commodi fugiat quos dolore, tempora ducimus iusto expedita sint quo est?</div>
                </div>
                <div className={style.wrapper__grid}>
                    <div className={style.wrapper__card3}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGO1Qf0fTZUalU0JkqK5FQmxYhPi6Txc9aQ&usqp=CAU" alt="" /></div>
                    <div className={style.wrapper__card3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ad quae accusantium repellendus eum veritatis. Facere dolores ducimus quae earum? Molestias facere impedit deserunt, eum accusantium illum inventore provident velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, rem eius maiores tempore eveniet magnam aperiam repudiandae velit tempora, quis ea animi beatae. Amet natus qui provident ullam atque placeat laboriosam sequi nesciunt harum. Officiis magni, provident aliquam sint eos rerum consequuntur laudantium! Ab quae accusantium, accusamus, maiores, recusandae labore fugit saepe beatae sint modi nisi molestias pariatur magni illum. Provident ut vel aperiam odio exercitationem, inventore eos nihil atque laboriosam amet similique quidem sed incidunt est culpa non, aspernatur quos dolorem porro commodi quisquam nulla a. Ipsam, ad! Facilis omnis dolorum aperiam eius suscipit pariatur, eveniet nemo ratione corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit accusamus voluptatem mollitia obcaecati officiis numquam ratione fuga omnis commodi fugiat quos dolore, tempora ducimus iusto expedita sint quo est?</div>
                </div>
                </div>
               
            </section>
        </div>
    );
};

export default Content;