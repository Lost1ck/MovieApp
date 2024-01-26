import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Space } from 'antd';

function NotFound({ inputValue }) {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Alert
        message={`'${inputValue} '- не найдено. запрашиваешь много, мало получишь`}
        description="Короче, Киноман, я тебе запросы делал и в благородство играть не буду: выполнишь для меня пару заданий – и мы в расчете. Заодно посмотрим, как быстро у тебя башка после React отойдет. А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе этот Front-end сдался, но я в чужие дела не лезу, хочешь работать, значит есть зачем..."
        type="error"
        closable
      />
    </Space>
  );
}

NotFound.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

function NoInternetConnection() {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Alert
        message="Отсутствует подключение к интернету"
        description="Эй, братишка, видал это? В Зоне интернета нет, как в пустыне. Но настоящему разработчику и не нужен – у нас есть книги, коллеги. Здесь каждый шаг без сети – это свобода, понимаешь? Вообще, считай, что это часть нашей жизни. Здесь нет места для скучных соцсетей. Только ты, Зона и твоя бушлат. Так что держи глаза открытыми, и да пребудет с тобой удача, разраб!"
        type="error"
        closable
      />
    </Space>
  );
}

export { NotFound, NoInternetConnection };
