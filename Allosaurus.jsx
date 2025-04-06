/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '@ant-design/v5-patch-for-react-19';
import Icon, { BorderOutlined } from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined, HeartOutlined, TrophyOutlined, DoubleRightOutlined} from '@ant-design/icons';
import App from '../App.js';
import '../App.css';
import { Table, ConfigProvider, theme, Statistic, Tag, Row, Col, component, Button, InputNumber, Select, Input, Form, AutoComplete, List, Card, Descriptions, Typography, Filter, Tooltip  } from 'antd';
import NumberInput from '../App.js';


function NumberInputForm() {
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (event) => {
  
      if (number < 1 || number > 100) {
        setError('Number must be between 10 and 100');
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:8000/api/data/', { number });
        console.log('Success:', response.data);
        setError('');
        setNumber(''); // Clear input after successful submission
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to send data');
      }
    };
    const [form] = Form.useForm();
    return (
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item>
          Enter a number between 10 and 100:
          <Input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
    );
  }
  
  export default NumberInputForm;