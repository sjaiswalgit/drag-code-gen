import { Input, Button, Select, Row, Col, Image, Typography, Flex, Dropdown, Anchor } from 'antd';
import {DownOutlined} from "@ant-design/icons";
const { Title, Text } = Typography;

export interface ComponentItemProps {
  name: string;
  defaultProps: object;
  defaultStyle: React.CSSProperties;
  children?: any
  styleList:any
  propList: any
}



export const ComponentItemList: { [key: string]: React.ComponentType<any> } = {
  Input:Input,
  Button:Button,
  Select:Select,
  Row:Row,
  Col:Col,
  Image:Image,
  Text:Text,
  Flex:Flex,
  Dropdown:Dropdown,
  Anchor:Anchor
};




export const ComponentMap: ComponentItemProps[] = [
  {
    name: 'Input',
    defaultProps: { placeholder: 'Enter text' },
    defaultStyle: {
    },
    styleList:{ 
      width: { type: 'numberp',default: '0px' },
      height: { type: 'numberp',default: '0px'  },
      minHeight: { type: 'numberp', default: '0px'  },
      minWidth: { type: 'numberp',default: '0px' },
      fontSize: { type: 'number',default: undefined  },
      color: { type: 'color',default: undefined  },
      margin:{ type: 'numberp',default: '0px' },
      padding:{ type: 'numberp',default: '0px' },
      backgroundColor: { type: 'color',default: undefined  }
    },
    propList: {
      placeholder: { type: 'string', default: '' },
      value: { type: 'string | number', default: '' },
      defaultValue: { type: 'string | number', default: '' },
      disabled: { type: 'boolean', default: false },
      allowClear: { type: 'boolean', default: false },
      prefix: { type: 'ReactNode', default: null },
      suffix: { type: 'ReactNode', default: null },
      maxLength: { type: 'number', default: undefined },
      onChange: { type: 'function', default: () => { } },
      onPressEnter: { type: 'function', default: () => { } },
      size: { type: ['large', 'middle', 'small'], default: 'middle' },
    }
  },
   {
    name: 'Button',
    defaultProps: { type: "primary" },
    children: 'Click me',
    defaultStyle: {
     
    },
    styleList:{ 
      width: { type: 'numberp',default: '0px' },
      height: { type: 'numberp',default: '0px'  },
      minHeight: { type: 'numberp', default: '0px'  },
      minWidth: { type: 'numberp',default: '0px' },
      fontSize: { type: 'number',default: undefined  },
      color: { type: 'color',default: undefined  },
      backgroundColor: { type: 'color',default: undefined  }
    },
    propList: {
      type: { type: ['primary', 'default', 'dashed', 'link', 'text'], default: 'default' },
      shape: { type: ['default', 'circle', 'round'], default: 'default' },
      size: { type: ['large', 'middle', 'small'], default: 'middle' },
      loading: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
      ghost: { type: 'boolean', default: false },
      block: { type: 'boolean', default: false },
      danger: { type: 'boolean', default: false },
      icon: { type: 'ReactNode', default: null },
      href: { type: 'string', default: undefined },
      target: { type: 'string', default: undefined },
      onClick: { type: 'function', default: () => { } },
    }

  },
  {
    name: 'Select',
    defaultStyle: {},
    defaultProps: {
      defaultValue: "option1",
      options: [
        { value: 'option1', label: "sample1" },
        { value: 'option2', label: "sample2" },
      ]
    },
    styleList:{ 
      width: { type: 'numberp',default: '0px' },
      height: { type: 'numberp',default: '0px'  },
      minHeight: { type: 'numberp', default: '0px'  },
      minWidth: { type: 'numberp',default: '0px' },
      color: { type: 'color',default: undefined  },
      backgroundColor: { type: 'color',default: undefined  }
    },
    propList: {
      options:{type:'[ReactNode]',param:['value','label'] },
      allowClear: { type: 'boolean', default: false },
      autoFocus: { type: 'boolean', default: false },
      variant: { type: ['outlined',  'borderless' , 'filled'], default: 'outlined' },
      defaultValue: { type: 'string', default: undefined },
      disabled: { type: 'boolean', default: false },
      dropdownClassName: { type: 'string', default: '' },
      dropdownMatchSelectWidth: { type: 'boolean', default: true },
      filterOption: { type: 'function', default: () => true },
      getPopupContainer: { type: 'function', default: () => document.body },
      labelInValue: { type: 'boolean', default: false },
      mode: { type: ['default', 'multiple', 'tags'], default: 'default' },
      optionLabelProp: { type: 'string', default: 'children' },
      placeholder: { type: 'string', default: '' },
      suffixIcon: { type: 'ReactNode', default: <DownOutlined /> },
      showSearch: { type: 'boolean', default: false },
      size: { type: ['large', 'middle', 'small'], default: 'middle' },
    }
  },
  {
    name: 'Row',
    defaultProps: {},
    children: [],
    defaultStyle: {
      minHeight: '20rem',
    },
    styleList:{ 
      width: { type: 'numberp',default: '0px' },
      height: { type: 'numberp',default: '0px'  },
      minHeight: { type: 'numberp', default: '0px'  },
      minWidth: { type: 'numberp',default: '0px' },
      margin:{ type: 'numberp',default: '0px' },
      padding:{ type: 'numberp',default: '0px' },
      color: { type: 'color',default: undefined  },
      overflow:{type:['visible','hidden','auto','scroll'],default:'visible'},
      backgroundColor: { type: 'color',default: undefined  }
    },
    propList: {
      align: { type: ['top', 'middle', 'bottom'], default: 'top' },
      gutter: { type: 'number', default: 0 },
      justify: { type: ['start', 'end', 'center', 'space-around', 'space-between'], default: 'start' },
      wrap: { type: 'boolean', default: true }
    }
  },
  {
    name: 'Col',
    defaultProps: { span: 12 },
    children: [],
    defaultStyle: {
      minHeight: '20rem',
    },
    styleList:{ 
      width: { type: 'numberp',default: '0px' },
      height: { type: 'numberp',default: '0px'  },
      minHeight: { type: 'numberp', default: '0px'  },
      minWidth: { type: 'numberp',default: '0px' },
      margin:{ type: 'numberp',default: '0px' },
      padding:{ type: 'numberp',default: '0px' },
      color: { type: 'color',default: undefined  },
      overflow:{type:['visible','hidden','auto','scroll'],default:'visible'},
      backgroundColor: { type: 'color',default: undefined  }
    },
    propList: {
      span: { type: 'number', default: 0 },
      offset: { type: 'number', default: 0 },
      pull: { type: 'number', default: 0 },
      push: { type: 'number', default: 0 },
      order: { type: 'number', default: 0 },
      flex: { type: 'number', default: undefined },
      xs: { type: 'number', default: undefined },
      sm: { type: 'number', default: undefined },
      md: { type: 'number', default: undefined },
      lg: { type: 'number', default: undefined },
      xl: { type: 'number', default: undefined },
      xxl: { type: 'number', default: undefined },
    }
  }, {
    name: 'Image',
    defaultProps: { width: 200, src: '/drag-code-gen/logo192.png', preview: false },
    defaultStyle: {
      objectFit: 'contain',

    },
    styleList:{ 
      width: { type: 'numberp',default: '0px' },
      height: { type: 'numberp',default: '0px'  },
      objectFit:{type:['fill','cover','contain','none','scale-down'],default:'fill'},
      backgroundColor: { type: 'color',default: undefined  }
    },
    propList: {
      alt: { type: 'string', default: '' },
      fallback: { type: 'string', default: '' },
      height: { type: 'number', default: undefined },
      width: { type: 'number', default: undefined },
      placeholder: { type: 'ReactNode', default: null },
      preview: { type: 'boolean', default: true },
      src: { type: 'string', default: '' },
      onError: { type: 'function', default: () => { } },
      onLoad: { type: 'function', default: () => { } },
      draggable: { type: 'boolean', default: false },
      crossOrigin: { type: 'boolean', default: true },
      margin:{ type: 'numberp',default: '0px' },
      zIndex: { type: 'number', default: undefined },
      srcSet: { type: 'string', default: undefined },
      sizes: { type: 'string', default: undefined }
    }
  },
  {
    name: 'Text',
    defaultProps: {},
    children: 'Write Something',
    defaultStyle: {},
    styleList:{ 
      width: { type: 'numberp',default: '0px' },
      height: { type: 'numberp',default: '0px'  },
      minHeight: { type: 'numberp', default: '0px'  },
      minWidth: { type: 'numberp',default: '0px' },
      margin:{ type: 'numberp',default: '0px' },
      padding:{ type: 'numberp',default: '0px' },
      fontSize: { type: 'number',default: undefined  },
      color: { type: 'color',default: undefined  },
      overflow:{type:['visible','hidden','auto','scroll'],default:'visible'},
      backgroundColor: { type: 'color',default: undefined  }
    },
    propList: {
      code: { type: 'boolean', default: false },
      delete: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
      ellipsis: { type: 'boolean | object', default: false },
      mark: { type: 'boolean', default: false },
      strong: { type: 'boolean', default: false },
      underline: { type: 'boolean', default: false },
      type: { type: ['secondary', 'danger', 'success', 'warning', 'default'], default: 'default' }
    }
  },
  {
    name: 'Flex',
    defaultProps: { },
    children: [{
      name: 'Text',
      component: Text,
      defaultProps: {},
      children: '',
      defaultStyle: {}
    }],
    defaultStyle: {
      minHeight: '20rem',
      minWidth: '20rem',
    },
    styleList:{ 
      width: { type: 'numberp',default: '0px' },
      height: { type: 'numberp',default: '0px'  },
      minHeight: { type: 'numberp', default: '0px'  },
      minWidth: { type: 'numberp',default: '0px' },
      color: { type: 'color',default: undefined  },
      margin:{ type: 'numberp',default: '0px' },
      padding:{ type: 'numberp',default: '0px' },
      backgroundColor: { type: 'color',default: undefined  }
    },
    propList: {
      vertical: { type: 'boolean', default: false },
      wrap: { type: 'boolean', default: false },
      justify: { type: ['normal','start', 'end', 'center', 'space-around', 'space-between'], default: 'normal' },
      align: { type:  ['normal','start', 'end', 'center', 'space-around', 'space-between'], default: 'normal' },
      flex: { type: 'number', default: 1 },
      gap: { type: 'number', default: 0 },
    }
  },
  {
    name: 'Dropdown',
    defaultProps: {
      menu: {
        items: [
          {
            value: '1',
            label: 'First Item',
          },
          {
            value: '2',
            label:'Second Item',
          },
        ]
      }
    },
    defaultStyle: {
    },
    styleList:{ 
     
    },
    propList: {
      menu:{type:'{[ReactNode]}',param:['value','label']},
      overlay: { type: 'ReactNode', default: null },
      trigger: { type: ['click', 'hover', 'contextMenu'], default: 'hover' },
      placement: { type: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'], default: 'bottomLeft' },
      arrow: { type: 'boolean', default: false },
      disabled: { type: 'boolean', default: false },
      getPopupContainer: { type: 'function', default: () => { <span>test</span> } },
      onVisibleChange: { type: 'function', default: () => { } },
    },
    children: <Text>Hover me</Text>
  },
  {
    name: 'Anchor',
    defaultProps: {
      affix: false,
      items: [
        {
          key: '1',
          href: '#anchor-demo-basic',
          title: 'Basic demo',
        },
        {
          key: '2',
          href: '#anchor-demo-static',
          title: 'Static demo',
        }]
    },
    defaultStyle: {
      objectFit: 'contain',

    },
    styleList:{ 
      width: { type: 'numberp',default: '0px' },
      height: { type: 'numberp',default: '0px'  },
      backgroundColor: { type: 'color',default: undefined  }
    },
    propList: {
      items:{type:'[ReactNode]',param:['key','href','title']},
      affix: { type: 'boolean', default: true },
      bounds: { type: 'number', default: 5 },
      onClick: { type: 'function', default: () => { } },
      onChange: { type: 'function', default: () => { } },
      getContainer: { type: 'function', default: () => { } },
      showInkInFixed: { type: 'boolean', default: false },
      targetOffset: { type: 'number', default: 0 }
    }
  }
]