import { useContext, useState } from 'react';
import './style.css';
import GoodsContext from '../../context/goods.context';
import GoodsComponent from '../goods';

const CounterComponent = (props) => {
  const { selectedGoods, addGoods } = useContext(GoodsContext);
  const goods = props.data;
  const [data] = useState(goods);
  let sortedData = [...data].sort((a, b) => b.cost - a.cost);
  let limit = 40;

  const autoDetectClick = () => {
    let sum = 0;
    let newArray = [];

    const recursiveDetect = (currentIndex) => {
      if (sum === limit) return;

      for (let i = currentIndex; i < sortedData.length; i++) {
        const item = sortedData[i];

        if (!newArray.includes(item) && sum + item.cost <= limit) {
          newArray.push(item);
          sum += item.cost;
          recursiveDetect(i + 1);
          break;
        }
      }
    };

    recursiveDetect(0);
    
    newArray.forEach(item => addGoods(item));
  };

  let sum = selectedGoods.reduce((acc, cur) => acc + cur.cost, 0);

  return (
    <div className='cost-wrapper'>
      <div>{sum}/40</div>
      <div className='auto-detect' onClick={autoDetectClick}>auto-detect</div>
      <div className='selected-goods'>
        {selectedGoods.map(el => <GoodsComponent {...el} key={'selected' + el.id} />)}
      </div>
    </div>
  );
};

export default CounterComponent;
