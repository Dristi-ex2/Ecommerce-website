import '../Styling/counter.css'

type CounterProps = {
    amount: number;
    setDecrease: () => void;
    setIncrease: () => void;
  };
  
  const IncreDecre = ({ amount, setDecrease, setIncrease }: CounterProps) => {
    return (
      <div className='counter'>
        <button className="add" onClick={setDecrease}>-</button>
        <p>{amount}</p>
        <button className="sub" onClick={setIncrease}>+</button>
      </div>
    );
  };
  
  export default IncreDecre;
  