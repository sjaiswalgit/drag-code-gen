import React,{useState,useEffect} from 'react';
import PreviewHelper from '../utlis/PreviewHelper';

const Preview: React.FC = () => {
  const [components, setComponents] = useState<object[]>([]);

  useEffect(()=>{
    const comp= localStorage.getItem('comp')
    if(comp){
      setComponents(JSON.parse(comp))
    }
  },[])
  
  return (
    <div style={{height:'100vh',width:'100vw',margin:0,padding:0}} >
      {components.map((component, index) => (
        <PreviewHelper
          key={index}
          component={component}
          indexMap={[index]}
        />
      ))}
    </div>
  );
}

export default Preview;