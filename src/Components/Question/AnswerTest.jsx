import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import { Button, Input, Modal, Result } from 'antd';
import GetQuestion from './GetQuestion';
import TextArea from 'antd/es/input/TextArea';

const Answers = () => {
    const { id } = useParams()
    const [result, setResult] = useState([]);
    const [userAnswer, setUserAnswer] = useState('');
    const [correctCount, setCorrectCount] = useState(0);

    useEffect(() => {
        const getAnswers = async () => {
            try {
                const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Answer/get-all-answers-by id?questionId=${id}`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setResult(resp.data);
            } catch (error) {
                console.error(error);
            }
        };

        getAnswers();
    }, []);

    const handleAnswerChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const checkAnswer = () => {
        const isCorrect = result.some(answer => answer.text === userAnswer);
        setCorrectCount(isCorrect ? 1 : 0);
    };
    const [isModalOpen, setIsModalOpen] = useState(true);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Header />
            <ProfileNavigate />
            <div className="container">
                <GetQuestion id={id} />
                {result.map(answer => (
                    <div key={answer.id}>
                    </div>
                ))}
                <TextArea
                    type="text"
                    value={userAnswer}
                    placeholder='Введите свой ответ'
                    onChange={handleAnswerChange}
                />
                <Button onClick={checkAnswer}>Проверить ответ</Button>

                {correctCount > 0 ? <Result
                    status="success"
                    title="Вы успешно решили задачу"
                    subTitle="Ваш ответ 4"
                    extra={[       
                    ]}
                /> : 
                <Result
                status="error"
                title="Задача не решена"
                subTitle="Дайти верный ответ"

              >
                </Result>}
            </div>
        </div>
    );
};

export default Answers;
