import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import Carousel from '../components/Carousel';
import datas from '../data.json';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: datas,
      data: datas[0],
    };
  }

  _changeData = index => {
    const { datas } = this.state;
    this.setState({
      data: datas[index],
    });
  };

  render() {
    const { data } = this.state;
    const source = {
      uri:
        'https://i.pinimg.com/originals/95/4e/11/954e11d9de733c62e9aaeaf1ed2c38a5.gif',
    };
    return (
      <View style={{width: "100%", height: "100%"}}>
        <ImageBackground source={source} style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.carouselContainer}>
              <Carousel
                datas={this.state.datas}
                width={200}
                height={200}
                translateX={2400}
                _changeData={this._changeData}
              />
            </View>

            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{data.text}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  carouselContainer: {
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  date: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  textContainer: {
    marginTop: 20,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});