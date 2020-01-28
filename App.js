import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Button,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state ={n:0, button: 'Start'};
        this.timer = null;
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer(){
        let s = this.state;        
        if(this.timer != null){
            //Stop Timer
            clearInterval(this.timer);
            this.timer = null;
            s.button = "Start";
        } else {
            //start Timer
            this.timer = setInterval(() => {
            let s = this.state;
            s.n+= 0.1;
            this.setState(s);
            }, 100);

            s.button = "Stop";
        }

        this.setState(s);
    }

    stopTimer(){
        if(this.timer != null){
            //Stop Timer
            clearInterval(this.timer);
            this.timer = null;            
        }
            let s = this.state;
            s.n = 0;
            s.button = "Start";
            this.setState(s);
    }

    render(){
        return (
            <View style={styles.body}>
                <Image source={require('./images/cronometro2.png')} style={styles.imagemCronometro} />
                <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>    
                <View style={this.state.areaButton}>
                    <TouchableOpacity style={this.state.buttonTimer} onPress={this.startTimer}>
                        <Text style={styles.textButton}>{this.state.button}</Text>
                    </TouchableOpacity>   
                    <TouchableOpacity style={this.state.buttonTimer} >
                        <Text style ={styles.textButton} onPress={this.stopTimer} >Zerar</Text>
                    </TouchableOpacity>  
                </View>                                           
            </View>
        );
    }
}

const styles = StyleSheet.create({    
    body:{        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    
        paddingTop:20,
        backgroundColor: '#2C1F30'            
    },    
    timer:{
        color:'#baa07a',
        fontSize:50,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: -130
    },
    areaButton:{
        flexDirection:'row',
        height:40,
        marginTop: 80
    },
    buttonTimer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#886532',
        height: 40,
        borderRadius:5,
        margin:10        
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
        marginTop:60
    },
    imagemCronometro:{
        width:350,
        height:350
    }
});