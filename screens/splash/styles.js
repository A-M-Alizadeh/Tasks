import {StyleSheet} from 'react-native'
import * as colors from '../../utils/colors'
import * as dims from '../../utils/dims'
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title:{
        fontSize: dims.largeFont
    }
});