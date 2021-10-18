import React, {useEffect,useState} from "react";
import "./style.css";

const UseEffect = () => {

  const initialData = 10;
  const [myNum, setMyNum] = useState(initialData);
  useEffect(() => {
    document.title = `Chats(${myNum})`
  });

  // empty [] means first jb yeh chlega / render hoga tbhi show hoga hr bar nhi 
  // age kuch nhi likha to hr bar run hoga

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
      </div>
    </>
  );
};

export default UseEffect;
// use effecthooks do something after render
// ek bar kam complete ho gya usk baad kya krna h wo use effect ko bta skte ho
// use effect hooks runs after every render