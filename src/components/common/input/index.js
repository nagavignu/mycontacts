import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
    onChangeText,
    style,
    value,
    label,
    icon,
    iconPosition,
    error,
    ...props
}) => {
    const [focused, setFocused] = useState(false);

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === 'left') {
                return 'row'
            } else {
                return 'row-reverse';
            }
        } else {
            return 'row';
        }
    }

    const getBorderColor = () => {
        if (focused) {
            return colors.primary;
        }
        if (error) {
            return colors.danger;
        } else {
            return colors.grey;
        }
    }

    const getAlignItems = () => {
        if (icon) {
            return 'center';
        } else {
            return 'baseline';
        }
    }

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, {alignItems: getAlignItems()}, { flexDirection: getFlexDirection(), borderColor: getBorderColor()}]}>
                <View>{icon && icon}</View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

export default Input;