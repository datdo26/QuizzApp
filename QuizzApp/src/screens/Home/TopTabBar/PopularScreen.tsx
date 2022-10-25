import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {baseURL} from '../../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const bcrypt = require('bcryptjs');

const PopularScreen = () => {
  const refreshToken = useSelector(
    state => state.Auth.payload.tokens.refresh.token,
  );
  const token = useSelector(state => state.Auth.payload.tokens.access.token);
  // const hashedToken = bcryptjs.hashSync(token, '$2a$10$CwTycUXWue0Thq9StjUM0u');
  // console.log(hashedToken);
  // let hashedToken;
  // bcryptjs.genSalt(10, function (_err, Salt) {
  //   bcryptjs.hash(token, Salt, function (err, hash) {
  //     if (err) {
  //       return console.log('cannot encrpyt');
  //     }
  //     hashedToken = hash;
  //     console.log('hashed token', hashedToken);
  //   });

  // bcryptjs.compare(token, hashedToken, async function (err, isMatch) {
  //   if (isMatch) {
  //     console.log('Encrypted password is: ', token);
  //     console.log('Decrypted password is: ', hashedToken);
  //   }
  //   if (!isMatch) {
  //     // If password doesn't match the following
  //     // message will be sent
  //     console.log(hashedToken + ' is not encryption of ' + token);
  //   }
  // });
  // });

  // bcrypt.genSalt().then(salt => {
  //   bcrypt.hash('token', salt).then(hash => {
  //     AsyncStorage.setItem('token', hash);
  //     console.log(hash);
  //     bcrypt.compare('token', hash).then(result => console.log(result));
  //   });
  // });

  //call api refresh token to get new accesstoken
  const getAccessUsingRefresh = useCallback(() => {
    axios
      .post(baseURL + `/v1/auth/refresh-tokens`, {
        refreshToken,
      })
      .then(res => {
        console.log('ref token', res.data);
        AsyncStorage.setItem('access_token', res.data.access.token);
      });
  }, []);

  const haitoken = AsyncStorage.getItem('token');
  console.log(haitoken);

  return (
    <View style={{flex: 1}}>
      <Button title="call token" onPress={getAccessUsingRefresh} />
    </View>
  );
};

export default PopularScreen;

const styles = StyleSheet.create({});
