import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '~/theming/colors';
import Text from './Text';

const propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  tintColor: PropTypes.string,
  transparent: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const defaultProps = {
  loading: false,
  disabled: false,
  transparent: false,
  color: Colors.green,
  tintColor: Colors.black,
};

const Button = ({
                  text,
                  color,
                  loading,
                  onPress,
                  disabled,
                  tintColor,
                  transparent,
                }: {
  text: string;
  color: string;
  loading: boolean;
  onPress: () => void;
  disabled: boolean;
  tintColor: string;
  transparent: boolean;
}) => {
  const {container} = styles;
  const buttonContainerStyle = [container];
  let buttonContent;

  if (loading) {
    buttonContent = (
      <ActivityIndicator
        color={Colors.white}
        style={{marginVertical: Platform.OS === 'ios' ? 10 : 0}}
        size={Platform.OS === 'ios' ? 1 : 24}
      />
    );
  } else {
    buttonContent = (
      <Text
        bold
        color={tintColor}
        style={{textAlign: 'center', fontWeight:'bold'}}
      >
        {text}
      </Text>
    );
  }

  if (disabled || loading) {
    // @ts-ignore
    buttonContainerStyle.push({backgroundColor: Colors.violet});

    return (
      <TouchableWithoutFeedback>
        <View style={buttonContainerStyle}>
          {buttonContent}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  if (!transparent) {
    // @ts-ignore
    buttonContainerStyle.push({backgroundColor: color});
  }

  return (
    <TouchableOpacity
        activeOpacity={0.8}
      onPress={onPress}
      style={buttonContainerStyle}
    >
      <View>
        {buttonContent}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 2,
    marginTop:10,
    borderRadius: 6,
    color:Colors.white
  },
});

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
