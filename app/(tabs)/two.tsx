import CustomBottomSheet from '@/components/CustomBottomSheet';
import { useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TabTwoScreen() {
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <CustomBottomSheet snapPoints={snapPoints}>
                <View>
                    <Text>Cool Bottom Sheet</Text>
                </View>
            </CustomBottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
