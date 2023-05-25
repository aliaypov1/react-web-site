import React from 'react';
import Header from '../Header/Header';
import style from './Content.module.css'

const Content = () => {
    return (
        <div>
            <Header/>
            <section className={style.about}>
               
                <div className="container">
                    <h1 className={style.about__title}>Подберем для вас <br />подходящий курс</h1>
                    <p className={style.about__text}>Лучшие курсы Кыргызыстана спциально собраны <br /> для вас</p>
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
        </div>
    );
};

export default Content;