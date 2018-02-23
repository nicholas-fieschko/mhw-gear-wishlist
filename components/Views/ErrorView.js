const ErrorView = ({ message} ) => (
    <View style={styles.container}>
        <Text>Error: {message} </Text>
    </View>
)

export default ErrorView;