import React from 'react';
import { ActivityIndicator, Text, Button, View, StyleSheet } from 'react-native';

interface ButtonProps {
  loading?: boolean;
}

const LoadingButton = (props: ButtonProps) => {
  const {
    loading,
  } = props;

  return (
    <View>
      <Text style={styles.text}>Boton</Text>
      <View style={styles.container}>
        <Button
          title="Loading Button"
          disabled={loading}
          onPress={() => { }} />
        {loading && (
          <ActivityIndicator
            style={styles.indicator}
            animating
          />
        )}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  indicator: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  text: {
    marginBottom: 10,
  }
})

export default LoadingButton;