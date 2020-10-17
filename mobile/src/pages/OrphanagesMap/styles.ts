import { StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      callOutContainer: {
        width: 160,
        height: 46,
        fontFamily: 'nunito700',
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,  
        alignItems: 'center',
        justifyContent: 'center'      
      },
      callOutText: {
        color: '#0089A5',
        fontSize: 14,
        elevation: 3,
        
      },
      footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
      },
      footerText: {
        color: '#8FA7B3',
        fontFamily: 'nunito700'
    
      },
      createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15C3D6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }
});

export default styles;