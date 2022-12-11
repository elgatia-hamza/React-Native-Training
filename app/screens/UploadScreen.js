import Lottie from 'lottie-react-native';
import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';

function UploadScreen({onDone, progress = 0, visible = false}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <Lottie
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animations/done.json')}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default UploadScreen;
