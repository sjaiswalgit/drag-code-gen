import { Input, Button, Select, Row, Col, Image, Typography, Flex, Dropdown, Anchor } from 'antd';

const { Title, Text } = Typography;

export interface ComponentItemProps{
  name: string; 
  component: React.ComponentType<any>; 
  defaultProps?: object; 
  defaultStyle?: React.CSSProperties;
}

export const ComponentMap:ComponentItemProps[] = [
  {
    name: 'Input',
    component: Input,
    defaultProps: { placeholder: 'Enter text' },
    defaultStyle: {
    }
  }
]