import React from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import styles from './DataSensors.module.scss';
import Navigation from '../Navigation/Navigation';
const cx = classNames.bind(styles);

function DataSensors() {
  const generateRandomSensorData = () => {
    const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    return Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      temperature: getRandomValue(-6, 45),
      humidity: getRandomValue(60, 90),
      light: getRandomValue(0, 110),
      time: `${index + 1} days ago`,
    }));
  };
  const sensorData = generateRandomSensorData();
  const getTemperatureColor = (temperature) => {
    if (temperature < 15) {
      return '#f76caf';
    } else if (temperature >= 15 && temperature < 35) {
      return '#e84575';
    } else {
      return '#cc184e';
    }
  };

  const getHumidityColor = (humidity) => {
    if (humidity < 70) {
      return '#53d2db';
    } else if (humidity >= 70 && humidity < 80) {
      return '#4f8fbf';
    } else {
      return '#26648b';
    }
  };

  const getLightColor = (light) => {
    if (light < 40) {
      return '#f7ba79';
    } else if (light >= 40 && light < 80) {
      return '#e55905';
    } else {
      return '#f4443f';
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
              TEMPERATURE
            </th>
            <th
              style={{
                background: 'linear-gradient(to top right, #98cad9, #3790ab)',
                color: '#333',
                borderRadius: '5px',
              }}
            >
              HUMIDITY
            </th>
            <th
              style={{
                background: 'linear-gradient(to top right, #efebd8, #ebd474, #ffcc00)',
                color: '#333',
                borderRadius: '5px',
              }}
            >
              LIGHT
            </th>
            <th style={{ backgroundColor: '#c9d4d7', color: '#333', borderRadius: '5px' }}>TIME</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td style={{ color: getTemperatureColor(data.temperature) }}>{data.temperature} °C</td>
              <td style={{ color: getHumidityColor(data.humidity) }}>{data.humidity} %</td>
              <td style={{ color: getLightColor(data.light) }}>{data.light} Lux</td>
              <td>{data.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataSensors;
