import React from 'react';
import {Pressable ,Text,Image,View} from 'react-native';
import { InfoContainer } from '../InfoContainer';
import {limitTextLength} from '../../utils/stringUtils';
import styles from './styles';
function RepoCard({
    imageSrc ,
    title,
    description,
    issuesNumber,
    starsNumber,
    providerName,
    numberOfLines,
    onPress,
}){
        return(
            <Pressable style={styles.container} onPress={onPress}>
                <View style={styles.contentContainer}>
                <Image source={{uri:imageSrc}} style={styles.image}/>
                <View style={styles.rightView}>
                    <Text style={styles.title}numberOfLines={1}>
                        {limitTextLength(20,title)}
                    </Text>
                    <Text style={styles.desc} numberOfLines={numberOfLines}>
                        {limitTextLength(35,description)}
                    </Text>
                </View>
                </View>
                <View style={styles.infoCardContainer}>
                    <InfoContainer
                     iconName={'star'} 
                     text={starsNumber} 
                     iconColor={'#F8B703'} 
                     iconSize={16}
                    />
                    <InfoContainer
                    iconName={'alert'} 
                    text={issuesNumber} 
                    iconColor={'#DD1212'} 
                    iconSize={16}
                    />
                    <InfoContainer
                    iconName={'logo-github'} 
                    text={providerName} 
                    iconColor={'#000000'} 
                    iconSize={16}
                    />
                </View>
            </Pressable>
        );
}
export {RepoCard};