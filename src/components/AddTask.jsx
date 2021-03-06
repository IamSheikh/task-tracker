import { useState } from 'react';

function AddTask({ onAdd }) {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!text) {
      alert('Please add a task');
      return;
    }
    onAdd({ text, date, reminder });
    setText('');
    setDate('');
    setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Add Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input
          type='text'
          placeholder='Date & Time'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Add Task' className='btn btn-block' />
    </form>
  );
}

export default AddTask;
