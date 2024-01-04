import React, { useState } from 'react';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import Modal from './components/Modal'; // Import the Modal component
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ inputValue: '' });

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      const newGoal = { text: enteredText, id: Math.random().toString() };
      updatedGoals.unshift(newGoal);
      setModalContent({ inputValue: enteredText });
      setShowModal(true);
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      {showModal && (
        <Modal
          inputValue={modalContent.inputValue}
          onClose={closeModalHandler}
        />
      )}
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
      
    </div>
  );
};

export default App;
