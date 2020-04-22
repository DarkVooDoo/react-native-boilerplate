import {DEFAULT_ACTION} from './types'

export const defaultAction = (value)=>{
    return{
        type: DEFAULT_ACTION,
        payload: value
    }
}