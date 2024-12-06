import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

interface CustomTextProps extends TextProps {
  color?: string;
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({
  color = 'white',
  style,
  children,
  ...props
}) => {
  return (
    <Text style={[styles.text, {color}, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomText;
