import { Button, StyleSheet, Text } from 'react-native';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetTextInput,
} from '@gorhom/bottom-sheet';

import { View } from 'react-native';
import { memo, useMemo, useRef } from 'react';

export default function TabOneScreen() {
    const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleClose = () => bottomSheetRef.current?.close();
    const handleOpen = () => bottomSheetRef.current?.expand();
    const handleCollapse = () => bottomSheetRef.current?.collapse();

    return (
        <View style={styles.container}>
            <Button title='Open' onPress={handleOpen} />
            <Button title='Close' onPress={handleClose} />
            <Button title='Collapse' onPress={handleCollapse} />
            <BottomSheet
                index={1}
                snapPoints={snapPoints}
                ref={bottomSheetRef}
                backdropComponent={Backdrop}
                enablePanDownToClose
                style={styles.container}
            >
                <View>
                    <Text>This is a bottom sheet</Text>
                </View>
                <BottomSheetTextInput style={styles.input} />
            </BottomSheet>
        </View>
    );
}

const Backdrop = memo((props: BottomSheetBackdropProps) => {
    return (
        <BottomSheetBackdrop
            appearsOnIndex={1}
            disappearsOnIndex={-1}
            {...props}
        />
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        padding: 16,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 16,
    },
});
