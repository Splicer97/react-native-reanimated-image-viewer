import * as React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ImageViewer from 'react-native-reanimated-image-viewer';

export default function App() {
  const [visible, setVisible] = useState(false);
  const imageUrl = 'https://random.imagecdn.app/500/500';
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          onPress={() => {
            setVisible(true);
          }}
        >
          click
        </Text>
      </View>
      <ImageViewer
        imageUrl={imageUrl}
        width={2726}
        height={2047}
        visible={visible}
        animationType="fade"
        onRequestClose={() => {
          setVisible(false);
        }}
      />
    </GestureHandlerRootView>
  );
}
