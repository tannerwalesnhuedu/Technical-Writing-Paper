/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import '@ant-design/v5-patch-for-react-19';
import React, { useRef } from 'react';
import Icon, { BorderOutlined } from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined, HeartOutlined, TrophyOutlined, DoubleRightOutlined} from '@ant-design/icons';
import App from '../App.js';
import '../App.css';
import { useState, useEffect } from "react";
import { Table, ConfigProvider, theme, Statistic, Tag, Row, Col, component, Button, InputNumber, Select, Input, Form, AutoComplete, List, Card, Descriptions, Typography, Filter, Tooltip  } from 'antd';
import NumberInput from '../App.js';



function Achatina({ onChange}) {
 
  const [inputValue1, setInputValue1] = useState(1);
  const [inputValue2, setInputValue2] = useState('');
  const [multiplier, setMultiplier] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');
const [selectedItem, setSelectedItem] = useState(null);
const MyContext = React.createContext(null); //Default value is null
const [suggestions, setSuggestions] = useState([]);

  const [clickCount, setClickCount] = useState(0);

  const handleMultiplierChange = (value, event) => {
    setMultiplier(value);
  setClickCount(0);
  
}

const handleItemClick = (item) => {
  setSelectedItem(item);
};

const handleSearch = (value) => {
  setSearchTerm(value);
  if (searchCount < 5) { // Limit to 5 searches in 5 seconds
    searchCount++;
    // Proceed with search
    timeoutId = setTimeout(() => {
      searchCount = 0;
    }, 5000);
  } else{
    return 'error';
  }
  if (value) {
    const filteredSuggestions = data
      .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);
    setSuggestions(filteredSuggestions);
  } else {
    setSuggestions([]);
  }
};

let searchCount = 0;
let timeoutId;

const handleChange = (e) => {
  const value = e.target.value;
  if (/^\d{0,6}$/.test(value)) {
      // Update state or handle valid input
  } else {
      // Handle invalid input (e.g., show an error message)
  }
};

const handleSearch3 = (value) => {
  if (searchCount < 5) { // Limit to 5 searches in 5 seconds
    searchCount++;
    // Proceed with search
    timeoutId = setTimeout(() => {
      searchCount = 0;
    }, 5000);
  } else {
    // Display a message to the user indicating they have exceeded the search limit
  }
};
const [isValid, setIsValid] = useState(true);
const [errorMessage, setErrorMessage] = useState('');
  


  const handleInputChange1 = async (e) => {
    const newValue = (e.target.value);
    const value = e.target.value.replace(/[^0-9]/g, '');
    const regex = /^[0-9\b]+$/;
    if (newValue === '' || regex.test(newValue)) {
    setInputValue1(newValue);
    setInputValue2(newValue); 
    }
      };
   
      
    
  
  

  const handleInputChange2 = (e) => {
     const calculatedResult = parseFloat((inputValue1 * 3 * multiplier)); 
    setInputValue2(parseFloat(calculatedResult + 47));
    setInputValue2(e.target.value);

   
  };



  useEffect(() => {
    const calculatedResult = parseInt((inputValue1 * 3)); 
    setInputValue2((calculatedResult + 47));
  }, [inputValue2, multiplier, inputValue1]);

  const handlePaste = (e) => {
    e.preventDefault();
  };

  const incrementValue = (key) => {
    const newData1 = dataSource.map((item) =>
      item.key === key && item.key !== 7 ? setClickCount(clickCount + 0) : setClickCount(clickCount + 1));
    const newData = dataSource.map((item) =>
      item.key === key ? { ...item, value: (item.value + (item.stepChangeData * multiplier)) } : item
    );
    setDataSource(newData, newData1);
  };

  const decrementValue = (key) => {
    const newData1 = dataSource.map((item) =>
        item.key === key && item.key !== 7 ? setClickCount(clickCount + 0) : setClickCount(clickCount - 1));
    const newData = dataSource.map((item) =>
      item.key === key && (item.value * multiplier) > item.limitData * multiplier ? { ...item, value: (item.value - (item.stepChangeData * multiplier)) } : item
    );
    setDataSource(newData, newData1);
  };

  useEffect(() => {
    if (multiplier) {
      // Reset all column values
      setDataSource([
        { key: '1', name: 'Health', value: 75 * multiplier, stepChangeData: 15, stepChangeDataT: 5.4, limitData: 75 },
    { key: '2', name: 'Stamina', value: 100 * multiplier, stepChangeData: 10, stepChangeDataT: 10, limitData: 100 },
    { key: '3', name: 'Oxegen', value: 'N/A' * multiplier, stepChangeData: 'N/A', stepChangeDataT: 'N/A', limitData: 0 },
    { key: '4', name: 'Food', value: 450 * multiplier, stepChangeData: 45, stepChangeDataT: 10, limitData: 450 },
    { key: '5', name: 'Weight', value: 600 * multiplier, stepChangeData: 12, stepChangeDataT: 4, limitData: 600 },
    { key: '6', name: 'Melee Damage', value: 0 * multiplier, stepChangeData: 0, stepChangeDataT: 1.7, limitData: 0 },
    { key: '7', name: 'Movement Speed', value: 100 * multiplier, stepChangeData: 'N/A', stepChangeDataT: 1, limitData: 100 },
    { key: '8', name: 'Torpidity', value: 50 * multiplier, stepChangeData: 3, stepChangeDataT: 'N/A', limitData: 50 },
      ]);
    }else {
      setDataSource([
        { key: '1', name: 'Health', value: 75, stepChangeData: 15, stepChangeDataT: 5.4, limitData: 75 },
        { key: '2', name: 'Stamina', value: 100, stepChangeData: 10, stepChangeDataT: 10, limitData: 100 },
        { key: '3', name: 'Oxegen', value: 'N/A', stepChangeData: 'N/A', stepChangeDataT: 'N/A', limitData: 0 },
        { key: '4', name: 'Food', value: 450, stepChangeData: 45, stepChangeDataT: 10, limitData: 450 },
        { key: '5', name: 'Weight', value: 600, stepChangeData: 12, stepChangeDataT: 4, limitData: 600 },
        { key: '6', name: 'Melee Damage', value: 0, stepChangeData: 0, stepChangeDataT: 1.7, limitData: 0 },
        { key: '7', name: 'Movement Speed', value: 100, stepChangeData: 'N/A', stepChangeDataT: 1, limitData: 100 },
        { key: '8', name: 'Torpidity', value: 50, stepChangeData: 3, stepChangeDataT: 'N/A', limitData: 50 },
      ]);
    }
  }, [multiplier]);

