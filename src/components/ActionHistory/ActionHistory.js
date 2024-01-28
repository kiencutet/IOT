import React from 'react';
import classNames from 'classnames/bind';
import styles from './ActionHistory.module.scss';
import Navigation from '../Navigation/Navigation';
const cx = classNames.bind(styles);

function ActionHistory() {
  const generateRandomActionData = () => {
    const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const devices = ['FAN', 'LAMP'];
    const actions = ['ON', 'OFF'];
    const users = ['TrungKien', 'AnhQuan', 'DuyLuan'];

    return Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      device: devices[getRandomValue(0, devices.length - 1)],
      action: actions[getRandomValue(0, actions.length - 1)],
      time: `${index + 1} days ago`,
      user: users[getRandomValue(0, users.length - 1)],
    }));
  };

  const actionData = generateRandomActionData();

  const getActionColor = (device, action) => {
    if (device === 'LAMP' && action === 'ON') {
      return '#f4d141'; // Green color for LAMP ON
    } else if (device === 'FAN' && action === 'ON') {
      return '#56a2ba'; // Yellow color for FAN ON
    } else {
      return '#333'; // Default color
    }
  };

  return (
    <div className={cx('base')}>
      <Navigation />
      <table className={cx('sensor-table')}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#c9d4d7', color: '#333', borderRadius: '5px' }}>ID</th>
            <th
              style={{
                background: 'linear-gradient(to top right, #dfa6ac, #dd4959)',
                color: '#333',
                borderRadius: '5px',
              }}
            >
              DEVICES
            </th>
            <th
              style={{
                background: 'linear-gradient(to top right, #98cad9, #3790ab)',
                color: '#333',
                borderRadius: '5px',
              }}
            >
              ACTION
            </th>
            <th
              style={{
                background: 'linear-gradient(to top right, #efebd8, #ebd474, #ffcc00)',
                color: '#333',
                borderRadius: '5px',
              }}
            >
              TIME
            </th>
            <th style={{ backgroundColor: '#c9d4d7', color: '#333', borderRadius: '5px' }}>USER</th>
          </tr>
        </thead>
        <tbody>
          {actionData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td style={{ color: getActionColor(data.device, data.action) }}>{data.device}</td>
              <td style={{ color: getActionColor(data.device, data.action) }}>{data.action}</td>
              <td>{data.time}</td>
              <td>{data.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActionHistory;
