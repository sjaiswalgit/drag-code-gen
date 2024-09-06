import React from 'react';
import { useDrop } from 'react-dnd';
import PreviewHelper from '../utlis/PreviewHelper';
import {CloseCircleFilled} from "@ant-design/icons";
interface DropZoneProps {
  components: object[]; 
  setPreviewOpen:any
}
const Preview: React.FC<DropZoneProps> = ({ components,setPreviewOpen }) => {

  
  return (
    <div >
      <CloseCircleFilled onClick={()=>{setPreviewOpen(false)}}  style={{position:'fixed',top:'2rem',right:'2rem',fontSize:'2rem',color:'red'}} />
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