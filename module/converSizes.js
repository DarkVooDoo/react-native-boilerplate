import {Dimensions} from 'react-native'

export const widthPorcentage = (porcentage)=>{
    return (porcentage * Dimensions.get('window').width) / 100
  }
  
export const heightPorcentage = (porcentage)=>{
    return (porcentage * Dimensions.get('window').height / 100)
}