import React, {useState, useRef} from 'react';

const EventsExample = () => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  }

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} placeholder="Управляемый"/>
      <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
      <button onClick={clickHandler}></button>
    </div>
  );
};

export default EventsExample;