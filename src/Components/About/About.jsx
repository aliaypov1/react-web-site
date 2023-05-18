import React, { useState } from 'react';
import style from './About.module.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';


const About = () => {


    return (
        <>
        <Header/>
            <section className={style.about}>
               
                <div className="container">
                    <h1 className={style.about__title}>Поступайте за границу <br /> с UniPage</h1>
                    <p className={style.about__text}>Ваш эксперт по образованию за рубежом</p>
                    <div className={style.buttons}>
                        
                    <Link to='/Partner' className={style.about__text} style={{background:'rgb(173, 215, 20)', padding:'10px', borderRadius:'9px'}}>добавить свой курс</Link>
                    </div>
                    <div className={style.about__wrapper}>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text} >2023+</p> год основания</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>4 000+</p> cтудентов</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>5 000+</p> публикаций</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>28 000+</p> университетов</a>
                    </div>
                </div>
            </section>
            <section className={style.content}>
                <div className="container">
                    <div className={style.content__card}>
                        <div className={style.content__cards}>
                            <h1 className={style.content__title}>О UniPage</h1>
                            <p className={style.content__text}>Мы сами учились за границей и знаем, как бывает сложно и страшно на этом пути. Чтобы поддержать таких же талантливых и амбициозных студентов, мы создали международное образовательное агентство UniPage.
                                <p className={style.content__sm_title}>Каждый год сотни людей реализуют мечту об обучении за границей с нашей помощью.</p> </p>
                            <button>Узнать больше</button>
                        </div>
                        <div className={style.content__cards2}>
                            <div className={style.content__img}>
                                <img src="https://img.freepik.com/premium-photo/multiracial-creative-people-modern-office-group-young-business-people-senior-boss-are-working-together-with-laptop-tablet-smart-phone-notebook-graphs-successful-team-coworking_452079-107.jpg?w=2000"  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.cards}>
                <div className='container'>
                <div className={style.cards__title}><h1>что мы делаем</h1> 
                <button>все услуги</button>
                </div>
                <div className={style.cards__content}>
                    <div className={style.cards__card}> <p className={style.content__title}>Поступление в университет</p>
                    <p className={style.content__text}>Мы детально проанализируем ваш профайл, изучим требования десятков вузов и подберем для вас тот самый, который поможет вам достичь своих целей. У вас на руках будет пошаговая индивидуальная стратегия с готовыми решениями на любой случай. Ваш личный ментор за руку проведет вас по всему процессу поступления: от подготовки сопроводительных документов и подачи заявок до регулярного общения с вузами по всем вопросам.</p>
                    </div>
                    <div className={style.cards__card_2}>
                        <div className={style.cards__sm_card}>
                        <p className={style.content__title}>Зачисление на языковые курсы</p>
                        <p className={style.content__text}>Подберем идеальную программу в зависимости от ваших целей, составим и подадим заявку. Посоветуем школу из числа проверенных партнеров и подскажем, как с помощью курсов поступить в вуз без экзаменов.</p>
                        </div>
                        <div className={style.cards__sm_card}>
                        <p className={style.content__title}>Подача на гранты и стипендии</p>
                        <p className={style.content__text}>Поможем получить одну из крупных стипендий с полным или частичным покрытием — DAAD (Германия), Fulbright (США), Chevening (Великобритания), Грант правительства Китая и другие.</p>
                        </div>
                        <div className={style.cards__sm_card}>
                        <p className={style.content__title}>Поступление в школы и колледжи</p>
                        <p className={style.content__text}>Отправим вашего ребенка учиться в лучшую школу-пансион или колледж A-Level / IB с учетом дальнейших планов на поступление в топовый вуз за границей.</p>
                        </div>
                    </div>
                </div>
                <div className={style.cards__card_3}>
                        <div className={style.cards__sm_card}>
                        <p className={style.content__title}>Редактура сопроводительных документов</p>
                        <p className={style.content__text}>Отредактируем ваши резюме, мотивационное и рекомендательное письма так, чтобы максимально раскрыть вас и выделить среди других абитуриентов.</p>
                        </div>
                        <div className={style.cards__sm_card}>
                        <p className={style.content__title}>Подготовка к экзаменам</p>
                        <p className={style.content__text}>Найдем лучшего репетитора для сдачи международных экзаменов — IELTS, TOEFL, SAT, GRE и других.</p>
                        </div>
                        <div  className={style.cards__sm_card} >
                        <p className={style.content__title}>Визовое сопровождение</p>
                        <p className={style.content__text}>Расскажем про требования и поможем собрать документы. Запишем на подачу в консульство и проконтролируем получение визы в срок.</p>
                        </div>
                    </div>
                    </div>
            </section>
        </>
    );
};

export default About;