const { Search } = Input;
const { Title } = Typography;
const { Option } = Select;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      render: (text, record, stepChangeData, key) => {;
        
   const color = (record.name === 'Health' && record.value > selectedItem?.health) || (record.name === 'Stamina' && record.value > selectedItem?.stamina) || (record.name === 'Weight' && record.value > selectedItem?.weight) || (record.name === 'Food' && record.value > selectedItem?.food) || (record.name === 'Oxegen' && record.value > selectedItem?.oxegen) || (record.name === 'Movement Speed' && record.value > selectedItem?.movementSpeed) || (record.name === 'Melee Damage' && record.value > selectedItem?.meleeDamage) || (record.name === 'Torpidity' && record.value > selectedItem?.torpidity) ? 'green' : 'red';
                                                              
                                                                    const color2 = (record.name === 'Health' && record.value === selectedItem?.health) || (record.name === 'Stamina' && record.value === selectedItem?.stamina) || (record.name === 'Weight' && record.value === selectedItem?.weight) || (record.name === 'Food' && record.value === selectedItem?.food) || (record.name === 'Oxegen' && record.value === selectedItem?.oxegen) || (record.name === 'Movement Speed' && record.value === selectedItem?.movementSpeed) || (record.name === 'Melee Damage' && record.value === selectedItem?.meleeDamage) || (record.name === 'Torpidity' && record.value === selectedItem?.torpidity) ? 'black' : 'black';
                                                                    
                                                                    const color3 = (record.name === 'Charge Capacity'  && record.value > selectedItem?.chargeCapacity) || (record.name === 'Charge Regeneration' && record.value > selectedItem?.chargeRegeneration) || (record.name === 'Charge Emission Range' && record.value > selectedItem?.chargeEmissionRange) || (record.name === 'Crafting Skill' && record.value > selectedItem?.craftingskill)  ? 'green' : 'red';
                                                                    
                                                                    const color4 = (record.name === 'Charge Capacity') || (record.name === 'Charge Regeneration') || (record.name === 'Charge Emission Range')  ? 'purple' : 'purple';   
                                                              
                                                                    const color5 = 'black';
   
                                                                    const color6 = 'none';
                                                                    if (!selectedItem){
                                                                       return <><Tooltip title={record.name + " total stat"}><Tag style={{color: color5, background: 'white'}} label="Inc" tooltip={record.stepChangeData}>{isNaN(record.value) ? 'N/A' : record.value.toFixed(2)}</Tag></Tooltip><div style={{ whiteSpace: 'break-spaces' }}><Tooltip title={record.name + " Increase Per Wild level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{ isNaN(record.stepChangeData) ? "\nW: N/A " : 'W: '  
                                                                           + (record.stepChangeData * multiplier).toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Tamed level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{isNaN(record.stepChangeDataT) ? "\nT: N/A " : " T: \n" 
                                                                               + (record.stepChangeDataT * multiplier).toFixed(2) + '%'}</Tag></Tooltip></div></>
                                                                    } 
                                                                    else if (!isColored) {
                                                                      return <><Tooltip title={record.name + " total stat"}><Tag label="Inc" tooltip={record.stepChangeData}>{isNaN(record.value) ? 'N/A' : record.value.toFixed(2)}</Tag></Tooltip><div style={{ whiteSpace: 'break-spaces' }}><Tooltip title={record.name + " Increase Per Wild level"}><Tag backgroundColor={IsDarkMode ? 'none' : 'none'}>{isNaN(record.stepChangeData) ? "\nW: N/A " : "\nW: " 
                                                                          + (record.stepChangeData * multiplier).toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Tamed level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{isNaN(record.stepChangeDataT) ? "\nT: N/A " : "\nT:\n " 
                                                                          + (record.stepChangeDataT * multiplier).toFixed(2)}</Tag></Tooltip></div></>
                                                                    } else if ((record.name === 'Health' && record.value === selectedItem?.health) || (record.name === 'Stamina' && record.value === selectedItem?.stamina) || (record.name === 'Weight' && record.value === selectedItem?.weight) || (record.name === 'Food' && record.value === selectedItem?.food) || (record.name === 'Oxegen' && record.value === selectedItem?.oxegen) || (record.name === 'Movement Speed' && record.value === selectedItem?.movementSpeed) || (record.name === 'Melee Damage' && record.value === selectedItem?.meleeDamage) || (record.name === 'Torpidity' && record.value === selectedItem?.torpidity)  ) {
                                                                      return <> <Tooltip title={record.name + " total stat"}>   <Tag color={color2} label="Inc" tooltip={record.stepChangeData || isNaN(record.stepChangeData) ? ' \n ?  \n' : record.stepChangeData}>{isNaN(record.value) ?  '\n N/A \n' : (record.value.toFixed(2) * multiplier).toFixed(2) }</Tag></Tooltip><div style={{ whiteSpace: 'break-spaces' }}><Tooltip title={record.name + " Increase Per Wild level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{isNaN(record.stepChangeData) ? "W: N/A "  : "W: " 
                                                                          + (record.stepChangeData.toFixed(2) * multiplier).toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Tamed level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{isNaN(record.stepChangeDataT) ? "\nT: N/A " : "\n T: \n"
                                                                          + (record.stepChangeDataT.toFixed(2) * multiplier).toFixed(2) + '%'}</Tag></Tooltip></div></>
                                                                    }  else if ((record.name === 'Charge Capacity' && record.value > selectedItem?.chargeCapacity) || (record.name === 'Charge Regeneration' && record.value > selectedItem?.chargeRegeneration) || (record.name === 'Charge Emission Range' && record.value > selectedItem?.chargeEmissionRange) || (record.name === 'Crafting Skill' && record.value > selectedItem?.craftingskill)) {
                                                                      return <><Tooltip title={record.name + " total stat"}><Tag color={color3} label="Inc" tooltip={record.stepChangeData}>{isNaN(record.value) ? 'N/A' : record.value.toFixed(2)}</Tag></Tooltip><div style={{ whiteSpace: 'break-spaces' }}><Tooltip title={record.name + " Increase Per Wild level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{ isNaN(record.stepChangeData) ? "\nW: N/A " : 'W: ' 
                                                                          + (record.stepChangeData.toFixed(2) * multiplier).toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Tamed level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{isNaN(record.stepChangeDataT) ? "\nT: N/A " : " T: \n" 
                                                                              + (record.stepChangeDataT.toFixed(2) * multiplier).toFixed(2) + '%'}</Tag></Tooltip></div></>
                                                                    } else if ((selectedItem?.name1 !== 'Stamina' && record.name === 'Stamina') || (selectedItem?.name3 !== 'Oxegen' && record.name === 'Oxegen') || (selectedItem?.name2 !== 'Melee Damage' && record.name === 'Melee Damage') || (selectedItem?.name4 !== 'Energy' && record.name === 'Energy') || (selectedItem?.name4 === 'Energy' && record.name === 'Food') || (selectedItem?.name6 === 'Nursing Effectiveness' && record.name === 'Movement Speed')){
                                                                       return <><div style={{ whiteSpace: 'break-spaces' }}><Tooltip title={record.name + " total stat"}><Tag style={{color: color6, background: IsDarkMode ? 'none': 'white'}} label="Inc" tooltip={record.stepChangeData}>{isNaN(record.value) ? 'N/A' : record.value.toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Wild level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{ isNaN(record.stepChangeData) ? "\nW: N/A " : 'W: '  
                                                                           + (record.stepChangeData.toFixed(2) * multiplier).toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Tamed level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{isNaN(record.stepChangeDataT) ? "\nT: N/A " : " T: \n" 
                                                                               + (record.stepChangeDataT.toFixed(2) * multiplier).toFixed(2) + '%'}</Tag></Tooltip></div></>
                                                                         }else if ((record.name === 'Charge Capacity' && record.value === selectedItem?.chargeCapacity) || (record.name === 'Charge Regeneration' && record.value === selectedItem?.chargeRegeneration) || (record.name === 'Charge Emission Range' && record.value === selectedItem?.chargeEmissionRange)) {
                                                                           return <> <Tooltip title={record.name + " total stat"}><Tag style={{color: color5, background: IsDarkMode ? 'black': 'white'}} label="Inc" tooltip={record.stepChangeData}>{isNaN(record.value) ? 'N/A' : record.value.toFixed(2)}</Tag></Tooltip><div style={{ whiteSpace: 'break-spaces' }}><Tooltip title={record.name + " Increase Per Wild level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{ isNaN(record.stepChangeData) ? "\nW: N/A " : 'W: ' 
                                                                               + (record.stepChangeData.toFixed(2) * multiplier).toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Tamed level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{isNaN(record.stepChangeDataT) ? "\nT: N/A " : " T: \n" 
                                                                               + (record.stepChangeDataT.toFixed(2) * multiplier).toFixed(2) + '%'}</Tag></Tooltip></div></>
                                                                         } else if ((record.name === 'Oxegen')) {
                                                                           return <> <Tooltip title={record.name + " total stat"}><Tag style={{color: color6, background: IsDarkMode ? 'black': 'white'}} label="Inc" tooltip={record.stepChangeData}>{isNaN(record.value) ? 'N/A' : record.value.toFixed(2)}</Tag></Tooltip><div style={{ whiteSpace: 'break-spaces' }}><Tooltip title={record.name + " Increase Per Wild level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{ isNaN(record.stepChangeData) ? "\nW: N/A " : 'W: ' 
                                                                             + (record.stepChangeData.toFixed(2) * multiplier).toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Tamed level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black'}}>{isNaN(record.stepChangeDataT) ? "\nT: N/A " : " T: \n" 
                                                                             + (record.stepChangeDataT.toFixed(2) * multiplier).toFixed(2) + '%'}</Tag></Tooltip></div></>
                                                                         }
                                                                           else {
                                                                    return <><div style={{ whiteSpace: 'break-spaces' }}><><Tooltip title={record.name + " total stat"}><Tag color={color} label="Inc" tooltip={record.stepChangeData}>{isNaN(record.value) ? 'N/A' : record.value.toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Wild level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black' }}>{isNaN(record.stepChangeData) ? "\nW: N/A " : 'W: ' 
                                                                        + (record.stepChangeData.toFixed(2) * multiplier).toFixed(2)}</Tag></Tooltip><Tooltip title={record.name + " Increase Per Tamed level"}><Tag style={{ color: IsDarkMode ? 'white' : 'black' }}>{isNaN(record.stepChangeDataT) ? "\nT: N/A " : " T: \n"
                                                                            + (record.stepChangeDataT.toFixed(2) * multiplier).toFixed(2) + '%'}</Tag></Tooltip></></div></>
                                                                    }    
                                                                  },
                                                                },
                                                                  {
                                                                    title: 'Actions',
                                                                    key: 'actions',
                                                                    render: (text, record, stepChangeData, limitData) => ( 
                                                                          <><div style={{width: 80}}>
                                                                          <Button onClick={() => decrementValue(record.key, stepChangeData, limitData)} disabled={isNaN(record.value) ? '?' : record.value.toFixed(2) === (record.limitData * multiplier).toFixed(2) || (record.value === 0) || (record.value === '?') || (record.stepChangeData === '?') || (record.value === 'N/A') || (record.stepChangeData === 'N/A')}>-</Button>
                                                                          <Button onClick={() => incrementValue(record.key, stepChangeData, limitData)} disabled={(record.limitData === 0) || (record.name === 'Movement Speed') || (record.value === '?') || (record.stepChangeData === '?')}>+</Button>       
                                                                          </div></>  
                                                                    ),
                                                                  },
                                                                ]         

  const [dataSource, setDataSource] = useState([
    { key: '1', name: 'Health', value: 75, stepChangeData: 15, stepChangeDataT: 5.4, limitData: 75 },
    { key: '2', name: 'Stamina', value: 100, stepChangeData: 10, stepChangeDataT: 10, limitData: 100 },
    { key: '3', name: 'Oxegen', value: 'N/A', stepChangeData: 'N/A', stepChangeDataT: 'N/A', limitData: 0 },
    { key: '4', name: 'Food', value: 450, stepChangeData: 45, stepChangeDataT: 10, limitData: 450 },
    { key: '5', name: 'Weight', value: 600, stepChangeData: 12, stepChangeDataT: 4, limitData: 600 },
    { key: '6', name: 'Melee Damage', value: 0, stepChangeData: 0, stepChangeDataT: 1.7, limitData: 0 },
    { key: '7', name: 'Movement Speed', value: 100, stepChangeData: 'N/A', stepChangeDataT: 1, limitData: 100 },
    { key: '8', name: 'Torpidity', value: 50, stepChangeData: 3, stepChangeDataT: 'N/A', limitData: 50 },
  ]);

  const { darkAlgorithm, defaultAlgorithm } = theme;
  const [isColored, setIsColored] = useState(false);
  const [IsDarkMode, setIsDarkMode] = useState(false);

  let color = 'black';
  let color2 = 'black';
  let color3 = 'black';
  let color4 = 'black';
  let color5 = 'black';
  let color6 = 'black';
  let color7 = 'black';
  let color8 = 'black';

  if (selectedItem?.chargeCapacity || selectedItem?.chargeEmissionRange || selectedItem?.chargeRegeneration || selectedItem?.energy || selectedItem?.nurseEffectiveness){
    color8 = IsDarkMode ? 'black' : 'black';
  }

  let color9 = 'black';

  const getItemStyle = (arrayValue1) => {
    const dataItem = dataSource.find((item) => item.key === arrayValue1.key && arrayValue1.name === 'Health' && item.value );
    if (dataItem) {
      if (selectedItem?.health > dataItem.value && isColored ) {
        color = IsDarkMode ? '#6abe39' : 'green';
        return { color: selectedItem?.health > dataItem.value ? 'green' : 'red',                      
          background: IsDarkMode ? '#162312' : '#f6ffed',
          borderColor: IsDarkMode ? 'green' : '#b7eb8f',
          border: '1px solid green',
          valueColor: {color: 'green'},
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px'};
      } else if (selectedItem?.health < dataItem.value && isColored ) {
        color =  IsDarkMode ? '#e84749' : 'red';
        return {color: IsDarkMode ? 'red' : '#cf1322',
          borderRadius: '8px',
          valueColor: 'red',
          background: IsDarkMode ? '#2a1215' : '#fff1f0',
          borderColor: IsDarkMode ? 'red' : '#ffa39e',
          border: '1px solid red',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', } 
      }else if (selectedItem?.health === dataItem.value && isColored ) {
        color = IsDarkMode ? 'white' : 'white';
        return { borderColor: IsDarkMode ? 'black' : '#black',  
          borderRadius: '8px', 
          valueColor: 'black',
          color: IsDarkMode ? 'black' : 'rgb(13 110 158)',
          background: IsDarkMode ? 'black' : 'black',
          border: IsDarkMode ? '1px solid #ffffff' : '1px solid rgb(0 0 0)',
        };
      }else if (isColored) {
        color = 'none';
        return {backgroundColor: 'none', borderColor: 'none',  borderRadius: '8px'};
      }
    }
  };

  const getItemStyle1 = (arrayValue1) => {
    const dataItem = dataSource.find((item) => item.key === arrayValue1.key && item.name === 'Weight' && item.value );
    if (dataItem) {
      if (selectedItem?.weight > dataItem.value && isColored ) {
        color2 = IsDarkMode ? '#6abe39' : 'green';
        return {    color: IsDarkMode ? '#6abe39' : '#389e0d',                      
          background: IsDarkMode ? '#162312' : '#f6ffed',
          borderColor: IsDarkMode ? 'green' : '#b7eb8f',
          border: '1px solid green',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px'};
      } else if (selectedItem?.weight < dataItem.value && isColored ) {
        color2 =  IsDarkMode ? '#e84749' : 'red';
        return { color: IsDarkMode ? 'red' : '#cf1322',
          borderRadius: '8px',
          background: IsDarkMode ? '#2a1215' : '#fff1f0',
          borderColor: IsDarkMode ? 'red' : '#ffa39e',
          border: '1px solid red',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', } 
      }else if (selectedItem?.weight === dataItem.value && isColored ) {
        color2 = IsDarkMode ? 'white' : 'white';
        return { borderColor: IsDarkMode ? '#ffffff' : '#bfbfbf',  
          borderRadius: '8px', 
          color: IsDarkMode ? 'black' : 'rgb(13 110 158)',
          background: IsDarkMode ? 'black' : 'black',
          border: IsDarkMode ? '1px solid #ffffff' : '1px solid rgb(0 0 0)',
        };
      }else if (isColored) {
        color2 = 'none';
        return {backgroundColor: 'none', borderColor: 'none'};
      }
    }
  };

  const getItemStyle2 = (arrayValue1) => {
    const dataItem = dataSource.find((item) => item.key === arrayValue1.key && item.name === 'Food' && item.value );
    if (dataItem) {
      if (selectedItem?.food > dataItem.value && isColored ) {
        color3 = IsDarkMode ? '#6abe39' : 'green';
        return {   color: IsDarkMode ? '#6abe39' : '#389e0d',                      
          background: IsDarkMode ? '#162312' : '#f6ffed',
          borderColor: IsDarkMode ? 'green' : '#b7eb8f',
          border: '1px solid green',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px'};
      } else if (selectedItem?.food < dataItem.value && isColored ) {
        color3 =  IsDarkMode ? '#e84749' : 'red';
        return { color: IsDarkMode ? 'red' : '#cf1322',
          borderRadius: '8px',
          background: IsDarkMode ? '#2a1215' : '#fff1f0',
          borderColor: IsDarkMode ? 'red' : '#ffa39e',
          border: '1px solid red',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', } 
      } else if (selectedItem?.food === dataItem.value && isColored ) {
        color3 = IsDarkMode ? 'white' : 'white';
        return {borderColor: IsDarkMode ? '#ffffff' : '#bfbfbf',  
          borderRadius: '8px', 
          color: IsDarkMode ? 'black' : 'rgb(13 110 158)',
          background: IsDarkMode ? 'black' : 'black',
          border: IsDarkMode ? '1px solid #ffffff' : '1px solid rgb(0 0 0)',}
      }else if (isColored) {
        color3 = 'none';
        return {backgroundColor: 'none', color: 'none', borderColor: 'none',  borderRadius: '8px'};
      }
    }
  };

  const getItemStyle3 = (arrayValue1) => {
    const dataItem = dataSource.find((item) => item.key === arrayValue1.key && item.name === 'Stamina' && arrayValue1.value );
    if (dataItem) {
      if (selectedItem?.stamina > dataItem.value && isColored ) {
        color4 = IsDarkMode ? '#6abe39' : 'green';
        return {  color: IsDarkMode ? '#6abe39' : '#389e0d',                      
          background: IsDarkMode ? '#162312' : '#f6ffed',
          borderColor: IsDarkMode ? 'green' : '#b7eb8f',
          border: '1px solid green',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px'};
      } else if (selectedItem?.stamina < dataItem.value && isColored ) {
        color4 =  IsDarkMode ? '#e84749' : 'red';
        return {color: IsDarkMode ? 'red' : '#cf1322',
          borderRadius: '8px',
          background: IsDarkMode ? '#2a1215' : '#fff1f0',
          borderColor: IsDarkMode ? 'red' : '#ffa39e',
          border: '1px solid red',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', } 
      }else if (selectedItem?.stamina === dataItem.value && isColored ) {
        color4 = IsDarkMode ? 'white' : 'white';
        return {borderColor: IsDarkMode ? '#ffffff' : '#bfbfbf',  
          borderRadius: '8px', 
          color: IsDarkMode ? 'black' : 'rgb(13 110 158)',
          background: IsDarkMode ? 'black' : 'black',
          border: IsDarkMode ? '1px solid #ffffff' : '1px solid rgb(0 0 0)',
        };
      }else if (isColored) {
        color4 = 'none';
        return {backgroundColor: 'none', borderColor: 'none',  borderRadius: '8px'};
      }
    }
  };

  const getItemStyle4 = (arrayValue1) => {
   const dataItem = dataSource.find((item) => item.key === arrayValue1.key && (item.name === arrayValue1.name) && (arrayValue1.name === 'Oxegen') && (item.value === arrayValue1.value));
   if (dataItem) {
     if (selectedItem?.oxegen > dataItem.value && isColored ) {
       color5 = IsDarkMode ? '#6abe39' : 'green';
       return {    color: IsDarkMode ? '#6abe39' : '#389e0d',                      
         background: IsDarkMode ? '#162312' : '#f6ffed',
         borderColor: IsDarkMode ? 'green' : '#b7eb8f',
         border: '1px solid green',
         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
         borderRadius: '8px'};
     } else if (selectedItem?.oxegen < dataItem.value && isColored  ) {
       color5 =  IsDarkMode ? '#e84749' : 'red';
       return {color: IsDarkMode ? 'red' : '#cf1322',
         borderRadius: '8px',
         background: IsDarkMode ? '#2a1215' : '#fff1f0',
         borderColor: IsDarkMode ? 'red' : '#ffa39e',
         border: '1px solid red',
         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', } 
     }else if ((selectedItem?.oxegen === dataItem.value && isColored) || (selectedItem?.oxegen === 'N/A' && isColored) ) {
       color5 = IsDarkMode ? 'white' : 'white';
       return {borderColor: IsDarkMode ? '#ffffff' : '#bfbfbf',  
         borderRadius: '8px', 
         color: IsDarkMode ? 'black' : 'rgb(13 110 158)',
         background: IsDarkMode ? 'black' : 'black',
         border: IsDarkMode ? '1px solid #ffffff' : '1px solid rgb(0 0 0)', };
     }else if (isColored) {
       color5 = 'none';
       return {backgroundColor: 'none', borderColor: 'none',  borderRadius: '8px'};
     }else if (dataItem.value === isNaN(dataItem.value)) {
      color5 = IsDarkMode ? 'white' : 'white';
      return {borderColor: IsDarkMode ? '#ffffff' : '#bfbfbf',  
        borderRadius: '8px', 
        color: IsDarkMode ? 'black' : 'rgb(13 110 158)',
        background: IsDarkMode ? 'black' : 'black',
        border: IsDarkMode ? '1px solid #ffffff' : '1px solid rgb(0 0 0)', };
     }
   }
 };

  const getItemStyle5 = (arrayValue6) => {
    const dataItem = dataSource.find((item) => item.key === arrayValue6.key && arrayValue6.name === 'Movement Speed' && item.value );
    if (dataItem) {
      if (selectedItem?.movementSpeed > dataItem.value && isColored  ) {
        color6 = IsDarkMode ? '#6abe39' : 'green';
        return {   color: IsDarkMode ? '#6abe39' : '#389e0d',                      
          background: IsDarkMode ? '#162312' : '#f6ffed',
          borderColor: IsDarkMode ? 'green' : '#b7eb8f',
          border: '1px solid green',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px'};
      } else if (selectedItem?.movementSpeed < dataItem.value && isColored  ) {
        color6 =  IsDarkMode ? '#e84749' : 'red';
        return { color: IsDarkMode ? 'red' : '#cf1322',
          borderRadius: '8px',
          background: IsDarkMode ? '#2a1215' : '#fff1f0',
          borderColor: IsDarkMode ? 'red' : '#ffa39e',
          border: '1px solid red',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', } 
      }else if (selectedItem?.movementSpeed === dataItem.value && dataItem.name === 'Movement Speed' && isColored  ) {
        color6 = IsDarkMode ? 'white' : 'white';
        return { borderColor: IsDarkMode ? '#ffffff' : '#bfbfbf',  
          borderRadius: '8px', 
          color: IsDarkMode ? 'black' : 'rgb(13 110 158)',
          background: IsDarkMode ? 'black' : 'black',
          border: IsDarkMode ? '1px solid #ffffff' : '1px solid rgb(0 0 0)', };
      }else if (isColored) {
        color6 = 'none';
        return {backgroundColor: 'none', borderColor: 'none',  borderRadius: '8px'};
      }
    }
  };

  const getItemStyle6 = (arrayValue1) => {
    const dataItem = dataSource.find((item) => arrayValue1.key === item.key && (item.name === arrayValue1.name) && (arrayValue1.name === 'Melee Damage') && item.value === arrayValue1.value);
    if (dataItem) {
      if (selectedItem?.meleeDamage > dataItem.value && isColored) {
        color7 = IsDarkMode ? '#6abe39' : 'green';
        return {   
          color: isColored ? 'white' : 'white',                      
          background: IsDarkMode ? '#162312' : '#f6ffed',
          borderColor: IsDarkMode ? 'green' : '#b7eb8f',
          valueStyle: 'green',
          border: '1px solid green',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px'};
      } else if (selectedItem?.meleeDamage < dataItem.value && isColored) {
        color7 = IsDarkMode ? '#e84749' : 'red';
        return { 
          borderRadius: '8px',
          background: IsDarkMode ? '#2a1215' : '#fff1f0',
          borderColor: IsDarkMode ? 'red' : '#ffa39e',
          valueStyle: 'red',
          border: '1px solid red',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', } 
      }else if (selectedItem?.meleeDamage === dataItem.value && dataItem.name === 'Melee Damage' && isColored ) {
        color7 = IsDarkMode ? 'white' : 'white';
        return { borderColor: IsDarkMode ? '#ffffff' : '#bfbfbf',  
          borderRadius: '8px', 
          color: IsDarkMode ? 'black' : 'rgb(13 110 158)',
          valueStyle: 'black',
          background: IsDarkMode ? 'black' : 'black',
          border: IsDarkMode ? '1px solid #ffffff' : '1px solid rgb(0 0 0)', };
      }else if (isColored) {
        color7 = 'none';
        return {backgroundColor: 'none', borderColor: 'none',  borderRadius: '8px'};
      }
    }
  };

  const getItemStyle7 = (arrayValue1) => {
    const dataItem = dataSource.find((item) => item.key === arrayValue1.key && arrayValue1.name === 'Torpidity' && item.value );
    if (dataItem) {
      if (selectedItem?.torpidity > dataItem.value && isColored) {
        color9 = IsDarkMode ? '#6abe39' : 'green';
        return {   color: IsDarkMode ? '#6abe39' : '#389e0d',                      
          background: IsDarkMode ? '#162312' : '#f6ffed',
          borderColor: IsDarkMode ? 'green' : '#b7eb8f',
          valueStyle: 'green',
          border: '1px solid green',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px'};
      } else if (selectedItem?.torpidity < dataItem.value && isColored) {
        color9 = IsDarkMode ? '#e84749' : 'red';
        return {color: IsDarkMode ? 'red' : '#cf1322', 
          borderRadius: '8px',
          background: IsDarkMode ? '#2a1215' : '#fff1f0',
          borderColor: IsDarkMode ? 'red' : '#ffa39e',
          valueStyle: 'red',
          border: '1px solid red',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', } 
      }else if (selectedItem?.torpidity === dataItem.value && isColored ) {
        color9 = IsDarkMode ? 'white' : 'white';
        return { borderColor: IsDarkMode ? 'rgb(0 0 0)' : '#ffffff',  
          borderRadius: '8px', 
          color: isColored ? 'black' : 'rgb(13 110 158)',
          valueStyle: 'black',
          background: IsDarkMode ? 'black' : 'black',
          border: IsDarkMode ? '1px solid #ffffff' : '1px solid rgb(0 0 0)', };
      }else if (isColored) {
        color9 = isColored ? 'white' : 'white';
        return {backgroundColor: 'none', borderColor: 'none',  borderRadius: '8px'};
      }
    }
  };


  const toggleColor = () => {
    setIsColored(!isColored);
  };

  const coloredStyle = {
    backgroundColor: 'none', borderColor: 'none',
    padding: '10px',
    borderRadius: '5px',
  };

  const onHandleTelephoneChange = (e) => {
    let telephone = e.target.value;

    if (!Number(telephone)) {
        return;
    }
    this.setState({
        [e.target.name]: telephone
    });
};

const [data, setData] = useState(null);
    
useEffect(() => {
    fetch('http://localhost:8000/api/data/')
        .then(response => response.json())
        .then(data => setData(data));
}, []);


const [value, setValue] = useState('');
const [error, setError] = useState('');

const handleChange22 = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
};


const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: parseInt(value) }),
      });

      if (response.ok) {
        console.log('Data submitted successfully!');
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData.value ? errorData.value[0] : 'An error occurred.');
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    }
  };


 
  
  

 return ( 
     <>  
       <div>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange22}
                    min="1"
                    max="100"
                />
              <button onClick={handleSubmit}>Submit</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
  <div>
                {data ? <p>{data.message}</p> : <p>Loading...</p>}
            </div>
     <div className='WildCalculatorTitle' >
 <Title>Wild Calculator</Title>  
 </div>
 <div className='dataForWild' >
 <ConfigProvider
 theme={{
   algorithm: IsDarkMode ? darkAlgorithm : defaultAlgorithm,
 }}
 >
 <div className='wildCalculator'>
 <div className='levelCreature' style={{ marginBottom: "0px", borderRadius: '8px' }}>
   <div style={{ marginBottom: "0px", borderRadius: '8px' }}>
   <div>
     <Button onClick={toggleColor}>
       {isColored ? 'Do Not Compare Dino' : 'Compare The Creature'}
     </Button>
   <Button onClick={() => setIsDarkMode(!IsDarkMode)}>
   {IsDarkMode ? 'Turn Off Dark Mode' : 'Turn On Dark Mode'}
   </Button>
   </div>
    <Form.Item style={{ marginBottom: "0px", borderRadius: '8px', background: IsDarkMode ? 'black' : 'white', color: IsDarkMode ? 'white' : 'white' }} label="Level of Creature" tooltip='Enter a number in "level of creature field" to effect torpor value.'></Form.Item>         
    </div>
    </div>
    <Input style={{width: 330}}
     className='wildInput'
       type="tel" 
       value={inputValue1} 
       onChange={handleInputChange1}
       min={0}
       maxLength="6" 
       pattern="^[0-9]*$"
       onPaste={handlePaste}
       max={100000}
       
       />
        {!isValid && <p style={{ color: 'red' }}>{errorMessage}</p>}
       <div className='upgradedTimes' style={{background: IsDarkMode ? 'white' : 'white', color: IsDarkMode ? 'white' : 'white'}}>
       <Form.Item style={{ marginBottom: "0px", textAlign: 'center', borderRadius: '8px', background: IsDarkMode ? 'black' : 'white' }} label="Upgrades" tooltip='How many times you upgraded a stat, or how many levels you spent on creature.'></Form.Item>
       </div>
       <Button style={{width: 330}}>Points Spent: {clickCount} </Button>
       
    <div className='multiplyerTimes'>
    <Form.Item style={{ marginBottom: "0px", borderRadius: '8px', background: IsDarkMode ? 'black' : 'white', color: 'white' }} label="Multiplier" tooltip='Stat multiplier effects the increase per level of each stat.'></Form.Item>
    </div>
    <Select defaultValue={1} value={multiplier} onChange={handleMultiplierChange} style={{width: 330}}>
       <Option value={1}>1</Option>
       <Option value={1.1}>1.1</Option>
      <Option value={1.2}>1.2</Option>
      <Option value={1.3}>1.3</Option>
      <Option value={1.4}>1.4</Option>
      <Option value={1.5}>1.5</Option>
      <Option value={1.6}>1.6</Option>
      <Option value={1.7}>1.7</Option>
      <Option value={1.8}>1.8</Option>
      <Option value={1.9}>1.9</Option>
      <Option value={2}>2</Option>
      <Option value={2.1}>2.1</Option>
      <Option value={2.2}>2.2</Option>
      <Option value={2.3}>2.3</Option>
      <Option value={2.4}>2.4</Option>
      <Option value={2.5}>2.5</Option>
      <Option value={2.6}>2.6</Option>
      <Option value={2.7}>2.7</Option>
      <Option value={2.8}>2.8</Option>
      <Option value={2.9}>2.9</Option>
      <Option value={3}>3</Option>
           </Select>
          <div className='legend-class'>
         <Tag>{<span className="underline-title-Legend">Legend</span>}</Tag></div>
         <div className='legendColumns'>
         <div className='legend-class-identify'><li><Tag style={{color: IsDarkMode ? 'rgb(106, 190, 57)' : 'green', borderRadius: '8px', background: IsDarkMode ? '#162312' : '#f6ffed', borderColor: IsDarkMode ? 'green' : '#b7eb8f'}}>Greater Than</Tag></li>
         <li><Tag style={{color: IsDarkMode ? 'rgb(232, 71, 73)' : 'red', borderRadius: '8px', background: IsDarkMode ? '#2a1215' : '#fff1f0', borderColor: IsDarkMode ? 'red' : '#ffa39e',}}>Less Than</Tag></li>
         <li><Tag style={{backgroundColor: '#bfbfbf', borderRadius: '8px', background: IsDarkMode ? 'rgb(255 5 183 / 24%)' : 'rgb(252 240 255)', color: IsDarkMode ? 'white' : '#531dab', border: '1px solid #d3adf7', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',}} >Unique Stats</Tag></li>
         <li><Tag style={{borderColor: IsDarkMode ? 'black' : 'black', borderRadius: '8px', color: IsDarkMode ? 'white' : 'white', background: IsDarkMode ? 'black' : 'black'}}>Equal To</Tag></li></div>
          <div className='legend-class-identify'>
         <li><Tag style={{backgroundColor: '#bfbfbf', borderRadius: '8px', background: IsDarkMode ? 'black' : 'white', color: IsDarkMode ? 'white' : 'rgb(42, 18, 42)', border: '1px solid #d9d9d9', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',}} >W: Wild Per Stat</Tag></li>
        
         <li><Tag style={{backgroundColor: '#bfbfbf', borderRadius: '8px', background: IsDarkMode ? 'black' : 'white', color: IsDarkMode ? 'white' : 'rgb(42, 18, 42)', border: '1px solid #d9d9d9', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',}} >T: Tamed Per Stat</Tag></li></div>
         </div>
         
         
           <div>
          <Form.Item label="Stat Table" tooltip="If a certain stat is not colored it is due to the dino not having the same stat or a value to compare. Example: dino's Oxegen: N/A."> 
     <Table dataSource={dataSource} style={{width: 330 }} columns={columns} pagination={false} /></Form.Item>
     <div className='torporValue' >
       <div>
     <Form.Item style={{ marginBottom: "0px", padding: '0px', margin: 'auto', background: IsDarkMode ? 'black' : 'white'}} label="Torpor Value" tooltip='Alternative to torpor in table. Enter level of creature to change value.'></Form.Item>
     </div>
     </div>
     <Input
     className='torporValueInput'
           type='text'
           min={50}
           max={100000}
           maxLength={6}
           value={(isNaN(inputValue2) ?  '?' : (inputValue2 * multiplier).toFixed(2))}
           onChange={handleInputChange2}
           onPaste={handlePaste}
           
          pattern="[A-Za-z]+"
           style={{width: 330 }}
           readOnly
         />
       </div>
    </div>
    <div>
     <Search 
       placeholder="Search names"
       onChange={(e) => handleSearch(e.target.value)}
       value={searchTerm}
       onPaste={handlePaste}

     />
   </div>
    {suggestions.length > 0 && (
     <List 
       dataSource={suggestions}
       renderItem={item => (
         <List.Item
           key={item.key} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer', background: IsDarkMode ? 'black' : 'white', color: IsDarkMode ? 'white' : 'black', border: '1px solid #f0f0f0', borderRadius: '8px' }}>
           {item.name}
         </List.Item>
    )}
     />
   )}
  <Form.Item label="Stat Table" tooltip="If a certain stat is not colored it is due to the dino not having the same stat or a value to compare. Example: dino's Oxegen: N/A."> 
   <Form> 
 <Form.Item>     
     {selectedItem && (
     <div className='wildDinoComparision'>
       <><Col span={26} >
                 <Card>
                   <Statistic
                     title={<span className="underline-title" style={{ color: IsDarkMode ? 'white' : 'black'}}>Creature Name</span>}
                     value={selectedItem.name}
                     prefix={<TrophyOutlined style={{ color: IsDarkMode ? 'white' : 'black', outline: IsDarkMode ? 'white' : 'white'  }} />} />
                 </Card>
               </Col>
                 {dataSource.slice(0, 1).map((arrayValue1) => ( 
                   <Col key={arrayValue1.key} >
                     <Card> 
                   <Statistic style={getItemStyle(arrayValue1)} 
                     title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color, outline: IsDarkMode ? 'white' : 'white' }}>Health</span>} 
                     value={selectedItem.health}
                     valueStyle={{color: IsDarkMode ? 'white' : color}}
                     precision={0}
                     prefix={<HeartOutlined style={{ color: IsDarkMode ? 'white' : color, outline: IsDarkMode ? 'white' : 'white'}} />}
                     suffix=" Health" />
                 </Card>
               </Col>
             ))}
         
         {data && data.some(item => selectedItem.name2 === 'Charge Capacity') ? (
 
 <div>
 {dataSource.slice(1,2).map((arrayValue1) => (
 <Col >
 <Card> 
 <Statistic   style={{backgroundColor: isColored ? '#bfbfbf' : 'none',  
        borderRadius: '8px', 
        background: isColored ? 'rgb(205 0 255 / 51%)' : 'none', 
        color: 'rgb(42, 18, 42)', 
        border: isColored ? '1px solid #ff4bff' : 'none',
        boxShadow: isColored ? '0 2px 8px rgba(0, 0, 0, 0.15)': 'none',}}  
  title={<span className="underline-title" style={{color:  IsDarkMode ? 'white' : color8}}>{selectedItem?.name2}</span>}
 value={selectedItem.chargeCapacity}
 valueStyle={{color: IsDarkMode ? 'white' : color8}}
 precision={0}
 prefix={<Icon style={{color: IsDarkMode ? 'white' : color8}} />}
 suffix={selectedItem?.name2}
           />
 </Card>
 </Col>
 ))}
 </div>
 ) : (
 <div>
                     {dataSource.slice(1, 2).map((arrayValue1) => (
                   <Col key={arrayValue1.key} >
                   <Card>
                   <Statistic   style={getItemStyle3(arrayValue1)}
                     title={<span className="underline-title" style={{color: IsDarkMode ?'white' : color4}}>{selectedItem?.name1}</span>}
                     value={selectedItem.stamina}
                     valueStyle={{color: IsDarkMode ?'white' : color4}}
                     precision={0}
                     prefix={<Icon style={{ color:  IsDarkMode ?'white' : color4 }} />}
                     suffix={selectedItem?.name1} />
                 </Card>
               </Col>
                ))}
                </div>
 )}
 
           {data && data.some(item => selectedItem.name1 === 'Charge Regeneration') ? (
                  <div>
                     {dataSource.slice(2, 3).map((arrayValue1) => (
                   <Col>
                   <Card> 
                     <Statistic   style={{backgroundColor: isColored ? '#bfbfbf' : 'none',  
        borderRadius: '8px', 
        background: isColored ? 'rgb(205 0 255 / 51%)' : 'none', 
        color: 'rgb(42, 18, 42)', 
        border: isColored ? '1px solid #ff4bff' : 'none',
        boxShadow: isColored ? '0 2px 8px rgba(0, 0, 0, 0.15)': 'none',}}   
                     title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color8 }}>{selectedItem?.name1}</span>}
                     value={selectedItem?.chargeRegeneration}
                     valueStyle={{color: IsDarkMode ? 'white' : color8 }}
                     precision={0}
                     prefix={<Icon  style={{ color: IsDarkMode ? 'white' : color8 }} />}
                     suffix={selectedItem?.name1}
                     />
                 </Card>  
                   </Col>
                     ))}
                   </div>
                 ) : (
                   <div>    
                   {dataSource.slice(2, 3).map((arrayValue1) => (
                  <Col key={arrayValue1.key} >
                   <Card> 
                   <Statistic  style={getItemStyle4(arrayValue1)}
                     title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color5  }}>{selectedItem?.name3}</span>}
                     value={selectedItem.oxegen}
                     valueStyle={{color: IsDarkMode ? 'white' : color5  }}
                     precision={0}
                     prefix={<Icon  style={{ color: IsDarkMode ? 'white' : color5 }} />}
                     suffix={selectedItem?.name3} />
                </Card>
                     </Col>
                 ))}
               </div>
 )}
      {data && data.some(item => selectedItem.name4 === 'Energy') ? (
                  <div>
                     {dataSource.slice(3, 4).map((arrayValue1) => (
                   <Col>
                   <Card> 
                     <Statistic   style={{backgroundColor: isColored ? '#bfbfbf' : 'none',  
        borderRadius: '8px', 
        background: isColored ? 'rgb(205 0 255 / 51%)' : 'none', 
        color: 'rgb(42, 18, 42)', 
        border: isColored ? '1px solid #ff4bff' : 'none',
        boxShadow: isColored ? '0 2px 8px rgba(0, 0, 0, 0.15)': 'none',}}  
                     title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color8}}>{selectedItem?.name4}</span>}
                     value={selectedItem.energy}
                     valueStyle={{color: IsDarkMode ? 'white' : color8}}
                     precision={0}
                     prefix={<Icon  style={{ color: IsDarkMode ? 'white' : color8 }} />}
                     suffix={selectedItem?.name4}
                     />
                 </Card>  
                   </Col>
                     ))}
                   </div>
                 ) : (
               <div>
                  {dataSource.slice(3, 4).map((arrayValue1) => (
                   <Col span={26} key={arrayValue1.key} >
               <Card> 
                   <Statistic style={getItemStyle2(arrayValue1)}
                     title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color3}}>Food</span>}
                     value={selectedItem.food} 
                     valueStyle={{color: IsDarkMode ? 'white' : color3}}
                     precision={0}
                     prefix={<Icon  style={{ color: IsDarkMode ? 'white' : color3 }} />}
                     suffix=" Food" />
                      </Card>
                     </Col>
                 ))}
                 </div>
                 )}
    {dataSource.slice(4, 5).map((arrayValue1) => (
                   <Col span={26} key={arrayValue1.key} >
                     <Card>
                   <Statistic   style={getItemStyle1(arrayValue1)}
                     title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color2}}>Weight</span>}
                     value={selectedItem.weight}
                     valueStyle={{color: IsDarkMode ? 'white' : color2}}
                     precision={0}
                     prefix={<Icon  style={{ color: IsDarkMode ? 'white' : color2 }} />}
                     suffix=" Weight" />
                 </Card>
               </Col>
               ))}
 {data && data.some(item => selectedItem.name3 === 'Charge Emission Range') ? (
 
 <div>
 {dataSource.slice(5, 6).map((arrayValue1) => (
 <Col >
 <Card> 
 <Statistic   style={{backgroundColor: isColored ? '#bfbfbf' : 'none',  
        borderRadius: '8px', 
        background: isColored ? 'rgb(205 0 255 / 51%)' : 'none', 
        color: 'rgb(42, 18, 42)', 
        border: isColored ? '1px solid #ff4bff' : 'none',
        boxShadow: isColored ? '0 2px 8px rgba(0, 0, 0, 0.15)': 'none',}}   
  title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color8}}>{selectedItem?.name3}</span>}
 value={selectedItem.chargeEmissionRange}
 valueStyle={{color: IsDarkMode ? 'white' : color8}}
 precision={0}
 prefix={<Icon  style={{ color: IsDarkMode ? 'white' : color8  }} />}
 suffix={selectedItem?.name3}
           />
 </Card>
 </Col>
 ))}
 </div>
 ) : (
 <div>
                   {dataSource.slice(5, 6).map((arrayValue1) => (
                   <Col key={arrayValue1.key} >
                   <Card>
                   <Statistic  style={getItemStyle6(arrayValue1)}
                     title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color7  }}>{selectedItem?.name2}</span>}
                     value={selectedItem.meleeDamage}
                     valueStyle={{color: IsDarkMode ? 'white' : color7  }}
                     precision={0}
                     prefix={<Icon style={{ color: IsDarkMode ? 'white' : color7 }} />}
                     suffix={selectedItem.name2}/>
                     </Card>
                     </Col>
                 ))}
                 </div>
 )}

 
          {data && data.some(item => selectedItem.name6 === 'Nursing Effectiveness') ? (
 
 <div>
 {dataSource.slice(6, 7).map((arrayValue1) => (
 <Col >
 <Card> 
   <Statistic   style={{backgroundColor: isColored ? '#bfbfbf' : 'none',  
        borderRadius: '8px', 
        background: isColored ? 'rgb(205 0 255 / 51%)' : 'none', 
        color: 'rgb(42, 18, 42)', 
        border: isColored ? '1px solid #ff4bff' : 'none',
        boxShadow: isColored ? '0 2px 8px rgba(0, 0, 0, 0.15)': 'none',}}   
    title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color8}}>{selectedItem?.name6}</span>}
   value={selectedItem.nurseEffectiveness}
   valueStyle={{color: IsDarkMode ? 'white' : color8}}
   precision={0}
   prefix={<Icon  style={{ color: IsDarkMode ? 'white' : color8  }} />}
   suffix={selectedItem.name6}
             />
 </Card>
 </Col>
 ))}
 </div>
 ) : (
 <div>
                    {dataSource.slice(6, 7).map((arrayValue6) => (
                     <Col key={arrayValue6.key} >
                       <Card >
                     <Statistic  style={getItemStyle5(arrayValue6)}
                       title={<span className="underline-title" style={{color: IsDarkMode ? 'white' : color6 }}>Movement Speed</span>}
                       value={selectedItem.movementSpeed}
                       valueStyle={{color: IsDarkMode ? 'white' : color6 }}
                       precision={0}
                       prefix={<DoubleRightOutlined style={{ color: IsDarkMode ? 'white' : color6 }} />}
                       suffix=" Movement Speed" />
                   </Card>
                 </Col>
                  ))}
                  </div>
 )}
 
 
 
 {data && data.some(item => selectedItem.craftingskillName === 'Crafting Skill') ? (
 
 <div>
 {dataSource.slice(7, 8).map((arrayValue1) => (
 <Col >
 <Card> 
 <Statistic   style={{backgroundColor: isColored ? '#bfbfbf' : 'none',  
        borderRadius: '8px', 
        background: isColored ? 'rgb(205 0 255 / 51%)' : 'none', 
        color: 'rgb(42, 18, 42)', 
        border: isColored ? '1px solid #ff4bff' : 'none',
        boxShadow: isColored ? '0 2px 8px rgba(0, 0, 0, 0.15)': 'none',}}  
  title={<span className="underline-title" style={{color:  IsDarkMode ? 'white' : color8}}>{selectedItem?.craftingskillName}</span>}
 value={selectedItem.craftingskill}
 valueStyle={{color: IsDarkMode ? 'white' : color8}}
 precision={0}
 prefix={<Icon  style={{color: IsDarkMode ? 'white' : color8}} />}
 suffix={selectedItem?.craftingskillName}
           />
 </Card>
 </Col>
 ))}
 </div>
 ) : (
 <div>
             
                
                </div>
 )}
 {dataSource.slice(7, 8).map((arrayValue1) => (
                   <Col key={arrayValue1.key} >
                   <Card>
                   <Statistic   style={getItemStyle7(arrayValue1)}
                     title={<span className="underline-title" style={{color: IsDarkMode ?'white' : color9}}>{selectedItem?.nameTorpidity}</span>}
                     value={selectedItem.torpidity}
                     valueStyle={{color: IsDarkMode ?'white' : color9}}
                     precision={0}
                     prefix={<Icon  style={{ color: IsDarkMode ?'white' : color9 }} />}
                     suffix={selectedItem.nameTorpidity} />
                 </Card>
               </Col>
                ))}
                </>
                  </div>
     )}
     
       </Form.Item>
       </Form>
       </Form.Item>
       </ConfigProvider>
   </div>
 </>
   )
 }                                  
export default Achatina;

      
        
     