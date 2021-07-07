import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({title,disabled,primary,secondary,danger,loading,...props}) => {

    const getBgColor = () => {
        if (primary) {
            return colors.primary;
        } else if (secondary) {
            return colors.secondary;
        } else if (danger) {
            return colors.danger;
        } else if (disabled) {
            return colors.grey;
        }
    }

    return (
        <TouchableOpacity
            style={[styles.wrapper, {backgroundColor: getBgColor()}]}
            {...props}
        >
            <View style={styles.loadingSection}>
                {loading && <ActivityIndicator color={colors.white} loading={loading} />}
                {title && <Text style={{color: disabled ? 'black' : colors.white, paddingLeft: loading ? 5 : 0}}>{title}</Text>}
            </View>
        </TouchableOpacity>
    );
}

export default CustomButton;